<template>
  <div class="filter_page">
    <el-row :gutter="12" class="filter_box">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" >
        <el-col id="col-one">
          <span @click="filter_page()" id="span-second">Filter</span>
          <span >Reset</span>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Germplasm" >
            <el-select v-model="formData.accession" placeholder="请选择Germplasm" clearable
              :style="{width: '100%'}">
              <el-option v-for="(item, index) in GermplasmOptions" :key="index" :label="item"
                :value="item" ></el-option>
            </el-select>
          </el-form-item>
        </el-col>


        <el-col :span="6">
          <el-form-item label="Version" >
            <el-select v-model="formData.version" placeholder="请选择Version" clearable
              :style="{width: '100%'}">
              <el-option v-for="(item, index) in VersionOptions" :key="index" :label="item"
                :value="item" ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="6">
          <el-form-item label="Chromosome" prop="field109">
            <el-select v-model="formData.field109" placeholder="请选择Population" clearable
              :style="{width: '100%'}">
              <el-option v-for="(item, index) in field109Options" :key="index" :label="item"
                :value="item" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>  <el-col :span="6">
          <el-form-item label="Type" prop="field108">
            <el-select v-model="formData.field108" placeholder="请选择Analysis" clearable
              :style="{width: '100%'}">
              <el-option v-for="(item, index) in field108Options" :key="index" :label="item"
                :value="item" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>  <el-col :span="6">
          <el-form-item label="Variant Class" prop="field105">
            <el-select v-model="formData.field105" placeholder="请选择Variant Class" clearable
              :style="{width: '100%'}">
              <el-option v-for="(item, index) in field105Options" :key="index" :label="item"
                :value="item" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>  <el-col :span="6">
          <el-form-item label="Region" prop="field106">
            <el-select v-model="formData.field106" placeholder="请选择Region" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in field106Options" :key="index" :label="item"
                :value="item" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col> <el-col :span="6">
          <span style="color:#606266;font-size: 14px;font-weight: 700;">Posi</span>
         <div id="inner_input">
          <el-input placeholder="请输入最小值" v-model="formData.min_posi"></el-input>
          <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
          <el-input placeholder="请输入最大值" v-model="formData.max_posi"></el-input>
         </div>
        </el-col> -->
        
        <el-col :span="6">
            <span style="color:#606266;font-size: 14px;font-weight: 700;">Chromosome</span>
            <div id="inner_item">
              <!-- <span style="color: #606266; font-weight: 700; font-size: 14px;font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;">Consequence</span>
              <el-select  placeholder="Consequance">
                <el-option v-for="(item,index) in ConsequenceOptions" :key="index" :label="item" :value="index" :disabled="disabled
                "></el-option>
              </el-select>
              <span style="color: #606266;font-weight: 700;  font-size: 14px;font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;">Impacts</span>
              <el-select placeholder="Impacts">
                <el-option v-for="(item,index) in ImpactsOptions" :key="index" :label="item" :value="index" :disabled="disabled
                "></el-option>
              </el-select> -->
              <el-form-item label="Chr" >
            <el-select v-model="formData.uniquename" placeholder="请选择Chr" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in ChrOptions" :key="index" :label="item"
                :value="item" ></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="Impacts" prop="field104">
            <el-select v-model="formData.field104" placeholder="请选择Region" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in field104Options" :key="index" :label="item"
                :value="item" ></el-option>
            </el-select>

          </el-form-item> -->
          <span style="color:#606266;font-size: 14px;font-weight: 700;">Location</span>
         <div id="inner_input">
          <el-input placeholder="请输入最小值" v-model="formData.start"></el-input>
          <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
          <el-input placeholder="请输入最大值" v-model="formData.end"></el-input>
         </div>
            </div>

        </el-col>

        <!-- <el-col :span="6">
          <span style="color:#606266;font-size: 14px;font-weight: 700;">MAF</span>
         <div id="inner_input">
          <el-input placeholder="请输入最小值" v-model="formData.min_maf"></el-input>
          <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
          <el-input placeholder="请输入最大值" v-model="formData.max_maf"></el-input>
         </div>
        </el-col> -->

        <el-col :span="6">
          <el-form-item label="Type" >
            <!-- <el-select v-model="formData.name" placeholder="请选择Type" clearable
              :style="{width: '100%'}">
              <el-option v-for="(item, index) in TypeOptions" :key="index" :label="item"
                :value="item" :disabled="item.disabled"></el-option>
            </el-select> -->
            <el-input placeholder="请输入Type" v-model="formData.name"></el-input>

          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Name" >
            <el-input placeholder="请输入Name" v-model="formData.commonname"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Description">
            <el-input placeholder="请输入Description" v-model="formData.description"></el-input>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="12">
          <el-form-item size="mini">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col> -->
      </el-form>
    </el-row>


    <div class="buttom_box">
      <el-button type="primary" plain icon="el-icon-download" @click="handleExport">Go to FTP</el-button>
      <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      border=""
      @selection-change="handleSelectionChange"
      height="400px">
      <!-- 展示的条目 -->
        <el-table-column
          type="selection"
          width="55"
          @click="getVID()"
          >
        </el-table-column>

        <el-table-column
          label="Variant ID"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick($event)">{{scope.row.VID}}</span>
          </template>
        </el-table-column>
      <el-table-column
        prop="type"
        label="Type"
        width="140">
      </el-table-column>
      <el-table-column
        prop="chr"
        label="Chr"
        width="140" 
        >
      </el-table-column>
      <el-table-column
        prop="posi"
        label="Posi"
        width="140">
      </el-table-column>
      <el-table-column
        prop="maf"
        label="MAF"
        width="140">
      </el-table-column>
      <el-table-column
        prop="genorate"
        label="GenoRate"
        width="140">
      </el-table-column>
      <el-table-column
        prop="consequence"
        label="Consequence"
        width="140">
      </el-table-column>
      <el-table-column
        prop="impacts"
        label="Impacts"
        width="140">
      </el-table-column>
    </el-table>
     <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
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
// import { nextTick } from "process";
export default {
  components: {},
  props: [],
  data() {
    return {
      total:1,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        postCode: null,
        postName: null,
        postSort: null,
        status: null,
      },
     multipleSelection:[],
     Download_Vid:[],
      tableData:[
        {
          VID:'5849316',
          type:'SNP',
          chr:'chr1',
          posi:'1741',
          maf:'0.0016',
          genorate:'0.8427',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },,
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        },
        {
          VID:'6202405',
          type:'SNP',
          chr:'chr1',
          posi:'1742',
          maf:'0',
          genorate:'0.8065',
          consequence:'intergenic_variant',
          impacts:'MODIFIER'
        }
      ],
        accession:"B73",
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
      //   field104: undefined,
      //   field107: undefined,
      //   min_input:"",
      // max_input:"",
      // min_posi:undefined,
      // max_posi:undefined
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
      GermplasmOptions:[],
      VersionOptions:[],
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
  created() {
    
    
  },
  mounted() {
   
    this.$nextTick( this.Request_beforeMounted())
  },
  methods: {
    //跳转到详情页面
    handleClick(event){
      console.log(event.target.innerHTML);  //接下来向后端传递这个参数实现页面跳转
      //跳转时 用路由传递参数，将数据正确展示到详情页面 未做
      // this.$router.push('/variation/genoViewer')
      const featureId = event.target.innerHTML
      toDetailPage(featureId).then(res=>{
        console.log(res)
        const data = res;
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
    handleSelectionChange(val){
      console.log(val)
      this.Download_Vid.push(val[0].VID) 
      

      // Download(this.Download_Vid).then
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
    handleExport(){
      console.log(this.Download_Vid)
      this.download('/system/feature/download',this.Download_Vid,`Importfeature_${new Date().getTime()}.xlsx`)
    },
    // 筛选页面
    filter_page(){
      // const data1 = {}
      // data1.type = this.formData.field105
      // data1.chr = this.formData.field106
      // data1.posi_min = this.formData.min_posi
      // data1.posi_max = this.formData.max_posi
      // data1.maf_min = this.formData.maf_min
      // data1.maf_max = this.formData.maf_max
      // data1.impact = this.formData.field104
      // data1.consequence = this.formData.field103
      // data1.version = this.formData.field102
      // data1.accession = this.accession
      // data1.description = null
      // data1.alias = null

      Search(this.formData).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
   //页面加载前请求
    Request_beforeMounted(){
      
      getSelectGermplasm().then(res=>{
        console.log(res)
        this.GermplasmOptions = res.rows
      }).catch(err=>{
        console.log("Germplasm出现： "+err)
      })
    
      getSelectChr().then(res=>{
        console.log(res)
        this.ChrOptions = res.rows
      }).catch(err=>{
        console.log("Chr出现： "+err)
      })
      getSelectVersion(this.accession).then(res=>{
        console.log(res)
        this.VersionOptions = res.rows
        console.log(this.VersionOptions)
      }).catch(err=>{
        console.log(err)
      })



      

      

    }
  }
}
</script>
<style lang="scss"> 
.filter_page{
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  // background-color: rgb(222,222,222);

}
.filter_box{
  width: 20%;
  height: 100vh;
  border-right: 1px solid black;
  .el-form{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .el-col{
      margin: 0 auto;
      width: 300px;
      // background-color: red;
      margin-top: 1px;
      #inner_input{
          display: flex;
          .el-input{
              flex: 1;
              margin: 4px;
          }
          // .el-input:first-child{
              // margin-left: 5px;
          // }
      }
    }
    #col-one{
      display: flex;
      padding-left: 6px;
      padding-right: 6px;
      span{
        flex: 1;
        text-align: center;
      }
      #span-second{
        color: #409EFF;
        cursor: pointer;
      }
    }
    #inner_item{
        width: 200px;
        height: 220px;
        // background-color: pink;
        border: 1px solid black;
        padding: 10px;
        margin-top: 8px;
        .el-form-item{
          // margin-top: 5px;
          line-height: 60px;
        }
    }

  }
}
.buttom_box{
  flex: 1;
  overflow: hidden;
  overflow: hidden;
  border: 0px solid;
  // background-color: rgb(222,222,222);
  .el-button{
    float: right;
    margin-bottom: 20px;
    line-height: 20px;
    margin-top: 10px;
  }
  .el-table{
    margin-left: 15px;
  }
  .pagination-container{
    margin-left: 15px;
  }
}


</style>
