<template>
  <div>
    <div class="Multi">
      <div>
        <h2>Multi expression viewer</h2>
      </div>
      <div class="firstSearch">
        <p>search for exp:</p>
        <el-row :gutter="15">
          <el-form
            ref="muExpForm"
            :model="formData"
            :rules="rules"
            size="medium"
            label-width="100px"
          >
            <el-col :span="12">
              <el-form-item label="Rederence" prop="rederence">
                <el-select
                  v-model="formData.rederence"
                  placeholder="请选择下拉选择Rederence"
                  clearable
                  :style="{ width: '100%' }"
                  @change="getVerDownMenu"
                >
                  <el-option
                    v-for="(item, index) in rederenceOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="Version" prop="version">
                <el-select
                  v-model="formData.version"
                  placeholder="请选择Version"
                  clearable
                  :style="{ width: '100%' }"
                  :disabled="formData.rederence == undefined"
                >
                  <el-option
                    v-for="(item, index) in versionOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Gene ID" prop="geneId">
                <el-input
                  v-model="formData.geneId"
                  type="textarea"
                  placeholder="请输入Gene ID"
                  :autosize="{ minRows: 4, maxRows: 4 }"
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item size="large">
                <el-button class="tryButton">try example</el-button>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
      </div>
      <div class="compare">
        <p>compare among different</p>
        <el-radio-group v-model="dbxref_id" @input="changeCompare">
          <el-radio label="tissue">tissue</el-radio>
          <el-radio label="germplasm">germplasm</el-radio>
          <el-radio label="environment">environment</el-radio>
        </el-radio-group>
        <div class="compareDiv">
          <el-row :gutter="40">
            <el-col :span="6">
              <h3>Filters</h3>

              <el-form
                v-show="dbxref_id == 'tissue'"
                ref="tissue_filter"
                :model="tissue_filter_data"
                :rules="tissue_filter_rules"
                size="medium"
                label-width="100px"
                label-position="left"
              >
                <el-form-item label="Analysis" prop="analysis">
                  <el-select
                    v-model="tissue_filter_data.analysis"
                    placeholder="请选择Analysis"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in analysisOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="environment" prop="environment">
                  <el-select
                    v-model="tissue_filter_data.environment"
                    placeholder="请选择environment"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in environmentOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Germplasm" prop="germplasm">
                  <el-select
                    v-model="tissue_filter_data.germplasm"
                    placeholder="请选择Germplasm"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in germplasmOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item size="large">
                  <el-button type="primary" @click="submitForm">提交</el-button>
                  <el-button @click="resetForm">重置</el-button>
                </el-form-item>
              </el-form>

              <el-form
                v-show="dbxref_id == 'germplasm'"
                ref="germplasm_filter"
                :model="germplasm_filter_data"
                :rules="germplasm_filter_rules"
                size="medium"
                label-width="100px"
                label-position="left"
              >
                <el-form-item label="Analysis" prop="analysis">
                  <el-select
                    v-model="germplasm_filter_data.analysis"
                    placeholder="请选择Analysis"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in analysisOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="environment" prop="environment">
                  <el-select
                    v-model="germplasm_filter_data.environment"
                    placeholder="请选择environment"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in environmentOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Tissue" prop="tissue">
                  <el-select
                    v-model="germplasm_filter_data.tissue"
                    placeholder="请选择Tissue"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in tissueOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="population" prop="population">
                  <el-select
                    v-model="germplasm_filter_data.population"
                    placeholder="请选择population"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in populationOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item size="large">
                  <el-button type="primary" @click="submitForm">提交</el-button>
                  <el-button @click="resetForm">重置</el-button>
                </el-form-item>
              </el-form>

              <el-form
                v-show="dbxref_id == 'environment'"
                ref="environment_filter"
                :model="environment_filter_data"
                :rules="environment_filter_rules"
                size="medium"
                label-width="100px"
                label-position="left"
              >
                <el-form-item label="Analysis" prop="analysis">
                  <el-select
                    v-model="environment_filter_data.analysis"
                    placeholder="请选择Analysis"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in analysisOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Germplasm" prop="germplasm">
                  <el-select
                    v-model="environment_filter_data.germplasm"
                    placeholder="请选择Germplasm"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in germplasmOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Tissue" prop="tissue">
                  <el-select
                    v-model="environment_filter_data.tissue"
                    placeholder="请选择Tissue"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in tissueOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="population" prop="population">
                  <el-select
                    v-model="environment_filter_data.population"
                    placeholder="请选择population"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in populationOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="subgroup" prop="subgroup">
                  <el-select
                    v-model="environment_filter_data.subgroup"
                    placeholder="请选择subgroup"
                    clearable
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="(item, index) in subgroupOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item size="large">
                  <el-button type="primary" @click="submitForm">提交</el-button>
                  <el-button @click="resetForm">重置</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="18" class="Select">
              <h3>Select</h3>
              <div>
                <div
                  v-for="(co_select, index) in compare_selector"
                  :key="index"
                  class="co_se_item"
                >
                  <el-checkbox
                    :indeterminate="co_select.isIndeterminate"
                    v-model="co_select.checkAll"
                    @change="handleCheckAllChange($event, index)"
                    >{{ co_select.label }}</el-checkbox
                  >
                  <div style="margin: 15px 0"></div>
                  <el-checkbox-group
                    v-model="co_select.checkedop"
                    @change="handleCheckedCitiesChange($event, index)"
                  >
                    <el-checkbox
                      v-for="(item, opindex) in co_select.op"
                      :label="item"
                      :key="opindex"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "multiExp",
  components: {},
  props: [],
  data() {
    return {
      dbxref_id: "tissue",
      formData: {
        rederence: undefined,
        version: undefined,
        geneId: undefined,
      },
      rules: {
        rederence: [
          {
            
            message: "请选择下拉选择Rederence",
            trigger: "change",
          },
        ],
        version: [
          {
            
            message: "请选择Version",
            trigger: "change",
          },
        ],
        geneId: [
          {
            
            message: "请输入Gene ID",
            trigger: "blur",
          },
        ],
      },
      rederenceOptions: [],
      versionOptions: [],

      // 三个不同的筛选
      tissue_filter_data: {
        analysis: undefined,
        environment: undefined,
        germplasm: undefined,
      },
      tissue_filter_rules: {
        analysis: [
          {
            
            message: "请选择Analysis",
            trigger: "change",
          },
        ],
        environment: [
          {
            
            message: "请选择environment",
            trigger: "change",
          },
        ],
        germplasm: [
          {
            
            message: "请选择Germplasm",
            trigger: "change",
          },
        ],
      },
      germplasm_filter_data: {
        analysis: undefined,
        environment: undefined,
        tissue: undefined,
        population: undefined,
      },
      germplasm_filter_rules: {
        analysis: [
          {
            
            message: "请选择Analysis",
            trigger: "change",
          },
        ],
        environment: [
          {
            
            message: "请选择environment",
            trigger: "change",
          },
        ],
        tissue: [
          {
            
            message: "请选择tissue",
            trigger: "change",
          },
        ],
        population: [
          {
            
            message: "请选择population",
            trigger: "change",
          },
        ],
      },
      environment_filter_data: {
        analysis: undefined,
        germplasm: undefined,
        tissue: undefined,
        population: undefined,
        subgroup: undefined,
      },
      environment_filter_rules: {
        analysis: [
          {
            
            message: "请选择Analysis",
            trigger: "change",
          },
        ],
        tissue: [
          {
            
            message: "请选择tissue",
            trigger: "change",
          },
        ],
        population: [
          {
            
            message: "请选择population",
            trigger: "change",
          },
        ],
        subgroup: [
          {
            
            message: "请选择subgroup",
            trigger: "change",
          },
        ],
        germplasm: [
          {
            
            message: "请选择Germplasm",
            trigger: "change",
          },
        ],
      },

      // 选项
      analysisOptions: [],
      environmentOptions: [],
      germplasmOptions: [],
      tissueOptions: [],
      populationOptions: [],
      subgroupOptions: [],

      compare_selector: [
        {
          label: "",
          checkAll: false,
          checkedop: [],
          op: [],
          isIndeterminate: true,
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.changeCompare();
    this.getRefDownMenu();
    this.getDownMenu();
  },
  mounted() {},
  methods: {
    submitForm() {
      this.submitALL();
      this.$refs["muExpForm"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs["muExpForm"].resetFields();
    },
    handleCheckAllChange(val, index) {
      this.compare_selector[index].checkedop = val
        ? this.compare_selector[index].op
        : [];
      this.compare_selector[index].isIndeterminate = false;
    },
    handleCheckedCitiesChange(value, index) {
      let checkedCount = value.length;
      this.compare_selector[index].checkAll =
        checkedCount === this.compare_selector[index].op.length;
      this.compare_selector[index].isIndeterminate =
        checkedCount > 0 &&
        checkedCount < this.compare_selector[index].op.length;
    },
    async changeCompare() {
      Object.keys(this.tissue_filter_data).forEach((key) => {
        this.tissue_filter_data[key] = undefined;
      });
      Object.keys(this.germplasm_filter_data).forEach((key) => {
        this.germplasm_filter_data[key] = undefined;
      });
      Object.keys(this.environment_filter_data).forEach((key) => {
        this.environment_filter_data[key] = undefined;
      });
      if (this.dbxref_id == "tissue") {
        let result = await this.$API.multi.reqTissue();
        if (result.code == 200) {
          this.compare_selector = Object.entries(result.data).map(
            ([label, op]) => ({
              label,
              op,
              checkAll: false,
              checkedop: [],
              isIndeterminate: true,
            })
          );
        }
      } else if (this.dbxref_id == "germplasm") {
        let result = await this.$API.multi.reqGermplasm();
        if (result.code == 200) {
          this.compare_selector = Object.entries(result.data).map(
            ([label, op]) => ({
              label,
              op,
              checkAll: false,
              checkedop: [],
              isIndeterminate: true,
            })
          );
        }
      } else {
        let result = await this.$API.multi.reqEnvironment();
        if (result.code == 200) {
          this.compare_selector = Object.entries(result.data).map(
            ([label, op]) => ({
              label,
              op,
              checkAll: false,
              checkedop: [],
              isIndeterminate: true,
            })
          );
        }
      }
    },
    async getDownMenu() {
      let MultiDownMenu = await this.$API.multi.reqMultiDownMenu();
      if (MultiDownMenu.code == 200) {
        let data = MultiDownMenu.data;
        this.analysisOptions = data.Analysis.map((x) => ({
          label: x,
          value: x,
        }));
        this.germplasmOptions = data.Germplasm.map((x) => ({
          label: x,
          value: x,
        }));
        this.tissueOptions = data.Tissue.map((x) => ({
          label: x,
          value: x,
        }));
        this.environmentOptions = data.Environment.map((x) => ({
          label: x,
          value: x,
        }));
        this.populationOptions = data.Population.map((x) => ({
          label: x,
          value: x,
        }));
        this.subgroupOptions = data.Subgroup.map((x) => ({
          label: x,
          value: x,
        }));
      }
    },
    async getRefDownMenu() {
      let RefDownMenu = await this.$API.multi.reqRefDownMenu();
      if (RefDownMenu.code == 200) {
        let ref = RefDownMenu.data.slice(0, 10);

        this.rederenceOptions = ref.map((x) => ({
          label: x,
          value: x,
        }));
      }
    },
    async getVerDownMenu() {
      let VerDownMenu = await this.$API.multi.reqVerDownMenu(
        this.formData.rederence
      );
      if (VerDownMenu.code == 200) {
        this.versionOptions = VerDownMenu.data.map((x) => ({
          label: x,
          value: x,
        }));
      }
    },

    async submitALL() {
      let fullData = {
        reference: "",
        version: "",
        analysis: "",
        flag: 0,
        environment: "",
        germplasm: "",
        population: "",
        tissue: "",
        subgroup: "",
        geneIds: [],
        selects: [],
      };
      fullData.reference = this.formData.rederence;
      fullData.version = this.formData.version;

      if (this.dbxref_id == "tissue") {
        fullData.flag = 1;
        fullData.analysis = this.tissue_filter_data.analysis;
        fullData.environment = this.tissue_filter_data.environment;
        fullData.germplasm = this.tissue_filter_data.germplasm;
      } else if (this.dbxref_id == "germplasm") {
        fullData.flag = 2;
        fullData.analysis = this.germplasm_filter_data.analysis;
        fullData.environment = this.germplasm_filter_data.environment;
        fullData.tissue = this.germplasm_filter_data.tissue;
        fullData.population = this.germplasm_filter_data.population;
      } else {
        fullData.flag = 3;
        fullData.analysis = this.environment_filter_data.analysis;
        fullData.germplasm = this.environment_filter_data.germplasm;
        fullData.tissue = this.environment_filter_data.tissue;
        fullData.population = this.environment_filter_data.population;
        fullData.subgroup = this.environment_filter_data.subgroup;
      }

      fullData.selects=this.compare_selector.reduce((acc, item) => [...acc, ...item.checkedop], []);
      
      let result = await this.$API.multi.reqMultiFull(fullData);

      console.log(result);
    },
  },
};
</script>
<style scoped>
.Multi {
  margin-left: 30px;
}
.tryButton {
  color: #09a620;
  border-color: #09a620;
}
.co_se_item {
  margin-bottom: 30px;
}
</style>