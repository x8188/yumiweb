<template>
    <div class="zeamap-double-card-container">
      <div class="double-card">
        <div class="left-card" :style="{ width: leftWidth }">
          <el-card>
            <slot name="left-card"></slot>
          </el-card>
        </div>
        <div class="right-card" :style="{ width: rightWidth }">
          <el-card>
            <slot name="right-card"></slot>
          </el-card>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      leftWidth: {
        type: String,
        default: '280px'
      },
      rightWidth: {
        type: String,
        default: '80%'
      }
    }
}
</script>

<style lang="scss" scoped>
.zeamap-double-card-container {
  background-color: #F5F6F5;
  padding-top: 40px;
  padding-bottom: 60px;  
  display: flex;
  justify-content: center;
  .double-card {
    width: 90%;
    display: flex;
    justify-content: center;
  }
}
.left-card {
  margin-right: 30px;
}
</style>