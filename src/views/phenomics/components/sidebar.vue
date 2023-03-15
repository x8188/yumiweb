<template>
      <div class="menu-container" style="width:350px;">
      <el-menu  ref="menus" @close="handleClose" :default-openeds="openeds"  :collapse.sync="isCollapse" class="drawer-container" active-text-color="#303133">
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

</template>

<script>
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

<style scoped>

</style>