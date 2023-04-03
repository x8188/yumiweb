<template>
    <div class="content">
      <div class="content_left">
        <catalog />
      </div>
      <div class="content_right">
        <germplasm />
        <PCA />
        <populationStructure />
      </div>
    </div>
</template>

<script>
import catalog from "@/views/germplasm/details/components/catalog";
import germplasm from "@/views/germplasm/details/components/germplasm";
import PCA from "@/views/germplasm/details/components/PCA";
import populationStructure from "@/views/germplasm/details/components/PopulationStructure";

export default {
  components: {
    catalog,
    germplasm,
    PCA,
    populationStructure
  }
}
</script>

<style scoped>
  .content{
    padding: 0 30px;
    background-color: #f2f2f2;
    width: 100%;
    height: auto;
  }
  .content_left{
    float: left;
    overflow: hidden;
    margin-right: 50px;
    margin-bottom: 20px;
    border: 1px solid #e6ebf5;
    padding-right: 50px;
    margin-top: 20px;
    border-radius: 5px;
    padding-bottom: 20px;
  }
  .content_right{
    width: 70%;
    float: left;
    overflow: hidden;
    margin-bottom: 20px;
    margin-top: 20px;
  }
</style>
