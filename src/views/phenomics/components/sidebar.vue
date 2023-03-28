<template>
    <div class="menu-container" :class="{ hide }" >
      <div class="header">
        <i v-show="!hide"  class="el-icon-s-fold" style="font-size: 30px;color: #489E38;" @click="changeShow"></i>
        <i v-show="hide"  class="el-icon-s-unfold" style="font-size: 30px;color: #489E38;"  @click="changeShow"></i>
      </div>
        <div class="menu-list">
          <div v-for="(name,index) in filterNames" class="menu-item">
            <div :index="String(index)"  style="width: 90%;">
              <!-- bfc -->
              <div class="title" style="margin-bottom: 10px;">{{ name }}</div>
              <el-select index="0" v-model="filters[name]" placeholder="" style="width: 90%;">
                <el-option
                v-for="(item,i) in options[name]"
                :key="i"
                :label="item"
                :value="item"
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
          <el-button type="primary" size="small" @click="checkPhenomics">
            查询
              <SvgIcon icon-class="search" color="fff" style="margin-left: 7px;"></SvgIcon>
          </el-button>
        </div>
    </div>
</template>

<script>
import { getPhenomicsDropDown } from '@/api/phenomics/phenomics'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
data() {
return {
    hide: false,
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
changeShow() {
  this.hide = !this.hide
},
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
}
}
</script>

<style lang="scss" scoped>
.menu-container {
  width: 20%;
  max-width:300px;
  height: 700px;
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
</style>