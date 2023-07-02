<template>
    <div class="filter_page">
        <div :class="{ fitershide: filterHide }" class="left-box">
            <div @click="filterHide = !filterHide" class="fiterShow">
                <i v-if="filterHide" class="el-icon-s-fold"></i>
                <i v-else class="el-icon-s-unfold"></i>
            </div>
            <el-row :gutter="12" class="filter_box">
                <el-form ref="elForm" v-show="filterHide" :model="formData" :rules="rules" size="medium">
                    
                    <el-col :span="6">
                        <el-form-item label="Reference" prop="accession">
                            <el-select v-model="formData.accession" placeholder="请选择Reference" clearable
                                :style="{ width: '100%' }">
                                <el-option v-for="(item, index) in accessionOptions" :key="index" :value="item"
                                    :disabled="item.disabled"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="Version" prop="version">
                            <el-select v-model="formData.version" placeholder="请选择Version" clearable
                                :style="{ width: '100%' }">
                                <el-option v-for="(item, index) in versionOptions" :key="index" :value="item"
                                    :disabled="item.disabled"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="Population" prop="alias">
                            <el-select v-model="formData.population" placeholder="请选择Population" clearable
                                :style="{ width: '100%' }">
                                <el-option v-for="(item, index) in aliasOptions" :key="index" :value="item"
                                    :disabled="item.disabled"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="Analysis" prop="description">
                            <el-select v-model="formData.description" placeholder="请选择Analysis" clearable
                                :style="{ width: '100%' }">
                                <el-option v-for="(item, index) in descriptionOptions" :key="index" :value="item"
                                    :disabled="item.disabled"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="Chr" prop="chr">
                            <el-select v-model="formData.chr" placeholder="请选择Region" clearable :style="{ width: '100%' }">
                                <el-option v-for="(item, index) in chrOptions" :key="index" :value="item"
                                    :disabled="item.disabled"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <div id="inner_input">
                            <el-input placeholder="start" v-model="formData.start"></el-input>
                            <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
                            <el-input placeholder="end" v-model="formData.end"></el-input>
                        </div>
                    </el-col>
                    <el-col>
          <div  class="footer">
        <el-button size="small" @click="resetForm" style="margin-right: 15px;">
          <SvgIcon icon-class="CLEAR" color="20AE35" style="margin-right: 7px;margin-left: 0;"></SvgIcon>
          <span style="color: #20AE35">清空</span>
        </el-button>
        <el-button type="primary" size="small" @click="filter_page()">
          查询
            <SvgIcon icon-class="search" color="fff" style="margin-left: 7px;"></SvgIcon>
        </el-button>
      </div>
        </el-col>
                </el-form>
            </el-row>
        </div>

        <div class="buttom_box">
            <el-button type="primary" plain icon="el-icon-download" @click="handleExport">Go to FTP</el-button>
            <el-table v-loading="loading" ref="multipleTable" :data="tableData" @cell-click="cellClick" tooltip-effect="dark" border=""
                @selection-change="handleSelectionChange" >
                <!-- 展示的条目 -->
                <el-table-column type="selection" width="55" @click="getVID($event)">
                </el-table-column>

                <el-table-column label="Variant ID" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick($event)">{{ scope.row.vid
                        }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="chr" label="Chr" width="">
                </el-table-column>
                <el-table-column prop="start" label="Start" width="">
                </el-table-column>
                <el-table-column prop="end" label="End" width="">
                </el-table-column>
                <el-table-column prop="ntag" label="NTag" width="">
                </el-table-column>
                <el-table-column prop="kbspan" label="Span(kb)" width="">
                </el-table-column>
                <el-table-column prop="tags" label="Tags" width="" show-overflow-tooltip ref="tag" :formatter="stateFormat">
                </el-table-column>
            </el-table>
            <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize" @pagination="getList" />
        </div>


    </div>
</template>
<script>
import {
    getSelectAnalysis,
    getSelectConsequences,
    getSelectImpacts,
    getSelectPopulation,
    getSelectReference,
    getSelectRegion,
    getSelectVariantClass,
    getSelectVersion,
} from "@/api/variations/getSelectOptions";
import { searchTagVariant } from "@/api/tagvariation/tagvariant";
import { toDetailPage } from "@/api/variations/toDetail";
import { Download } from "@/api/tagvariation/download"
import service, { download } from '@/utils/request'
import { tansParams, blobValidate, resetForm } from "@/utils/ruoyi";
import { saveAs } from 'file-saver'
export default {
    components: {},
    props: [],
    data() {
        return {
            total: 0,
            queryParams: {
                pageNum: 1,
                pageSize: 10,
            },
            multipleSelection: [],
            Download_Vid: [],
            tableData: [],
            multipleSelection: [],
            formData: {
                accession: "",
                version: "",
                description: "",
                population: "",
                chr: "",
                start: "",
                end: ""
            },
            rules: {
                accession: [],
                version: [],
                alias: [],
                description: [],
                type: [],
                chr: [],
                consequence: [],
                impacts: [],
            },
            accessionOptions: [],
            versionOptions: [],
            aliasOptions: [],
            descriptionOptions: [],
            typeOptions: [],
            chrOptions: [],
            consequenceOptions: [],
            impactsOptions: [],
            field104Options: [],
            field107Options: [],
            list: [],
            queryList: {
                ids: ""
            },
            contentLength: 25,
            isShow: 1,
            filterHide: true,
            loading:true
        }
    },
    computed: {},
    watch: {
        "formData.accession": function (New, Old) {
            if (New == null || New == "") {
                this.versionOptions = ["Please choose Reference first!"]
            }
            else {
                getSelectVersion(New).then(res => {
                    this.versionOptions = res.data
                    this.formData.version = this.versionOptions[0]
                })
            }
        },
        formData:{
            handler(){
                this.loading = true
                searchTagVariant(this.formData, this.queryParams).then(res => {
                console.log(res.rows)
                this.total = res.total
                this.tableData = res.rows
                this.loading = false
            })
            },
            deep:true
        }
    },
    mounted() {
        this.$nextTick(this.handleIsShow())
    },
    created() {
        this.Request_beforeMounted()
        this.loading = true
        searchTagVariant(this.formData, this.queryParams).then(res => {
            console.log(res.rows)
            this.total = res.total
            this.tableData = res.rows
            this.loading = true
        })
    },
    methods: {
        //跳转到详情页面
        handleClick(event) {
            const VID = event.target.innerHTML
            console.log(VID)
            toDetailPage(VID).then(res => {
                const data = res;
                this.$router.push({
                    path: '/web/variation/variation/detail',
                    query: { data }
                })
            }).catch(err => {
            })
        },
        /** 查询岗位信息列表 */
        getList() {
            this.loading = true;
            searchTagVariant(this.formData, this.queryParams).then(res => {
                this.total = res.total
                this.tableData = res.rows
                this.loading = false
            })
        },
        handleSelectionChange(val) {
            console.log(val)

            this.Download_Vid = []
            val.forEach(item => {
                this.Download_Vid.push(item.tagvariantId)
            });
        },
        resetForm() {
            this.$refs['elForm'].resetFields()
            this.formData.start = ""
            this.formData.end = ""
            this.formData.accession = this.accessionOptions[0]
            this.formData.version = this.versionOptions[0]
        },
        /** 导出操作按钮 */
        handleExport() {
            //后端需要的参数和若依官方不一致 两种下载 注释的为官方的下载 参数格式和若依官方不一致用不了
            //  download("variations/variant/download",{...this.queryList},`Importfeature_${new Date().getTime()}.xlsx`) 
            //自定义导出
            this.list = this.Download_Vid
            let formData = new FormData()
            formData.append("list", this.list)
            Download(formData).then(res => {
                const isLogin = blobValidate(res);
                if (isLogin) {
                    const blob = new Blob([res])
                    saveAs(blob, `ImportTagvariant${new Date().getTime()}.xlsx`)
                } else {
                    const resText = data.text();
                    const rspObj = JSON.parse(resText);
                    const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
                    Message.error(errMsg);
                }
            }).catch(err => {
            })
        },
        handleReset() {
            Object.keys(this.formData).forEach(item => {
                this.formData[item] = ""
            })
        },
        handleIsShow() {
            const tag = this.$refs.tag
            console.log(tag[0])
        },
        stateFormat(row, column, cellValue, index) {
            // console.log(row)
            // console.log(column)
            // console.log(index)
            // console.log(cellValue.slice(-1, -4).style)
            // console.log(row.flag)
            if (row.tags) {
                if (!cellValue) return '';
                if (cellValue.length > this.contentLength) {   // 超过contentLength长度的内容隐藏
                    return cellValue.slice(0, this.contentLength) + '...';
                    // return ()=>{
                    //   cellValue.slice(0,this.contentLength)+"..."
                    //   cons
                    // }
                }
                return cellValue;
            } else {
                return cellValue;
            }
        },
        // 筛选页面
        filter_page() {
            console.log(this.formData)
            searchTagVariant(this.formData, this.queryParams).then(res => {
                console.log(res)
                this.tableData = res.rows
                this.total = res.total
            }).catch(err => {
                console.log(err)
            })
        },
        //页面加载前请求
        Request_beforeMounted() {
            getSelectReference().then(res => {
                this.accessionOptions = res.data
                this.formData.accession = this.accessionOptions[0]
            }).catch(err => {
                console.log("Reference出现： " + err)
            })
            getSelectPopulation().then(res => {
                this.aliasOptions = res.data
            }).catch(err => {
                console.log("Population出现： " + err)
            })
            getSelectAnalysis().then(res => {
                this.descriptionOptions = res.data
            }).catch(err => {
                console.log("Analyies出现： " + err)
            })
            getSelectConsequences().then(res => {
                this.consequenceOptions = res.data
            }).catch(err => {
                console.log("Consequences出现： " + err)
            })
            getSelectImpacts().then(res => {
                this.impactsOptions = res.data
            }).catch(err => {
                console.log("Impacts出现： " + err)
            })
            getSelectRegion().then(res => {
                this.chrOptions = res.data
            }).catch(err => {
                console.log("Region出现： " + err)
            })
            getSelectVariantClass().then(res => {
                this.typeOptions = res.data
            }).catch(err => {
                console.log("VariantClass出现： " + err)
            })
        },
        cellClick(row, column, cell, event) {
            console.log(row, column, cell, event)
        }
    }
}
</script>
<style lang="scss"> .filter_page {
     padding-right: 20px;
     padding-left: 20px;
     display: flex;
 }

 .filter_box {
    //  width: 20%;
    //  height: 100vh;
    //  border-right: 1px solid black;

     .el-form {
        width: 300px;
         margin-top: 10px;
         display: flex;
         flex-direction: column;
         align-items: center;

         .el-col {
             margin: 0 auto;
             width: 80%;

             #inner_input {
                 display: flex;

                 .el-input {
                     flex: 1;
                     //  margin: 4px;
                 }
             }
         }

         #col-one {
             display: flex;
             padding-left: 6px;
             padding-right: 6px;

             span {
                 flex: 1;
                 text-align: center;
             }

             #span-second {
                 color: #409EFF;
                 cursor: pointer;
             }
         }

         #inner_item {
             border: 1px solid black;
             padding: 10px;
             margin-top: 8px;

             .el-form-item {
                 line-height: 60px;
             }
         }
     }
 }

 .filterDiv {
     margin-right: 10px;
 }

 .fiterShow i {
     font-size: 30px;
     color: #489e38;
     cursor: pointer;
     margin: 10px 10px 10px 5px;
     // margin: 10px;
 }

 .buttom_box {
     flex: 1;
     overflow: hidden;
     overflow: hidden;
     border: 0px solid;

     .el-button {
         float: right;
         margin-bottom: 20px;
         line-height: 20px;
         margin-top: 10px;
     }

     .el-table {
         margin-left: 15px;
     }

     .pagination-container {
         margin-left: 15px;
     }
 }
 .footer {
// margin-top: 20px;
// margin-right: 20px;
// background-color: pink;
display: flex;
justify-content: space-between
}
 </style>