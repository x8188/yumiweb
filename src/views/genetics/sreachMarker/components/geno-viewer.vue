<template>
  <div class="geno-viewer-container">
    <div class="geno-form">
      <el-card>
        <Title>
          {{ viewerTitle }}
        </Title>
        <div class="tip-info" style="line-height: 26px">
          Search QTLs by any combination of species, trait category, trait name
          or regions.
        </div>

        <div class="form-container">
          <div class="gene-select">
            <div class="">
              <span>QTL Type</span>
              <el-radio
                v-model="qtlType"
                label="association"
                @input="changeType"
                >association</el-radio
              >
              <el-radio v-model="qtlType" label="linkage" @input="changeType"
                >linkage</el-radio
              >
            </div>
          </div>
          <el-form>
            <div class="gene-select">
              <div class="reference-item select-item">
                <span>Reference</span>
                <el-form-item>
                  <el-select
                    v-model="formData.reference"
                    placeholder=""
                    @change="getVersionOp"
                  >
                    <el-option
                      v-for="(item, i) in options.reference"
                      :key="i"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="version-item select-item">
                <span>Version</span>
                <el-form-item>
                  <el-select
                    v-model="formData.version"
                    :disabled="formData.reference == undefined"
                  >
                    <el-option
                      v-for="(item, i) in options.version"
                      :key="i"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <div class="germplasm-select">
              <span>Trait Category</span>
              <el-select v-model="formData.TraitCategory" placeholder="">
                <el-option
                  v-for="(item, i) in options.TraitCategory"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="germplasm-select">
              <span>Trait ID</span>
              <el-select v-model="formData.TraitId" filterable placeholder="">
                <el-option
                  v-for="(item, i) in options.TraitId"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="germplasm-select" v-show="qtlType == 'linkage'">
              <span>Link Map</span>
              <el-select v-model="formData.LinkMap" filterable placeholder="">
                <el-option
                  v-for="(item, i) in options.LinkMap"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="region-select" v-show="qtlType == 'linkage'">
              <span>LG</span>
              <div class="region-select-form">
                <div class="form-item">
                  <div>
                    <div class="chr">
                      <el-form-item>
                        <el-select v-model="formData.lg" placeholder="">
                          <el-option
                            v-for="(item, i) in options.lg"
                            :key="i"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <div class="start">
                      <el-form-item>
                        <el-input v-model="formData.cm_min"></el-input>
                      </el-form-item>
                      <span>cM</span>
                    </div>
                    <span class="start-to-end"></span>
                    <div class="end">
                      <el-form-item>
                        <el-input v-model="formData.cm_max"></el-input>
                      </el-form-item>
                      <span>cM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="region-select" v-show="qtlType == 'association'">
              <span>Region</span>

              <div class="region-select-form">
                <el-radio-group v-model="region" @input="changeRegion">
                  <el-radio label="all">all</el-radio>
                  <el-radio label="range">range</el-radio>
                  <el-radio label="flank">flank</el-radio>
                </el-radio-group>
                <div class="form-item" v-show="region == 'range'">
                  <div>
                    <div class="chr">
                      <span>chr</span>
                      <el-form-item>
                        <el-select v-model="formData.chr" placeholder="">
                          <el-option
                            v-for="(item, i) in options.chr"
                            :key="i"
                            :label="item.label"
                            :value="item.value"
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
            </div>
            <div class="region-select" v-show="qtlType == 'association'">
              <span>Variant Type</span>

              <div class="region-select-form">
                <!-- <el-radio-group v-model="varType">
                  <el-radio
                    :label="vartype.value"
                    v-for="(vartype, index) in options.varop"
                    :key="index"
                    >{{ vartype.label }}</el-radio
                  >
                </el-radio-group> -->
                <el-checkbox-group v-model="formData.varType">
                  <el-checkbox
                    :label="vartype.value"
                    v-for="(vartype, index) in options.varop"
                    :key="index"
                    >{{ vartype.label }}</el-checkbox
                  >
                </el-checkbox-group>
                <div class="form-item" style="flex-direction: column">
                  <div style="width: 100%">
                    <div class="chr" style="width: 20%">
                      <span>Leading -log10(P)</span>
                    </div>
                    <div class="start">
                      <span>start</span>
                      <el-form-item>
                        <el-input v-model="formData.log_min"></el-input>
                      </el-form-item>
                    </div>
                    <span class="start-to-end"></span>
                    <div class="end">
                      <span>end</span>
                      <el-form-item>
                        <el-input v-model="formData.log_max"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div>
                    <div class="chr" style="width: 20%">
                      <span>Effect Size</span>
                    </div>
                    <div class="start">
                      <span>start</span>
                      <el-form-item>
                        <el-input v-model="formData.effect_min"></el-input>
                      </el-form-item>
                    </div>
                    <span class="start-to-end"></span>
                    <div class="end">
                      <span>end</span>
                      <el-form-item>
                        <el-input v-model="formData.effect_max"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div>
                    <div class="chr" style="width: 20%">
                      <span>PIP</span>
                    </div>
                    <div class="start">
                      <span>start</span>
                      <el-form-item>
                        <el-input v-model="formData.pip_min"></el-input>
                      </el-form-item>
                    </div>
                    <span class="start-to-end"></span>
                    <div class="end">
                      <span>end</span>
                      <el-form-item>
                        <el-input v-model="formData.pip_max"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-form>
          <div class="submit-buttons">
            <el-button
              type="primary"
              style="margin-right: 40px"
              @click="reset()"
              ><i
                ><SvgIcon
                  icon-class="refresh-left"
                  style="margin-right: 5px" /></i
              >Reset
            </el-button>
            <el-button type="primary" icon="el-icon-check" @click="getQtl()"
              >Submit</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import SvgIcon from "@/components/CommonComponents/SvgIcon.vue";
// import Title from "@/components/CommonComponents/Title.vue";
export default {
  components: { SvgIcon },
  data() {
    return {
      qtlType: "association",

      region: "all",
      viewerTitle: "Sreach Marker",
      formData: {
        reference: undefined,
        version: "",
        population: "",
        analysis: "",
        start: 1,
        end: 10000000,
        chr: "",
        varType: [],
        LinkMap: "",
        log_max: 7,
        log_min: 2,
        effect_max: 2,
        effect_min: -1,
        pip_min: 0,
        pip_max: 1,
        lg: "",
        cm_min: 0.01,
        cm_max: 100.88,
      },
      checkBox: [],
      options: {
        reference: [],
        version: [],
        TraitId: [],
        TraitCategory: [],
        chr: [],
        LinkMap: [],
        varop: [],
      },
      varType: "",
      exportLoading: false,
      tableShow: false,
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    async getdata() {
      if (this.qtlType == "association") {
        let res1 = await this.$API.marker.reqselectaccession();
        if (res1.code == 200) {
          this.options.reference = res1.data.map((x) => ({
            label: x,
            value: x,
          }));
        }

        let res3 = await this.$API.marker.reqselecttraitcategory();
        if (res3.code == 200) {
          this.options.TraitCategory = res3.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        let res4 = await this.$API.marker.reqselecttraitid();
        if (res4.code == 200) {
          this.options.TraitId = res4.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        let res5 = await this.$API.marker.reqselectVarType();
        if (res5.code == 200) {
          this.options.varop = res5.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
      } else {
        let res1 = await this.$API.marker.reqlinkageaccession();
        if (res1.code == 200) {
          this.options.reference = res1.data.map((x) => ({
            label: x,
            value: x,
          }));
        }

        let res3 = await this.$API.marker.reqlinkagetraitcategory();
        if (res3.code == 200) {
          this.options.TraitCategory = res3.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        let res4 = await this.$API.marker.reqlinkagetraitid();
        if (res4.code == 200) {
          this.options.TraitId = res4.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        let res5 = await this.$API.marker.reqlinkagemap();
        if (res5.code == 200) {
          this.options.LinkMap = res5.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
      }
    },
    async getVersionOp() {
      if (this.qtlType == "association") {
        let res2 = await this.$API.marker.reqselectversion(
          this.formData.reference
        );
        if (res2.code == 200) {
          this.options.version = res2.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
      } else {
        let res2 = await this.$API.marker.reqlinkageversion(
          this.formData.reference
        );
        if (res2.code == 200) {
          this.options.version = res2.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
      }
    },
    async changeRegion() {
      if (this.region == "range") {
        let res = await this.$API.marker.reqselectchr();

        if (res.code == 200) {
          this.options.chr = res.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
      }
    },

    async getQtl() {
      if (this.qtlType == "association") {
        let data = {
          accession: this.formData.reference,
          version: this.formData.version,
          omics: this.formData.TraitCategory,
          xot_uid: this.formData.TraitId,
          chr: this.formData.chr,
          start: this.formData.start,
          end: this.formData.end,
          type: this.formData.varType.toString(),
          log_min: this.formData.log_min,
          log_max: this.formData.log_max,
          effect_min: this.formData.effect_min,
          effect_max: this.formData.effect_max,
          pip_min: this.formData.pip_min,
          pip_max: this.formData.pip_max,
        };
        // let data = {
        //   accession: "B73",
        //   version: "4.43.0",
        //   omics: "Phenomics",
        //   xot_uid: "Agro2-Row_Kernel_Number_BLUP",
        //   chr: "",
        //   start: 100000000,
        //   end: 200000000,
        //   log_min: 0.01,
        //   log_max: 999999999,
        // };
        let res = await this.$API.marker.reqassociation_qtl(data);

        if (res.code == 200) {
          this.$emit("showResult", res.data, data);
        }
      } else {
        let data = {
          accession: this.formData.reference,
          version: this.formData.version,
          omics: this.formData.TraitCategory,
          linkagemap: this.formData.LinkMap,
          xot_uid: this.formData.TraitId,
          lg: this.formData.lg,
          cm_min: this.formData.cm_min,
          cm_max: this.formData.cm_max,
        };
        let res = await this.$API.marker.reqlinkage(data);

        if (res.code == 200) {
          this.$emit("showResult", res.data, data);
        }
      }
    },
    changeType() {
      this.formData = {
        reference: undefined,
        version: "",
        population: "",
        analysis: "",
        start: 1,
        end: 10000000,
        chr: "",
        varType: [],
        LinkMap: "",
        log_max: 7,
        log_min: 2,
        effect_max: 2,
        effect_min: -1,
        pip_min: 0,
        pip_max: 1,
        lg: "",
        cm_min: 0.01,
        cm_max: 100.88,
      };
      this.options={
        reference: [],
        version: [],
        TraitId: [],
        TraitCategory: [],
        chr: [],
        LinkMap: [],
        varop: [],
      }
      this.getdata();
    },
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #09a620;
$deepMainColor: #19692c;
.geno-viewer-container {
  background-color: #f5f6f5;
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
  background: #f1f8f8;
  padding: 20px;
}
.gene-select {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e6ecec;
  .select-item {
    display: flex;
    // flex-direction: column;
    flex-grow: 1;
    margin-right: 20px;
    span {
      margin-top: 10px;
      padding-right: 10px;
    }
  }
}
.germplasm-select {
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e6ecec;
  span {
    margin-right: 20px;
  }
  .germplasm-checkbox-group {
    width: 90%;
    ::v-deep .el-collapse-item,
    .el-collapse-item__header,
    .el-collapse-item__wrap {
      :hover {
        background-color: #ebebeb;
      }
    }
    ::v-deep .el-collapse-item__content {
      background-color: #fff !important;
      div {
        background-color: #fff !important;
      }
    }
    ::v-deep .el-collapse-item__arrow {
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
  border-bottom: 1px solid #e6ecec;
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
::v-deep .el-select .el-input.is-focus .el-input__inner {
  border-color: $mainColor;
}

::v-deep .el-select-dropdown__item.selected,
.el-select-dropdown__item.selected {
  font-weight: normal;
}
.submit-buttons {
  display: flex;
  justify-content: center;
}
</style>
