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
            <span class="title" >{{ name }}</span>
            <el-select index="0" v-model="filters[name]" placeholder="" style="width: 90%;margin-top: 10px;">
              <el-option
              v-for="(item,i) in options[name]"
              :key="i"
              :label="item"
              :value="item"
              ></el-option>
            </el-select>
        </div>
        </div>
        <div class="menu-item">
          <!-- rangeB -->
          <div style="width: 90%;">
            <span class="title" >Region A</span>
            <div class="item-container range-container">
              <el-select index="0" v-model="filters[name]" placeholder="" style="width: 90%;margin-top: 15px;margin-bottom: 25px;">
              <el-option
              v-for="i in 1"
              :key="i"
              label=""
              value=""
              ></el-option>
            </el-select>
            <div class="range-length" style="display: flex;">
              <el-input v-model="filters.Region.start" placeholder="start" style="width: 40%"></el-input>
              <span style="margin: 5px 8px">—</span>
              <el-input v-model="filters.Region.end" placeholder="end" style="width: 40%"></el-input>
            </div>
            </div>
          </div> 
        </div>
         <!-- rangeB -->
        <div class="menu-item">
          <div style="width: 90%;">
            <span class="title" >Region B</span>
            <div class="item-container range-container">
              <el-select index="0" v-model="filters[name]" placeholder="" style="width: 90%;margin-top: 15px;margin-bottom: 25px;">
              <el-option
              v-for="i in 1"
              :key="i"
              label=""
              value=""
              ></el-option>
            </el-select>
            <div class="range-length" style="display: flex;">
              <el-input v-model="filters.Region.start" placeholder="start" style="width: 40%"></el-input><span style="margin: 5px 8px">—</span>
              <el-input v-model="filters.Region.end" placeholder="end" style="width: 40%"></el-input>
            </div>
            </div>
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
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
data() {
return {
  hide: false,
  filterNames: ['Reference','Version','Analysis'],
filters: {
  Reference: '',
  Version: '',
  Analysis: '',
  Region: {
    chr: '',
    start: '',
    end: ''
  }
},
options: {
  Reference: '',
  Version: '',
  Analysis: '',
}
}
},
created() {

},
methods: {
changeShow() {
this.hide = !this.hide
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