<template>
    <div class="zeamap-card-container">
      <el-card :style="{width,height}" class="card-contianer">
        <div class="header" v-if="showHeader">
          <slot name="header"></slot>
        </div>
        <slot/>
        <div class="footer" v-if="showFooter">
            <slot name="footer"></slot>
        </div>
      </el-card>
    </div>
</template>

<script>
export default {
    props: {
      width:{
        type: String,
        default: '90%'
      },
      height: {
        type: String,
        default: ''
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      showFooter: {
        type: Boolean,
        default: false
      }
    }
}
</script>

<style lang="scss" scoped>
.zeamap-card-container {
  background-color: #F5F6F5;
  padding-top: 40px;
  padding-bottom: 60px;  
}
.card-contianer {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.header {
  height: 60px;
}
.footer {
  padding: 30px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>