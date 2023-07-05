<template>
  <div class="menu-container" :class="{ hide }" >
    <div class="header">
      <i v-show="!hide"  class="el-icon-s-fold" style="font-size: 30px;color: #489E38;" @click="changeShow"></i>
      <i v-show="hide"  class="el-icon-s-unfold" style="font-size: 30px;color: #489E38;"  @click="changeShow"></i>
    </div>
      <div class="menu-list">
        <!-- Reference -->
        <div class="menu-item">
          <div  style="width: 90%;">
            <!-- bfc -->
            <span class="title" >Reference</span>
            <el-select clearable filterable index="0" v-model="filters.accession" placeholder="" style="width: 90%;margin-top: 10px;" @change="changeVersion" >
              <el-option
              v-for="(item,i) in options.reference"
              :key="i"
              :label=item
              :value=item
              ></el-option>
            </el-select>
        </div>
        </div>
        <!-- Version -->
        <div class="menu-item">
          <div style="width: 90%;">
            <!-- bfc -->
            <span class="title" >Version</span>
            <el-select clearable filterable index="0" v-model="filters.version" placeholder="" style="width: 90%;margin-top: 10px;">
              <el-option
              v-for="(item,i) in options.version"
              :key="i"
              :label=item
              :value=item
              ></el-option>
            </el-select>
        </div>
        </div>
        <!-- Analysis -->
        <div class="menu-item">
          <div style="width: 90%;">
            <!-- bfc -->
            <span class="title" >Analysis</span>
            <el-select clearable filterable v-model="filters.description" placeholder="" style="width: 90%;margin-top: 10px;">
              <el-option
              v-for="(item,i) in options.analysis"
              :key="i"
              :label=item
              :value=item
              ></el-option>
            </el-select>
        </div>
        </div>
        <div class="menu-item">
          <!-- rangeA -->
          <div style="width: 90%;">
            <span class="title" >Region A</span>
            <div class="item-container range-container">
              <el-select clearable filterable v-model="filters.chrA" placeholder="" style="width: 90%;margin-top: 15px;margin-bottom: 25px;">
              <el-option
              v-for="(item,i) in options.chrA"
              :key="i"
              :label=item
              :value=item
              ></el-option>
            </el-select>
            <div class="range-length" style="display: flex;">
              <el-input v-model="filters.startA" placeholder="start" style="width: 40%"></el-input>
              <span style="margin: 5px 8px">—</span>
              <el-input v-model="filters.endA" placeholder="end" style="width: 40%"></el-input>
            </div>
            </div>
          </div> 
        </div>
         <!-- rangeB -->
        <div class="menu-item">
          <div style="width: 90%;">
            <span class="title" >Region B</span>
            <div class="item-container range-container">
              <el-select clearable filterable v-model="filters.chrB" placeholder="" style="width: 90%;margin-top: 15px;margin-bottom: 25px;">
                <el-option
              v-for="(item,i) in options.chrB"
              :key="i"
              :label=item
              :value=item
              ></el-option>
            </el-select>
            <div class="range-length" style="display: flex;">
              <el-input v-model="filters.startB" placeholder="start" style="width: 40%"></el-input><span style="margin: 5px 8px">—</span>
              <el-input v-model="filters.endB" placeholder="end" style="width: 40%"></el-input>
            </div>
            </div>
        </div>
        </div>
         
      </div>
      <div  class="footer">
        <el-button size="small" @click="clearData" style="margin-right: 15px;">
          <SvgIcon icon-class="CLEAR" color="20AE35" style="margin-right: 7px;margin-left: 0;"></SvgIcon>
          <span style="color: #20AE35">清空</span>
        </el-button>
        <el-button type="primary" size="small" @click="checkData">
          查询
            <SvgIcon icon-class="search" color="fff" style="margin-left: 7px;"></SvgIcon>
        </el-button>
      </div>
  </div>
</template>

<script>
import { dropDownAnalysis, dropDownVersion, dropDownAccession, queryChrA, queryChrB} from '@/api/epigenomics/chromatinInteraction/index'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
created() {
  this.getDownAll()
},
data() {
return {
  hide: false,
  filters: {
    accession: 'B73',
    version: '4.43.0',
    description: '',
    // chrA
    chrA: '',
    startA: '0',
    endA: '9999999999',
    // chrB
    chrB: '',
    startB: '0',
    endB: '9999999999'
  },
  options: {
    reference: [],
    version: [],
    analysis: [],
    // chrA
    chrA: '',
    // chrB
    chrB: '',
  }
}
},
methods: {
  changeShow() {
  this.hide = !this.hide
},
// 获取下拉框数据
async getDownAll() {
    const accession = await dropDownAccession()
    const analysis = await dropDownAnalysis()
    const chrA = await queryChrA()
    const chrB = await queryChrB()

    this.options.reference = accession.data
    this.options.analysis = analysis.data
    this.options.chrA = chrA.data
    this.options.chrB = chrB.data
  },
async changeVersion(newVal) {
  this.filters.accession = newVal
  const version = await dropDownVersion({'accession': this.filters.accession})
  this.options.version = version.data
  this.filters.version = this.options.version[0]
},
// 传信息
checkData() {
  if(this.filters.accession === '') {
    this.filters.accession = 'B73'
  }
  if(this.filters.version === '') {
    this.filters.version = '4.43.0'
  }
  if(this.filters.startA === '') {
    this.filters.startA = 0
  }
  if(this.filters.startB === '') {
    this.filters.startB = 0
  }
  if(this.filters.endA === '') {
    this.filters.endA = 9999999999999
  }
  if(this.filters.endB === '') {
    this.filters.endB = 9999999999999
  }
  this.$emit('getFilterData', this.filters)
},
// 清空数据
clearData() {
this.filters= {
    accession: 'B73',
    version: '4.43.0',
    description: '',
    // chrA
    chrA: '',
    startA: '0',
    endA: '9999999999999999',
    // chrB
    chrB: '',
    startB: '0',
    endB: '9999999999999999'
  }
  this.$emit('getFilterData', this.filters)
}
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