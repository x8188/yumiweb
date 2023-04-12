<template>
    <div class="phenomics">
        <transition name="fade-transform" mode="out-in">
          <div class="phenomics-container" v-show="!showInfo">
            <SideBar @getFilterData="getFilterData" />
            <div class="data-container">
              <div class="data-top">
                <div class="info-nums">
                  <span>Show</span>
                  <el-select @change="changeResultsNums" v-model="page.pageSize" style="width: 80px;margin: 0 10px;">
                    <el-option label="10" :value="10"></el-option>
                    <el-option label="15" :value="15"></el-option>
                    <el-option label="20" :value="20"></el-option>
                    <el-option label="25" :value="25"></el-option>
                    <el-option label="50" :value="50"></el-option>
                  </el-select>
                  <span>results</span>
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
                      <span class="origin-link-green" >
                      {{ scope.row.xotUid }}
                      </span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Analysis"
                  prop="AnalysisId"
                >
                </el-table-column>
                <el-table-column
                  label="ChrA"
                  prop="Show description"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="StartA"
                  prop="Show description"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="EndA"
                  prop="Show description"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="ChrB"
                  prop="Show description"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="StartB"
                  prop="Show description"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="EndB"
                  prop="Show description"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="Contact_Counts"
                  prop="Show description"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="P-value"
                  prop="Show description"
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
import AnalysisInfo from './components/analysis-info.vue'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
import SideBar from './components/sidebar.vue'
export default {
components: { SideBar, SvgIcon, AnalysisInfo },
data() {
  return {
    // 多选
    multipleSelection: [],
    page: {
      pageNum : 1,
      pageSize: 10,
      total: 0
    },
    loading: false,
    tableData: [],
    multipleSelection: [],
    showInfo: false,
    infoItem: {}
  }
},
created() {
  this.getPhenomics()
},
methods: { 
  // 多选
  handleSelectionChange(val) {
    this.multipleSelection = val;
  },
  // 获取phenomics的信息
  async getPhenomics() {
    this.loading = true
    
    this.loading = false

  },
    // 获取筛选数据
    getFilterData(filter) {
    this.page = {...this.page, ...filter}
    this.getPhenomics()
  },
  // 改变每页展示的信息条数
  changeResultsNums(newVal) {
    this.page.pageSize = newVal
  },
  // 修改所在的页数
  changePage(newVal) {
    this.page.pageNum = newVal
  },
  // 展示详情信息
  changeShowInfo({ row }) {
    this.showInfo = true
    this.infoItem = row
  }
},
computed: {
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
min-width: 1200px;
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