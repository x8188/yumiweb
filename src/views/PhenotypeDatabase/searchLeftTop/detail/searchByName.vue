<template>
  <div class="all">
    <div class="chartLeft">
      <div class="detailed">{{ $i18n.t("pedigree") }}：{{ pedigree }}</div>
      <div class="detailed">来源：{{ newsource }}</div>
      <div class="detailed">日期：{{ year }}</div>
      <div class="detailed">杂优群：{{ group }}</div>
      <div class="detailed">描述：{{ describe }}</div>
      <div class="detailed">IBD链接：{{ interlinkage }}</div>
    </div>
    <div class="chartRight">
      <div id="main1" ref="chart" class="chartRight1"></div>
      <div id="main2" ref="chart" class="chartRight2"></div>
    </div>
    <div class="bar">
      <div id="graph1" ref="chart" class="bar1"></div>
      <div id="graph2" ref="chart" class="bar2"></div>
    </div>
    <div class="content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="code"
          label="系谱内部码"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="pedigree" label="系谱" :align="'center'" width="260">
        </el-table-column>
        <el-table-column
          prop="newsource"
          label="新来源"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="pastsource"
          label="旧来源"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="year" label="年份" width="100" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="location"
          label="地点"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="silking"
          label="吐丝期"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="dispersal"
          label="散粉期"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="mature"
          label="成熟期"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="height" label="株高" :align="'center'">
        </el-table-column>
        <el-table-column prop="earheight" label="穗位" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="malespikes"
          label="雄穗分枝数"
          width="100"
          :align="'center'"
        >
        </el-table-column>

        <el-table-column
          prop="spindlelength"
          label="雄花主轴长度"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="leaflength" label="穗上叶长" :align="'center'">
        </el-table-column>
        <el-table-column prop="leaflength" label="穗上叶宽" :align="'center'">
        </el-table-column>
        <el-table-column prop="stemdiameter" label="茎粗" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="rates"
          label="倒伏折射率之和(%)"
          width="140"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="rust" label="锈病(级)" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="stemrot"
          label="茎腐病(%)"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="roughdwarf" label="粗缩(%)" :align="'center'">
        </el-table-column>
        <el-table-column prop="hollow" label="空杆(%)" :align="'center'">
        </el-table-column>
        <el-table-column prop="plantsnum" label="株数" :align="'center'">
        </el-table-column>
        <el-table-column prop="blackpowder" label="黑粉" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="expression"
          label="果穗表现"
          width="200"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="spikelength" label="穗长" :align="'center'">
        </el-table-column>
        <el-table-column prop="spikewidth" label="穗粗" :align="'center'">
        </el-table-column>
        <el-table-column prop="row" label="穗行数" :align="'center'">
        </el-table-column>
        <el-table-column prop="kernels" label="行粒数" :align="'center'">
        </el-table-column>
        <el-table-column prop="axiscolor" label="轴色" :align="'center'">
        </el-table-column>
        <el-table-column prop="grainweight" label="百粒重" :align="'center'">
        </el-table-column>
        <el-table-column prop="grainlength" label="籽粒长" :align="'center'">
        </el-table-column>
        <el-table-column prop="grainwidth" label="籽粒宽" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="yield"
          label="小区标准产量(KG)"
          width="140"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="seedyield" label="出籽率" :align="'center'">
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
  getPhenoTypeByName,
  getPhenoTypeDataByName,
  getPhenoTypeDataMeanByName,
  getPhenoTypeRateByName,
  getPhenoTypeRateMeanByName,
} from "@/api/jointCreation/searchLeftTop/index";
import * as echarts from "echarts";
import en from "@/locales/en";
import moment from "moment";
export default {
  data() {
    return {
      pedigree: "",
      newsource: "",
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
    };
  },
  mounted() {
    this.getData().then(() => {
      this.renderCharts();
    });
  },
  methods: {
    getData() {
      return new Promise((resolve) => {
        const pedigree = this.$route.query.pedigree;
        const query = {
          pedigree:encodeURIComponent(pedigree),
        };
        this.query = pedigree
        console.log(query, "query");
        resolve()

        // 获取左上角数据
        searchByName(query).then((res) => {
          const data = res.data[0];
          this.pedigree = data.pedigree;
          this.newsource = data.newsource;
          this.year = data.year;
          this.group = data.group;
          this.describe = data.describe;
          this.interlinkage = data.interlinkage;
          this.chartsData1 = [data.silking, data.dipersal, data.mature];
          this.chartsData2 = [data.rates, data.stemrot];
          resolve();
        });
        // 获取mor雷达图数据
        getMorByName(query).then((res) => {
          let chartData = res.data;
          this.chartsData3 = [
            chartData.height,
            chartData.stemDiameter,
            chartData.leafWidth,
            chartData.leafLength,
            chartData.spindleLength,
            chartData.maleSpikes,
            chartData.earHeight,
          ];
          resolve();
        });
        // 获取mor平均值数据
        getMorMeanByName(query).then((res) => {
          let chartData = res.data;
          this.chartsData4 = [
            chartData.height,
            chartData.stemDiameter,
            chartData.leafWidth,
            chartData.leafLength,
            chartData.spindleLength,
            chartData.maleSpikes,
            chartData.earHeight,
          ];
          resolve();
        });
        // 获取agr雷达图数据
        getAgrByName(query).then((res) => {
          let chartData = res.data;
          this.chartsData5 = [
            chartData.spikeLength,
            chartData.spikeWidth,
            chartData.row,
            chartData.kernels,
            chartData.grainWeight,
            chartData.grainLength,
            chartData.grainWidth,
            chartData.yield,
            chartData.seedYield,
          ];
          resolve();
          console.log(this.chartsData5, "this.chartsData5");
        });
        // 获取agr平均值数据
        getAgrMeanByName().then((res) => {
          let chartData = res.data;
          this.chartsData6 = [
            chartData.spikeLength,
            chartData.spikeWidth,
            chartData.row,
            chartData.kernels,
            chartData.grainWeight,
            chartData.grainLength,
            chartData.grainWidth,
            chartData.yield,
            chartData.seedYield,
          ];
          resolve();
        });
        // 获取y轴为日期柱状图数据
        getPhenoTypeDataByName(query).then((res) => {
          let chartData = res.data;
          this.chartsData7 = [
            chartData.silking,
            chartData.dispersal,
            chartData.mature,
          ];
          resolve();
        });
        // 获取y轴为日期柱状图平均值数据
        getPhenoTypeDataMeanByName().then((res) => {
          let chartData = res.data;
          this.chartsData8 = [
            chartData.silking,
            chartData.dispersal,
            chartData.mature,
          ];
          resolve();
        });
        // 获取y轴为数值柱状图数据
        getPhenoTypeRateByName(query).then((res) => {

          let chartData = res.data[0];
          console.log(chartData,'res.data');
          this.chartsData9 = [
            chartData.rates,
            chartData.stemrot,
            chartData.roughdwarf,
          ];
          console.log(this.chartsData9,'this.chartsData9');
          resolve();
        });
        // 获取y轴为数值柱状图平均值数据
        getPhenoTypeRateMeanByName().then((res) => {
          let chartData = res.data;
          console.log(chartData,'chartData');
          this.chartsData10 = [
            chartData.rates,
            chartData.stemrot,
            chartData.roughdwarf,
          ];
          console.log(this.chartsData10,'this.chartsData10');
          resolve();
        });
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

          resolve();
        });
      });
    },
     renderCharts(){
      // 等待所以数据请求成功后再渲染echarts
      Promise.all([
        getMorByName(),
        getMorMeanByName(),
        getAgrByName(),
        getAgrMeanByName(),
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
              text: "Morphological",
              textStyle: {
                fontSize: 14,
              },
              left: "left",
              top:"top",
            },

            legend: {
              data: [this.query, "平均值"],
              textStyle: {
                fontSize: 10,
              },
              left: 15,
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
                { name: "株高" },
                { name: "茎粗" },
                { name: "穗上叶宽 " },
                { name: "穗上叶长" },
                { name: "雄花主轴长度" },
                { name: "雄穗分枝数" },
                { name: "穗位" },
              ],
            },

            tooltip: {
              trigger: "item",
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
              axisPointer: {
                type: "shadow",
              },
            },
            legend: {
              data: [this.query, "平均值"],
              textStyle: {
                fontSize: 10,
              },
              left: 15,
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
                    name:this.query,
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

          //日期柱状图
          var app = {};
          var chartDom3 = document.getElementById("graph1");
          var myChart3 = echarts.init(chartDom3);
          var option;
          const promises = [];
          if (Array.isArray(this.chartsData7) && this.chartsData7.length > 0) {
            var formattedData1 = this.chartsData7.map(function (dateString) {
              if(dateString){
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
          if (Array.isArray(this.chartsData8) && this.chartsData8.length > 0) {
            var formattedData2 = this.chartsData8.map(function (dateString) {
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
          if (promises.length > 0) {
            Promise.all(promises).then((results) => {
              console.log(results, "jjjj");
            });
          }
          var formattedData3 = formattedData1.concat(formattedData2);
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
          option = {
            legend: {
              data: [this.query, "平均值"],
            },
            xAxis: {
              type: "category",
              data: ["吐丝期", "散粉期", "成熟期"],
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
              },
              boundaryGap: false,
              data: formattedData,
            },
            series: [
              {
                type: "bar",
                barWidth: 30,
                data: [formattedData[2], formattedData[3], formattedData[5]],
                color: "#ED7D31",
                name: this.query,
              },
              {
                type: "bar",
                barWidth: 30,
                data: [formattedData[0], formattedData[1], formattedData[4]],
                color: "#4472C4",
                name: "平均值",
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
            legend: {
              data: [this.query, "平均值"],
            },
            xAxis: {
              type: "category",
              data: ["倒伏倒折率之和(%)", "茎腐病(%)", "粗缩(%)"],
            },
            yAxis: {
              type: "value",
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
  width: 30%;
  font-size: 20px;
  /* letter-spacing: 0.1em; */
  line-height: 2;
  padding-left: 40px;
  padding-top: 30px;
  height: 420px;
  margin: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.chartRight {
  display: flex;
  width: 65%;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.chartRight1 {
  /* width: 55%; */
  margin-top: 20px;
  /* margin-left: 10%; */
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  flex-wrap: wrap;
  margin-left: 50px;
  width: 45%;
}
.chartRight2 {
  /* width: 55%; */
  margin-top: 20px;
  margin-left: 10%;

  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  flex-wrap: wrap;
  margin-left: 50px;
  width: 45%;
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
  margin: 0 auto;
}
.bar1 {
  width: 45%;
  height: 100%;
  margin-top: 20px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  margin-left: 50px;
}
.bar2 {
  width: 45%;
  height: 100%;
  margin-top: 20px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  margin-left: 50px;
}
#main1 {
  width: 400px;
  height: 400px;
}
#main2 {
  width: 400px;
  height: 400px;
}
#graph1 {
  width: 870px;
  height: 500px;
}
#graph2 {
  width: 700px;
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
