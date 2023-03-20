<template>
  <div class="geno-viewer-container">
    <div class="geno-form">
      <el-card>
        <Title>
          {{ viewerTitle }}
        </Title>
        <div class="tip-info" style="line-height: 26px;">Browse the genotype of certain germplasms.Simply select a analysis,and the select your interested germplasms and genomic regions to get the genotype information.</div>
        <div class="form-container">
          <el-form>
            <div class="gene-select">
              <div class="reference-item select-item">
                <span>Reference</span>
                <el-form-item>
                  <el-select v-model="formData.reference" placeholder="" @focus="focusSelect('reference')">
                    <el-option
                      v-for="(item,i) in options.reference"
                      :key="i"
                      :label="item"
                      value="1"
                      ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="version-item select-item">
                <span>Version</span>
                <el-form-item>
                  <el-select v-model="formData.version" placeholder=""  @focus="focusSelect('version')">
                    <el-option
                      v-for="(item,i) in options.version"
                      :key="i"
                      :label="item"
                      value="1"
                      ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="population-item select-item">
                <span>Population</span>
                <el-form-item>
                  <el-select v-model="formData.population" placeholder="">
                    <el-option label="population" value="population"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="analysis-item select-item">
                <span>Analysis</span>
                <el-form-item>
                  <el-select v-model="formData.analysis" placeholder="">
                    <el-option label="analysis" value="analysis"></el-option>
                </el-select>
                </el-form-item>
              </div>
            </div>
          <div class="germplasm-select">
            <span>Germplasm</span>
            <el-checkbox-group v-model="checkBox" class="germplasm-checkbox-group">
              <el-collapse>
                <el-collapse-item>
                  <template slot="title">
                    <el-checkbox label="TST(211/211)">
                      TST
                    </el-checkbox>
                    <i class=" el-icon-arrow-down" style="margin-left: 8px;"></i>
                  </template>
                </el-collapse-item>
              </el-collapse>
            </el-checkbox-group>
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
                  <el-select v-model="formData.chr" placeholder="">
                    <el-option label="chr" value="chr"></el-option>
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
            <el-button type="primary" style="margin-right: 40px;" @click="reset()"><i><SvgIcon icon-class="refresh-left" style="margin-right: 5px;"/></i>Reset </el-button>
            <el-button type="primary" icon="el-icon-check" @click="submitForm()">Submit</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { dropDownReference, dropDownVersion} from '@/api/gemo-viewer/geno-viewer'
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue'
import Title from '@/components/CommonComponents/Title.vue'
export default {
components: { Title, SvgIcon },
  data() {
    return {
      region: '1',
      viewerTitle: 'Geno viewer',
      formData: {
        reference: '',
        version: '',
        population: '',
        analysis: '',
        start: '',
        end: '',
        chr: '',
      },
      checkBox: [],
      options: {
        reference: [],
        version: []
      },
    }
  },
  created() {
    this.dropDownReference()
    this.dropDownVersion()
  },
  methods:{
    // 获取下拉框信息
    async dropDownReference() {
      const { data }= await dropDownReference()
      let arr = Object.values(data)
      arr = arr.slice(1,31)
      this.options.reference = arr

    },
    async dropDownVersion() {
      const { data }= await dropDownVersion()
      let arr = Object.values(data)
      arr = arr.slice(1,31)
      this.options.version = arr
    },
    submitForm() {
    this.$emit('showResult', 1211)
    },
    // 疯狂道歉
    focusSelect(name) {
      if(this.options[name].length === 0) {
        this.$notify({
          title: '已成功请求',
          message: '数据请求较慢，请稍等',
          type: 'success'
        })
      }
    },
  reset() {
      this.region= '1',
      this.viewerTitle= 'Geno viewer',
      this.formData.reference= '',
      this.formData.version= '',
      this.formData.population= '',
      this.formData.analysis= '',
      this.formData.checkBox= [],
      this.formData.start= '',
      this.formData.end= '',
      this.formData.chr= ''
  }
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #09A620;
$deepMainColor: #19692C;
.geno-viewer-container {
background-color: #F5F6F5;
}
.geno-form {
position: relative;
left: 50%;
transform: translateX(-50%);
width: 90%;
min-width: 900px;
padding-top: 30px;
padding-bottom: 50px;
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
.germplasm-select {
display: flex;
padding-bottom: 20px;
margin-bottom: 20px;
border-bottom: 1px solid #E6ECEC;
span {
  margin-right: 20px;
}
.germplasm-checkbox-group {
  width: 90%;
  ::v-deep .el-collapse-item,.el-collapse-item__header,.el-collapse-item__wrap {
    :hover {
      background-color: #EBEBEB;
    }
  }
  ::v-deep .el-collapse-item__content {
    background-color: #fff!important;
    div {
      background-color: #fff!important;
    }
  }
  ::v-deep .el-collapse-item__arrow{
    display: none;
  }
  ::v-deep .el-checkbox__input {
    margin-left: 20px;
  }
  ::v-deep .el-checkbox__label {
    color: #595959;
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