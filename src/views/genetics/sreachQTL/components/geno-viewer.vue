<template>
  <div class="geno-viewer-container">
    <div class="geno-form">
      <el-card  v-loading="loading">
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
                    filterable
                    clearable
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
                    clearable
                    filterable
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
              <el-select
                v-model="formData.TraitCategory"
                placeholder=""
                clearable
                filterable
              >
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
              <el-select
                v-model="formData.TraitId"
                filterable
                remote
                :remote-method="remoteMethod"
                @blur="TraitIdBlur"
                clearable
              >
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
              <el-select
                v-model="formData.LinkMap"
                placeholder=""
                clearable
                filterable
              >
                <el-option
                  v-for="(item, i) in options.LinkMap"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="region-select">
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
                        <el-select
                          v-model="formData.chr"
                          placeholder=""
                          clearable
                          filterable
                        >
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
              <span>QTLs</span>
              <div class="region-select-form">
                <div class="form-item">
                  <div class="start">
                    <span>Leading -log10(P)</span>
                    <el-form-item>
                      <el-input v-model="formData.QTLstart"></el-input>
                    </el-form-item>
                  </div>
                  <span class="start-to-end"></span>
                  <div class="end">
                    <span></span>
                    <el-form-item>
                      <el-input v-model="formData.QTLend"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </div>
            <div class="region-select" v-show="qtlType == 'linkage'">
              <span>QTLs</span>
              <div class="region-select-form">
                <div class="form-item">
                  <div class="start">
                    <span>Lod</span>
                    <el-form-item>
                      <el-input v-model="formData.lodStart"></el-input>
                    </el-form-item>
                  </div>
                  <span class="start-to-end"></span>
                  <div class="end">
                    <span></span>
                    <el-form-item>
                      <el-input v-model="formData.lodEnd"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </div>
          </el-form>
          <div class="submit-buttons">
            <el-button type="primary" style="margin-right: 40px" @click="reset"
              ><i
                ><SvgIcon
                  icon-class="refresh-left"
                  style="margin-right: 5px" /></i
              >Reset
            </el-button>
            <el-button type="primary" icon="el-icon-check" @click="firstGet()"
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
  props: ["page","loading"],
  data() {
    return {
      qtlType: "association",

      region: "all",
      viewerTitle: "Sreach QTL",
      formData: {
        reference: undefined,
        version: "",
        population: "",
        analysis: "",
        start: 100000000,
        end: 200000000,
        chr: "",
        QTLstart: 0.01,
        QTLend: 999999999,
        LinkMap: "",
        TraitCategory: "",
        TraitId: "null",
        lodStart: 0.01,
        lodEnd: 1000.88,
      },
      checkBox: [],
      options: {
        reference: [],
        version: [],
        TraitId: [],
        TraitCategory: [],
        chr: [],
        LinkMap: [],
      },
      exportLoading: false,
      tableShow: false,
      // traitid: "null",
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    async getdata() {
      if (this.qtlType == "association") {
        let res1 = await this.$API.Qtl.reqselectaccession();
        if (res1.code == 200) {
          this.options.reference = res1.data.map((x) => ({
            label: x,
            value: x,
          }));
        }

        let res3 = await this.$API.Qtl.reqselecttraitcategory();
        if (res3.code == 200) {
          this.options.TraitCategory = res3.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        let res4 = await this.$API.Qtl.reqselecttraitid(this.formData.TraitId);
        if (res4.code == 200) {
          this.options.TraitId = res4.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
      } else {
        let res1 = await this.$API.Qtl.reqlinkageaccession();
        if (res1.code == 200) {
          this.options.reference = res1.data.map((x) => ({
            label: x,
            value: x,
          }));
        }

        let res3 = await this.$API.Qtl.reqlinkagetraitcategory();
        if (res3.code == 200) {
          this.options.TraitCategory = res3.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        let res4 = await this.$API.Qtl.reqlinkagetraitid(this.formData.TraitId);
        if (res4.code == 200) {
          this.options.TraitId = res4.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        let res5 = await this.$API.Qtl.reqlinkagemap();
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
        let res2 = await this.$API.Qtl.reqselectversion(
          this.formData.reference
        );
        if (res2.code == 200) {
          this.options.version = res2.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
      } else {
        let res2 = await this.$API.Qtl.reqlinkageversion(
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
    async TraitIdBlur() {
      if (this.qtlType == "association") {
        let res4 = await this.$API.Qtl.reqselecttraitid("null");
        if (res4.code == 200) {
          this.options.TraitId = res4.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        // this.formData.TraitId="null"
      } else {
        let res4 = await this.$API.Qtl.reqlinkagetraitid("null");
        if (res4.code == 200) {
          this.options.TraitId = res4.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        // this.formData.TraitId="null"
      }
    },
    async remoteMethod(query) {
      if (query !== "") {
        if (this.qtlType == "association") {
          let res4 = await this.$API.Qtl.reqselecttraitid(query);
          if (res4.code == 200) {
            this.options.TraitId = res4.data.map((x) => ({
              label: x,
              value: x,
            }));
          }
          // this.formData.TraitId="null"
        } else {
          let res4 = await this.$API.Qtl.reqlinkagetraitid(query);
          if (res4.code == 200) {
            this.options.TraitId = res4.data.map((x) => ({
              label: x,
              value: x,
            }));
          }
          // this.formData.TraitId="null"
        }
      } else {
        this.options.TraitId = [];
      }
    },
    async changeRegion() {
      if (this.region == "range") {
        let res = await this.$API.Qtl.reqselectchr();

        if (res.code == 200) {
          this.options.chr = res.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
      }
    },
    firstGet() {
      this.page.pageNum = 1;
      this.getQtl();
    },
    async getQtl() {
      this.$emit("loadingUpdata",true);
      if (this.qtlType == "association") {
        let data = {
          accession: this.formData.reference,
          version: this.formData.version,
          omics: this.formData.TraitCategory,
          xot_uid: this.formData.TraitId == "null" ? "" : this.formData.TraitId,
          chr: this.formData.chr,
          start: this.formData.start,
          end: this.formData.end,
          log_min: this.formData.QTLstart,
          log_max: this.formData.QTLend,
        };
        let pageParams = {
          pageNum: this.page.pageNum,
          pageSize: this.page.pageSize,
        };
        let res = await this.$API.Qtl.reqassociation_qtl(data, pageParams);

        if (res.code == 200) {
          this.page.total = res.total;
          this.$emit("showResult", res.rows, data);
        }
      } else {
        let data = {
          accession: this.formData.reference,
          version: this.formData.version,
          omics: this.formData.TraitCategory,
          xot_uid: this.formData.TraitId == "null" ? "" : this.formData.TraitId,
          linkagemap: this.formData.LinkMap,
          chr: this.formData.chr,
          start: this.formData.start,
          end: this.formData.end,
          lod_min: this.formData.lodStart,
          lod_max: this.formData.lodEnd,
        };
        let pageParams = {
          pageNum: this.page.pageNum,
          pageSize: this.page.pageSize,
        };
        let res = await this.$API.Qtl.reqlinkage(data, pageParams);

        if (res.code == 200) {
          this.page.total = res.total;
          this.$emit("showResult", res.rows, data);
        }
      }
      this.$emit("loadingUpdata",false);
    },
    changeType() {
      this.getdata();

      this.formData = {
        reference: undefined,
        version: "",
        population: "",
        analysis: "",
        start: 100000000,
        end: 200000000,
        chr: "",
        QTLstart: 0.01,
        QTLend: 999999999,
        LinkMap: "",
        TraitCategory: "",
        TraitId: "null",
        lodStart: 0.01,
        lodEnd: 1000.88,
      };
    },
    reset() {
      this.formData = {
        reference: undefined,
        version: "",
        population: "",
        analysis: "",
        start: 1,
        end: 999999999,
        chr: "",
        QTLstart: 0.01,
        QTLend: 1000.88,
        LinkMap: "",
        TraitCategory: "",
        TraitId: "null",
        lodStart: 0.01,
        lodEnd: 1000.88,
      };
    },
    // dataFilter(val) {
    //     this.formData.reference = val;
    //     if (val) { //val存在
    //       this.options.reference = tem.filter((item) => {
    //         if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
    //           return true
    //         }
    //       })
    //     } else { //val为空时，还原数组
    //       this.options = tem;
    //     }
    //   }
  },
  mounted() {
    this.$bus.$on("changeQtlPage", () => {
      this.getQtl();
    });
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
