<template>
  <div  class="left_bottom">
    <div style="margin: 40px"></div>
    <div>
    <el-button plain @click="search('all')" class="all">All</el-button>
    <el-button plain @click="search('Morphological')" class="single">Morphological</el-button>
    <el-button plain @click="search('Agronomical')" class="single">Agronomical</el-button>
    <el-button plain @click="search('Biotic stress')" class="single">Biotic stress</el-button>
    <el-button plain @click="search('Abiotic stress')" class="single">Abiotic stress</el-button>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    search(category) {
      // 根据点击的按钮跳转到不同的页面
      switch (category) {
        case 'all':
          this.$router.push('/jointCreation/components/butall'); // 替换为实际的目标页面路径
          break;
        case 'Morphological':
          this.$router.push('/jointCreation/components/butmor'); // 替换为实际的目标页面路径
          break;
        case 'Agronomical':
          this.$router.push('/agronomical'); // 替换为实际的目标页面路径
          break;
        case 'Biotic stress':
          this.$router.push('/biotic-stress'); // 替换为实际的目标页面路径
          break;
        case 'Abiotic stress':
          this.$router.push('/abiotic-stress'); // 替换为实际的目标页面路径
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
/* .left_bottom{
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  margin: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
} */
.all{
  width: 80%;
  height: 50px;
  margin: 20px;
}
.single{
  width: 40%;
  margin: 20px;
}
</style>
