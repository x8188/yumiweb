<template>
  <div class="filter_page">
    <div :class="{ fitershide: filterHide }" class="left-box" style="background-color:#f4f4f4;padding: 10px 5px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);">
      <span @click="filterHide = !filterHide" class="fiterShow">
          <i v-if="filterHide" class="el-icon-caret-top"></i>
          <i v-else class="el-icon-caret-bottom"></i>
        </span>

      <el-row :gutter="12" class="filter_box" >
        <el-form v-show="filterHide" ref="elForm" :model="formData" :rules="rules" size="medium" :inline="true">
        
          <el-row :gutter="24" class="filter_box" type="flex" justify="center">
            <el-form-item :label="`${$t('Reference')}：`" prop="accession">
              <el-select v-model="formData.accession" placeholder="请选择Reference" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in accessionOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          
          
            <el-form-item :label="`${$t('Version')}：`" prop="version">
              <el-select v-model="formData.version" placeholder="请选择Version" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in versionOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item :label="`${$t('Population')}：`" prop="population">
              <el-select v-model="formData.population" placeholder="请选择Population" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in aliasOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item :label="`${$t('Analysis')}：`" prop="analysis">
              <el-select v-model="formData.analysis" placeholder="请选择Analysis" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in descriptionOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>

          </el-row>
          <el-row :gutter="24" class="filter_box"  type="flex" justify="center">
            <el-form-item :label="`${$t('Region')}：`" prop="chr">
              <el-select v-model="formData.chr" placeholder="请选择Region" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in chrOptions" :key="index" :value="'chr'+item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="`${$t('Posi')}：`">
              <div id="inner_input">
                <el-input placeholder="请输入最小值" v-model="formData.posi_min" number @input="handleinput"></el-input>
                <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
                <el-input placeholder="请输入最大值" v-model="formData.posi_max" number @input="handleinput2"></el-input>
              </div>
            </el-form-item>
            <!-- <span style="color:#606266;font-size: 14px;font-weight: 700;">{{$t('Posi')}}</span> -->


            <!-- <span style="color:#606266;font-size: 14px;font-weight: 700;">{{$t('Annotation')}}</span> -->

            <!-- <el-form-item :label="`${$t('Annotation')}：`">
    

            </el-form-item> -->
            <el-form-item :label="`${$t('Consequence')}：`" prop="consequences">
                <el-select v-model="formData.consequences" placeholder="请选择Consqquance" clearable
                  :style="{ width: '100%' }">
                  <el-option v-for="(item, index) in consequenceOptions" :key="index" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item :label="`${$t('Impacts')}：`" prop="impacts">
                <el-select v-model="formData.impacts" placeholder="请选择Region" clearable :style="{ width: '100%' }">
                  <el-option v-for="(item, index) in impactsOptions" :key="index" :value="item"></el-option>
                </el-select>

              </el-form-item>
            
          </el-row>

          <!-- <el-col :span="6">
            <el-form-item label="Variant Class" prop="type">
              <el-select v-model="formData.type" placeholder="请选择Variant Class" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in typeOptions" :key="index" :value="item"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col> -->


            <!-- <div id="inner_item">

            </div> -->


          <!-- <el-col :span="6">
            <span style="color:#606266;font-size: 14px;font-weight: 700;">MAF</span>
            <div id="inner_input">
              <el-input placeholder="请输入最小值" v-model="formData.maf_min" number @input="handleinput3"></el-input>
              <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
              <el-input placeholder="请输入最大值" v-model="formData.maf_max" number @input="handleinput4"></el-input>
            </div>
          </el-col> -->
          <el-row  type="flex" justify="center">
            <div  class="footer" >
              <el-button size="small" @click="resetForm" style="margin-right: 15px;">
                <SvgIcon icon-class="CLEAR" color="04afaf" style="margin-right: 7px;margin-left: 0;"></SvgIcon>
                <span style="color: #04afaf">{{$t('reset')}}</span>
              </el-button>
              <el-button type="primary" size="small" @click="filter_page()">
                {{$t('search')}}
                  <SvgIcon icon-class="search" color="fff" style="margin-left: 7px;"></SvgIcon>
              </el-button>
            </div>
          </el-row>


        </el-form>
      </el-row>
    </div>



    <div class="buttom_box">
      
      <div style="text-align: center;align-items: center; margin-bottom: 10px;line-height: 30px;margin-top: 10px;">
        <p style="display:inline;font-size:25px;color:#136649;font-weight:bolder;font-family:'Times New Roman';">{{$t('VariationTable')}}</p>
        <el-button type="primary" icon="el-icon-download" @click="handleExport">{{$t('download')}}</el-button>
      </div>
      <el-table v-loading="loading" ref="multipleTable" :data="tableData" tooltip-effect="dark" stripe
        @selection-change="handleSelectionChange"  element-loading-text="拼命加载中....">
        <!-- 展示的条目 -->
        <el-table-column type="selection" width="55" @click="getVID($event)">
        </el-table-column>

        <el-table-column :label="$t('VariantID')" show-overflow-tooltip width="240" sortable>
          <template slot-scope="scope">
            <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick($event)">{{ scope.row.vid }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" :label="$t('Type')" sortable>
        </el-table-column>
        <el-table-column prop="chr" :label="$t('Chr')" sortable>
        </el-table-column>
        <el-table-column prop="posi" :label="$t('Posi')" sortable>
        </el-table-column>
        <!-- <el-table-column prop="maf" >
        </el-table-column> -->
        <!-- <el-table-column prop="genorate" :label="$t('GenoRate')" sortable>
        </el-table-column> -->
        <el-table-column prop="consequences" :label="$t('Consequence')" sortable>
        </el-table-column>
        <el-table-column prop="impacts" :label="$t('Impacts')" sortable>
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

import SvgIcon from "@/components/CommonComponents/SvgIcon.vue";

export default {
  components: { SvgIcon },
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
      loading:false,
      //  死数据 请求到的数据量太少
      tableData: [],
      multipleSelection: [],
      formData: {
        accession: "B73_V5",
        version: "5",
        population: "NCII-1",
        analysis: "WGS SNPs and INDELs in NCII-1",
        // type: "DEL",
        chr: "1",
        consequences: "intergenic_region",
        impacts: "MODIFIER",
        // maf_min: "0",
        // maf_max: "0.9",
        posi_min: "112775812",
        posi_max: "112796815"
      },
      rules: {
        accession: [],
        version: [],
        population: [],
        analysis: [],
        chr: [],
        consequence: [],
        impacts: [],
      },
      accessionOptions: [],
      versionOptions: [],
      aliasOptions: [],
      descriptionOptions: [],
      typeOptions: [],
      chrOptions: ["10","1","2","3","4","5","6","7","8","9"],
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
    },
    // formData:{
    //   handler(newval,odlval){
    //     this.loading = true;
    //     Search(this.formData, this.queryParams).then(res => {
    //       this.total = res.total
    //       this.tableData = res.rows
    //       this.loading = false
    //     })

    //   },
    //   deep:true

    // }

  },
  mounted() {
    this.$nextTick(this.Request_beforeMounted())
    this.loading = true;
    Search(this.formData, this.queryParams).then(res => {
      this.total = res.total
      this.tableData = res.rows
      this.loading = false
    })
  },
  created() {
    // let formm = {
    //     accession: "B73",
    //     version: "4.43.0",
    //     population: "AMP",
    //     analysis: "",
    //     type: "DEL",
    //     chr: "chr1",
    //     consequences: "intergenic_variant",
    //     impacts: "MODIFIER",
    //     maf_min: "0",
    //     maf_max: "0.9",
    //     posi_min: "50000",
    //     posi_max: "800000000"
    //   }

  },
  methods: { 
    //跳转到详情页面
    handleClick(event) {
      const VID = event.target.innerHTML
      toDetailPage(VID).then(res => {
        const data = res;
        this.$router.push({
          path: '/variation/variation/detail',
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
        this.loading = false
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
      this.formData.start = ""
      this.formData.end = ""
      this.formData.accession = this.accessionOptions[0]
      this.formData.version = this.versionOptions[0]
    },
    handleinput(value){
      if(isNaN(value))
            {
                this.formData.posi_min = value.replace(/\D/g, '') 
                this.$message("请输入数字!!!!")
            }
            else{
            }
    },
    handleinput2(value){
      if(isNaN(value))
            {
                this.formData.posi_max = value.replace(/\D/g, '') 
                this.$message("请输入数字!!!!")
            }
            else{
            }
    },
    handleinput3(value){
      if(isNaN(value))
            {
                this.formData.maf_min = value.replace(/\D/g, '') 
                this.$message("请输入数字!!!!")
            }
            else{
            }
    },
    handleinput4(value){
      if(isNaN(value))
            {
                this.formData.maf_max = value.replace(/\D/g, '') 
                this.$message("请输入数字!!!!")
            }
            else{
            }
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
      this.loading = true
      Search(this.formData, this.queryParams).then(res => {
        this.tableData = res.rows
        this.total = res.total
        this.loading = false
      }).catch(err => {
      })

    },
    //页面加载前请求
    Request_beforeMounted() {
      getSelectReference().then(res => {
        this.accessionOptions = res.data
        this.formData.accession = this.accessionOptions[0]

      }).then(()=>{
        getSelectVersion(this.formData.accession).then(res => {
          this.versionOptions = res.data
          this.formData.version = this.versionOptions[0]
        })
      })
      getSelectPopulation().then(res => {
        this.aliasOptions = res.data
        // this.formData.population = this.aliasOptions[2]
      }).catch(err => {
      })
      getSelectAnalysis().then(res => {
        this.descriptionOptions = res.data
      }).catch(err => {
      })
      // getSelectConsequences().then(res => {
      //   this.consequenceOptions = res.data
      //   // this.formData.consequence = this.consequenceOptions[1]
      // }).catch(err => {
      // })
      // getSelectImpacts().then(res => {
      //   this.impactsOptions = res.data
      // }).catch(err => {
      // })

      this.consequenceOptions=[
        "intron_variant",
        "intergenic_region",
        "upstream_gene_variant",
        "splice_region_variant&non_coding_transcript_exon_variant",
        "downstream_gene_variant",
        "missense_variant&splice_region_variant",
        "synonymous_variant",
        "missense_variant",
        "splice_region_variant&intron_variant",
        "5_prime_UTR_variant",
        "3_prime_UTR_variant",
        "splice_region_variant",
        "disruptive_inframe_insertion",
        "5_prime_UTR_premature_start_codon_gain_variant",
        "non_coding_transcript_exon_variant",
        "splice_acceptor_variant&intron_variant",
        "splice_donor_variant&intron_variant",
        "conservative_inframe_insertion",
        "stop_gained",
        "frameshift_variant",
        "splice_region_variant&synonymous_variant",
        "stop_retained_variant",
        "conservative_inframe_deletion",
        "start_lost",
        "frameshift_variant&splice_donor_variant&splice_region_variant&intron_variant",
        "disruptive_inframe_deletion",
        "splice_acceptor_variant&splice_region_variant&intron_variant",
        "frameshift_variant&stop_gained",
        "frameshift_variant&start_lost",
        "stop_gained&splice_region_variant",
        "splice_donor_variant&splice_region_variant&3_prime_UTR_variant&intron_variant",
        "stop_gained&disruptive_inframe_insertion",
        "splice_region_variant&stop_retained_variant",
        "splice_donor_variant&splice_region_variant&intron_variant",
        "stop_lost",
        "stop_gained&conservative_inframe_insertion",
        "start_lost&conservative_inframe_deletion",
        "disruptive_inframe_deletion&splice_region_variant",
        "frameshift_variant&splice_acceptor_variant&splice_region_variant&intron_variant",
        "splice_acceptor_variant&conservative_inframe_deletion&splice_region_variant&intron_variant",
        "frameshift_variant&splice_region_variant",
        "initiator_codon_variant",
        "gene_fusion",
        "stop_lost&splice_region_variant",
        "frameshift_variant&stop_lost&splice_region_variant",
        "splice_donor_variant&conservative_inframe_deletion&splice_region_variant&intron_variant",
        "stop_lost&conservative_inframe_deletion&splice_region_variant",
        "splice_acceptor_variant&splice_donor_variant&splice_region_variant&5_prime_UTR_variant&intron_variant",
        "disruptive_inframe_insertion&splice_region_variant",
        "exon_loss_variant&splice_acceptor_variant&splice_donor_variant&splice_region_variant&intron_variant",
        "splice_donor_variant&disruptive_inframe_deletion&splice_region_variant&intron_variant",
        "stop_lost&disruptive_inframe_insertion",
        "frameshift_variant&stop_lost",
        "splice_acceptor_variant&splice_region_variant&5_prime_UTR_variant&intron_variant",
        "splice_donor_variant&splice_region_variant&5_prime_UTR_variant&intron_variant",
        "splice_acceptor_variant&splice_region_variant&3_prime_UTR_variant&intron_variant",
        "splice_region_variant&downstream_gene_variant",
        "stop_lost&conservative_inframe_deletion",
        "frameshift_variant&3_prime_UTR_truncation&exon_loss_variant&splice_region_variant",
        "conservative_inframe_deletion&splice_region_variant",
        "splice_acceptor_variant&splice_donor_variant&splice_region_variant&intron_variant",
        "conservative_inframe_insertion&splice_region_variant",
        "frameshift_variant&stop_gained&splice_region_variant",
        "splice_acceptor_variant&disruptive_inframe_deletion&splice_region_variant&intron_variant",
        "splice_acceptor_variant&5_prime_UTR_variant&intron_variant",
        "stop_lost&splice_donor_variant&3_prime_UTR_truncation&exon_loss_variant&conservative_inframe_deletion&splice_region_variant&intron_variant",
        "splice_donor_variant&splice_region_variant&intron_variant&non_coding_transcript_exon_variant",
        "stop_gained&disruptive_inframe_deletion&splice_region_variant",
        "splice_donor_variant&5_prime_UTR_variant&intron_variant",
        "start_lost&disruptive_inframe_insertion",
        "exon_loss_variant&splice_donor_variant&splice_region_variant&intron_variant",
        "stop_lost&disruptive_inframe_deletion",
        "frameshift_variant&splice_acceptor_variant&splice_donor_variant&splice_region_variant&intron_variant",
        "feature_ablation",
        "splice_acceptor_variant&splice_donor_variant&splice_region_variant&3_prime_UTR_variant&intron_variant",
        "start_lost&disruptive_inframe_deletion",
        "stop_gained&disruptive_inframe_deletion",
        "start_lost&conservative_inframe_insertion",
        "start_lost&splice_region_variant",
        "splice_acceptor_variant&5_prime_UTR_truncation&exon_loss_variant&splice_region_variant&intron_variant",
        "splice_acceptor_variant&splice_region_variant&intron_variant&non_coding_transcript_exon_variant",
        "splice_acceptor_variant&3_prime_UTR_variant&intron_variant",
        "exon_loss_variant",
        "splice_donor_variant&3_prime_UTR_variant&intron_variant",
        "frameshift_variant&stop_lost&splice_donor_variant&3_prime_UTR_truncation&exon_loss_variant&splice_region_variant&intron_variant",
        "exon_loss_variant&splice_acceptor_variant&splice_region_variant&intron_variant",
        "stop_gained&disruptive_inframe_insertion&splice_region_variant",
        "intragenic_variant",
        "initiator_codon_variant&splice_region_variant",
        "frameshift_variant&start_lost&splice_region_variant",
        "splice_acceptor_variant&splice_donor_variant&3_prime_UTR_truncation&exon_loss_variant&splice_region_variant&intron_variant",
        "stop_gained&conservative_inframe_insertion&splice_region_variant",
        "frameshift_variant&stop_lost&splice_acceptor_variant&splice_region_variant&intron_variant",
        "stop_lost&3_prime_UTR_truncation&exon_loss_variant&conservative_inframe_deletion&splice_region_variant",
        "stop_lost&disruptive_inframe_deletion&splice_region_variant",
        "stop_lost&disruptive_inframe_insertion&splice_region_variant",
        "start_lost&conservative_inframe_deletion&splice_region_variant",
        "frameshift_variant&stop_lost&splice_acceptor_variant&splice_donor_variant&splice_region_variant&intron_variant",
        "splice_acceptor_variant&3_prime_UTR_truncation&exon_loss_variant&splice_region_variant&intron_variant",
        "3_prime_UTR_truncation&exon_loss_variant&splice_region_variant",
        "frameshift_variant&stop_lost&3_prime_UTR_truncation&exon_loss_variant&splice_region_variant",
        "stop_gained&splice_acceptor_variant&disruptive_inframe_deletion&splice_region_variant&intron_variant",
        "5_prime_UTR_truncation&exon_loss_variant",
        "frameshift_variant&start_lost&splice_acceptor_variant&splice_region_variant&intron_variant",
        "stop_lost&conservative_inframe_insertion&splice_region_variant",
        "stop_gained&splice_donor_variant&disruptive_inframe_deletion&splice_region_variant&intron_variant",
        "frameshift_variant&stop_lost&splice_donor_variant&splice_region_variant&intron_variant"
      ]




    this.impactsOptions[
        "MODIFIER",
        "LOW",
        "MODERATE",
        "HIGH"
    ]
      // getSelectRegion().then(res => {
      //   this.chrOptions = res.data
      //   // this.formData.chr = this.chrOptions[0]
      // }).catch(err => {
      // })
      // getSelectVariantClass().then(res => {
      //   this.typeOptions = res.data
      //   // this.formData.type = this.typeOptions[1]
      // }).catch(err => {
      // })
    }
  }
}
</script>
<style lang="scss" scoped> 
.filter_page {
  display: flex;
  flex-direction: column;
}
#inner_input {
  display: flex;
  .el-input {
    flex: 1;
  }
}
.left-box {

  .el-form {
    width: 100%;
    margin-top: 10px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;

    .el-col {
      margin: 0 auto;
      //  width: 300px;
      width: 80%;


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
  }
}

.filterDiv {
  margin-right: 10px;
}

.fiterShow i{
  font-size: 30px;
  color: #40878f;
  cursor: pointer;
  margin: 10px 10px 10px 5px;
  // margin: 10px;
  float: left;
  z-index: 99;
  position: relative;
}

.buttom_box {
  flex: 1;
  overflow: hidden;
  overflow: hidden;
  border: 0px solid;

  padding-bottom: 10px;

  .el-button {
    float: right;

  }

  .el-table {
    margin-left: 15px;
  }

  .pagination-container {
    margin-left: 15px;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
}

::v-deep .el-table .el-table__header-wrapper tr th {
	// background-color: #1FB864 !important;
  background-color: #40878f !important;
	color: rgb(255, 255, 255);
}
::v-deep .el-form-item__label{
    color: #337177;
  }
 </style>
  
