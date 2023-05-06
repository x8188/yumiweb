<template>
    <div class="filter_page">
      <el-row :gutter="12" class="filter_box">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" >
          <el-col id="col-one">
            <span @click="filter_page()" id="span-second">Filter</span>
            <span >Reset</span>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Reference" prop="field101">
              <el-select v-model="formData.field101" placeholder="请选择Reference" clearable
                :style="{width: '100%'}">
                <el-option v-for="(item, index) in field101Options" :key="index" 
                  :value="item" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Version" prop="field102">
              <el-select v-model="formData.field102" placeholder="请选择Version" clearable
                :style="{width: '100%'}">
                <el-option v-for="(item, index) in field102Options" :key="index" 
                  :value="item" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Population" prop="field109">
              <el-select v-model="formData.field109" placeholder="请选择Population" clearable
                :style="{width: '100%'}">
                <el-option v-for="(item, index) in field109Options" :key="index" 
                  :value="item" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Analysis" prop="field108">
              <el-select v-model="formData.field108" placeholder="请选择Analysis" clearable
                :style="{width: '100%'}">
                <el-option v-for="(item, index) in field108Options" :key="index" 
                  :value="item" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Variant Class" prop="field105">
              <el-select v-model="formData.field105" placeholder="请选择Variant Class" clearable
                :style="{width: '100%'}">
                <el-option v-for="(item, index) in field105Options" :key="index" 
                  :value="item" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Region" prop="field106">
              <el-select v-model="formData.field106" placeholder="请选择Region" clearable :style="{width: '100%'}">
                <el-option v-for="(item, index) in field106Options" :key="index" 
                  :value="item" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <span style="color:#606266;font-size: 14px;font-weight: 700;">Posi</span>
           <div id="inner_input">
            <el-input placeholder="请输入最小值" v-model="formData.min_posi"></el-input>
            <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
            <el-input placeholder="请输入最大值" v-model="formData.max_posi"></el-input>
           </div>
          </el-col>
          <el-col :span="6">
              <span style="color:#606266;font-size: 14px;font-weight: 700;">Annotation</span>
              <div id="inner_item">
                <el-form-item label="Consequance" prop="field103">
              <el-select v-model="formData.field103" placeholder="请选择Consqquance" clearable :style="{width: '100%'}">
                <el-option v-for="(item, index) in field103Options" :key="index"
                  :value="item" ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Impacts" prop="field104">
              <el-select v-model="formData.field104" placeholder="请选择Region" clearable :style="{width: '100%'}">
                <el-option v-for="(item, index) in field104Options" :key="index" 
                  :value="item" ></el-option>
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
            @click="getVID($event)"
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
   import service, {download} from '@/utils/request'
   import { tansParams, blobValidate } from "@/utils/ruoyi";
   import { saveAs } from 'file-saver'
   import { list } from "@/api/monitor/logininfor";

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
      //  死数据 请求到的数据量太少
        tableData:[
          {
            VID:'ZMPV01aSNPC01P088027591',
            type:'SNP',
            chr:'chr1',
            posi:'1741',
            maf:'0.0016',
            genorate:'0.8427',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P088027591',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },,
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          },
          {
            VID:'ZMPV01aSNPC01P000001742',
            type:'SNP',
            chr:'chr1',
            posi:'1742',
            maf:'0',
            genorate:'0.8065',
            consequence:'intergenic_variant',
            impacts:'MODIFIER'
          }
        ],
          accession:"",
        multipleSelection: [],
        formData: {
          field101: "",
          field102: "",
          field103: "",
          field107: "",
          field1010: "",
          field109: "",
          field108: "",
          field105: "",
          field106: "",
          field104: "",
          field107: "",
          maf_min:"",
        maf_max:"",
        min_posi:"",
        max_posi:""
        },
        rules: {
          field101: [],
          field102: [],
          field109: [],
          field108: [],
          field105: [],
          field106: [],
          field104: [],
          field107: [],
        },
        field103Options:[],
        field104Options:[],
        field101Options: [],
        field102Options: [],
        field109Options: [],
        field108Options: [],
        field105Options: [],
        field106Options: [],
        field104Options: [],
        field107Options: [],

        list:[],
        queryList:{
          ids:""
        }
      }
    },
    computed: {},
    watch: {
      formData:{
        handler(Old,New){
          console.log(Old)
          console.log(New)
          this.accession = New.field101
          getSelectVersion(this.accession).then(res=>{
            console.log(res)
            this.field102Options = res.data
          })
          console.log(this.field101Options[New.field101])
        },
        deep:true
      }
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
        const VID = event.target.innerHTML
        toDetailPage(VID).then(res=>{
          console.log(res)
          const data = res;
          this.$router.push({
            path:'/web/variation/variation/detail',
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
        this.Download_Vid = []
        val.forEach(item => {
          this.Download_Vid.push(item.VID)
        });
        console.log(this.Download_Vid);
        // Download(this.Download_Vid).then
      },
      getVID(val){
        console.log(val)
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
        this.queryList.ids = this.Download_Vid
        //后端需要的参数和若依官方不一致 两种下载 注释的为官方的下载 参数格式和若依官方不一致用不了
      //  download("variations/variant/download",{...this.queryList},`Importfeature_${new Date().getTime()}.xlsx`) 
      //自定义导出
        this.list =  this.Download_Vid 
        let formData = new FormData()
        formData.append("ids",this.list)
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
      // 导出数据
      exportExcel: function () {
        var options = {
          exportUrl:"/variations/variant/download",
          modalName:"AAAA"
        }
          S.table.init(options);
          $.modal.confirm("确定导出所有" + table.options.modalName + "吗？", function () {
              $.post(table.options.exportUrl, dataParam, function (result) {
                  if (result.code == web_status.SUCCESS) {
                    // 跳转到下载链接
                      window.location.href = ctx + "common/download?fileName=" + encodeURI(result.msg) + "&delete=" + true;
                  } else if (result.code == web_status.WARNING) {
                      $.modal.alertWarning(result.msg)
                  } else {
                      $.modal.alertError(result.msg);
                  }
                  $.modal.closeLoading();
              });
          });
      },

      // 筛选页面
      filter_page(){
        const data1 = {}
        data1.type = this.formData.field105
        data1.chr = this.formData.field106
        data1.posi_min = this.formData.min_posi
        data1.posi_max = this.formData.max_posi
        data1.maf_min = this.formData.maf_min
        data1.maf_max = this.formData.maf_max
        data1.impact = this.formData.field104
        data1.consequence = this.formData.field103
        data1.version = this.formData.field102
        data1.accession = this.accession
        data1.description = null
        data1.alias = null
        Search(data1).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      },
     //页面加载前请求
      Request_beforeMounted(){
        
        getSelectReference().then(res=>{
          this.field101Options = res.data
        }).catch(err=>{
          console.log("Reference出现： "+err)
        })
        getSelectPopulation().then(res=>{
          this.field109Options =  res.data
        }).catch(err=>{
          console.log("Population出现： "+err)
        })
        getSelectAnalysis().then(res=>{
          this.field108Options = res.data
        }).catch(err=>{
          console.log("Analyies出现： "+err)
        })
        getSelectConsequences().then(res=>{
          this.field103Options = res.data
        }).catch(err=>{
          console.log("Consequences出现： "+err)
        })
        getSelectImpacts().then(res=>{
          this.field104Options = res.data
        }).catch(err=>{
          console.log("Impacts出现： "+err)
        })
        getSelectRegion().then(res=>{
          this.field106Options = res.data
        }).catch(err=>{
          console.log("Region出现： "+err)
        })
        getSelectVariantClass().then(res=>{
          this.field105Options = res.data
        }).catch(err=>{
          console.log("VariantClass出现： "+err)
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
  
