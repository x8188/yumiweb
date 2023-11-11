<template>
  <div class="trait">
    <div class="left-chart">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="newSource" label="新来源" width="100">
        </el-table-column>
        <el-table-column prop="pedigree" label="系谱" width="280">
        </el-table-column>
        <el-table-column prop="pastSource" label="旧来源" width="120"> </el-table-column>
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
import index_v1Vue from '../../../index_v1.vue';
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

        Promise.all([searchByTrait(query), searchChartByTrait(query)]).then(
          ([traitData, chartTraitData]) => {
            let tableData = traitData.data;
            let chartData = chartTraitData.data;
            this.tableData = tableData;
            this.chartData = chartData.map((item) => ({
              location: item.location,
              year: item.year,
              trait: item.trait,
            }));
            resolve();
          }
        );
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
      var uniqueYAxisData = Array.from(new Set(yAxisData));
      const sortedData = uniqueYAxisData
        .filter((value) => !isNaN(value))
        .sort((a, b) => a - b);
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
      seriesData.sort((a,b) => a[2]-b[2]);
      let newYAxisData = seriesData.map((item,index)=> index);
      seriesData.forEach((item,index)=>{
        item[1]= newYAxisData[index]
      })

      console.log(seriesData, "seriesdata");

      var minValue = Math.min.apply(
        null,
        seriesData.map((item) => item[2])
      );
      var maxValue = Math.max.apply(
        null,
        seriesData.map((item) => item[2])
      );
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
          data: xAxisData2,
          splitArea: {
            show: true,
          },
        },
        yAxis: {
          type: "category",
          data: sortedData,
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
          min: minValue,
          max: maxValue,
          // show:false,
          range: [0, 1],
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "5%",
          inRange: {
            color: ["#313695", "#4575b4", "#74add1", "#abd9e9", "#e0f3f8"],
          },
        },
        series: [
          {
            // name: "热力图",
            type: "heatmap",
            data: seriesData,
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
