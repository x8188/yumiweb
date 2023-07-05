<template>
  <div class="filter_page">
    <div :class="{ fitershide: filterHide }" class="left-box">
    <div @click="filterHide = !filterHide" class="fiterShow">
          <i v-if="filterHide" class="el-icon-s-fold"></i>
          <i v-else class="el-icon-s-unfold"></i>
    </div>
    <el-row :gutter="12" class="filter_box">
      <el-form ref="elForm" v-show="filterHide" :model="formData" :rules="rules" size="medium">
        <!-- <el-col id="col-one">
          <span @click="filter_page()" id="span-second">Filter</span>
          <span @click="resetForm">Reset</span>
        </el-col> -->
        <el-col :span="6">
          <el-form-item label="Germplasm">
            <el-select v-model="formData.accession" placeholder="请选择Germplasm" clearable :style="{ width: '100%' }">
              <el-option v-for="(item, index) in GermplasmOptions" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Version">
            <el-select v-model="formData.version" placeholder="请选择Version" clearable :style="{ width: '100%' }">
              <el-option v-for="(item, index) in VersionOptions" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <span style="color:#606266;font-size: 14px;font-weight: 700;">Chromosome</span>
          <div id="inner_item">
            <el-form-item label="Chr">
              <el-select v-model="formData.uniquename" placeholder="请选择Chr" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in ChrOptions" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <span style="color:#606266;font-size: 14px;font-weight: 700;">Location</span>
            <div id="inner_input">
              <el-input placeholder="请输入最小值" v-model="formData.start"></el-input>
              <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
              <el-input placeholder="请输入最大值" v-model="formData.end"></el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Type">
            <el-select v-model="formData.name" placeholder="请选择Type" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in nameOptions" :key="index" :label="item" :value="item"></el-option>
              </el-select>

          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Name">
            <el-input placeholder="请输入Name" v-model="formData.commonname"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Description">
            <el-input placeholder="请输入Description" v-model="formData.description"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <div  class="footer">
        <el-button size="small" @click="resetForm()" style="margin-right: 15px;">
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
      <el-table  ref="multipleTable" :data="tableData" tooltip-effect="dark" border=""
        @selection-change="handleSelectionChange"  v-loading="loading" element-loading-text="拼命加载中....">
        <!-- 展示的条目 -->
        <el-table-column type="selection" width="55" @click="getVID()">
        </el-table-column>

        <el-table-column label="Name" show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.row)">{{ scope.row.name
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="Description" width="180">
        </el-table-column>
        <el-table-column prop="chromosome" label="CHROM" width="180">
        </el-table-column>
        <el-table-column prop="start" label="Start" width="180">
        </el-table-column>
        <el-table-column prop="end" label="End" width="180">
        </el-table-column>
        <el-table-column prop="strand" label="Strand" width="180">
        </el-table-column>
      </el-table>
      <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
        @pagination="getList" />
    </div>
  </div>
</template>
<script>
import {
  getSelectGermplasm,
  getSelectVersion,
  getSelectChr,
  getSelectType
} from '@/api/Genomics/getSelectOptions';
import { toDetailPage } from '@/api/Genomics/toDetail';
import { Search } from '@/api/Genomics/search';
import { Download } from '@/api/Genomics/Download';
import { download } from '@/utils/request';
import { saveAs } from 'file-saver'
import { blobValidate } from '@/utils/ruoyi';
import axios from 'axios'

// import { nextTick } from "process";
export default {
  components: {},
  props: [],
  data() {
    return {
      // loading: false,
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
        uniquename: "",
        start: "",
        end: "",
        name: "",
        commonname: "",
        description: "",
      },
      loading:true,
      rules: {
        Germplasm: [],
        Version: [],
        Chr: [],
        min_Loca: [],
        max_Loca: [],
        Type: [],
        Name: [],
        Description: [],
      },
      GermplasmOptions: [],
      VersionOptions: [],
      ChrOptions: [],
      filterHide:true,
      TypeOptions: [],
      nameOptions:[]
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
          console.log(res)
          this.VersionOptions = res.rows
          this.formData.version = this.VersionOptions[1]
          console.log(this.VersionOptions)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    formData:{
      handler(oldVal,newVal){
        this.loading = true;
        Search(this.formData, this.queryParams).then(res => {
          console.log(res)
          const res11 = this.eidtMsg(res.rows)
          console.log(res11)
          this.tableData = res11
          this.total = res.total
          this.loading = false
        })
      },
      deep:true
    }
  },

  mounted() { this.$nextTick(this.Request_beforeMounted()) },
  methods: {
    //跳转到详情页面
    handleClick(event) {
      console.log(event.featureId);  //接下来向后端传递这个参数实现页面跳转
      //跳转时 用路由传递参数，将数据正确展示到详情页面 未做
      const featureId = event.featureId
      toDetailPage(featureId).then(res => {
        console.log(res)
        let data = res;
        this.$router.push({
          path: '/web/Genomics/Genomics/details',
          query: { data }
        })
      }).catch(err => {
        console.log(err)
      })
    },
    /** 查询岗位信息列表 */
    getList() {
      this.loading = true;
      Search(this.formData, this.queryParams).then(res => {
        console.log(res)
        const res11 = this.eidtMsg(res.rows)
        this.tableData = res11
        this.total = res.total
        this.loading = false
      })
    },
    eidtMsg(data){
      data.forEach(item=>{
        if(item.strand == 1)
        {
          item.strand = "+"
        }
        else item.strand = "-"
      })
      return data
    },
    handleSelectionChange(val) {
      console.log(val)
      this.Download_Vid = []
      val.forEach(item => {
        this.Download_Vid.push(item.featureId)
      });
      console.log(this.Download_Vid)
    },
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
      this.formData.start = ""
      this.formData.end = ""
      this.formData.commonname = ""
      this.formData.description = ""
      this.formData.name = ""
      this.formData.uniquename = ""
    },
    /** 导出操作按钮 */
    handleExport() {
      const feature_id = this.Download_Vid
      const formData = new FormData()
      formData.append("feature_id", feature_id)
      Download(feature_id).then(res => {
        console.log(res)
        const isLogin = blobValidate(res);
        if (isLogin) {
          const blob = new Blob([res])
          console.log(blob)
          saveAs(blob, `Importfeature_${new Date().getTime()}.xlsx`)
        } else {
          const resText = data.text();
          const rspObj = JSON.parse(resText);
          const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
          Message.error(errMsg);
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 筛选页面
    filter_page() {
      this.loading = true
      Search(this.formData, this.queryParams).then(res => {
        console.log(res)
        const res11 = this.eidtMsg(res.rows)
        this.tableData = res11
        this.total = res.total
        console.log(this.tableData)
        this.loading = false
      }).catch(err => {
        console.log(err)
      })
    },
    //页面加载前请求
    Request_beforeMounted() {
      this.loading = true
      getSelectGermplasm().then(res => {
        console.log(res)
        this.GermplasmOptions = res.rows
        this.formData.accession = this.GermplasmOptions[2]
      }).catch(err => {
        console.log("Germplasm出现： " + err)
      })
      getSelectChr().then(res => {
        console.log(res)
        this.ChrOptions = res.rows
      }).catch(err => {
        console.log("Chr出现： " + err)
      })
      getSelectType().then(res=>{
        console.log(res)
        this.nameOptions = res.rows
      })
      Search(this.formData, this.queryParams).then(res => {
        console.log(res)
        const res11 = this.eidtMsg(res.rows)
        this.tableData = res11
        this.total = res.total
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss">
.filter_page {
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
}
.left-box{

.filter_box {
  // width: 20%;
  // height: 100vh;
  // border-right: 1px solid black;

  .el-form {
    width: 300px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .el-col {
      margin: 0 auto;
      //  width: 300px;
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
      //  width: 200px;
      //  height: 220px;
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
}
.footer {
// margin-top: 20px;
// margin-right: 20px;
// background-color: pink;
display: flex;
justify-content: space-between
}
</style>
