<template>
    <div class="menu-container" :class="{ hide }" >
      <div class="header">
        <i v-show="!hide"  class="el-icon-s-fold" style="font-size: 30px;color: #489E38;" @click="changeShow"></i>
        <i v-show="hide"  class="el-icon-s-unfold" style="font-size: 30px;color: #489E38;"  @click="changeShow"></i>
      </div>
        <div class="menu-list">
          <div class="menu-item">
            <div style="width: 90%;">
              <el-input
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
            <el-select v-model="filters.omics" placeholder="" style="width: 90%;margin-top: 10px;">
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
            <el-select index="0" v-model="filters.name" placeholder="" style="width: 90%;margin-top: 10px;">
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
          <el-button type="primary" size="small" @click="checkPhenomics">
            查询
              <SvgIcon icon-class="search" color="fff" style="margin-left: 7px;"></SvgIcon>
          </el-button>
        </div>
    </div>
</template>

<script>
import { dropDownOmics,dropDownAnalysisId } from '@/api/analysis/index'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
data() {
return {
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
  const omics = await dropDownOmics()
  this.options.omics = omics.data
  const ids = await dropDownAnalysisId()
  this.options.ids = ids.data
},
// 传信息
checkPhenomics() {
  this.$emit('getFilterData', this.filters)
},
// 清空数据
clearPhenomics() {
  this.filters = {
    omics: '',
    name: '',
    description: ''
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
</style>