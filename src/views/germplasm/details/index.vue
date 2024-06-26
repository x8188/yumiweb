<template>
    <div class="content1">
      <el-card class="content_right">
        <div>
          <germplasm />
          <PCA />
          <populationStructure />
        </div>
      </el-card>

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
<style>
  .populationDetailP{
    font-family: 'Times New Roman', Times, serif;
    text-indent:40px;
    line-height: 1.4

  }
</style>
<style scoped>
  .content1{
    background-color: #f5f6f5;
    /* padding-top: 2%; */
    /* width: 100%; */
  }
  /* .content_left{
    float: left;
    overflow: hidden;
    margin-right: 50px;
    margin-bottom: 20px;
    border: 1px solid #e6ebf5;
    padding-right: 50px;
    margin-top: 20px;
    border-radius: 5px;
    padding-bottom: 20px;
  } */
  .content_right{

  width: 90%;
  /* min-width: 900px; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top:30px


  }
</style>
