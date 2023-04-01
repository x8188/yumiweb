<template>
  <div class="multi-expression-viewer-container">
    <div class="expression-data">
      <el-card>
        <Title>MultiExpressionViewer</Title>
        <p>Search for expression pattern od given genes in different selections.
          <a href="#" style="color: #36B245;margin-left: 15px;">RUN DEMO >> </a>
        </p>
        <div class="selection-form-data" style="margin-top: 40px;">
            <el-row>
              <div style="display: flex;justify-content: space-between;width: 100%;">
                <div>
                  <span style="margin-right: 23px;">Reference</span>
                  <el-select v-model="reference" placeholder="" ></el-select>
                </div>
                <div>
                  <span style="margin-right: 23px;">Version</span>
                  <el-select v-model="version" placeholder=""></el-select>
                </div>
              </div>
            </el-row>
            <el-row>
              <div style="margin-top: 50px;display: flex;">
                  <span style="margin-right: 23px;">Gene IDs</span>
                  <el-input
                    type="textarea"
                    :rows="8"
                    placeholder="请输入内容"
                    v-model="geneIds"
                    style="width: 80%;">
                  </el-input>
              </div>
            </el-row>
            <el-row>
              <p>Compare among different</p>
              <div class="radios" style="margin-bottom: 30px;">
                <el-radio v-model="radio" label="tissue">Tissue</el-radio>
                <el-radio v-model="radio" label="germplasm">Germplasm</el-radio>
                <el-radio v-model="radio" label="environment">Environment</el-radio>
              </div>
            </el-row>
            <el-card>
              <div style="display: flex;justify-content: space-between;">
                <div class="filters-container">
                  <p>Filters</p>
                  <div class="filter-tissue" >

                    <template v-if="radio === 'tissue'">
                      <div class="fliter-tissue">
                        <div class="tissue-item">
                          <span>Analysis</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="analysis"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Environment</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="environment"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Germplasm</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="germplasm"></el-select>
                        </div>
                      </div>
                    </template>

                    <template v-else-if="radio === 'germplasm'">
                      <div class="fliter-tissue">
                        <div class="tissue-item">
                          <span>Analysis</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="analysis"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Environment</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="environment"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Tissue</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="tissue"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Population</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="population"></el-select>
                        </div>
                      </div>
                    </template>

                    <template v-else>
                        <div class="tissue-item">
                          <span>Analysis</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="analysis"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Population</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="population"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Subgroup</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="subGroup"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Germplasm</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="germplasm"></el-select>
                        </div>
                        <div class="tissue-item">
                          <span>Tissue</span>
                          <el-select style="width: 70%;margin-right: 20px;" placeholder="" v-model="tissue"></el-select>
                        </div>
                    </template>
                    </div>
                </div>
                <div class="selector-container">
                  <p>Selector(it is recommend to select less then 30 items for better visualization.)</p>
                  <div class="selector-tissue">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Flower</el-checkbox>
                      <div style="margin: 15px 0;"></div>
                      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                      </el-checkbox-group>
                  </div>
                </div>
              </div>

            <div class="submit-buttons">
              <el-button type="primary" style="margin-right: 40px;"><i><SvgIcon icon-class="refresh-left" style="margin-right: 5px;"/></i>Reset </el-button>
              <el-button type="primary" icon="el-icon-check" @click="submitForm()">Submit</el-button>
            </div>

            </el-card>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
const cityOptions= ['05W002', '05WN230', '647', '8902'];
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
import Title from '@/components/CommonComponents/Title.vue'
export default {
components: { Title, SvgIcon },
data() {
  return {
    checkAll: false,
    checkedCities: ['上海', '北京'],
    cities: cityOptions,
    isIndeterminate: true,
    radio: 'tissue',
    reference: 'reference',
    version: 'version',
    geneIds: '',
    analysis: '',
    environment: '',
    tissue: '',
    population: '',
    subGroup: '',
    germplasm: '',
  }
},
methods: {
  submitForm() {
    this.$emit('showResult', 1211)
  },
  handleCheckAllChange(val) {
    this.checkedCities = val ? cityOptions : [];
    this.isIndeterminate = false;
  },
  handleCheckedCitiesChange(value) {
    let checkedCount = value.length;
    this.checkAll = checkedCount === this.cities.length;
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
  }
  }
}
</script>

<style lang="scss" scoped>
.multi-expression-viewer-container {
background-color: #F5F6F5;
}
.expression-data {
position: relative;
left: 50%;
transform: translateX(-50%);
width: 90%;
min-width: 900px;
padding-top: 30px;
}
.filters-container {
width: 40%;
margin-right: 20px;
.filter-tissue {
  padding: 25px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
}

.selector-container {
width: 60%;
.selector-tissue {
padding: 25px 15px;
border: 1px solid #ccc;
border-radius: 5px;
}
}
.tissue-item {
display: flex;
justify-content: space-between;
margin-bottom: 30px;
span {
  line-height: 36px;
}
}
.submit-buttons {
margin: 50px 0;
display: flex;
justify-content: center;
}
</style>