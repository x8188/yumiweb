<template>
  <div  class="left_bottom">
    <div style="margin: 10px"></div>
    <div>
    <el-button plain type="info" @click="search('all')" class="single">{{ $i18n.t('All')}}</el-button>
    <el-button plain type="info" @click="search('Yield')" class="single">{{ $i18n.t('Yield')}}</el-button>
    <el-button plain type="info" @click="search('Morphological')" class="single">{{ $i18n.t('Morphological')}}</el-button>
    <el-button plain type="info" @click="search('Agronomical')" class="single">{{ $i18n.t('Agronomical')}}</el-button>
    <el-button plain type="info" @click="search('Biotic stress')" class="single">{{ $i18n.t('Biotic stress')}}</el-button>
    <el-button plain type="info" @click="search('Abiotic stress')" class="single">{{ $i18n.t('Abiotic stress')}}</el-button>

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
          this.$router.push('/PhenotypeDatabase/searchLeftBottom/components/butall');  
          break;
        case 'Morphological':
          this.$router.push('/PhenotypeDatabase/searchLeftBottom/components/butmor');  
          break;
        case 'Agronomical':
          this.$router.push('/PhenotypeDatabase/searchLeftBottom/components/agronomical');  
          break;
        case 'Biotic stress':
          this.$router.push('/PhenotypeDatabase/searchLeftBottom/components/bioticStress');  
          break;
        case 'Abiotic stress':
          this.$router.push('/PhenotypeDatabase/searchLeftBottom/components/abioticStress');  
          break;
        case 'Yield':
          this.$router.push('/PhenotypeDatabase/searchLeftBottom/components/yield');  
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
  margin: 0 auto;
  width: 80%;
  height: 50px;
  margin: 20px;
  background: #f1f8f8;
  /* color: rgb(120, 119, 119);
  background-color: darkgray; */
}
.all:hover{
  background: rgb(9, 107, 117);
}
.single{
  width: 40%;
  margin: 20px;
  background: #f1f8f8;
  /* color: rgb(120, 119, 119);*/
  /* background-color: rgb(25, 212, 93); */
}
.single:hover{
  background: rgb(9, 107, 117);
}
</style>
