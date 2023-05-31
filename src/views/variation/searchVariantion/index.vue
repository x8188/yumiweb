<template>
  <div class="filter_page">
    <div :class="{ fitershide: filterHide }" class="left-box">
      <div @click="filterHide = !filterHide" class="fiterShow">
          <i v-if="filterHide" class="el-icon-s-fold"></i>
          <i v-else class="el-icon-s-unfold"></i>
        </div>
      <el-row :gutter="12" class="filter_box" >
        <el-form v-show="filterHide" ref="elForm" :model="formData" :rules="rules" size="medium">
          <el-col id="col-one">
            <span @click="filter_page()" id="span-second">Filter</span>
            <span @click="resetForm">Reset</span>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Reference" prop="accession">
              <el-select v-model="formData.accession" placeholder="请选择Reference" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in accessionOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Version" prop="version">
              <el-select v-model="formData.version" placeholder="请选择Version" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in versionOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Population" prop="alias">
              <el-select v-model="formData.alias" placeholder="请选择Population" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in aliasOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Analysis" prop="description">
              <el-select v-model="formData.description" placeholder="请选择Analysis" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in descriptionOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Variant Class" prop="type">
              <el-select v-model="formData.type" placeholder="请选择Variant Class" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in typeOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Region" prop="chr">
              <el-select v-model="formData.chr" placeholder="请选择Region" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in chrOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <span style="color:#606266;font-size: 14px;font-weight: 700;">Posi</span>
            <div id="inner_input">
              <el-input placeholder="请输入最小值" v-model="formData.posi_min"></el-input>
              <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
              <el-input placeholder="请输入最大值" v-model="formData.posi_max"></el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <span style="color:#606266;font-size: 14px;font-weight: 700;">Annotation</span>
            <div id="inner_item">
              <el-form-item label="Consequance" prop="consequences">
                <el-select v-model="formData.consequences" placeholder="请选择Consqquance" clearable
                  :style="{ width: '100%' }">
                  <el-option v-for="(item, index) in consequenceOptions" :key="index" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Impacts" prop="impacts">
                <el-select v-model="formData.impacts" placeholder="请选择Region" clearable :style="{ width: '100%' }">
                  <el-option v-for="(item, index) in impactsOptions" :key="index" :value="item"></el-option>
                </el-select>

              </el-form-item>
            </div>

          </el-col>
          <el-col :span="6">
            <span style="color:#606266;font-size: 14px;font-weight: 700;">MAF</span>
            <div id="inner_input">
              <el-input placeholder="请输入最小值" v-model="formData.maf_min"></el-input>
              <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
              <el-input placeholder="请输入最大值" v-model="formData.maf_max"></el-input>
            </div>
          </el-col>
        </el-form>
      </el-row>
    </div>



    <div class="buttom_box">
      <el-button type="primary" plain icon="el-icon-download" @click="handleExport">Go to FTP</el-button>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border=""
        @selection-change="handleSelectionChange" height="400px">
        <!-- 展示的条目 -->
        <el-table-column type="selection" width="55" @click="getVID($event)">
        </el-table-column>

        <el-table-column label="Variant ID" show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick($event)">{{ scope.row.vid }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="Type" width="140">
        </el-table-column>
        <el-table-column prop="chr" label="Chr" width="140">
        </el-table-column>
        <el-table-column prop="posi" label="Posi" width="140">
        </el-table-column>
        <el-table-column prop="maf" label="MAF" width="140">
        </el-table-column>
        <el-table-column prop="genorate" label="GenoRate" width="140">
        </el-table-column>
        <el-table-column prop="consequences" label="Consequence" width="140">
        </el-table-column>
        <el-table-column prop="impacts" label="Impacts" width="140">
        </el-table-column>
      </el-table>
      <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
        @pagination="getList" />
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
import { Search } from "@/api/variations/search";
import { toDetailPage } from "@/api/variations/toDetail";
import { Download } from "@/api/variations/Download"
import service, { download } from '@/utils/request'
import { tansParams, blobValidate, resetForm } from "@/utils/ruoyi";
import { saveAs } from 'file-saver'
import { list } from "@/api/monitor/logininfor";
import json from "highlight.js/lib/languages/json";


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
      //  死数据 请求到的数据量太少
      tableData: [],
      multipleSelection: [],
      formData: {
        accession: "",
        version: "",
        alias: "",
        description: "",
        type: "",
        chr: "",
        consequences: "",
        impacts: "",
        maf_min: "",
        maf_max: "",
        posi_min: "",
        posi_max: ""
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
      filterHide: true,
      queryList: {
        ids: ""
      }
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

    }
  },
  mounted() {
    this.$nextTick(this.Request_beforeMounted())
  },
  created() {
    let formm = {
        accession: "B73",
        version: "4.43.0",
        alias: "AMP",
        description: "",
        type: "DEL",
        chr: "chr1",
        consequences: "intergenic_variant",
        impacts: "MODIFIER",
        maf_min: "0",
        maf_max: "0.9",
        posi_min: "50000",
        posi_max: "800000000"
      }
    Search(formm, this.queryParams).then(res => {
      this.total = res.total
      this.tableData = res.rows
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
      Search(this.formData, this.queryParams).then(res => {
        this.total = res.total
        this.tableData = res.rows
      })
    },
    handleSelectionChange(val) {
      this.Download_Vid = []
      val.forEach(item => {
        this.Download_Vid.push(item.vid)
      });
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    /** 导出操作按钮 */
    handleExport() {
      this.queryList.ids = this.Download_Vid
      //后端需要的参数和若依官方不一致 两种下载 注释的为官方的下载 参数格式和若依官方不一致用不了
      //  download("variations/variant/download",{...this.queryList},`Importfeature_${new Date().getTime()}.xlsx`) 
      //自定义导出
      this.list = this.Download_Vid
      let formData = new FormData()
      formData.append("ids", this.list)
      Download(formData).then(res => {
        const isLogin = blobValidate(res);
        if (isLogin) {
          const blob = new Blob([res])
          saveAs(blob, `Importfeature_${new Date().getTime()}.xlsx`)
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
    // 筛选页面
    filter_page() {
      console.log(this.formData)
      Search(this.formData, this.queryParams).then(res => {
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
        console.log(res)
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
    }
  }
}
</script>
<style lang="scss"> .filter_page {
   padding-right: 20px;
   padding-left: 20px;
   display: flex;
 }
.left-box{
  // widow;
  // background-color: pink;
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
           margin: 4px;
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
 }</style>
  
