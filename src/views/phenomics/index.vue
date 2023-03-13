<template>
  <div class="phenomics-container">
    <div class="menu-container" style="width:350px;">
      <el-menu ref="menus" @close="handleClose" :default-openeds="openeds"  :collapse.sync="isCollapse" class="drawer-container" active-text-color="#303133">
          <el-submenu :index="String(8)">
            <template slot="title" >
              <i @click="closeMenu(isCollapse)">
                <SvgIcon icon-class="angle-double-left" color="63C470" />
              </i>
              <span style="margin-left: 160px; color: #000;">Fliters
                <SvgIcon icon-class="refresh-left" color="000" style="margin-left: 7px;"></SvgIcon>
              </span>
            </template>
          </el-submenu>
        <div>
          <div v-for="(name,index) in filterNames" >
            <el-submenu :index="String(index)">
              <template slot="title">
                <i>
                  <SvgIcon :icon-class="filterIcons[index]" color="212121"></SvgIcon>
                </i>
              <span slot="title" style="margin-left: 10px;">{{ bigFilterNames[index] }}</span>
            </template>
              <el-select index="0" v-model="filters[name]" placeholder="" style="margin-left: 40px"></el-select>
          </el-submenu>
          </div>
        </div>
      </el-menu>
    </div>

    <div class="data-container">
      <div class="data-top">
        <div class="info-nums">
          <span>Show</span>
          <el-select v-model="infoNums" style="width: 80px;margin: 0 10px;"></el-select>
          <span>results</span>
        </div>
        <div class="download-FTP">
          <el-button><SvgIcon icon-class="download02" color="16AA2B" style="margin-right: 5px" />Go to FTP</el-button>
        </div>
      </div>
      <div class="data-table" style="margin-top: 30px;">
        <el-table
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
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          label="Category"
        >
        </el-table-column>
        <el-table-column
          label="Type"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="Analysis"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="Name"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="Location"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="TraitDateLoc"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="Year"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="Tissue"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        style="margin-top: 25px;float: right;">
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
data() {
  return {

    // {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     address: '上海市普陀区金沙江路 1518 弄'
    //   }
    tableData: [],
    multipleSelection: [],

    infoNums: '50',
    openeds: ['0','1','2','3','4','5','6','7'],
    isCollapse: false,
    filterNames: ['category','type','analysis','name','location','traitDateLoc','year'],
    filterIcons: ['calendar-alt','Type-Tool','gene','build','locate1f','location-fill','year'],
    filters: {
      category: '',
      type: '',
      analysis: '',
      name: '',
      location: '',
      traitDateLoc: '',
      year: ''
    }
  }
},
methods: {
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
  handleClose(key, keyPath) {
     this.$refs.menus.open(keyPath);
  },
  closeMenu(val) {
    // this.isCollapse = !val
    // this.handleClose()
  }
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
height: 650px;
padding: 25px 15px;
}
.data-top {
display: flex;
justify-content: space-between;
}
</style>