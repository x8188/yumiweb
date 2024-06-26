<template>
  <div>
    <div class="app">
        <div class="content">
          <el-card class="Multi" style="margin-top: 20px;" v-loading="loading">
          <div>
            <Title>{{$t('Multi expression')}}</Title>
          </div>
          <div >
            <div class="firstSearch" >
              <p class='MulexpTitle'>{{$t('search for exp')}}:</p>
              <el-row :gutter="15">
                <el-form
                  ref="muExpForm"
                  :model="formData"
                  :rules="rules"
                  size="medium"
                  label-width="100px"
                >
                  <el-col :span="12">
                    <el-form-item :label="$t('Reference')" prop="rederence">
                      <el-select
                        v-model="formData.rederence"
                        placeholder="Rederence"
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
                    <el-form-item :label="$t('Version')" prop="version">
                      <el-select
                        v-model="formData.version"
                        placeholder="Version"
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
                    <el-form-item :label="$t('Gene ID')" prop="geneId">
                      <el-input
                        v-model="formData.geneId"
                        type="textarea"
                        placeholder="Gene ID"
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
                        >{{$t('try example')}}</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-row>
            </div>
            <div class="compare">
              <p class='MulexpTitle'>{{$t('compare among different')}}:</p>
              <el-radio-group v-model="dbxref_id" @input="changeCompare">
                <el-radio label="tissue" >{{$t('tissue')}}</el-radio>
                <el-radio label="germplasm" >{{$t('germplasm')}}</el-radio>
                <el-radio label="environment" >{{$t('environment')}}</el-radio>
              </el-radio-group>
              <div class="compareDiv">
                <el-row :gutter="40" v-loading="compareloading">
                  <el-col :span="6">
                    <h3>{{$t('Filters')}}</h3>

                    <el-form
                      v-show="dbxref_id == 'tissue'"
                      ref="tissue_filter"
                      :model="tissue_filter_data"
                      :rules="tissue_filter_rules"
                      size="medium"
                      label-width="100px"
                      label-position="left"
                    >
                      <el-form-item :label="$t('Analysis')" prop="analysis">
                        <el-select
                          v-model="tissue_filter_data.analysis"
                          placeholder="Analysis"
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
                      <el-form-item :label="$t('Environment')"  prop="environment">
                        <el-select
                          v-model="tissue_filter_data.environment"
                          placeholder="environment"
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
                      <el-form-item :label="$t('Germplasm')"  prop="germplasm">
                        <el-select
                          v-model="tissue_filter_data.germplasm"
                          placeholder="Germplasm"
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
                        <el-button type="primary" @click="submitForm">{{$t('search')}}</el-button>
                        <el-button @click="resetForm">{{$t('reset')}}</el-button>
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
                      <el-form-item :label="$t('Analysis')"  prop="analysis">
                        <el-select
                          v-model="germplasm_filter_data.analysis"
                          placeholder="Analysis"
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
                      <el-form-item :label="$t('Environment')"  prop="environment">
                        <el-select
                          v-model="germplasm_filter_data.environment"
                          placeholder="environment"
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
                      <el-form-item :label="$t('Tissue')"  prop="tissue">
                        <el-select
                          v-model="germplasm_filter_data.tissue"
                          placeholder="Tissue"
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
                      <el-form-item size="large">
                        <el-button type="primary" @click="submitForm">{{$t('search')}}</el-button>
                        <el-button @click="resetForm">{{$t('reset')}}</el-button>
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
                      <el-form-item :label="$t('Analysis')"  prop="analysis">
                        <el-select
                          v-model="environment_filter_data.analysis"
                          placeholder="Analysis"
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
                      <el-form-item :label="$t('Germplasm')"  prop="germplasm">
                        <el-select
                          v-model="environment_filter_data.germplasm"
                          placeholder="Germplasm"
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
                      <el-form-item :label="$t('Tissue')"  prop="tissue">
                        <el-select
                          v-model="environment_filter_data.tissue"
                          placeholder="Tissue"
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
                      <el-form-item size="large">
                        <el-button type="primary" @click="submitForm">{{$t('search')}}</el-button>
                        <el-button @click="resetForm">{{$t('reset')}}</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                  <el-col :span="18" class="Select">
                    <h3>{{$t('Select')}}</h3>
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

          </el-card>
          <el-card id="MultiResult" v-show="resultShow" class="Multi" style="margin-top: 20px;" v-loading="loading">
            <div>
              <Title>{{$t('Multiexpressionresult')}}</Title>
            </div>
            <div v-show="alldata.length==0"><strong>No Result</strong></div>
            <div v-show="alldata.length!=0">
              <el-table :data="alldata">
                <!-- <el-table-column :label="$t('expressionId')"  align="center" prop="expressionId" /> -->
                <el-table-column :label="$t('expressionUnit')"  align="center" prop="expressionUnit" />
                <el-table-column :label="$t('expressionValue')"  align="center" prop="expressionValue" />
                <el-table-column :label="$t('analysisDetail')"  align="center" prop="analysis">
                  <template slot-scope="scope">
                    <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'analysis')">{{ scope.row.analysisId }}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="$t('environmentDetail')" align="center" prop="environment">
                  <template slot-scope="scope">
                    <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'environment')">{{ scope.row.environmentId }}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="$t('germplasmDetail')" align="center" prop="germplasm">
                  <template slot-scope="scope">
                    <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'germplasm')">{{ scope.row.germplasmId }}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="$t('tissueDetail')"  align="center" prop="tissue">
                  <template slot-scope="scope">
                    <span style="cursor:pointer;color:rgb(64,158,255)" @click="handleClick(scope.$index,scope.row,'tissue')">{{ scope.row.tissueId }}</span>
                  </template>
                </el-table-column>
              </el-table>
              <pagination
                v-show="total > 0"
                :total="total"
                :limit.sync="pageSize"
                :page.sync="pageNum" 
                @pagination="nowPage"
              />
              <div
                class="echart"
                id="chartHotname"
                style="margin-top: 50px; width: 100%; height: 400px; float: left"
              ></div>
            </div>
          </el-card>


        </div>

    </div>
    <el-drawer
            :title="DEtitle"
            :visible.sync="drawer"
            direction="rtl"
            size="20%"
            :modal='false'
          >
            <div v-for="(value, key) in detail" :key="key" style="margin: 10px;">
              <strong>{{ key }}</strong>: {{ value }}
            </div>
          </el-drawer>
  </div>

</template>

<script>
import * as echarts from 'echarts';
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
            message: "Rederence",
            trigger: "change",
          },
        ],
        version: [
          {
            required: true,
            message: "Version",
            trigger: "change",
          },
        ],
        geneId: [
          {
            required: true,
            message: "Gene ID",
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
            
            message: "Analysis",
            trigger: "change",
          },
        ],
        environment: [
          {
            
            message: "environment",
            trigger: "change",
          },
        ],
        germplasm: [
          {
            
            message: "Germplasm",
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
            
            message: "Analysis",
            trigger: "change",
          },
        ],
        environment: [
          {
            
            message: "environment",
            trigger: "change",
          },
        ],
        tissue: [
          {
            
            message: "tissue",
            trigger: "change",
          },
        ],
        population: [
          {
            
            message: "population",
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
            
            message: "Analysis",
            trigger: "change",
          },
        ],
        tissue: [
          {
            
            message: "tissue",
            trigger: "change",
          },
        ],
        population: [
          {
            
            message: "population",
            trigger: "change",
          },
        ],
        subgroup: [
          {
            
            message: "subgroup",
            trigger: "change",
          },
        ],
        germplasm: [
          {
            
            message: "Germplasm",
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
      exampleGene:"Zm00001eb000020,Zm00001eb000050,Zm00001eb000060,Zm00001eb000070",

      alldata:[],
      alldataNopage:[],
      detail:{},
      resultShow:true,

      drawer:false,
      DEtitle:"",

      loading:false,
      pageNum: 1,
      pageSize: 10,
      total:0
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
      this.tissue_filter_data["analysis"] = "RNAseq in denovoI";
      this.tissue_filter_data["environment"] = "Normal";
      this.tissue_filter_data["germplasm"] = "CT16683";
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
        // geneIds: [],
        // selects: [],
        strGeneIds:"",
        strSelects:'',
      };
      fullData.reference = this.formData.rederence;
      fullData.version = this.formData.version;
      fullData.strGeneIds=this.formData.geneId;
      fullData.pageNum=this.pageNum;
      fullData.pageSize=this.pageSize;

      let type=""
      if (this.dbxref_id == "tissue") {
        type="tissue"
        fullData.analysis = this.tissue_filter_data.analysis;
        fullData.environment = this.tissue_filter_data.environment;
        fullData.germplasm = this.tissue_filter_data.germplasm;
      } else if (this.dbxref_id == "germplasm") {
        type="germplasm"
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

      fullData.strSelects=this.compare_selector.reduce((acc, item) => [...acc, ...item.checkedop], []).join(",");
      
      // fullData={
      //   reference:"B73",
      //   version:"4.48.8",
      //   analysis:"Zhong Silin TFBS data w",
      //   environment:"Normal",
      //   geneIds:"Zm00002d004455,Zm00002d004246",
      //   selects:"B73_6-7_internode,B73_7-8_internode",
      //   germplasm:"CIMBL958",
      // }

      console.log(fullData)

      let result = await this.$API.multi.reqMultiFull(type,fullData);
      let resultall = await this.$API.multi.reqMultiFullNopage(type,fullData);

      if(result.code==200){
        this.alldata=result.rows
        this.total=result.total
      }

      if(resultall.code==200){
        this.alldataNopage=resultall.rows

      }

      if(resultall.code==200 && result.code==200) {
        this.resultShow=true
                
        this.$nextTick(()=>{
          this.showHotmap()
        })
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
    },
    async nowPage() {
      
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
        // geneIds: [],
        // selects: [],
        strGeneIds:"",
        strSelects:'',
      };
      fullData.reference = this.formData.rederence;
      fullData.version = this.formData.version;
      fullData.strGeneIds=this.formData.geneId;
      fullData.pageNum=this.pageNum;
      fullData.pageSize=this.pageSize;

      let type=""
      if (this.dbxref_id == "tissue") {
        type="tissue"
        fullData.analysis = this.tissue_filter_data.analysis;
        fullData.environment = this.tissue_filter_data.environment;
        fullData.germplasm = this.tissue_filter_data.germplasm;
      } else if (this.dbxref_id == "germplasm") {
        type="germplasm"
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

      fullData.strSelects=this.compare_selector.reduce((acc, item) => [...acc, ...item.checkedop], []).join(",");
      
      // fullData={
      //   reference:"B73",
      //   version:"4.48.8",
      //   analysis:"Zhong Silin TFBS data w",
      //   environment:"Normal",
      //   geneIds:"Zm00002d004455,Zm00002d004246",
      //   selects:"B73_6-7_internode,B73_7-8_internode",
      //   germplasm:"CIMBL958",
      // }

      console.log(fullData)

      let result = await this.$API.multi.reqMultiFull(type,fullData);

      if(result.code==200){
        this.alldata=result.rows
        this.total=result.total
        this.resultShow=true

      }
      
      this.loading=false
    },

    showHotmap(){

      let xdata=[]
      let ydata=[]

      var max=-Infinity
      var min=Infinity

      this.alldataNopage.forEach((v,index)=>{
        let genname=v.feature.uniquename
       
        xdata.push(genname) 
        
        var yyname
        if (this.dbxref_id == "tissue") {
          yyname=v.tissue.tissuePosition
        }
        else if(this.dbxref_id == "germplasm"){
          yyname=v.germplasm.name
        }else{
          yyname=v.environment.environmentDesc
        }
        
        ydata.push(yyname)

        max=Math.max(max,parseFloat(v.expressionValue.toFixed(4)))
        min=Math.min(min,parseFloat(v.expressionValue.toFixed(4)))

      })

      xdata=Array.from(new Set(xdata))
      ydata=Array.from(new Set(ydata))

      var data
      if (this.dbxref_id == "tissue") {
        data = this.alldataNopage.map( v => [xdata.indexOf(v.feature.uniquename),ydata.indexOf(v.tissue.tissuePosition),v.expressionValue])
      }
      else if(this.dbxref_id == "germplasm"){
        data = this.alldataNopage.map( v => [xdata.indexOf(v.feature.uniquename),ydata.indexOf(v.germplasm.name),v.expressionValue])
      }else{
        data = this.alldataNopage.map( v => [xdata.indexOf(v.feature.uniquename),ydata.indexOf(v.environment.environmentDesc),v.expressionValue])
      }
      

      console.log(data)
      console.log(xdata)
      console.log(ydata)
      console.log(max,min)

      const option = {
        xAxis: {
          type: "category",
          data: xdata,
        },
        yAxis: {
          type: "category",
          data: ydata,
        },
        tooltip: {},
        visualMap: {
          type: "piecewise",
          min: min,
          max: max,
          left: "right",
          top: "center",
          calculable: true,
          realtime: false,
          splitNumber: 10,
          minOpen: true,
          maxOpen: true,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
        },
        // visualMap: {
        //   min: 0,
        //   max: 0.5,
        //   calculable: true,
        //   realtime: false,
        //   inRange: {
        //     color: [
        //       "#313695",
        //       "#4575b4",
        //       "#74add1",
        //       "#abd9e9",
        //       "#e0f3f8",
        //       "#ffffbf",
        //       "#fee090",
        //       "#fdae61",
        //       "#f46d43",
        //       "#d73027",
        //       "#a50026",
        //     ],
        //   },
        // },
        series: [
          {
            name: "Gaussian",
            type: "heatmap",
            // data: this.chartHotData,
            data: data,
            emphasis: {
              itemStyle: {
                borderColor: "#333",
                borderWidth: 1,
              },
            },
            progressive: 1000,
            animation: false,
          },
        ],
        dataZoom: [
          {
            startValue: "0",
          },
          {
            type: "inside",
          },
        ],
        toolbox: {
          right: 50,
          feature: {
            saveAsImage: {},
          },
        },
      };
      const myChartHot = echarts.init(
        document.getElementById('chartHotname')
      );
      myChartHot.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChartHot.resize();
      });

    },
  },
};
</script>
<style scoped>
.app{
  background: #f2f2f2;
  height: 100%;
  width: 100%;
  margin-top:-20px;
  min-height: 1000px;
}
.content{
  width: 90%;
  /* min-width: 900px; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top:30px;
  margin-bottom:30px
}
.Multi {
  /* // margin-left: 30px;
  // width: 80%;
  // margin: 0 auto; */
}
.tryButton {
  color: #04afaf;
  border-color: #04afaf;
}
.co_se_item {
  margin-bottom: 30px;
}

.firstSearch{
  border-bottom: 1px solid #E6ECEC;
  padding:2px 20px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  background: #f7f8f1;
}
.compare{
  padding:2px 20px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  background: #F1F8F8;

}
.MulexpTitle{
  font-weight: bolder;
  color: #04afaf;
}
.compareDiv{
  border: 1px solid #88a1a1;
  margin-top: 10px;
  padding: 5px 10px;
}

::v-deep .el-radio__label{
    font-size: 15px;
    font-weight: bold;
  }

  ::v-deep .el-table .el-table__header-wrapper tr th {
  background-color: #40878f !important;
	color: rgb(255, 255, 255);
}
::v-deep .el-form-item__label{
    color: #337177;
  }
</style>
