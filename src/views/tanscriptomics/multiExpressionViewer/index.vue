<template>
  <div>
    <el-card class="Multi" style="margin-top: 20px;" v-loading="loading">
      <div>
        <Title>Multi expression viewer</Title>
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
                  filterable
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
                  filterable
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
                <el-button
                  class="tryButton"
                  @click="formData.geneId = exampleGene"
                  >try example</el-button
                >
                <!-- <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button> -->
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
          <el-row :gutter="40" v-loading="compareloading">
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
                    filterable
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
              <div style="border: 1px #ccc solid; height: 370px; overflow: auto; padding: 10px">
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
                  <!-- <div style="margin: 15px 0"></div> -->
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
    </el-card>
    <el-card id="MultiResult" v-if="resultShow" class="Multi" style="margin-top: 20px;" v-loading="loading">
      <div>
        <Title>Multi expression result</Title>
      </div>
      <div v-if="alldata.length==0"><strong>No Result</strong></div>
      <div v-if="alldata.length!=0">
        <el-table :data="alldata">
          <el-table-column label="expressionId" align="center" prop="expressionId" />
          <el-table-column label="expressionUnit" align="center" prop="expressionUnit" />
          <el-table-column label="expressionValue" align="center" prop="expressionValue" />
          <el-table-column label="analysisDetail" align="center" prop="analysis">
            <template slot-scope="scope">
              <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'analysis')">{{ scope.row.analysisId }}</span>
            </template>
          </el-table-column>
          <el-table-column label="environmentDetail" align="center" prop="environment">
            <template slot-scope="scope">
              <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'environment')">{{ scope.row.environmentId }}</span>
            </template>
          </el-table-column>
          <el-table-column label="germplasmDetail" align="center" prop="germplasm">
            <template slot-scope="scope">
              <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'germplasm')">{{ scope.row.germplasmId }}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column label="germplasmDetail" align="center" prop="germplasm">
            <template slot-scope="scope">
              <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'germplasm')">{{ scope.row.germplasmId }}</span>
            </template>
          </el-table-column> -->
          <el-table-column label="tissueDetail" align="center" prop="tissue">
            <template slot-scope="scope">
              <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'tissue')">{{ scope.row.tissueId }}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column label="environmentId" align="center" prop="environmentId" />
          <el-table-column label="featureId" align="center" prop="featureId" />
          <el-table-column label="germplasmId" align="center" prop="germplasmId" />
          <el-table-column label="tissueId" align="center" prop="tissueId" /> -->
        </el-table>
      </div>
    </el-card>

    <el-drawer
      :title="DEtitle"
      :visible.sync="drawer"
      direction="rtl"
      size="20%"
      style="height: 50%;top: 20%;"
    >
    <div v-for="(value, key) in detail" :key="key" style="margin: 10px;">
    <strong>{{ key }}</strong>: {{ value }}
    </div>
    </el-drawer>
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
            trigger: "change",
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
      compareloading:false,
      exampleGene:"Zm00002d004455,Zm00002d004246",

      alldata:[],
      detail:{},
      resultShow:false,

      drawer:false,
      DEtitle:"",

      loading:false
    };
  },
  computed: {},
  watch: {},
  async created() {
    this.changeCompare();
    await this.getRefDownMenu();
    this.formData.rederence=this.rederenceOptions[0].value
    this.getVerDownMenu()
    this.getDownMenu();
  },
  mounted() {},
  methods: {
    submitForm() {
      this.submitALL();
      // this.$refs["muExpForm"].validate((valid) => {
      //   if (!valid) return;
      //   // TODO 提交表单
      // });
    },
    resetForm() {
      // this.$refs["muExpForm"].resetFields();
      this.changeCompare()
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
      this.compareloading=true

      // 临时的
      this.tissue_filter_data["analysis"] = "Zhong Silin TFBS data w";
      this.tissue_filter_data["environment"] = "Normal";
      this.tissue_filter_data["germplasm"] = "CIMBL958";
      // Object.keys(this.tissue_filter_data).forEach((key) => {
      //   this.tissue_filter_data[key] = undefined;
      // });
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
      this.compareloading=false
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
      this.formData.version=this.versionOptions[0].value
    },

    async submitALL() {

      let tem=true
      this.$refs['muExpForm'].validate((valid) => {
          if (valid) {
            
          } else {
            tem=false
            return false;
          }
        });
      
      if(tem==false) return

      if(this.compare_selector.reduce((acc, item) => [...acc, ...item.checkedop], []).length==0){
        this.$message({
          message: 'Select至少要选择一个',
          type: 'warning'
        });
        return
      }

      this.loading=true
      let fullData = {
        reference: "",
        version: "",
        analysis: "",
        environment: "",
        germplasm: "",
        population: "",
        tissue: "",
        geneIds: [],
        selects: [],
      };
      fullData.reference = this.formData.rederence;
      fullData.version = this.formData.version;
      fullData.geneIds=this.formData.geneId

      let type=""
      if (this.dbxref_id == "tissue") {
        type="tissue"
        fullData.analysis = this.tissue_filter_data.analysis;
        fullData.environment = this.tissue_filter_data.environment;
        fullData.germplasm = this.tissue_filter_data.germplasm;
      } else if (this.dbxref_id == "germplasm") {
        type="tissue"
        fullData.analysis = this.germplasm_filter_data.analysis;
        fullData.environment = this.germplasm_filter_data.environment;
        fullData.tissue = this.germplasm_filter_data.tissue;
        fullData.population = this.germplasm_filter_data.population;
      } else {
        type="environment"
        fullData.analysis = this.environment_filter_data.analysis;
        fullData.germplasm = this.environment_filter_data.germplasm;
        fullData.tissue = this.environment_filter_data.tissue;
        fullData.population = this.environment_filter_data.population;
        fullData.subgroup = this.environment_filter_data.subgroup;
      }

      fullData.selects=this.compare_selector.reduce((acc, item) => [...acc, ...item.checkedop], []).join(",");
      
      // fullData={
      //   reference:"B73",
      //   version:"4.48.8",
      //   analysis:"Zhong Silin TFBS data w",
      //   environment:"Normal",
      //   geneIds:"Zm00002d004455,Zm00002d004246",
      //   selects:"B73_6-7_internode,B73_7-8_internode",
      //   germplasm:"CIMBL958",
      // }

      let result = await this.$API.multi.reqMultiFull(type,fullData);

      if(result.code==200){
        this.alldata=result.data
        this.resultShow=true
        setTimeout(function(){
          let hightDiv = document.getElementById('MultiResult')  // 需要滚动位置元素
          hightDiv.scrollIntoView({ behavior: 'smooth' });
        },500)
      }
      
      this.loading=false

    },
    handleClick(index,row,col){
      console.log(index,row,col)
      this.detail={}
      let tem=row[col]
      for (var key in tem) {
        if (tem.hasOwnProperty(key) && tem[key] !== null&& tem[key] !== '') {
          this.detail[key] = tem[key];
        }
      }
      this.DEtitle=col
      this.drawer=true
      console.log(this.detail)
    }
  },
};
</script>
<style scoped>
.Multi {
  margin-left: 30px;
  width: 80%;
  margin: 0 auto;
}
.tryButton {
  color: #09a620;
  border-color: #09a620;
}
.co_se_item {
  margin-bottom: 30px;
}
</style>
