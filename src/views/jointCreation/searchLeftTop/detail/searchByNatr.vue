<template>
  <div class="allNatr">
    <div class="top-chart">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="newSource" label="新来源"> </el-table-column>
        <el-table-column prop="pedigree" label="系谱"> </el-table-column>
        <el-table-column prop="pastSource" label="旧来源"> </el-table-column>
        <el-table-column prop="trait" label="株高"> </el-table-column>
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
        Promise.all([searchByNatr(query), searchChartByNatr(query)]).then(
          ([tableDataResponse, chartDataResponse]) => {
            let tableData = tableDataResponse.data;
            let chartData = chartDataResponse.data;

            this.tableData = tableData;
            this.chartNatrData = chartData.map((item) => ({
              location: item.location,
              year: item.year,
              trait: item.trait,
            }));
            console.log(this.chartNatrData, "xxxx");
            resolve();
          }
        );
      });
    },
    renderNatrCharts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      const xAxisData = this.chartNatrData.map((item) => item.location);
      const xAxisData2 = xAxisData.filter(
        (item, index) =>
          (xAxisData.indexOf(item) !== index &&
            xAxisData.lastIndexOf(item) === index) ||
          xAxisData.indexOf(item) === xAxisData.lastIndexOf(item)
      );
      const yAxisData = this.chartNatrData.map((item) => item.trait);

      option = {
        legend: {
          data: ["2021", "2022", "2023"],
        },
        xAxis: {
          type: "category",
          data: xAxisData2,
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
        series: [
          {
            SymboSize: 20,
            data: yAxisData,
            type: "scatter",
            name: "2021",
          },
        ],
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
  /* background: #f0f0f0; */
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
.top-chart {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
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
