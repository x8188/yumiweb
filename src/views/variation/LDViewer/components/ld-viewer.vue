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
                  <el-select filterable="" v-model="formData.accession" placeholder="" >
                    <el-option
                      v-for="(item,i) in options.accession"
                      :key="i"
                      :label="item"
                      :value="item"
                      ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="version-item select-item">
                <span>Version</span>
                <el-form-item>
                  <el-select filterable v-model="formData.version" placeholder="" @focus="checkVersionIsNull" >
                    <el-option
                      v-for="(item,i) in options.version"
                      :key="i"
                      :label="item"
                      :value="item"
                      ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="population-item select-item">
                <span>Population</span>
                <el-form-item>
                  <el-select filterable v-model="formData.alias" placeholder="">
                    <el-option
                      v-for="(item,i) in options.alias"
                      :key="i"
                      :label="item"
                      :value="item"
                      ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="analysis-item select-item">
                <span>Analysis</span>
                <el-form-item>
                  <el-select filterable v-model="formData.description" placeholder="" @focus="checkAnalysis()">
                    <el-option
                      v-for="(item,i) in options.description"
                      :key="i"
                      :label="item"
                      :value="item"
                      ></el-option>
                </el-select>
                </el-form-item>
              </div>
            </div>
          <div class="region-select">
            <span>Region</span>
            <div class="region-select-form">
              <div class="form-radio">
                <el-radio v-model="region" label="1">Gene flanking</el-radio>
              </div>
              <div class="form-item">
                <div class="chr">
                  <span>chr</span>
                  <el-form-item>
                  <el-select filterable v-model="formData.chorm" placeholder="" @focus="checkChr()">
                    <el-option
                      v-for="(item,i) in options.chorm"
                      :key="i"
                      :label="item"
                      :value="item"
                      ></el-option>
                  </el-select>
                </el-form-item>
                </div>
                <div class="start">
                  <span>start</span>
                  <el-form-item>
                    <el-input v-model="formData.start"></el-input>
                  </el-form-item>
                </div>
                <span class="start-to-end"></span>
                <div class="end">
                  <span>end</span>
                  <el-form-item>
                    <el-input v-model="formData.end"></el-input>
                </el-form-item>
                </div>
              </div>
            </div>
          </div>
        </el-form>
          <div class="submit-buttons">
            <el-button @click="reset" type="primary" style="margin-right: 40px;"><i><SvgIcon icon-class="refresh-left" style="margin-right: 5px;"/></i>Reset </el-button>
            <el-button type="primary" icon="el-icon-check" @click="submitAll">Submit</el-button>
          </div>
        </div>
  </ZeamapCard>
</template>
<script>
import { dropDownReference, dropDownVersion, dropDownPopulation,dropDownAnalysis,dropDownChr} from '@/api/ld-viewer'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
  data() {
    return {
      isFirst: true,
      region: '1',
      viewerTitle: 'Geno viewer',
      formData: {
        accession: "",
        version: "",
        alias: "",
        description: "",
        start: '',
        end: '',
        chorm: '',
      },
      checkBox: [],
      options: {
        accession: [],
        version: [],
        alias: [],
        description: [],
        chorm: []
      }
    }
  },
  watch: {
    'formData.accession'(newValue, oldValue) {
      // 处理 accession 属性变化的逻辑
      this.dropDownVersion({accession: newValue})
    }
  },
  created() {
    this.dropDownReference()
    this.dropDownPopulation()
  },
  methods: {
    // version是否为空
    checkVersionIsNull() {
      if(this.formData.accession==='') {
        this.$message.error('请先选择Reference')
      }
    },
    // 获取下拉框信息
    async dropDownReference() {
      const { data }= await dropDownReference()
      this.options.accession = data
    },
    async dropDownVersion(params) {
      const { data }= await dropDownVersion(params)
      this.options.version = data
    },
    async dropDownPopulation() {
      const { data }= await dropDownPopulation()
      this.options.alias = data
    },
    async dropDownAnalysis() {
      const { data }= await dropDownAnalysis(this.formData)
      this.options.description = data
    },
    async dropDownChr() {
      const { data }= await dropDownChr(this.formData)
      this.options.chorm = data
      console.log(data);
    },
    checkAnalysis() {
      const { accession, version, alias } = this.formData;
      if(accession !== '' && version !== '' && alias !== '') {
        this.dropDownAnalysis()
      } else {
        this.$message.error('请先选择前边三项')
      }
    },
    checkChr() {
      const { accession, version, alias,description } = this.formData;
      if(accession !== '' && version !== '' && alias !== '' && description!=="") {
        this.dropDownChr()
      } else {
        this.$message.error('请先选择前边四项')
      }
    },
    async submitAll() {
      this.$emit('showResultData', this.formData)
    },
    // 重置所有条件
    reset() {
      this.formData.accession = ''
      this.formData.version = ''
      this.formData.alias = ''
      this.formData.description = ''
      this.formData.start = ''
      this.formData.end = ''
      this.formData.chorm = ''
      this.$emit('showResultData', this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #09A620;
$deepMainColor: #19692C;
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
.submit-buttons {
  display: flex;
  justify-content: center;
}
</style>