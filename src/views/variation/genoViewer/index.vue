<template>
    <div class="geno-viewer-container">
      <div class="geno-form">
        <el-card>
          <div class="geno-title">
            <span/>
            <div>{{ viewerTitle }}</div>
          </div>
          <div class="tip-info">Browse the genotype of certain germplasms.Simply select a analusis,and the selectyour interested germplasms and genomic regions to get the genotype information</div>
          <div class="form-container">
            <div class="gene-select"></div>
            <div class="germplasm-select"></div>
            <div class="region-select"></div>
          </div>
        </el-card>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        viewerTitle: 'Geno viewer'
      }
    }
}
</script>

<style lang="scss" scoped>
$mainColor: #09A620;
$deepMainColor: #19692C;
.geno-viewer-container {
  position: relative;
  width: 100%;
  background-color: #F5F6F5;
}
.geno-form {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
}
.geno-title {
  display: flex;
  div {
    line-height: 1.5rem;
  }
  span {
    display: inline-block;
    height: 1.5rem;
    width: 5px;
    background-color: $mainColor;
    margin-right: 15px;
  }
}
</style>