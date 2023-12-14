<template>
  <div class="filter_page">
    <div :class="{ fitershide: filterHide }" class="left-box">
      <span @click="filterHide = !filterHide" class="fiterShow">
        <i v-if="filterHide" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </span>

      <el-form ref="elForm" v-show="filterHide" :model="formData" size="medium" :inline="true">
        <el-row :gutter="24" class="filter_box" type="flex" justify="center">
          
            <!-- <el-col id="col-one">
            <span @click="filter_page()" id="span-second">Filter</span>
            <span @click="resetForm">Reset</span>
          </el-col> -->
              <el-form-item :label="$t('Germplasm')">
                <el-select v-model="formData.accession" placeholder="请选择Germplasm" clearable :style="{ width: '100%' }">
                  <el-option v-for="(item, index) in GermplasmOptions" :key="index" :label="item" :value="item"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item :label="$t('Version')">
                <el-select v-model="formData.version" placeholder="请选择Version" clearable :style="{ width: '100%' }">
                  <el-option v-for="(item, index) in VersionOptions" :key="index" :label="item" :value="item"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item :label="$t('UniqueName')">
                <el-input placeholder="请输入Name" v-model="formData.uniquename"></el-input>
              </el-form-item>

              <el-form-item :label="$t('CommonName')">
                <el-input placeholder="请输入Name" v-model="formData.commonname"></el-input>
              </el-form-item>
          
        </el-row>

                      <!-- <span style="color:#606266;font-size: 14px;font-weight: 700;">Chromosome</span> -->
        <el-row type="flex" justify="center">
          <el-form-item :label="$t('Chr')">
            <el-select v-model="formData.chrom" placeholder="请选择Chr" clearable :style="{ width: '100%' }">
              <el-option v-for="(item, index) in ChrOptions" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <!-- <span style="color:#606266;font-size: 14px;font-weight: 700;">Location</span> -->
          <el-form-item :label="$t('Location')">
            <div id="inner_input">
            <el-input placeholder="请输入最小值" v-model="formData.start" number @input="handleinput"></el-input>
            <div style="height: 36px; line-height: 36px;font-size: 18px; font-weight: 700;">---</div>
            <el-input placeholder="请输入最大值" v-model="formData.end" number @input="handleinput2"></el-input>
            </div>
          </el-form-item>
          
        </el-row>

              <!-- <el-form-item label="Type">
                <el-select v-model="formData.name" placeholder="请选择Type" clearable :style="{ width: '100%' }">
                  <el-option v-for="(item, index) in nameOptions" :key="index" :label="item" :value="item"></el-option>
                </el-select>

              </el-form-item> -->



              <!-- <el-form-item label="Description">
                <el-input placeholder="请输入Description" v-model="formData.description"></el-input>
              </el-form-item> -->

            <el-row type="flex" justify="center">
              <div class="footer">
                <el-button size="small" @click="resetForm()" style="margin-right: 15px;">
                  <SvgIcon icon-class="CLEAR" color="20AE35" style="margin-right: 7px;margin-left: 0;"></SvgIcon>
                  <span style="color: #20AE35">{{$t('reset')}}</span>
                </el-button>
                <el-button type="primary" size="small" @click="filter_page()">
                  {{$t('search')}}
                  <SvgIcon icon-class="search" color="fff" style="margin-left: 7px;"></SvgIcon>
                </el-button>
              </div>
            </el-row>
      </el-form>
    </div>
    <div class="buttom_box">
      <div style="text-align: center;align-items: center; margin-bottom: 10px;line-height: 30px;margin-top: 10px;">
        <p style="display:inline;font-size:25px;">{{$t('GenomicsTable')}}</p>
        <el-button type="primary" icon="el-icon-download" @click="handleExport">{{$t('download')}}</el-button>
      </div>

      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
        @selection-change="handleSelectionChange" v-loading="loading" element-loading-text="拼命加载中....">
        <!-- 展示的条目 -->
        <el-table-column type="selection" width="55" @click="getVID()">
        </el-table-column>

        <el-table-column :label="$t('Name')" show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.row)">{{ scope.row.name
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="uniquename" :label="$t('UniqueName')" width="180">
        </el-table-column>
        <el-table-column prop="commonname" :label="$t('CommonName')" width="180">
        </el-table-column>
        <el-table-column prop="chrom" :label="$t('CHROM')" width="180">
        </el-table-column>
        <el-table-column prop="start" :label="$t('Start')" width="180">
        </el-table-column>
        <el-table-column prop="end" :label="$t('End')" width="180">
        </el-table-column>
        <el-table-column prop="strand" :label="$t('Strand')" width="180">
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

import SvgIcon from "@/components/CommonComponents/SvgIcon.vue";

export default {
  components: { SvgIcon },
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
        chrom: "chr8",
        start: "222267508",
        end: "239266180",
        // name: "",
        commonname: "",
        // description: "",
        uniquename:"GENE",
      },
      loading: true,
      rules: {
        Germplasm: [],
        Version: [],
        Chr: [],
        start: [
          { required: false },
          { type: 'number', message: 'Location必须为数字值' }
        ],
        end: [
          { required: false },
          { type: 'number', message: 'Location必须为数字值' }
        ],
        Type: [],
        Name: [],
        Description: [],
      },
      GermplasmOptions: [],
      VersionOptions: [],
      ChrOptions: ['chr1','chr2','chr3','chr4','chr5','chr6','chr7','chr8','chr9','chr10'],
      filterHide: true,
      TypeOptions: [],
      nameOptions: []
    }
  },
  computed: {},
  watch: {
    "formData.accession": function (New, Old) {
      if (New == null || New == "") {
      }
      else {
        getSelectVersion(New).then(res => {
          this.VersionOptions = res.rows
          this.formData.version = this.VersionOptions[0]
        }).catch(err => {
        })
      }
    },
    // formData: {
    //   handler(oldVal, newVal) {
    //     this.loading = true;
    //     Search(this.formData, this.queryParams).then(res => {
    //       const res11 = this.eidtMsg(res.rows)
    //       this.tableData = res11
    //       this.total = res.total
    //       this.loading = false
    //     })
    //   },
    //   deep: true
    // }
  },

  mounted() { this.$nextTick(this.Request_beforeMounted()) },
  methods: {
    //跳转到详情页面
    handleClick(event) {
      //跳转时 用路由传递参数，将数据正确展示到详情页面 未做
      const featureId = event.featureId
      toDetailPage(featureId).then(res => {
        console.log(res)
        let data = res;
        this.$router.push({
          path: '/Genomics/Genomics/details',
          query: { data }
        })
      }).catch(err => {
      })
    },
    handleinput(value){
      if(isNaN(value)){
        this.formData.start = value.replace(/\D/g, '') 
        this.$message("请输入数字!!!!")
      }
      
    },
    handleinput2(value){
      if(isNaN(value)){
        this.formData.end = value.replace(/\D/g, '') 
        this.$message("请输入数字!!!!")
      }
      
    },
    /** 查询岗位信息列表 */
    getList() {
      this.loading = true;
      Search(this.formData, this.queryParams).then(res => {
        const res11 = this.eidtMsg(res.rows)
        this.tableData = res11
        this.total = res.total
        this.loading = false
      })
    },
    eidtMsg(data) {
      data.forEach(item => {
        if (item.strand == 1) {
          item.strand = "+"
        }
        else item.strand = "-"
      })
      return data
    },
    handleSelectionChange(val) {
      this.Download_Vid = []
      val.forEach(item => {
        this.Download_Vid.push(item.featureId)
      });
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
      this.formData.chrom = ""
      this.formData.uniquename=""
    },
    /** 导出操作按钮 */
    handleExport() {
      const feature_id = this.Download_Vid
      const formData = new FormData()
      formData.append("feature_id", feature_id)
      Download(feature_id).then(res => {
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
    // 筛选页面
    filter_page() {
      this.loading = true
      Search(this.formData, this.queryParams).then(res => {
        const res11 = this.eidtMsg(res.rows)
        this.tableData = res11
        this.total = res.total
        this.loading = false
      }).catch(err => {
      })
    },
    //页面加载前请求
    async Request_beforeMounted() {
      this.loading = true
      await getSelectGermplasm().then(res => {
        this.GermplasmOptions = res.rows
        
      }).catch(err => {
      })
      this.formData.accession = await this.GermplasmOptions[0]

      await getSelectVersion(this.formData.accession).then(res => {
          this.VersionOptions = res.rows
          this.formData.version = this.VersionOptions[0]
        }).catch(err => {
        })
      // getSelectChr().then(res => {
      //   this.ChrOptions = res.rows
      // }).catch(err => {
      // })
      // getSelectType().then(res => {
      //   this.nameOptions = res.rows
      // })
      Search(this.formData, this.queryParams).then(res => {
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

.fiterShow i {
  font-size: 30px;
  color: #489e38;
  cursor: pointer;
  margin: 10px 10px 10px 5px;
  // margin: 10px;
  float: left;
}

.buttom_box {
  flex: 1;
  overflow: hidden;
  overflow: hidden;
  border: 0px solid;

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
</style>
