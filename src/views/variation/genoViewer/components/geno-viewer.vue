<template>
    <ZeamapCard >
      <template v-slot:header> 
          <Title>Geno viewer</Title> 
      </template>
      <template>
        <p class="tip-info" style="line-height: 26px;font-family: 'Times New Roman', Times, serif;">Browse the genotype of certain germplasms.Simply select a analysis,and the select your interested germplasms and genomic regions to get the genotype information.</p>
        <div class="form-container">
          <el-form>
            <div style="display:flex">
              <div class="gene-select" style="flex:1;display:flex;flex-direction: column; " >
              <div class="reference-item select-item">
                <span class="filTitle">Reference</span>
                <el-form-item>
                  <el-select @change="changeReference" clearable filterable="" v-model="formData.accession" placeholder="" >
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
                <span class="filTitle">Version</span>
                <el-form-item>
                  <el-select @change="changeVersion" clearable filterable v-model="formData.version" placeholder="" @focus="dropDownVersion" >
                    <div class="version-options-container" v-if="options.version.length > 0" >
                      <el-option
                        v-for="(item,i) in options.version"
                        :key="i"
                        :label="item"
                        :value="item"
                        ></el-option>
                    </div>
                  </el-select>
                </el-form-item>
              </div>
              <div class="population-item select-item">
                <span class="filTitle">Population</span>
                <el-form-item>
                  <el-select @change="changePopulation" clearable filterable v-model="formData.alias" placeholder="">
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
                <span class="filTitle">Analysis</span>
                <el-form-item>
                  <el-select clearable filterable v-model="formData.description" placeholder="" @focus="checkAnalysis()">
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
              <div class="germplasm-select-container" style="flex:4 " >
                <div class="germplasm-select-items">
                  <span style="margin-bottom:10px;display: block;" class="filTitle">Germplasm</span>

                  <div class="germplasm-select-item" v-for="name in germplasmName">
                    <div  class="germplasm-checkbox-group">
                      <el-collapse>
                        <el-collapse-item>
                          <template slot="title">
                            <el-checkbox 
                            :indeterminate="isIndeterminate[name]"
                            @change="(val) => handleCheckAllGermplasm(name,val)" 
                            v-model="checkAll[name]" 
                            style="margin-left: 12px;">
                            <span style="display: flex;">
                              {{ name }}&nbsp;&nbsp;({{checkGermplasms[name].length }}/
                              <template v-if="germplasmLoading[name]">
                                <div style="display: flex;">
                                  <div class="skelection" ></div>
                                  <span>)</span>
                                </div>
                              </template>
                              <span v-else>{{germplasmItems[name].length}})&nbsp;&nbsp;</span>
                            </span>
                            </el-checkbox>
                          </template>
                          <div class="germplasm-collapse-items">
                            <div class="germplasm-collapse-item" v-for="item in germplasmItems[name]">
                              <el-checkbox-group v-model="checkGermplasms[name]" @change="(val) => handleCheckedGermplasmChange(name,val)">
                                <el-checkbox :label="item">{{ item }}</el-checkbox>
                              </el-checkbox-group>
                            </div>
                          </div>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div class="region-select">
            <span class="filTitle">Region</span>
            <div class="region-select-form">
              <div class="form-radio">
                <el-radio v-model="region" label="1">Gene flanking</el-radio>
              </div>
              <div class="form-item">
                <div class="chr">
                  <span class="filTitle">chr</span>
                  <el-form-item>
                  <el-select clearable  @focus="checkChr()" filterable v-model="formData.chorm" placeholder="">
                      <el-option
                      v-if="chrLoading && this.options.chorm.length === 0"
                      :value="null"
                      disabled
                      ><span>正在加载中...</span></el-option>
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
                  <span class="filTitle">start</span>
                  <el-form-item>
                    <el-input v-model="formData.start"></el-input>
                  </el-form-item>
                </div>
                <span class="start-to-end"></span>
                <div class="end">
                  <span class="filTitle">end</span>
                  <el-form-item>
                    <el-input v-model="formData.end"></el-input>
                </el-form-item>
                </div>
              </div>
            </div>
          </div>
        </el-form>
        <div class="submit-buttons">
          <el-button type="primary" style="margin-right: 40px;" @click="reset()">
            <i><SvgIcon icon-class="refresh-left" style="margin-right: 5px;"/></i>Reset 
          </el-button>
          <el-button type="primary" icon="el-icon-check" @click="submitForm()">Submit</el-button>
        </div>
      </div>
    </template>
      
  </ZeamapCard>
</template>
<script>
import { dropDownReference, dropDownVersion, dropDownPopulation,dropDownAnalysis,dropDownChr, germplasmSelectTST,germplasmSelectMixed, germplasmSelectNSS,germplasmSelectSS} from '@/api/geno-viewer'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
export default {
components: { SvgIcon },
  data() {
    return {
      germplasmLoading: {
        TST: true,
        Mixed: true,
        NSS: true,
        SS: true
      },
      chrLoading: true,
      region: '1',
      formData: {
        accession: 'B73',
        version: '4.43.0',
        alias: 'AMP',
        description: 'WGS SNPs/INDELs/SVs in AMP',
        start: '',
        end: '',
        chorm: '',
      },
      options: {
        accession: [],
        version: [],
        alias: [],
        description: [],
        chorm: []
      },
      // 名字
      germplasmName: ['TST','Mixed','NSS','SS'],
      // 全选
      checkAll: {
        TST: false,
        Mixed: false,
        NSS: false,
        SS: false
      },
      // 细分条下的每一项
      germplasmItems: {
        TST: [],
        Mixed: [],
        NSS: [],
        SS: []
      },
      // 选择的小细分
      checkGermplasms: {
        TST: [],
        Mixed: [],
        NSS: [],
        SS: []
      },
      // 待选
      isIndeterminate: {
        TST: true,
        Mixed: true,
        NSS: true,
        SS: true
      }
    }
  },
  created() {
    this.dropDownReference()
    this.dropDownPopulation()
    this.initGermplasm()
  },
  watch: {
    'formData.accession'(newValue, oldValue) {
      // 处理 accession 属性变化的逻辑
      this.dropDownVersion({accession: newValue})
    }
  },
  methods:{
    // 获取下拉框信息
    async dropDownReference() {
      const { data }= await dropDownReference()
      this.options.accession = data
    },
    async dropDownVersion() {
      if(this.formData.accession==='') {
        this.$message.error('请先选择Reference')
        return
      }
      const { data } = await dropDownVersion({accession: this.formData.accession})
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
    },
    async checkChr() {
      this.chrLoading = true
      const { accession, version, alias, description} = this.formData;
      if(accession !== '' && version !== '' && alias !== '' && description !== ''
      ) {
        await this.dropDownChr()
        this.chrLoading = false
      } else {
        this.$message.error('请先选择前边三项')
      }
    },
    // select改变事件
    async changeReference(newVal) {
      this.formData.accession = newVal
      await this.dropDownVersion()
      this.formData.version = this.options.version[0]

      await this.dropDownAnalysis()
      this.formData.description =  this.options.description.includes("WGS SNPs/INDELs/SVs in AMP")  ? "WGS SNPs/INDELs/SVs in AMP" : this.options.description[0]
    },
    async changeVersion(newVal) {
      this.formData.version = newVal
      await this.dropDownAnalysis()
      this.formData.description =  this.options.description.includes("WGS SNPs/INDELs/SVs in AMP")  ? "WGS SNPs/INDELs/SVs in AMP" : this.options.description[0]
    },
    async changePopulation(newVal) {
      this.formData.alias = newVal
      await this.dropDownAnalysis()
      this.formData.description =  this.options.description.includes("WGS SNPs/INDELs/SVs in AMP")  ? "WGS SNPs/INDELs/SVs in AMP" : this.options.description[0]
    },
    // germplasm那一堆
    async germplasmTST() {
      const { data } = await germplasmSelectTST()
      this.germplasmItems.TST = data
      this.germplasmLoading.TST = false
    },
    async germplasmMixed() {
      const { data } = await germplasmSelectMixed()
      this.germplasmItems.Mixed = data
      this.germplasmLoading.Mixed = false
    },
    async germplasmNSS() {
      const { data } = await germplasmSelectNSS()
      this.germplasmItems.NSS = data
      this.germplasmLoading.NSS = false 
    },
    async germplasmSS() {
      const { data } = await germplasmSelectSS()
      this.germplasmItems.SS = data
      this.germplasmLoading.SS = false
    },
    initGermplasm() {
      this.germplasmTST()
      this.germplasmMixed()
      this.germplasmNSS()
      this.germplasmSS()
    },
    // 全选
    handleCheckAllGermplasm(name,val) {
      this.checkGermplasms[name] = val ? this.germplasmItems[name] : []
      this.isIndeterminate[name] = false
    },
    handleCheckedGermplasmChange(name,val) {
      let checkedCount = val.length
      this.checkAll[name] = checkedCount === this.germplasmItems[name].length
      this.isIndeterminate[name] = checkedCount > 0 && checkedCount < this.germplasmItems[name].length
    },
    checkAnalysis() {
      const { accession, version, alias } = this.formData;
      if(accession !== '' && version !== '' && alias !== '') {
        this.dropDownAnalysis()
      } else {
        this.$message.error('请先选择前边三项')
      }
    },
    // 检查表单
    checkSubmitForm(queryForm) {
      console.log(this.formData)
      const { accession, version, alias, description, germplasm, chorm, start, end} = queryForm
      // 应该用责任链封装的，但是赶工，以后谁重写的时候再优化吧
      if(accession == "") return '请先选择reference'
      if(version == "" || version === undefined) return "请先选择version"
      if(alias == "") return "请先选择population"
      if(description === "" || description === undefined) return "请先选择analysis"
      if(germplasm.length == 0) return  "请先选择germplasm"
      if(chorm == "" || chorm === undefined) return "请先选择chr"
      if(start === "" || isNaN(start)) {
        if(start === "") {
          return "请先选择start"
        } else {
          return "start必须为一个数字范围，请改正"
        }
      } 
      if(end === "" || isNaN(end)) {
        if(end === "") {
          return "请先选择end"
        } else {
          return "end必须为一个数字范围，请改正"
        }
      } 
      return true
    },
    // 提交表单
    submitForm() {
    let queryForm = {}
    queryForm.germplasm = []
    for(let item of Object.values(this.checkGermplasms)) {
      console.log(item)
      queryForm.germplasm.push(...item)
    }
    queryForm = {...queryForm,...this.formData}
    if(this.checkSubmitForm(queryForm) !== true) {
      this.$message.error(this.checkSubmitForm(queryForm))
    } else {
      this.$emit('showResult', queryForm)
    }
    },
    reset() {
      this.region= '1',
      this.formData.accession= 'B73',
      this.formData.version= '4.43.0',
      this.formData.alias= 'AMP',
      this.formData.description= 'WGS SNPs/INDELs/SVs in AMP',
      this.formData.start= '',
      this.formData.end= '',
      this.formData.chr= '',
      this.checkGermplasms.TST = [],
      this.checkGermplasms.Mixed = [],
      this.checkGermplasms.NSS = [],
      this.checkGermplasms.SS = [],
      this.isIndeterminate.TST = true,
      this.isIndeterminate.Mixed = true,
      this.isIndeterminate.NSS = true,
      this.isIndeterminate.SS = true,
      this.checkAll.TST = false,
      this.checkAll.Mixed = false,
      this.checkAll.NSS = false,
      this.checkAll.SS = false
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
box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.gene-select {
display: flex;
justify-content: space-between;
padding-bottom: 20px;
margin-bottom: 20px;
border-bottom: 1px solid #E6ECEC;
border-right: 1px solid #E6ECEC;
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
.germplasm-select-container {
display: flex;
padding-bottom: 20px;
margin-bottom: 20px;
padding-left: 20px;
border-bottom: 1px solid #E6ECEC;
span {
  margin-right: 20px;
}
.germplasm-select-items {
  width: 90%;
  .germplasm-checkbox-group {
    padding-left: 10px;
  }

  .germplasm-collapse-items {
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;

    .germplasm-collapse-item {
      width: 20%;
    }
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

.skelection {
  display: inline-block;
  width: 30px;
  height: 12px;
  background-color: #efefef;
  margin-top: 3px;
  overflow: hidden;
}

.skelection::after {
			content: '';
			display: block;
			width: 30px;
			height: 12px;
      margin-top: 3px;
			transform: translateX(-100%);
			background: linear-gradient(90deg, transparent, rgba(225, 225, 225, 0.753), transparent);
			animation: loading 1.2s infinite;
		}
		
@keyframes loading{
  100% {
    transform: translateX(100%);
  }
}
.filTitle{
  color: #025757;
  font-weight: bolder;
  font-family: 'Times New Roman', Times, serif;
}
</style>