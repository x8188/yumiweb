<template>
  <div class="all" v-loading="loading">
    <div class="chartLeft">
      <div class="detailed">{{ $i18n.t("pedigree") }}：{{ pedigree }}</div>
      <div class="detailed">{{ $i18n.t("pedigreeSource1") }} ：{{ pedigreeSource1 }}</div>
      <div class="detailed"> {{ $i18n.t("pedigreeSource2") }} ： {{ pedigreeSource2 }}</div>
      <div class="detailed">{{ $i18n.t("year") }} ： {{ year }}</div>
      <div class="detailed">{{ $i18n.t("group") }} ： {{ group }}</div>
      <div class="detailed">{{ $i18n.t("describe") }} ： {{ describe }}</div>
      <div class="detailed">{{ $i18n.t("interlinkage") }} ： {{ interlinkage }}</div>
    </div>
    <div class="chartMid">
      <div id="main1" ref="chart" class="chartRight1"></div>
    </div>
    <div class="chartRight">
      <div id="main2" ref="chart" class="chartRight2"></div>
      <div id="main3" ref="chart" class="chartRight3"></div>
    </div>
    <div class="bar">
      <div id="graph1" ref="chart" class="bar1"></div>
      <div id="graph2" ref="chart" class="bar2"></div>
    </div>
    <div class="content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="pedid"
          label="系谱内部码"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="pedigree"
          label="系谱"
          width="280"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="year" label="年份" width="120" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="location"
          label="地区"
          width="120"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          :fixed="false"
          prop="pedigreeSource1"
          label="来源1"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          :fixed="false"
          prop="pedigreeSource2"
          label="来源2"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="plantHeight" label="株高" :align="'center'">
        </el-table-column>
        <el-table-column prop="earHeight" label="穗位" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="tasselLengthTop"
          label="雄穗最上面节间长度"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="tasselBranchNumber1"
          label="雄一级侧枝数目"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="seedlingPotential"
          label="苗势"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="tasselLength2"
          label="雄穗倒数第二侧枝长度"
          :align="'center'"
          width="250"
        >
        </el-table-column>
        <el-table-column
          prop="tasselPosture2"
          label="雄穗倒数第二侧枝姿势"
          :align="'center'"
          width="250"
        >
        </el-table-column>
        <el-table-column
          prop="tasselAngle2"
          label="雄穗主轴与倒数第二侧枝夹角"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="tasselLength3"
          label="雄穗最低位侧枝以上主轴长度"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="tasselLength4"
          label="雄穗最高位侧枝以上主轴长度"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="tasselDensity"
          label="雄穗小穗密度"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="tasselWeight1"
          label="雄穗鲜重"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="tasselWeight2"
          label="雄穗干重"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="tasselFloretNumber"
          label="穗小花数"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="pollenQuantity" label="花粉量" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="rootDistribution"
          label="根分布"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="rootLayer" label="根层" :align="'center'">
        </el-table-column>
        <el-table-column prop="rootThickness" label="根粗细" :align="'center'">
        </el-table-column>
        <el-table-column prop="rootAngle" label="根夹角" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="femaleRootDistribution"
          label="母根分布"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="maleRootDistribution"
          label="父根分布"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="leafShape1"
          label="第一叶顶端形状"
          :align="'center'"
          width="250"
        >
        </el-table-column>
        <el-table-column prop="leafPosture1" label="顶叶叶姿" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="leafAngle"
          label="上位穗上叶与茎杆夹角"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="leafPosture2"
          label="上位穗上叶姿态"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="leafNumber1"
          label="成株叶片数"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="earBearingPosture"
          label="果穗着生姿态"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="huskTier" label="苞叶层数" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="huskThickness1"
          label="苞叶总厚度"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="huskThickness2"
          label="苞叶厚度"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="silkColor"
          label="花丝花青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="antherColor"
          label="花药花青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="stemRootColor"
          label="茎支持根花青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column prop="rachisColor" label="穗轴颜色" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="sheathColor1"
          label="第一叶鞘青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="glumeColor"
          label="颖片基部青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column prop="leafColor1" label="幼苗叶色" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="grainColor2"
          label="籽粒背面颜色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column prop="grainColor" label="籽粒颜色" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="tasselBranchNumber"
          label="雄穗分枝数"
          width="200"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="leafLength" label="穗上叶长" :align="'center'">
        </el-table-column>
        <el-table-column prop="leafWidth" label="穗上叶宽" :align="'center'">
        </el-table-column>
        <el-table-column prop="stemDiameter" label="茎粗" :align="'center'">
        </el-table-column>
        <el-table-column prop="dateHarvested" label="收获期" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="datePlanted" label="播种期" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="daysToAnther" label="散粉期" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="dsysToMaturity" label="成熟期" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="daysToSeedling" label="出苗期" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="daysToSilk" label="吐丝期" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="daysToTassel" label="抽雄期" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="ustilagoMaydis" label="综合抗性" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="maizeEarRot" label="叶斑病（级）" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="maizeSheathBlight" label="玉米螟" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="southernCornRust" label="穗腐病" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="leafSpotDisease" label="纹枯病（级）" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="maizeBorer" label="大斑病" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="northernLeafBlight" label="锈病（级）" :align="'center'" width="150">
        </el-table-column>
        <el-table-column prop="comprehensiveResistance" label="瘤黑粉" :align="'center'" width="150">
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>
import {
  searchByName,
  getMorByName,
  getMorMeanByName,
  getAgrByName,
  getAgrMeanByName,
  getYieldByName,
  getYieldMeanByName,
  getPhenoTypeByName,
  getPhenoTypeDataByName,
  getPhenoTypeDataMeanByName,
  getPhenoTypeRateByName,
  getPhenoTypeRateMeanByName,
} from "@/api/jointCreation/searchLeftTop/index";
import * as echarts from "echarts";
import en from "@/locales/phenotypeDB/en";
import zh from "@/locales/phenotypeDB/zh";
import moment from "moment";
export default {
  data() {
    return {
      pedigree: "",
      pedigreeSource1:"",
      pedigreeSource2:"",
      year: "",
      group: "",
      describe: "",
      interlinkage: "",
      stemDiameter: "",
      height: "",
      leafWidth: "",
      leafLength: "",
      femalespikes: "",
      earHeight: "",
      spikelength: "",
      code: "",
      new: "",
      old: "",
      location: "",
      silking: "",
      dipersal: "",
      mature: "",
      rates: "",
      rust: "",
      stemrot: "",
      roughdwarf: "",
      spindleLength: "",
      tableData: [],
      chartsData1: [],
      chartsData2: [],
      chartsData3: [],
      chartsData4: [],
      chartsData5: [],
      chartsData6: [],
      chartsData7: [],
      chartsData8: [],
      chartsData9: [],
      chartsData10: [],
      loading: false,
    };
  },

  watch: {
    '$i18n.locale'() {
      this.updateChart(); // 当语言变化时更新图表
    },
  },
  mounted() {
    this.getData().then(() => {
      this.renderCharts();
      this.loading = true;
    });
  },
  methods: {
    getData() {

      return new Promise((resolve) => {
        const pedigree = this.$route.query.pedigree;
        const query = {
          pedigree: encodeURIComponent(pedigree),
        };
        this.query = pedigree;
        resolve();
        this.loading = true;

        // 获取左上角数据
        searchByName(query).then((res) => {
          // if (res.data.length === 0) {
          //   this.$message.error("该系谱暂无数据");
          //   setTimeout(() => {
          //     this.$router.go(-1); // 返回上一页
          //   }, 3000);
          //   return;
          // }
          const data = res.data[0];

          this.pedigree = data.pedigree;
          this.pedigreeSource1 = data.pedigreeSource1;
          this.pedigreeSource2 = data.pedigreeSource2;
          this.year = data.year;
          this.group = data.group;
          this.describe = data.describe;
          this.interlinkage = data.interlinkage;
          this.chartsData1 = [data.silking, data.dipersal, data.mature];
          this.chartsData2 = [data.rates, data.stemrot];
          resolve();
        }).finally(() => {
          this.loading = false;
        })
        // 获取mor雷达图数据
        getMorByName(query).then((res) => {
          let chartData = res.data;
          this.chartsData3 = [
            chartData.leafLength,
            chartData.leafWidth,
            chartData.plantHeight,
            chartData.earHeight,
            chartData.tasselBranchNumber,
            chartData.rootLayer,
            chartData.leafNumber1,
            chartData.stemDiameter,
            chartData.silkColor,
            chartData.antherColor,
            chartData.rachisColor,
            chartData.grainColor,
          ];
          console.log(this.chartsData3, "this.chartsData3");
          resolve();

        }).finally(() => {
          this.loading = false;
        })
        // 获取mor平均值数据
        getMorMeanByName(query).then((res) => {
          let chartData = res.data;
          this.chartsData4 = [
            chartData.leafLength,
            chartData.leafWidth,
            chartData.plantHeight,
            chartData.earHeight,
            chartData.tasselBranchNumber,
            chartData.rootLayer,
            chartData.leafNumber1,
            chartData.stemDiameter,
            chartData.silkColor,
            chartData.antherColor,
            chartData.rachisColor,
            chartData.grainColor,
          ];
          resolve();
        }).finally(() => {
          this.loading = false;
        })
        // 获取agr雷达图数据
        getAgrByName(query).then((res) => {
          let chartData = res.data;
          this.chartsData5 = [
            chartData.fieldEvaluation,
            chartData.laboratoryEvaluation,
            chartData.emptyStalkNumber,
            chartData.daysToTassel,
            chartData.daysToSeedling,
            chartData.daysToMaturity,
            chartData.datePlanted,
            chartData.daysToAnther,
            chartData.daysToSilk,
          ];
          resolve();
          console.log(this.chartsData5, "this.chartsData5");
        }).finally(() => {
          this.loading = false;
        })
        // 获取agr平均值数据
        getAgrMeanByName().then((res) => {
          let chartData = res.data;
          this.chartsData6 = [
            chartData.fieldEvaluation,
            chartData.laboratoryEvaluation,
            chartData.emptyStalkNumber,
            chartData.daysToTassel,
            chartData.daysToSeedling,
            chartData.daysToMaturity,
            chartData.datePlanted,
            chartData.daysToAnther,
            chartData.daysToSilk,
          ];
          resolve();
        }).finally(() => {
          this.loading = false;
        })
        // 获取yield雷达图数据
        getYieldByName(query).then((res) => {
          let chartData = res.data[0];
          this.chartsData11 = [
            chartData.grainLength,
            chartData.grainWidth,
            chartData.earLength,
            chartData.earDiameter,
            chartData.kernelRowNumber,
            chartData.kernelNumbersPerRow,
            chartData.grainWeight,
            chartData.yield,
            chartData.kernelNumbersPerEar,
            chartData.earKernelWeight,
            chartData.grainWaterContent,
            chartData.kernelPercentage,
          ];
          resolve();
          console.log(this.chartsData11, "this.chartsData11");
        }).finally(() => {
          this.loading = false;
        })
        // 获取yield平均值数据
        getYieldMeanByName().then((res) => {
          let chartData = res.data;
          this.chartsData12 = [
            chartData.grainLength,
            chartData.grainWidth,
            chartData.earLength,
            chartData.earDiameter,
            chartData.kernelRowNumber,
            chartData.kernelNumbersPerRow,
            chartData.grainWeight,
            chartData.yield,
            chartData.kernelNumbersPerEar,
            chartData.earKernelWeight,
            chartData.grainWaterContent,
            chartData.kernelPercentage,
          ];
        }).finally(() => {
          this.loading = false;
        })
        // 获取y轴为日期柱状图数据
        getPhenoTypeDataByName(query)
          .then((res) => {
            let chartData = res.data;
            console.log(chartData, "tttt");
            this.chartsData7 = [
              chartData.dateHarvested,
              chartData.datePlanted,
              chartData.daysToAnther,
              chartData.daysToMaturity,
              chartData.daysToSeedling,
              chartData.daysToSilk,
              chartData.daysToTassel,
              chartData.growthPeriod,
            ];

            console.log(this.chartsData7, "this.chartsData7");
            resolve();
          })
          // .catch(() => {
          //   this.$message.warning("暂无柱状图数据");
          //   setTimeout(() => {
          //     // 返回上一页
          //   }, 3000);
          // })
          .finally(() => {
          this.loading = false;
        })
        // 获取y轴为日期柱状图平均值数据
        getPhenoTypeDataMeanByName()
          .then((res) => {
            let chartData = res.data;
            this.chartsData8 = [
              chartData.dateHarvested,
              chartData.datePlanted,
              chartData.daysToAnther,
              chartData.daysToMaturity,
              chartData.daysToSeedling,
              chartData.daysToSilk,
              chartData.daysToTassel,
              chartData.growthPeriod,
            ];
            console.log(this.chartsData8, "this.chartsData8");
            resolve();
          })
          // .catch(() => {
          //   this.$message.warning("暂无平均值数据");
          // })
          .finally(() => {
          this.loading = false;
        })
        // 获取y轴为数值柱状图数据
        getPhenoTypeRateByName(query).then((res) => {
          let chartData = res.data[0];
          console.log(chartData, "res.datahj");
          this.chartsData9 = [
            chartData.ustilagoMaydis,
            chartData.maizeEarRot,
            chartData.maizeSheathBlight,
            chartData.southernCornRust,
            chartData.leafSpotDisease,
            chartData.maizeBorer,
            chartData.northernLeafBlight,
            chartData.comprehensiveResistance,
          ];
          console.log(this.chartsData9, "this.chartsData9");
          resolve();
        }).finally(() => {
          this.loading = false;
        })
        // 获取y轴为数值柱状图平均值数据
        getPhenoTypeRateMeanByName().then((res) => {
          let chartData = res.data;
          console.log(chartData, "chartData");
          this.chartsData10 = [
            chartData.ustilagoMaydis,
            chartData.maizeEarRot,
            chartData.maizeSheathBlight,
            chartData.southernCornRust,
            chartData.leafSpotDisease,
            chartData.maizeBorer,
            chartData.northernLeafBlight,
            chartData.comprehensiveResistance,
          ];
          console.log(this.chartsData10, "this.chartsData10");
          resolve();
        }).finally(() => {
          this.loading = false;
        })
        // 获取下方表格数据
        getPhenoTypeByName(query).then((res) => {
          let chartData = res.data;
          chartData = chartData.map((item) => {
            for (let key in item) {
              if (item[key] === null) {
                item[key] = "-";
              }
            }
            return item;
          });
          this.tableData = chartData;
          console.log(this.tableData, "this.tableData");

          resolve();
        }).finally(() => {
          this.loading = false;
        })
      });
    },

    renderCharts() {
      // 等待所以数据请求成功后再渲染echarts
      Promise.all([
        getMorByName(),
        getMorMeanByName(),
        getAgrByName(),
        getAgrMeanByName(),
        getYieldByName(),
        getYieldMeanByName(),
        getPhenoTypeByName(),
        // getPhenoTypeDataByName(),
        getPhenoTypeDataMeanByName(),
        getPhenoTypeRateByName(),
        getPhenoTypeRateMeanByName(),
      ]).then(
        ([
          chartsData3,
          chartsData4,
          chartsData5,
          chartsData6,
          chartsData7,
          chartsData8,
          chartsData9,
          chartsData10,
        ]) => {
          //Morphologicall雷达图
          var chartDom1 = document.getElementById("main1");
          var myChart1 = echarts.init(chartDom1);
          var option;

          (option = {
            title: {
              text: this.$t(en.Morphological) ,
              textStyle: {
                fontSize: 14,
              },
              left: "left",
              top: "top",
            },

            legend: {
              data: [this.query, "平均值"],
              textStyle: {
                fontSize: 10,
              },
              left: 1,
              top: 20,
            },
            label: {
              show: true,
              color: "#f2f2f2",
              fontSize: 6,
            },
            radar: {
              axisLabel: {
                show: true,
                formatter: function (value) {
                  if (value === 0) {
                    return "";
                  }
                  return `${value}`;
                },
                textStyle: {
                  textAlign: "left", // 设置标签文本左对齐
                },
              },

              radius: "60%", // 设置雷达图的半径大小为 60%
              indicator: [
                { name: "穗上叶长" },
                { name: "穗上叶宽" },
                { name: "株高 " },
                { name: "穗位" },
                { name: "雄花分枝数" },
                { name: "根层" },
                { name: "成株叶片数" },
                { name: "茎粗" },
                { name: "花丝花青甙显色" },
                { name: "花药花青甙显色" },
                { name: "穗轴颜色" },
                { name: "籽粒颜色" },
              ],
            },

            tooltip: {
              trigger: "item",
              textStyle: {
                align: "left",
              },
              axisPointer: {
                type: "shadow",
              },
            },
            series: [
              {
                type: "radar",

                data: [
                  {
                    value: this.chartsData3,
                    name: this.query,
                  },
                  {
                    value: this.chartsData4,
                    name: "平均值",
                  },
                ],
              },
            ],
          }),
            option && myChart1.setOption(option);

          //Agronomical雷达图
          var chartDom2 = document.getElementById("main2");
          var myChart2 = echarts.init(chartDom2);
          var option2;
          option2 = {
            title: {
              text: "Agronomical",
              textStyle: {
                fontSize: 14,
              },
              left: "left",
              top: "top",
            },
            tooltip: {
              trigger: "item",
              textStyle: {
                align: "left",
              },
              axisPointer: {
                type: "shadow",
              },
            },
            legend: {
              data: [this.query, "平均值"],
              textStyle: {
                fontSize: 10,
              },
              left: 1,
              top: 20,
            },
            label: {
              show: true,
              color: "#f2f2f2",
              fontSize: 6,
            },
            radar: {
              axisLabel: {
                show: true,
                formatter: function (value) {
                  if (value === 0) {
                    return "";
                  }
                  return `${value}`;
                },
              },
              radius: "60%", // 设置雷达图的半径大小为 60%
              indicator: [
                { name: "穗长" },
                { name: "出籽率" },
                { name: "小区标准产量" },
                { name: "籽粒宽" },
                { name: "籽粒长" },
                { name: "百粒重" },
                { name: "行粒数" },
                { name: "穗行数" },
                { name: "穗粗" },
              ],
            },
            series: [
              {
                type: "radar",
                data: [
                  {
                    value: this.chartsData5,
                    name: this.query,
                  },
                  {
                    value: this.chartsData6,
                    name: "平均值",
                  },
                ],
              },
            ],
          };

          option2 && myChart2.setOption(option2);
          // Yield雷达图
          var chartDom3 = document.getElementById("main3");
          var myChart3 = echarts.init(chartDom3);
          var option3;
          option3 = {
            title: {
              text: "Yield",
              textStyle: {
                fontSize: 14,
              },
              left: "left",
              top: "top",
            },
            tooltip: {
              trigger: "item",
              textStyle: {
                align: "left",
              },
              axisPointer: {
                type: "shadow",
              },
            },
            legend: {
              data: [this.query, "平均值"],
              textStyle: {
                fontSize: 10,
              },
              left: 1,
              top: 20,
            },
            label: {
              show: true,
              color: "#f2f2f2",
              fontSize: 6,
            },
            radar: {
              axisLabel: {
                show: true,
                formatter: function (value) {
                  if (value === 0) {
                    return "";
                  }
                  return `${value}`;
                },
              },
              radius: "60%", // 设置雷达图的半径大小为 60%
              indicator: [
                { name: "粒长" },
                { name: "粒宽" },
                { name: "穗长" },
                { name: "穗粗" },
                { name: "穗行数" },
                { name: "行粒数" },
                { name: "百粒重" },
                { name: "小区产量(标准水分)" },
                { name: "穗粗" },
              ],
            },
            series: [
              {
                type: "radar",
                data: [
                  {
                    value: this.chartsData11,
                    name: this.query,
                  },
                  {
                    value: this.chartsData12,
                    name: "平均值",
                  },
                ],
              },
            ],
          };

          option3 && myChart3.setOption(option3);
          //日期柱状图
          var app = {};
          var chartDom3 = document.getElementById("graph1");
          var myChart3 = echarts.init(chartDom3);
          var option;
          const promises = [];
          let formattedData1 = [];
          let formattedData2 = [];
          if (Array.isArray(this.chartsData7) && this.chartsData7.length > 0) {
            formattedData1 = this.chartsData7.map(function (dateString) {
              if (dateString) {
                var dateParts = dateString.split("-");
                var year = dateParts[0];
                var month = dateParts[1];
                var day = dateParts[2];
                if (month.length === 1) {
                  month = "0" + month;
                }
                if (day.length === 1) {
                  day = "0" + day;
                }
                var formattedDate = year + "/" + month + "/" + day;
                return formattedDate;
              }
            });
            promises.push(Promise.resolve(formattedData1));
          }
          formattedData1 = formattedData1.map((date) => {
            return date.replace(/\/(\d{2})\/(\d{2})/, (match, p1, p2) => {
              return `/${parseInt(p1, 10)}/${parseInt(p2, 10)}`;
            });
          });

          if (Array.isArray(this.chartsData8) && this.chartsData8.length > 0) {
            formattedData2 = this.chartsData8.map(function (dateString) {
              var dateParts = dateString.split("-");
              var year = dateParts[0];
              var month = dateParts[1];
              var day = dateParts[2];
              if (month.length === 1) {
                month = "0" + month;
              }
              if (day.length === 1) {
                day = "0" + day;
              }
              var formattedDate = year + "/" + month + "/" + day;
              return formattedDate;
            });
            promises.push(Promise.resolve(formattedData2));
          }
          formattedData2 = formattedData2.map((date) => {
            return date.replace(/\/(\d{2})\/(\d{2})/, (match, p1, p2) => {
              return `/${parseInt(p1, 10)}/${parseInt(p2, 10)}`;
            });
          });
          console.log(formattedData2, "formatteddata2");

          if (promises.length > 0) {
            Promise.all(promises).then((results) => {
              console.log(results);
            });
          }
          let formattedData3 = formattedData1.concat(formattedData2);
          const formattedData4 = formattedData3.map(
            (dateString) => new Date(dateString)
          );
          const minDate = new Date(Math.min(...formattedData4));
          minDate.setDate(minDate.getDate() - 30);
          const maxDate = new Date(Math.max(...formattedData4));
          maxDate.setDate(maxDate.getDate() + 30);
          const formattedData5 = formattedData4.sort((a, b) => a - b);
          const formattedData = formattedData5.map(
            (date) =>
              `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
          );
          console.log(formattedData, "oopo");
          var uniqueData = [...new Set(formattedData)];
          if (uniqueData[0] !== "0") {
            uniqueData.unshift("0");
          }
          console.log(uniqueData, "uniqueData");
          option = {
            title: {
              text: "Growth period",
              textStyle: {
                fontSize: 16,
                color:"#606266"
              },
              left: "left",
              top: "top",
            },
            legend: {
              data: [this.query, "平均值"],
            },
            xAxis: {
              type: "category",
              data: [
                "收获期",
                "播种期",
                "散粉期",
                "成熟期",
                "出苗期",
                "吐丝期",
                "抽雄期",
                "生育期",
              ],
            },

            yAxis: {
              type: "category",
              splitLine: {
                show: true,
              },
              axisLabel: {
                formatter: function (value, index) {
                  if (index === 0) {
                    return "0"; // 或其他适当的文本
                  } else {
                    return value;
                  }
                },
                rotate: 30,
              },
              min: 0,
              boundaryGap: false,
              data: uniqueData,
            },
            series: [
              {
                type: "bar",
                barWidth: 30,
                data: formattedData1,
                color: "#ED7D31",
                name: this.query,
              },
              {
                type: "bar",
                barWidth: 30,
                data: formattedData2,
                color: "#4472C4",
                name: "平均值",
              },
            ],
            dataZoom: [
              {
                // 水平拉伸
                type: "slider",
                start: 0, // 默认数据初始选择范围为100%
                end: 100,
              },
            ],
          };
          option && myChart3.setOption(option);
          // y轴为数值的柱状图
          var app = {};
          var chartDom4 = document.getElementById("graph2");
          var myChart4 = echarts.init(chartDom4);
          var option;

          option = {
            title: {
              text: "Biotic Stress ",
              textStyle: {
                fontSize: 16,
                color:"#606266",
              },
              left: "left",
              top: "top",
            },

            legend: {
              data: [this.query, "平均值"],
            },
            dataset: {
              source: [],
            },

            xAxis: {
              type: "category",
              data: [
                "综合抗性",
                "叶斑病（级）",
                "玉米螟",
                "穗腐病",
                "纹枯病（级）",
                "大斑病",
                "锈病（级）",
                "瘤黑粉",
              ],
            },
            yAxis: {
              type: "value",
              axisLabel: {
                rotate: 45,
              },
            },
            series: [
              {
                type: "bar",
                name: this.query,
                barWidth: 30,
                data: this.chartsData9,
                color: "#ED7D31",
              },
              {
                type: "bar",
                name: "平均值",
                barWidth: 30,
                data: this.chartsData10,
                color: "#4472C4",
              },
            ],
            dataZoom: [
              {
                // 水平拉伸
                type: "slider",
                start: 0, // 默认数据初始选择范围为100%
                end: 100,
              },
            ],
          };
          option && myChart4.setOption(option);
        }
      );

    },

    
  },
};
</script>
<style scoped>
.all {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.chartLeft {
  width: 40%;
  font-size: 20px;
  background-color: rgb(223, 247, 223);
  line-height: 2;
  padding-left: 40px;
  padding-top: 30px;
  height: 400px;
  /* margin: 20px; */
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.chartMid {
  width: 45%;
  height: 400px;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.chartRight {
  display: flex;
  width: 93%;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.chartRight1 {
  width: 75%;
  margin-top: 20px;
  margin: 0 auto;
  margin-left: 30%;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  flex-wrap: wrap;
  margin-left: 100px;
  /* width: 45%; */
}
.chartRight2 {
  width: 100%;
  margin-top: 20px;
  margin-left: 250px;
  flex-wrap: wrap;
  margin-left: 50px;
  border-radius: 10px;
}
.chartRight3 {
  width: 100%;
  margin-top: 20px;
  margin-left: 50px;
  flex-wrap: wrap;
  margin-left: 100px;
  border-radius: 10px;
}
.bar {
  width: 100%;
  /* position: absolute; */
  right: 20px;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 50px;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* margin: 0 auto; */
}
.bar1 {
  width: 50%;
  height: 100%;
  margin-top: 20px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  margin-left: 20px;
}
.bar2 {
  width: 45%;
  height: 100%;
  margin-top: 20px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  /* margin-left: 30px; */
}
#main1 {
  width: 450px;
  height: 450px;
}
#main2 {
  width: 500px;
  height: 500px;
}
#main3 {
  width: 500px;
  height: 500px;
}
#graph1 {
  width: 700px;
  height: 500px;
}
#graph2 {
  width: 800px;
  height: 500px;
}
.detailed {
  margin: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.content {
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
}
/* td.el-table_1_column_1.el-table__cell{
  width: 20px !important;
  height: 20px !important;
} */
</style>
