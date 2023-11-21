<template>
  <div class="trait">
    <div class="left-chart">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="newSource" label="新来源" width="100">
        </el-table-column>
        <el-table-column prop="pedigree" label="系谱" width="280">
        </el-table-column>
        <el-table-column prop="pastSource" label="旧来源" width="120">
        </el-table-column>
        <el-table-column prop="trait" label="株高"> </el-table-column>
      </el-table>
    </div>
    <div id="main" class="right-echart"></div>
  </div>
</template>

<script>
import {
  searchByTrait,
  searchChartByTrait,
} from "@/api/jointCreation/searchLeftTop/index";
import * as echarts from "echarts";
import { promised, resolve } from "q";
import index_v1Vue from "../../../index_v1.vue";
export default {
  data() {
    return {
      tableData: [
        {
          newsource: "",
          pedigree: "",
          pastsource: "",
          height: "",
        },
      ],
      chartData: [],
    };
  },

  mounted() {
    this.getTraitData().then(() => {
      this.renderTraitCharts();
    });
  },
  methods: {
    getTraitData() {
      return new Promise((resolve) => {
        const trait = this.$route.query.trait;
        const query = {
          trait: trait,
        };

        Promise.all([searchByTrait(query), searchChartByTrait(query)])
          .then(([traitData, chartTraitData]) => {
            let tableData = traitData.data;
            let chartData = chartTraitData.data;
            this.tableData = tableData;
            this.chartData = chartData.map((item) => ({
              location: item.location,
              year: item.year,
              trait: item.trait,
            }));
            console.log(this.chartData, "ff");
            resolve();
          })
          .catch((error) => {
            console.log(error);
            this.$message.warning("该性状不存在");
          });
      });
    },

    renderTraitCharts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      const xAxisData = this.chartData.map((item) => item.year + item.location);
      const xAxisData2 = xAxisData.filter(
        (item, index) =>
          (xAxisData.indexOf(item) !== index &&
            xAxisData.lastIndexOf(item) === index) ||
          xAxisData.indexOf(item) === xAxisData.lastIndexOf(item)
      );
      const yAxisData = this.chartData.map((item) => parseInt(item.trait));
      console.log(yAxisData, "kkk");
      var uniqueYAxisData = Array.from(new Set(yAxisData));
      const sortedData = uniqueYAxisData
        .filter((value) => !isNaN(value))
        .sort((a, b) => a - b);
      console.log(sortedData, "sortedData");
      let seriesData = [];
      let xItem = "hhh";
      let newArray = xAxisData;
      for (let i = 0; i < xAxisData2.length; i++) {
        let row2 = 0;
        newArray = newArray.filter((item) => item != xItem);
        console.log(newArray, "newarray");
        xItem = newArray[0];
        for (let j = 0; j < newArray.length; j++) {
          if (newArray[j] === xItem) {
            seriesData.push([i, row2, yAxisData[j]]);
            row2++;
          }
        }
      }
      const countMap = {};
      this.chartData.forEach((item) => {
        const locationYear = item.location + item.year;
        const trait = item.trait;
        if (!countMap[locationYear]) {
          countMap[locationYear] = {};
        }
        if (countMap[locationYear][trait]) {
          countMap[locationYear][trait]++;
        } else {
          countMap[locationYear][trait] = 1;
        }
      });
      console.log(countMap, "ddd");
      const heatMapData = [];
      for (const locationYear in countMap) {
        const traitCounts = countMap[locationYear];
        for (const trait in traitCounts) {
          const count = traitCounts[trait];
          heatMapData.push([locationYear, count, trait]);
        }
      }

      console.log(heatMapData, "hhh");
      seriesData.sort((a, b) => a[2] - b[2]);
      let newYAxisData = seriesData.map((item, index) => index);
      seriesData.forEach((item, index) => {
        item[1] = newYAxisData[index];
      });

      console.log(seriesData, "seriesdata");

      var minValue = Math.min.apply(
        null,
        seriesData.map((item) => item[2])
      );
      var maxValue = Math.max.apply(
        null,
        seriesData.map((item) => item[2])
      );

      var xData = Array.from(new Set(heatMapData.map((item) => item[0])));
      var yData = Array.from(new Set(heatMapData.map((item) => item[1])));
      var convertedData = heatMapData.map((item) => {
        var xIndex = xData.indexOf(item[0]);
        var yIndex = yData.indexOf(item[1]);
        return [xIndex, yIndex, item[2]];
      });
      console.log(convertedData, "ooo");
      option = {
        tooltip: {
          position: "top",
        },
        animation: false,
        grid: {
          height: "80%",
          y: "5%",
        },
        xAxis: {
          type: "category",
          data: xData,

          splitArea: {
            show: true,
          },
        },
        yAxis: {
          type: "category",
     
          data: yData,
          splitArea: {
            show: true,
          },
          axisLabel: {
            interval: 2, // 设置为 0，表示所有刻度标签都显示
            formatter: function (value, index) {
              if (index % 2 === 0) {
                return value;
              } else {
                return "";
              }
            },
          },
        },
        visualMap: {
          min: Math.min(...heatMapData.map((item) => item[2])), // trait 值的最小值,
          max: Math.max(...heatMapData.map((item) => item[2])), // trait 值的最大值,
          // show:false,

          range: [0, 1],
          calculable: true,
          orient: "vertical",
          top: "5%",
          itemWidth: 40, // 设置颜色控制条宽度
          itemHeight: 500, // 设置颜色控制条高度
          width: "60%", // 设置颜色控制条的长度
          right: "1%",
          bottom:100,
          height: "500px",
          inRange: {
            color: ["#313695", "#4575b4", "#74add1", "#abd9e9", "#e0f3f8"],
          },
          pieces: [
        { min: minValue, max: minValue + (maxValue - minValue) / 4, label: "Low" },
        { min: minValue + (maxValue - minValue) / 4, max: minValue + (maxValue - minValue) / 2, label: "Low-Mid" },
        { min: minValue + (maxValue - minValue) / 2, max: minValue + (maxValue - minValue) * 3 / 4, label: "Mid" },
        { min: minValue + (maxValue - minValue) * 3 / 4, max: maxValue, label: "Mid-High" },
        { min: maxValue, max: maxValue + 1, label: "High" },

      ],
      formatter: function (value) {
        return value.toFixed(0); // 格式化显示的值为两位小数
      },
        },
        series: [
          {
            // name: "热力图",
            type: "heatmap",
            data: heatMapData.map((item) => [
              xData.indexOf(item[0]),
              yData.indexOf(item[1]),
              item[2],
            ]), // 将坐标转换为索引,
            // label: {
            //   show: true,
            // },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            progressive: 1000, // 渲染优化，数据量较大时设置较小的数值
            progressiveChunkMode: "mod", // 渲染优化，数据量较大时设置 'mod' 模式
            progressiveThreshold: 500, // 渲染优化，数据量较大时设置较小的数值
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.trait {
  width: 100%;
  display: flex;
}
.left-chart {
  width: 45%;
  margin: 20px;
  padding: 10px;
  height: 45vw;
  overflow: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.right-echart {
  width: 45%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px;
}
#main {
  width: 800px;
  height: 45vw;
}
</style>
