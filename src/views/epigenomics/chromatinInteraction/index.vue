<template>
    <div class="phenomics">
        <transition name="fade-transform" mode="out-in">
          <div class="phenomics-container" v-show="!showInfo">
            <SideBar @getFilterData="getFilterData" />
            <div class="data-container">
              <div class="data-top">
                <div class="info-nums">
                  <span>Show</span>
                  <el-select filterable @change="changeResultsNums" v-model="page.pageSize" style="width: 80px;margin: 0 10px;">
                    <el-option label="10" :value="10"></el-option>
                    <el-option label="15" :value="15"></el-option>
                    <el-option label="20" :value="20"></el-option>
                    <el-option label="25" :value="25"></el-option>
                    <el-option label="50" :value="50"></el-option>
                  </el-select>
                  <span>results</span>
                </div>
                <div class="download-button">
                  <el-button @click="downloadData()" type="primary" icon="el-icon-download" style="width: 100px;">下载</el-button>
                </div>
              </div>
              <div class="data-table" style="margin-top: 30px;">
                <el-table
                v-loading="loading"
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
                style="width: 100%"
                >
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>

                <el-table-column
                  label="REF/Version"
                >
                  <template slot-scope="scope" >
                    <div class="" @click="changeShowInfo(scope)">
                      <span>
                      {{ scope.row.accession }}/{{ scope.row.version }}
                      </span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Analysis"
                  prop="description"
                  width="250"
                >
                </el-table-column>
                <el-table-column
                  label="ChrA"
                  prop="chrA"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="StartA"
                  prop="startA"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="EndA"
                  prop="endA"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="ChrB"
                  prop="chrB"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="StartB"
                  prop="startB"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="EndB"
                  prop="endB"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="Contact_Counts"
                  prop="contactCounts"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="P-value"
                  prop="pValue"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
              <el-pagination
                background
                :page-size="page.pageSize"
                @current-change="changePage"
                layout="prev, pager, next"
                :total="page.total"
                style="margin-top: 25px;margin-bottom: 50px;float: right;">
              </el-pagination>
              </div>
            </div>
          </div>
        </transition>
      
      <transition name="fade-transform" mode="out-in">
        <AnalysisInfo :show-info.sync="showInfo" :info-item="infoItem"/>
      </transition>
    </div>
</template>

<script>
import { queryAll,downloadAll } from '@/api/epigenomics/chromatinInteraction/index'
import AnalysisInfo from './components/analysis-info.vue'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
import SideBar from './components/sidebar.vue'
import { blobValidate } from '@/utils/ruoyi';
export default {
components: { SideBar, SvgIcon, AnalysisInfo },
data() {
  return {
    page: {
      pageNum : 1,
      pageSize: 10,
      total: 0,
      accession: 'B73',
      version: '4.43.0',
      description: '',
      // chrA
      chrA: '',
      startA: '0',
      endA: '9999999999999999',
      // chrB
      chrB: '',
      startB: '0',
      endB: '999999999999999'
    },
    queryNull:{
      pageNum : 1,
      pageSize: 10,
      accession: 'B73',
      version: '4.43.0',
      description: '',
      // chrA
      chrA: '',
      startA: '0',
      endA: '9999999999999999',
      // chrB
      chrB: '',
      startB: '0',
      endB: '999999999999999'
  },
    // 多选
    multipleSelection: [],
    loading: false,
    tableData: [],
    showInfo: false,
    infoItem: {}
  }
},
created() {
  this.getData(this.queryNull)
},
methods: { 
  // 下载
  async downloadData() {
    console.log(this.multipleSelection);
    const tempQuery = {
      accession:'B73',
      version:'4.43.0',
      analysis:'ZhangXY-leaf_K4me3-HiChIP',
      chrA:'chr1',
      startA:'1',
      endA:'9999999999',
      chrB:'chr1',
      startB:'1',
      endB:'99999999999'
    }

    const data = await downloadAll(this.multipleSelection)
    const isOk = await blobValidate(data)
    if(isOk) {
      this.$notify({
          title: '成功',
          message: '请求成功，正在下载',
          type: 'success'
      });

      // const res2 = await blobValidate(res1)
      const res1 = new Blob([data])
      const fileName = 'chromatinInteraction_'+ new Date().getTime() + '.xlsx'
  
      this.$download.saveAs(res1, fileName)
    } else {
      this.$notify.error({
          title: '错误',
          message: '下载失败，请联系管理员'
      });
    }
  },
  // 多选
  handleSelectionChange(val) {
    this.multipleSelection = val;
  },
  // 获取表格数据
  async getData(fliter) {
    this.loading = true
    const { rows,total } = await queryAll(fliter)
    this.page.total = total
    this.tableData = rows
    
    this.loading = false

    return { rows,total } 

  },
  // 获取筛选数据
  async getFilterData(filter) {
    this.page.pageNum = 1
    const query = {...filter,...this.page.pageSize}
    const data = await this.getData(query)
  },
  // 改变每页展示的信息条数
  changeResultsNums(newVal) {
    this.page.pageSize = newVal
    this.getData(this.page)
  },
  // 修改所在的页数
  changePage(newVal) {
    this.page.pageNum = newVal
    this.getData(this.page)
  },
  // 展示详情信息
  changeShowInfo({ row }) {
    this.showInfo = true
    this.infoItem = row
  }
}
}
</script>

<style lang="scss" scoped>
.phenomics {
  width: 100%;
}
.phenomics-container {
display: flex;
justify-content: center;
}
::v-deep .el-submenu__title:hover {
background-color: #fff;
}
::v-deep .el-submenu__icon-arrow {
visibility: hidden
}
.data-container {
min-width: 900px;
width: 100%;
padding: 25px 15px;
}
.data-top {
display: flex;
justify-content: space-between;
}
.phenomics-container {
  transition: all .5s;
}
</style>