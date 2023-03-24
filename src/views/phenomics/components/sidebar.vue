<template>
  <div class="container">
      <div class="menu-container" v-if="isCollapse">
          <div class="title-collpase" @click="isCollapse = !isCollapse" >
            <i  class="el-icon-s-unfold icon" style="font-size: 30px;color: #489E38;"></i>
          </div>
            <div class="main" v-show="isCollapse">
              <div  class="menu-item" v-for="(name,i) in filterNames" :key="i">
                <div class="title">
                  <SvgIcon :icon-class="filterIcons[i]" color="212121" style="margin-right: 10px;"></SvgIcon>
                  <span>{{ name }}</span>
                </div>
                <div class="select">
                  <el-select v-model="filters[name]" placeholder="" style="margin-left: 40px;width: 180px;margin-right: 40px;">
                    <el-option
                    v-for="(item,i) in options[name]"
                    :key="i"
                    :label="item"
                    :value="item"
                    ></el-option>
                  </el-select>
                </div>
              </div>
        
              <!-- 底部 -->
              <template>
                <div class="footer">
                  <el-button type="primary" size="small" style="margin-right: 8px;">查询</el-button>
                  <el-button size="small" >清空</el-button>
                </div>
              </template>
            </div>
      </div>

      <div class="hide-container" v-else>
        <div class="title-collpase" @click="isCollapse = !isCollapse" style="margin-bottom: 15px;" >
          <i  class="el-icon-s-unfold icon" style="font-size: 30px;color: #489E38;"></i>
        </div>
        <div  v-for="(name,i) in filterNames" :key="i">
          <div class="hide-icon" @click="isCollapse = true">
            <SvgIcon :icon-class="filterIcons[i]" ></SvgIcon>
          </div>
        </div>
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
        // 侧边栏伸缩
        isCollapse: true,
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
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
  border-right: 1px solid #DFE6EC;
  height: 670px;
  padding: 10px 20px;
  width: 270px;
}
.hide-container {
  width: 50px;
  border-right: 1px solid #DFE6EC;
  height: 670px;
  padding: 0 10px;
}
.title-collpase {
  height: 50px;
  .icon {
    float: right;
    line-height: 50px;
  }
}
.hide-icon {
  margin-bottom: 30px;
  margin-left: 5px;
}
.menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    margin-left: 13px;
    margin-bottom: 10px;
  }
  .select {
    margin-bottom: 15px;
  }
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.trans-enter-active,
.trans-leave-active {
  transition: all .5s;
}

.trans-enter, .trans-leave-to
 {
  transform: translateX(100px);
  opacity: 0;
}
</style>