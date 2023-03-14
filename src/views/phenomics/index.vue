<template>
  <div class="phenomics-container">
    <SideBar />
    <div class="data-container">
      <div class="data-top">
        <div class="info-nums">
          <span>Show</span>
          <el-select @change="getPhenomics" v-model="page.pageSize" style="width: 80px;margin: 0 10px;">
            <el-option label="5" value="5"></el-option>
            <el-option label="10" value="10"></el-option>
            <el-option label="15" value="15"></el-option>
            <el-option label="20" value="20"></el-option>
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
        >
          <template slot-scope="scope">{{ scope.row.uid }}</template>
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
          prop="analysis"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="Name"
          prop="name"
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
        @current-change="changePage"
        layout="prev, pager, next"
        :total="page.total"
        style="margin-top: 25px;margin-bottom: 50px;float: right;">
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar.vue'
import { phenomics } from './data'
import { getPhenomics } from '@/api/phenomics'
export default {
components: { SideBar },
data() {
  return {
    page: {
      pageSize: 5,
      pageNum : 1,
      total: 0
    },
    loading: false,
    // {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     address: '上海市普陀区金沙江路 1518 弄'
    //   }
    tableData: [],
    multipleSelection: [],
  }
},
created() {
  this.getPhenomics()
},
methods: {
  async getPhenomics() {
    console.log(this.page);
    this.loading = true
    // const res = await getPhenomics(this.page)
    const res = phenomics
    this.tableData = res.rows
    this.page.total = res.total
    this.loading = false
    console.log(res);
  },
  changePage(newVal) {
    this.page.pageNum = newVal
    ths.getPhenomics()
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
</style>