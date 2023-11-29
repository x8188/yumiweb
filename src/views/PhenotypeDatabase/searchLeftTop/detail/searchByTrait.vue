<template>
  <div class="trait">
    <div class="left-chart">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="newSource" label="新来源" width="100" :align="'center'">
        </el-table-column>
        <el-table-column prop="pedigree" label="系谱" width="280" :align="'center'">
        </el-table-column>
        <el-table-column prop="pastSource" label="旧来源" width="120" :align="'center'">
        </el-table-column>
        <el-table-column prop="trait" label="株高" :align="'center'"> </el-table-column>
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
// 获取表格、热力图数据
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
            resolve();
          })
          .catch((error) => {
            console.log(error);
            this.$message.warning("该性状不存在");
          });
      });
    },
// 处理热力图数据
    renderTraitCharts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
// 组合year+location
      const countMap = {};
      for (const dataPoint of this.chartData) {
        const { location, year, trait } = dataPoint;
        const locationYear = location + year;
// 统计year+location下trait出现次数
        if (countMap.hasOwnProperty(locationYear)) {
          const countObj = countMap[locationYear];
          if (countObj.hasOwnProperty(trait)) {
            countObj[trait]++;
          } else {
            countObj[trait] = 1;
          }
        } else {
          countMap[locationYear] = { [trait]: 1 };
        }
      }
// 生成数组
      const heatMapData = [];
      for (const locationYear in countMap) {
        const traitCounts = countMap[locationYear];
        for (const trait in traitCounts) {
          const count = traitCounts[trait];
          heatMapData.push([locationYear, count, trait]);
        }
      }
// 需要渲染的x轴、y轴数据
      var xData = Array.from(new Set(heatMapData.map((item) => item[0])));
      var yData = Array.from(new Set(heatMapData.map((item) => item[1]))).sort(
        (a, b) => a - b
      );
// 形成热力图坐标数组，如[1,2,193.5]
      var convertedData = heatMapData.map((item) => {
        var xIndex = xData.indexOf(item[0]);
        var yIndex = yData.indexOf(item[1]);
        return [xIndex, yIndex, item[2]];
      });
// 热力图配置
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
            interval: 0, // 设置为 0，表示所有刻度标签都显示
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
          top: "10%",
          itemWidth: 40, // 设置颜色控制条宽度
          itemHeight: 500, // 设置颜色控制条高度
          width: "60%", // 设置颜色控制条的长度
          right: "1%",
          bottom: 100,
          height: "500px",
          inRange: {
            color: ["#313695", "#4575b4", "#74add1", "#abd9e9", "#e0f3f8"],
          },

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
