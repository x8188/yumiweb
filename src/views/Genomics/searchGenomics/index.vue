<template>
  <div class="filter_page">
    <el-row :gutter="12" class="filter_box">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium">
        <el-col id="col-one">
          <span @click="filter_page()" id="span-second">Filter</span>
          <span>Reset</span>
        </el-col>
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
            <el-input placeholder="请输入Type" v-model="formData.name"></el-input>

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
      </el-form>
    </el-row>
    <div class="buttom_box">
      <el-button type="primary" plain icon="el-icon-download" @click="handleExport">Go to FTP</el-button>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border=""
        @selection-change="handleSelectionChange" height="400px">
        <!-- 展示的条目 -->
        <el-table-column type="selection" width="55" @click="getVID()">
        </el-table-column>

        <el-table-column label="Variant ID" show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick($event)">{{ scope.row.VID }}</span>
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
        <el-table-column prop="consequence" label="Consequence" width="140">
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
  getSelectGermplasm,
  getSelectVersion,
  getSelectChr,
} from '@/api/Genomics/getSelectOptions';
import { toDetailPage } from '@/api/Genomics/toDetail';
import { Search } from '@/api/Genomics/search';
import { Download } from '@/api/Genomics/Download';
import { download } from '@/utils/request';
import { saveAs } from 'file-saver'
import { blobValidate } from '@/utils/ruoyi';
// import { nextTick } from "process";
export default {
  components: {},
  props: [],
  data() {
    return {
      total: 1,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        postCode: null,
        postName: null,
        postSort: null,
        status: null,
      },
      multipleSelection: [],
      Download_Vid: [],
      tableData: [
        {
          VID: '5849316',
          type: 'SNP',
          chr: 'chr1',
          posi: '1741',
          maf: '0.0016',
          genorate: '0.8427',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        }, ,
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        },
        {
          VID: '6202405',
          type: 'SNP',
          chr: 'chr1',
          posi: '1742',
          maf: '0',
          genorate: '0.8065',
          consequence: 'intergenic_variant',
          impacts: 'MODIFIER'
        }
      ],
      accession: "B73",
      multipleSelection: [],
      formData: {
        accession: undefined,
        version: undefined,
        uniquename: undefined,
        start: undefined,
        end: undefined,
        name: undefined,
        commonname: undefined,
        description: undefined,
      },
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
      TypeOptions: [],
    }
  },
  computed: {},
  // watch: {
  //   formData:{
  //     handler(Old,New){
  //       console.log(Old)
  //       console.log(New)
  //       this.accession = New.field101

  //       getSelectVersion(this.accession).then(res=>{
  //         console.log(res)
  //         this.field102Options = res
  //       })

  //       console.log(this.field101Options[New.field101])
  //     },
  //     deep:true
  //   }
  // },
  
  mounted() { this.$nextTick(this.Request_beforeMounted()) },
  methods: {
    //跳转到详情页面
    handleClick(event) {
      console.log(event.target.innerHTML);  //接下来向后端传递这个参数实现页面跳转
      //跳转时 用路由传递参数，将数据正确展示到详情页面 未做
      const featureId = event.target.innerHTML
      toDetailPage(featureId).then(res=>{
        console.log(res)
         let data = res;
        this.$router.push({
          path:'/web/Genomics/Genomics/details',
          query:{data}
        })
      }).catch(err=>{
        console.log(err)
      })
    },
    /** 查询岗位信息列表 */
    getList() {
      this.loading = true;
      listPost(this.queryParams).then(response => {
        this.postList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    handleSelectionChange(val) {
      console.log(val)
      this.Download_Vid = []
      val.forEach(item => {
        this.Download_Vid.push(item.VID)
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
    },
    /** 导出操作按钮 */
    handleExport() {
      const feature_id = this.Download_Vid
      const formData = new FormData()
      formData.append("featureId", feature_id)
      Download(formData).then(res=>{
          console.log(res)
          const isLogin =  blobValidate(res);
          if (isLogin) {
            const blob = new Blob([res])
            console.log(blob)
            saveAs(blob, `Importfeature_${new Date().getTime()}.xlsx`)
          } else {
            const resText =  data.text();
            const rspObj = JSON.parse(resText);
            const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
            Message.error(errMsg);
          }
        }).catch(err=>{
          console.log(err)
        })
    },
    // 筛选页面
    filter_page() {
      Search(this.formData).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    //页面加载前请求
    Request_beforeMounted() {

      getSelectGermplasm().then(res => {
        console.log(res)
        this.GermplasmOptions = res.rows
      }).catch(err => {
        console.log("Germplasm出现： " + err)
      })
      getSelectChr().then(res => {
        console.log(res)
        this.ChrOptions = res.rows
      }).catch(err => {
        console.log("Chr出现： " + err)
      })
      getSelectVersion(this.accession).then(res => {
        console.log(res)
        this.VersionOptions = res.rows
        console.log(this.VersionOptions)
      }).catch(err => {
        console.log(err)
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
 .filter_box {
   width: 20%;
   height: 100vh;
   border-right: 1px solid black;
   .el-form {
     margin-top: 20px;
     display: flex;
     flex-direction: column;
     .el-col {
       margin: 0 auto;
       width: 300px;
       margin-top: 1px;
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
       width: 200px;
       height: 220px;
       border: 1px solid black;
       padding: 10px;
       margin-top: 8px;
       .el-form-item {
         line-height: 60px;
       }
     }
   }
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
</style>