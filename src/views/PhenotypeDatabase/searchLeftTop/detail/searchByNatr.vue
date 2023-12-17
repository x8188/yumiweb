<template>
  <div class="allNatr">
    <div class="top-chart">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="newSource" label="新来源" :align="'center'">
        </el-table-column>
        <el-table-column prop="pedigree" label="系谱" :align="'center'">
        </el-table-column>
        <el-table-column prop="pastSource" label="旧来源" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="trait"
          :label=translatedTraitLabel
          :align="'center'"
          width="140"
        >
        </el-table-column>
      </el-table>
    </div>
    <div id="main" ref="chart" class="bottom-chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

import ecStat from "echarts-stat";
import {
  searchByNatr,
  searchChartByNatr,
} from "@/api/jointCreation/searchLeftTop";
export default {
  data() {
    return {
      trait: "",
      tableData: [],
      chartNatrData: [],
    };
  },
  computed: {
    translatedTraitLabel() {
      // 中英文转换逻辑
      const translationMap = {
        // 中文 -> 英文 映射关系
        'height': '株高',
        'silking':'吐丝期',
        'dispersal':'散粉期',
        'mature':'成熟期',
        'earheight':'穗位',
        'maleSpikes':'雄穗分枝数',
        'malespikes':'雄穗分枝数',
        'spindlelength':'雄花主轴长度',
        'spindleLength':'雄花主轴长度',
        'leaflength':'穗上叶长',
        'leafLength':'穗上叶长',
        'leafwidth':'穗上叶宽',
        'leafWidth':'穗上叶宽',
        'stemdiameter':'茎粗',
        'stemDiameter':'茎粗',
        'rates':'倒伏折射率之和(%)',
        'rust':'锈病(级)',
        'stemrot':'茎腐病(%)',
        'roughdwarf':'粗缩(%)',
        'roughDwarf':'粗缩(%)',
        'hollow':'空杆(%)',
        'plantsnum':'株数',
        'plantsNum':'株数',
        'blackpowder':'黑粉',
        'blackPowder':'黑粉',
        'expression':'果穗表现',
        'spikelength':'穗长',
        'spikeLength':'穗长',
        'spikewidth':'穗粗',
        'spikeWidth':'穗粗',
        'row':'穗行数',
        'kernels':'行粒数',
        'axiscolor':'轴色',
        'axisColor':'轴色',
        'grainweight':'百粒重',
        'grainWeight':'百粒重',
        'grainlength':'籽粒长',
        'grainLength':'籽粒长',
        'grainwidth':'籽粒宽',
        'grainWidth':'籽粒宽',
        'yield':'小区标准产量(KG)',
        'seedyield':'出籽率',
        'seedYield':'出籽率',

        // 添加更多映射关系...
      };

      // 根据traitLabel的值进行中英文转换
      const translatedLabel = translationMap[this.trait] || this.trait;

      return translatedLabel;
    }
  },
  mounted() {
    this.getNatrData().then((trait) => {
      this.trait = trait;
      this.renderNatrCharts();
    });
  },
  methods: {
    getNatrData() {
      return new Promise((resolve) => {
        const pedigree = this.$route.query.pedigree;
        const trait = this.$route.query.trait;
        const query = {
          pedigree: pedigree,
          trait: trait,
        };
        // 获取表格数据和散点图数据
        Promise.all([searchByNatr(query), searchChartByNatr(query)])
          .then(([tableDataResponse, chartDataResponse]) => {
            let tableData = tableDataResponse.data;
            let chartData = chartDataResponse.data;
            this.tableData = tableData;
            this.chartNatrData = chartData.map((item) => ({
              location: item.location,
              trait: item.trait,
              year: item.year,
            }));
            resolve(trait);
          })
          .catch((error) => {
            console.log(error);
            this.$message.warning("该性状不存在");
          });
      });
    },
    // 渲染散点图
    renderNatrCharts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      if (this.chartNatrData.length === 0) {
        console.log("该性状不存在");
        this.$message.warning("该性状不存在");
        return; // 终止执行
      }
      const yearData = this.chartNatrData.map((data) => data.year + "");
      // 获取不同年份、地点下的trait值
      const wrappedData = [];
      this.chartNatrData.forEach((data) => {
        const yearIndex = data.year - 2021;
        if (!wrappedData[yearIndex]) {
          wrappedData[yearIndex] = [];
        }
        wrappedData[yearIndex].push([data.location, data.trait, data.year]);
      });

      option = {
        legend: {
          data: yearData,
        },
        xAxis: {
          type: "category",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        series: yearData.map((year, index) => {
          return {
            SymbolSize: 20,
            data: wrappedData[index],
            type: "scatter",
            name: year,
          };
        }),
        markLine: {
          symbol: "none",
          data: [
            {
              yAxis: 10,
              lineStyle: {
                color: "#ff0000",
                type: "solid",
              },
            },
          ],
        },
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.allNatr {
  width: 100%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
.top-chart {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.bottom-chart {
  width: 60%;
  /* margin-top: 50px; */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
#main {
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  width: 80%;
  height: 500px;
}
</style>
