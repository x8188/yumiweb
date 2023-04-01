<template>
  <ZeamapCard>
      <template v-slot:header>
        <Title>LD viewer</Title>
      </template>
        <p style="line-height: 26px;">Select the specified genomic regions to visualize the LD(Linkage Disequilibrium) R² between twp genetic variations.</p>
        <div class="form-container">
          <el-form>
            <div class="gene-select">
              <div class="reference-item select-item">
                <span>Reference</span>
                <el-form-item>
                  <el-select v-model="reference" placeholder="">
                    <el-option label="reference" value="reference"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="version-item select-item">
                <span>Version</span>
                <el-form-item>
                  <el-select v-model="version" placeholder="">
                    <el-option label="version" value="version"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="population-item select-item">
                <span>Population</span>
                <el-form-item>
                  <el-select v-model="population" placeholder="">
                    <el-option label="population" value="population"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="analysis-item select-item">
                <span>Analysis</span>
                <el-form-item>
                  <el-select v-model="analysis" placeholder="">
                    <el-option label="analysis" value="analysis"></el-option>
                </el-select>
                </el-form-item>
              </div>
            </div>
          <div class="region-select">
            <span>Region</span>
            <div class="region-select-form">
              <div class="form-radio">
                <el-radio v-model="region" label="2">Genomic range</el-radio>
                <el-radio v-model="region" label="1">Gene flanking</el-radio>
                <el-radio v-model="region" label="3">QTLs</el-radio>
              </div>
              <div class="form-item">
                <div class="chr">
                  <span>chr</span>
                  <el-form-item>
                  <el-select v-model="chr" placeholder="">
                    <el-option label="chr" value="chr"></el-option>
                  </el-select>
                </el-form-item>
                </div>
                <div class="start">
                  <span>start</span>
                  <el-form-item>
                    <el-input v-model="start"></el-input>
                  </el-form-item>
                </div>
                <span class="start-to-end"></span>
                <div class="end">
                  <span>end</span>
                  <el-form-item>
                    <el-input v-model="end"></el-input>
                </el-form-item>
                </div>
              </div>
            </div>
          </div>
        </el-form>
          <div class="submit-buttons">
            <el-button type="primary" style="margin-right: 40px;"><i><SvgIcon icon-class="refresh-left" style="margin-right: 5px;"/></i>Reset </el-button>
            <el-button type="primary" icon="el-icon-check">Submit</el-button>
          </div>
        </div>
  </ZeamapCard>
</template>
<script>
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
  data() {
    return {
      region: '1',
      viewerTitle: 'Geno viewer',
      reference: '',
      version: '',
      population: '',
      analysis: '',
      checkBox: [],
      start: '',
      end: '',
      chr: ''
    }
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #09A620;
$deepMainColor: #19692C;
.LD-viewer-container {
background-color: #F5F6F5;
}
.LD-form {
position: relative;
left: 50%;
transform: translateX(-50%);
width: 90%;
min-width: 900px;
}
.form-container {
margin: 20px 0;
background: #F1F8F8;
padding: 20px;
}
.gene-select {
display: flex;
justify-content: space-between;
padding-bottom: 20px;
margin-bottom: 20px;
border-bottom: 1px solid #E6ECEC;
.select-item {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 20px;
  span {
    margin-bottom: 10px;
    padding-left: 5px; 
  }
}
}
.region-select {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #E6ECEC;
  span {
    margin-right: 20px;
  }
  .region-select-form {
    width: 90%;
    .form-item {
      display: flex;
      margin: 15px 0;
      padding: 30px 20px;
      background-color: #fff;
      span {
        line-height: 30px;
      }
      div {
        margin-right: 20px;
        display: flex;
        line-height: 30px;
      }
    }
    .start-to-end {
      position: relative;
      top: 16px;
      width: 15px;
      height: 2px;
      background-color: #ccc;
    }
  }
}
::v-deep .el-select .el-input.is-focus .el-input__inner
 {
  border-color: $mainColor; 
}

::v-deep .el-select-dropdown__item.selected,.el-select-dropdown__item.selected {
  font-weight: normal;
}
.submit-buttons {
  display: flex;
  justify-content: center;
}
</style>