<template>
    <div class="phenomics">
      <div class="side-bar-container">
        <div class="menu-container" :class="{ hide }" >
      <div class="header">
        <i v-show="!hide"  class="el-icon-caret-top" style="font-size: 30px;color: #489E38;" @click="changeShow"></i>
        <i v-show="hide"  class="el-icon-caret-bottom" style="font-size: 30px;color: #489E38;"  @click="changeShow"></i>
      </div>
        <div class="menu-list">
          <div class="menu-item">
            <div style="width: 90%;">
              <el-input
              clearable
                style="width: 90%;margin-top: 10px;"
                placeholder="Descirption"
                v-model="filters.description">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
          </div>
          <div class="menu-item">
          <div  style="width: 90%;">
            <!-- bfc -->
            <span class="title" >Omics</span>
            <el-select clearable v-model="filters.omics" placeholder="" style="width: 90%;margin-top: 10px;">
              <el-option
              v-for="(item,i) in options.omics"
              :key="i"
              :label=item
              :value=item
              ></el-option>
            </el-select>
        </div>
        </div>

        <div class="menu-item">
          <div  style="width: 90%;">
            <!-- bfc -->
            <span class="title" >Analysis Id</span>
            <el-select clearable index="0" v-model="filters.name" placeholder="" style="width: 90%;margin-top: 10px;">
              <el-option
              v-for="(item,i) in options.ids"
              :key="i"
              :label=item
              :value=item
              ></el-option>
            </el-select>
        </div>
        </div>
        </div>
        <div  class="footer">
          <el-button size="small" @click="clearPhenomics" style="margin-right: 15px;">
            <SvgIcon icon-class="CLEAR" color="20AE35" style="margin-right: 7px;margin-left: 0;"></SvgIcon>
            <span style="color: #20AE35">清空</span>
          </el-button>
          <el-button type="primary" size="small" @click="getPhenomics">
            查询
              <SvgIcon icon-class="search" color="fff" style="margin-left: 7px;"></SvgIcon>
          </el-button>
        </div>
    </div>
      </div>
        <div class="phenomics-container" v-show="!showInfo">
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
    </div>
</template>

<script>
import { dropDownOmics,dropDownAnalysisId } from '@/api/analysis/index'
import { queryAll,downloadAll} from '@/api/analysis/index'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
data() {
  return {
    // 左侧筛选栏
    descirption: '',
    hide: false,
    filterNames: ['Omics', 'Analysis Id'],
    filters: {
      omics: '',
      name: '',
      description: ''
    },
    options: {
    omics: [],
    ids: []
    },
    // 右侧展示栏
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
  this.getPhenomicsDropDown()
  this.getPhenomics(this.nullSelect)
},
methods: { 
  // 左侧侧壁栏
  changeShow() {
  this.hide = !this.hide
  },
  // 获取下拉框数据
  async getPhenomicsDropDown() {
    const omics = await dropDownOmics()
    this.options.omics = omics.data
    const ids = await dropDownAnalysisId()
    this.options.ids = ids.data
  },

  // 清空数据
  clearPhenomics() {
    this.filters = {
      omics: '',
      name: '',
      description: ''
    }
    this.getPhenomics()
  },
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
  async getPhenomics() {
    this.page = {...this.page, ...this.filters}
    this.loading = true
    const {total,rows} = await queryAll(this.page)
    this.page.total = total
    this.tableData = rows
    this.loading = false
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

.menu-container {
  max-width:300px;
  height: 400px;
  border-right: 1px solid #DCDFE6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;
}

.menu-list {
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .menu-item {
    display: flex;
    justify-content: flex-end;
  }
}
.footer {
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end
}
.header {
  margin-bottom: 20px;
  margin-left: 20px;
}
.title {
  font-weight: 700;
  color: #727377;
  font-size: 14px;
}
.hide {
  width: 30px;
  padding-right: 20px; 
  margin-right: 20px;
  border: none;
  .menu-list,
  .footer {
    display: none;
  }
  
}
.phenomics {
  width: 100%;
  display: flex;
}
.phenomics-container {
  width: 100%;
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
// min-width: 1200px;
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