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
            <div class="download-FTP">
              <el-button><SvgIcon icon-class="download02" color="16AA2B" style="margin-right: 5px" />Go to FTP</el-button>
            </div>
          </div>
          <div class="data-table" style="margin-top: 30px;">
            <el-table
            v-loading="loading"
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
            >
            </el-table-column>
            <el-table-column
              label="UID"
              width="250px"
            >
              <template slot-scope="scope" >
                <div class="" @click="changeShowInfo(scope)">
                  <span class="phenomicsUid" >
                  {{ scope.row.xotUid }}
                  </span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Category"
              prop="category"
            >
            </el-table-column>
            <el-table-column
              label="Type"
              prop="type"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="Analysis"
              prop="analysis.analysisId"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="Name"
              prop="name"
              width="200px"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="Location"
              prop="location"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="TraitDateLoc"
              prop="traitDateLoc"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="Year"
              prop="year"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="Tissue"
              prop="tissue"
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
      <PhenomicsInfo :show-info.sync="showInfo" :info-item="infoItem"/>
    </transition>
  </div>
</template>

<script>
import PhenomicsInfo from './components/phenomics-info.vue'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
import SideBar from './components/sidebar.vue'
import { getPhenomics } from '@/api/phenomics/phenomics'
export default {
components: { SideBar, SvgIcon, PhenomicsInfo },
data() {
  return {
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
  // 获取phenomics的信息
  async getPhenomics() {
    this.loading = true
    const res = await getPhenomics(this.page)
    this.tableData = res.rows
    this.page.total = res.total
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
    this.getPhenomics()
  },
  // 修改所在的页数
  changePage(newVal) {
    this.page.pageNum = newVal
    this.getPhenomics()
  },
  // 展示详情信息
  changeShowInfo({ row }) {
    this.showInfo = true
    this.infoItem = row
  },
  toggleSelection(rows) {
    if (rows) {
      rows.forEach(row => {
        this.$refs.multipleTable.toggleRowSelection(row);
      });
    } else {
      this.$refs.multipleTable.clearSelection();
    }
  },
  handleSelectionChange(val) {
    this.multipleSelection = val;
  },
},
computed: {
  bigFilterNames() {
    let names = []
    // const filterNames = this.filterNames
    this.filterNames.forEach(item => {
      const name = item.charAt(0).toUpperCase() + item.slice(1)
      names.push(name)
    })
    return names
  }
}
}
</script>

<style lang="scss" scoped>
.phenomics-container {
display: flex;
}
::v-deep .el-submenu__title:hover {
background-color: #fff;
}
::v-deep .el-submenu__icon-arrow {
visibility: hidden
}
.data-container {
width: 100%;
padding: 25px 15px;
}
.data-top {
display: flex;
justify-content: space-between;
}
.phenomicsUid {
  color: #63C470;
  &:hover {
    text-decoration: underline;
  }
}
</style>