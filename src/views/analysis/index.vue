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

                <div class="download-button">
                  <el-button @click="downloadData()" type="primary" icon="el-icon-download" style="width: 100px;">下载</el-button>
                </div>
              </div>
              <div class="data-table" style="margin-top: 30px;">
                <el-table
                v-loading="loading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                >
                <el-table-column
                  label="Omics"
                  prop="omics"
                  width="250px"
                >
                </el-table-column>
                <el-table-column
                  label="Analysis Id"
                  prop="name"
                >
                </el-table-column>
                <el-table-column
                  label="Show description"
                  prop="description"
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
import { queryAll,downloadAll} from '@/api/analysis/index'
import AnalysisInfo from './components/analysis-info.vue'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
import SideBar from './components/sidebar.vue'
export default {
components: { SideBar, SvgIcon, AnalysisInfo },
data() {
  return {
    // 多选
    page: {
      pageNum : 1,
      pageSize: 10,
      total: 0
    },
    loading: false,
    tableData: [],
    showInfo: false,
    infoItem: {},
    // 初次筛选
    nullSelect : {
      description: '',
      name: '',
      omics: '',
      pageNum: '1',
      pageSize: '10' 
    },
    fliterData: {}
  }
},
created() {
  this.getPhenomics(this.nullSelect)
},
methods: { 
  async downloadData() {
    let names = []
    const {total} = await queryAll(this.page)
    let temp = JSON.parse(JSON.stringify(this.page))
    console.log(temp);
    temp.pageSize = total
    const {rows} = await queryAll(temp)

    rows.forEach(item => {
      names.push(item.name)
    })
    const fileName = 'analysis_' + new Date().getTime() + '.xlsx'

    try {
      this.$notify.info({
          title: '成功',
          message: '请求成功，正在下载',
      });
      const data = await downloadAll('/tran/fator/analysis/download',names,fileName)
      this.$notify({
          title: '成功',
          message: '下载成功',
          type: 'success'
      });
    } catch (error) {
      this.$notify.error({
        title: '错误',
        message: '下载失败，请联系管理员'
      });
    }
  },
  // 获取phenomics的信息
  async getPhenomics(fliters) {
    this.loading = true
    const {total,rows} = await queryAll(fliters)
    this.page.total = total
    this.tableData = rows
    
    this.loading = false

  },
    // 获取筛选数据
    getFilterData(filter) {
      this.page = {...this.page, ...filter}
      this.getPhenomics(this.page)
  },
  // 改变每页展示的信息条数
  changeResultsNums(newVal) {
    this.page.pageSize = newVal
    this.getPhenomics(this.page)
  },
  // 修改所在的页数
  changePage(newVal) {
    this.page.pageNum = newVal
    this.getPhenomics(this.page)
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