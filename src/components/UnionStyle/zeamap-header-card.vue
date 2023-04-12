<template>
    <div class="zeamap-header-card-container" :style="{ width , height}">
        <header class="header" v-if="!cancelTitle">
          <i class="el-icon-caret-right" style="line-height: 40px;margin-left: 5px;margin-right:8px"></i>{{ title }}
        </header>
        <div class="zeamap-main-container">
          <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '80%'
      },
      height: {
        type: String,
        default: ''
      },
      cancelTitle: {
        type: Boolean,
        default: false
      }
    }
}
</script>

<style lang="scss" scoped>
.zeamap-header-card-container {
  border: 1px solid #E4E4E4;
  border-top: none; 
  box-shadow: 0 0 1px #999;
  .header {
    height: 40px;
    background-color: #F8F9F8;
  }
}
.zeamap-main-container {
  margin: 30px 15px;
}
</style>