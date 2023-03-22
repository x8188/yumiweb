<template>
      <div class="menu-container" style="width:350px;">
      <el-menu  ref="menus" @close="handleClose" :default-openeds="openeds"  :collapse.sync="isCollapse" class="drawer-container" active-text-color="#303133">
          <el-submenu :index="String(8)">
            <template slot="title">
              <el-row style="display: flex;">
                <el-col style="margin-top: 5px;margin-left: 20px;">
                  <el-button size="small" @click="clearPhenomics">
                    <SvgIcon icon-class="CLEAR" color="20AE35" style="margin-right: 7px;margin-left: 0;"></SvgIcon>
                    <span style="color: #20AE35">清空</span>
                 </el-button>
                </el-col>
                <el-col style="margin-top: 5px;">
                  <el-button type="primary" size="small" @click="checkPhenomics">
                    查询
                      <SvgIcon icon-class="search" color="fff" style="margin-left: 7px;"></SvgIcon>
                 </el-button>
                </el-col>
              </el-row>
            </template>
          </el-submenu>
        <div>
          <div v-for="(name,index) in filterNames" >
            <el-submenu :index="String(index)" style="padding-right: 30px;">
              <template slot="title">
                <i>
                  <SvgIcon :icon-class="filterIcons[index]" color="212121"></SvgIcon>
                </i>
              <span slot="title" style="margin-left: 10px;">{{ name }}</span>
            </template>
              <el-select index="0" v-model="filters[name]" placeholder="" style="margin-left: 40px;width: 180px;">
                <el-option
                v-for="(item,i) in options[name]"
                :key="i"
                :label="item"
                :value="item"
                ></el-option>
              </el-select>
          </el-submenu>
          </div>
        </div>
      </el-menu>
    </div>

</template>

<script>
import { getPhenomicsDropDown } from '@/api/phenomics/phenomics'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
  components: { SvgIcon },
  data() {
    return {
        // 默认打开的侧边栏
        openeds: ['0','1','2','3','4','5','6','7'],
        // 侧边栏伸缩
        isCollapse: false,
        // 左边的filter 考虑抽出去
        filterNames: ['Category','Type','Analysis','Name','Location','TraitDateLoc','Year'],
        filterIcons: ['calendar-alt','Type-Tool','gene','build','locate1f','location-fill','year'],
      filters: {
        Category: '',
        Type: '',
        Analysis: '',
        Name: '',
        Location: '',
        TraitDateLoc: '',
        Year: ''
      },
      options: {
        Category: '',
        Type: '',
        Analysis: '',
        Name: '',
        Location: '',
        TraitDateLoc: '',
        Year: ''
      }
      }
  },
  created() {
    this.getPhenomicsDropDown()
  },
  methods: {
    // 获取下拉框数据
    async getPhenomicsDropDown() {
      const { data }= await getPhenomicsDropDown()
      // 这块用解构赋值怎么写来着 忘了 回来改
      this.options.Category = data.Category
      this.options.Type = data.Type
      this.options.Analysis = data.Analysis
      this.options.Name = data.Name.slice(1)
      this.options.Location = data.Location
      this.options.TraitDateLoc = data.TraitDateLoc
      this.options.Year = data.Year
    },
    // 传信息
    checkPhenomics() {
      this.$emit('getFilterData', this.filters)
    },
    // 清空数据
    clearPhenomics() {
      this.filters = {
        Category: '',
        Type: '',
        Analysis: '',
        Name: '',
        Location: '',
        TraitDateLoc: '',
        Year: ''
      }
      this.$emit('getFilterData', this.filters)
    },
    handleClose(key, keyPath) {
      this.$refs.menus.open(keyPath);
    },
    closeMenu(val) {
      // this.isCollapse = !val
      // this.handleClose()
    }
  }
}
</script>

<style scoped>
.drawer-container {
  padding-bottom: 70px;
  height: 100%;
}
</style>