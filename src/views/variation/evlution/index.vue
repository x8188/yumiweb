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
                        <el-form-item label="Version" prop="radio">
                            <span style="color:#606266;font-size: 14px;font-weight: 700;">Indicator</span>
                        <!-- <div class="indicator-box"> -->
                            <div class="radio-box">
                                <el-radio v-model="formData.radio" label="Fst">Fst</el-radio>
                                <el-radio v-model="formData.radio" label="XPCLR">XPCLR</el-radio>
                            </div>
                        </el-form-item>
                        
                        
                        <!-- </div> -->
                        
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="Selection Type" prop="SelectType">
                            <el-select v-model="formData.SelectType" placeholder="请选择Selection Type" clearable
                                :style="{ width: '100%' }">
                                <el-option v-for="(item, index) in SelectionTypeOptions" :key="index" :value="item"
                                    :disabled="item.disabled"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="Compare Population" prop="PopCom">
                            <el-select v-model="formData.PopCom" placeholder="请选择Compare Population" clearable
                                :style="{ width: '100%' }">
                                <el-option v-for="(item, index) in PopOptions" :key="index" :value="item"
                                    :disabled="item.disabled"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="CHR" prop="chr">
                            <el-select v-model="formData.chr" placeholder="请选择CHR" clearable
                                :style="{ width: '100%' }">
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
            <el-table v-loading="loading" ref="multipleTable" :data="tableData"  tooltip-effect="dark" border=""
                @selection-change="handleSelectionChange" height="400px">
                <!-- 展示的条目 -->
                <el-table-column type="selection" width="55" @click="getVID($event)">
                </el-table-column>

                <el-table-column label="REF/Version" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span style="cursor:pointer;" >{{ scope.row.ref}}/{{ scope.row.version }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="analysis_name" label="Analysis" >
                </el-table-column>
                <el-table-column prop="select" label="Selection Type" >
                </el-table-column>
                <el-table-column prop="compare_pop" label="Pop Compared" >
                </el-table-column>
                <el-table-column prop="chro" label="Chr" >
                </el-table-column>
                <el-table-column prop="start" label="Start" >
                </el-table-column>
                <el-table-column prop="end" label="End">
                </el-table-column>
                <el-table-column prop="indicator" label="Fst">
                </el-table-column>
            </el-table>
            <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize" @pagination="getList" />
        </div>


    </div>
</template>
<script>
import {
    getSelectChr,
    getSelectIndicator,
    getSelectPopCompared,
    getSelectReference,
    getSelectType,
    getSelectVersion,
} from "@/api/evlution/getSelectOptions";
import { Download } from "@/api/evlution/download";
import { Search } from "@/api/evlution/search";
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
            loading:true,
            multipleSelection: [],
            Download_Vid: [],
            tableData: [],
            multipleSelection: [],
            formData: {
                accession: "",
                version: "",
                radio: "",
                SelectType: "",
                PopCom: "",
                start: "",
                end: "",
                chr:""
            },
            rules: {
                accession: "",
                version: "",
                radio: "",
                SelectType: "",
                PopCom: "",
                start: "",
                end: "",
                chr:""
            },
            accessionOptions: [],
            versionOptions: [],
            SelectionTypeOptions: [],
            PopOptions: [],
            typeOptions: [],
            chrOptions: [],
            list: [],
            contentLength: 25,
            isShow: 1,
            filterHide: true
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
        "formData.radio":function(New,Old) {
            if(New == null || New == "")
            {

            }
            else
            {
                getSelectType(New).then(res=>{
                    console.log(res)
                    this.SelectionTypeOptions = res.data
                })
                getSelectPopCompared(New).then(res=>{
                    console.log(res)
                    this.PopOptions = res.data
                })
            }
        },
        formData:{
            handler(newVal,oldVal){
                this.loading = true;
                Search(this.formData, this.queryParams).then(res => {
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
    },
    created() {
        this.Request_beforeMounted()
        this.loading = true
        Search(this.formData, this.queryParams).then(res => {
            console.log(res.rows)
            this.total = res.total
            this.tableData = res.rows
            this.loading = false
        })
    },
    methods: {
        /** 查询岗位信息列表 */
        getList() {
            this.loading = true;
            Search(this.formData, this.queryParams).then(res => {
                this.total = res.total
                this.tableData = res.rows
                this.loading =false
            })
        },
        handleSelectionChange(val) {
            console.log(val)

            this.Download_Vid =val
            // this.Download_Vid.push
            // val.forEach(item => {
            //     this.Download_Vid.push(item.tagvariantId)
            // });
        },
        resetForm() {
            this.$refs['elForm'].resetFields()
            //此处设置为空其实应该将输入的绑定值 和prop的绑定值名字设置为相同 在这里为了方便直接设置
            this.formData.start = ""
            this.formData.end = ""
            this.formData.accession = this.accessionOptions[0]
            this.formData.version = this.versionOptions[0]
        },
        /** 导出操作按钮 */
        handleExport() {
            //后端需要的参数和若依官方不一致 两种下载 注释的为官方的下载 参数格式和若依官方不一致用不了
            //  this.download("/variations/evolution/download",{...this.Download_Vid},`ImportEvolution_${new Date().getTime()}.xlsx`) 
            //自定义导出
            this.list = this.Download_Vid
            let formData = new FormData()
            formData.append("list", this.list)
            Download(this.list).then(res => {
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
                console.log(err)
            })
            console.log(111)
        },
        handleReset() {
            Object.keys(this.formData).forEach(item => {
                this.formData[item] = ""
            })
        },
        // 筛选页面
        filter_page() {
            console.log(this.formData)
            this.loading = false
            Search(this.formData, this.queryParams).then(res => {
                console.log(res)
                this.tableData = res.rows
                this.total = res.total
                this.loading = true
            }).catch(err => {
                console.log(err)
            })
        },
        //页面加载前请求
        Request_beforeMounted() {
            getSelectReference().then(res => {
                console.log(res)
                this.accessionOptions = res.data
                this.formData.accession = this.accessionOptions[0]
            }).catch(err => {
                console.log(err)
            })
            getSelectChr().then(res => {
                console.log(res)
                this.chrOptions = res.data
            }).catch(err => {
                console.log(res)
                console.log(err)
            })
            getSelectIndicator().then(res => {
                console.log(res)
                this.descriptionOptions = res.data
            }).catch(err => {
                console.log(err)
            })
            getSelectPopCompared().then(res => {
                console.log(res)
                this.consequenceOptions = res.data
            }).catch(err => {
                console.log(err)
            })
            getSelectType().then(res => {
                console.log(res)
                this.impactsOptions = res.data
            }).catch(err => {
                console.log(err)
            })
           
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
             .radio-box{
                display: flex;
                justify-content: space-between;
                align-items: center;
                // background-color: pink;
                height: 45px;
             }
            //  .indicator-box{
            //     background-color: pink;
            //     width: 80%;
            //  }
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
margin-top: 20px;
// margin-right: 20px;
// background-color: pink;
display: flex;
justify-content: space-between
}
 </style>