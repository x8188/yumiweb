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
        <el-table-column prop="trait" label="株高" :align="'center'">
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
      tableData: [],
      chartNatrData: [],
    };
  },
  mounted() {
    this.getNatrData().then(() => {
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
            resolve();
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
