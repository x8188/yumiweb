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
                      v-for="item in co_select.op"
                      :label="item"
                      :key="item"
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
import index from "watch-size";

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
            required: true,
            message: "请选择下拉选择Rederence",
            trigger: "change",
          },
        ],
        version: [
          {
            required: true,
            message: "请选择Version",
            trigger: "change",
          },
        ],
        geneId: [
          {
            required: true,
            message: "请输入Gene ID",
            trigger: "blur",
          },
        ],
      },
      rederenceOptions: [
        {
          id: 1,
          value: 1,
          label: "选项1",
          children: [
            {
              id: 2,
              value: 2,
              label: "选项1-1",
            },
          ],
        },
      ],
      versionOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],

      // 三个不同的筛选
      tissue_filter_data: {
        analysis: undefined,
        environment: undefined,
        germplasm: undefined,
      },
      tissue_filter_rules: {
        analysis: [
          {
            required: true,
            message: "请选择Analysis",
            trigger: "change",
          },
        ],
        environment: [
          {
            required: true,
            message: "请选择environment",
            trigger: "change",
          },
        ],
        germplasm: [
          {
            required: true,
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
            required: true,
            message: "请选择Analysis",
            trigger: "change",
          },
        ],
        environment: [
          {
            required: true,
            message: "请选择environment",
            trigger: "change",
          },
        ],
        tissue: [
          {
            required: true,
            message: "请选择tissue",
            trigger: "change",
          },
        ],
        population: [
          {
            required: true,
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
            required: true,
            message: "请选择Analysis",
            trigger: "change",
          },
        ],
        tissue: [
          {
            required: true,
            message: "请选择tissue",
            trigger: "change",
          },
        ],
        population: [
          {
            required: true,
            message: "请选择population",
            trigger: "change",
          },
        ],
        subgroup: [
          {
            required: true,
            message: "请选择subgroup",
            trigger: "change",
          },
        ],
        germplasm: [
          {
            required: true,
            message: "请选择Germplasm",
            trigger: "change",
          },
        ],
      },

      // 选项
      analysisOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      environmentOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      germplasmOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      tissueOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      populationOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      subgroupOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],

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
    this.changeCompare()
  },
  mounted() {},
  methods: {
    submitForm() {
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
    changeCompare() {
      if (this.dbxref_id == "tissue") {
        this.compare_selector = [
          {
            label: "flower",
            checkAll: false,
            checkedop: ["", ""],
            op: [
              "B73_Female_Spikelet_Collected_on_day_as_silk",
              "B73_Mature_Pollen",
              "B73_Silk",
            ],
            isIndeterminate: true,
          },
          {
            label: "leaf",
            checkAll: false,
            checkedop: ["", ""],
            op: [
              "B73_Leaf_zone_1_Symmetrical ",
              "B73_Leaf_Zone_3_Growth",
              "B73_Mature_Leaf_8",
              "B73_Leaf_Zone_2_Stomatal",
            ],
            isIndeterminate: true,
          },
          {
            label: "leaf",
            checkAll: false,
            checkedop: ["", ""],
            op: [
              "B73_Leaf_zone_1_Symmetrical ",
              "B73_Leaf_Zone_3_Growth",
              "B73_Mature_Leaf_8",
              "B73_Leaf_Zone_2_Stomatal",
            ],
            isIndeterminate: true,
          },
          {
            label: "flower",
            checkAll: false,
            checkedop: ["", ""],
            op: [
              "B73_Female_Spikelet_Collected_on_day_as_silk",
              "B73_Mature_Pollen",
              "B73_Silk",
            ],
            isIndeterminate: true,
          },
          {
            label: "leaf",
            checkAll: false,
            checkedop: ["", ""],
            op: [
              "B73_Leaf_zone_1_Symmetrical ",
              "B73_Leaf_Zone_3_Growth",
              "B73_Mature_Leaf_8",
              "B73_Leaf_Zone_2_Stomatal",
            ],
            isIndeterminate: true,
          },
        ];
      } else if (this.dbxref_id == "germplasm") {
        this.compare_selector = [
          {
            label: "Mixed",
            checkAll: false,
            checkedop: ["", ""],
            op: ["05wo0", "05wN230647", "7884-4HT", "8902", "B113"],
            isIndeterminate: true,
          },
          {
            label: "NSS",
            checkAll: false,
            checkedop: ["", ""],
            op: ["05wo0", "05wN230647", "7884-4HT"],
            isIndeterminate: true,
          },
        ];
      }else{
        this.compare_selector = [
          {
            label: "Feild",
            checkAll: false,
            checkedop: ["", ""],
            op: ["normal feild conditions"],
            isIndeterminate: true,
          },
        ];
      }
    },
  },
};
</script>
<style scoped>
.Multi{
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
