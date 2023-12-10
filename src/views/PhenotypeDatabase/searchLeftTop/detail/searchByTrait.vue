<template>
  <div class="trait">
    <div class="left-chart">
      <el-table :data="tableData" border height="800" style="width: 100%">
        <el-table-column
          prop="newSource"
          label="新来源"
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
        <el-table-column
          prop="pastSource"
          label="旧来源"
          width="120"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="trait" label="株高" :align="'center'">
        </el-table-column>
      </el-table>
    </div>
    <div id="main" class="right-echart"></div>

    <div class="axis-tip"></div>
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
              pedigree: item.pedigree,
              location: item.location,
              year: item.year,
              trait: item.trait,
            }));
            console.log(this.chartData, "ddd");
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
      // test1
      var xData1 = Array.from(
        new Set(this.chartData.map((item) => item.year + " " + item.location))
      );
      var yData1 = Array.from(
        new Set(this.chartData.map((item) => item.pedigree))
      );
      var heatMapData1 = this.chartData.map((item) => [
        xData1.indexOf(item.year + " " + item.location) + 1,
        yData1.indexOf(item.pedigree),
        parseFloat(item.trait),
      ]);
      console.log(heatMapData1, "xdata1");
      // test2
      var xData2 = Array.from(
        new Set(this.chartData.map((item) => item.year + " " + item.location))
      );
      var yData2 = Array.from(
        new Set(this.chartData.map((item) => item.pedigree))
      );

      var xIndexMap = {};
      xData2.forEach((value, index) => {
        xIndexMap[value] = index;
      });

      var yIndexMap = {};
      yData2.forEach((value, index) => {
        yIndexMap[value] = index;
      });

      var heatMapData2 = this.chartData.map((item) => [
        xIndexMap[item.year + " " + item.location],
        yIndexMap[item.pedigree],
        parseFloat(item.trait),
      ]);
      console.log(yData2, "ydata2");
      console.log(heatMapData2, "heatMapData2");
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
      console.log(countMap, "countMap");
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
      console.log(
        heatMapData.map((item) => [
          xData.indexOf(item[0]),
          yData.indexOf(item[1]),
          item[2],
        ]),
        "convertedData"
      );
      // 热力图配置
      option = {
        gird: {
          left: 50,
        },
        dataZoom: [
          {
            type: "slider", // 滑动条类型
            show: true, // 显示滑动条
            xAxisIndex: 0, // 应用于第一个横坐标轴
            start: 0, // 默认滑动条起始位置
            end: 150, // 默认滑动条结束位置
            bottom: 13,
          },
          {
            type: "slider", // 滑动条类型
            show: true, // 显示滑动条
            yAxisIndex: 0, // 应用于第一个横坐标轴
            start: 0, // 默认滑动条起始位置
            end: 150, // 默认滑动条结束位置
            top: 55,
            left: 1,
          },
        ],
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

          data: xData2,
          axisLabel: {
            width: 5, // 设置标签的宽度，可以根据实际需求进行调整
          },
          splitArea: {
            show: true,
          },
        },
        yAxis: {
          type: "category",
          triggerEvent: true,
          data: yData2,
          splitArea: {
            show: true,
          },
          axisLabel: {
            rotate: 50,
            interval: 0, // 设置为 0，表示所有刻度标签都显示
            formatter: function (value) {
              var texts = value;
              if (texts.length > 6) {
                // 限制长度自设
                texts = texts.substr(0, 6) + "...";
              }
              return texts;
            },
          },



        },
        visualMap: {
          min: Math.min(...heatMapData.map((item) => item[2])), // trait 值的最小值,
          max: Math.max(...heatMapData.map((item) => item[2])), // trait 值的最大值,
          show: true,

          // range: [0, 1],
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
            data: heatMapData2, // 将坐标转换为索引,
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
       myChart.on("mouseover", "yAxis.category", function (e) {
        let axisTip = document.querySelector(".axis-tip");
        axisTip.innerText = e.value;
        axisTip.style.left = e.event.offsetX + "px";
        axisTip.style.top = e.event.offsetY + "px";
        axisTip.style.display = "block";
      });
        myChart.on("mouseout", "yAxis.category", function (e) {
        let axisTip = document.querySelector(".axis-tip");
        axisTip.innerText = "";
        axisTip.style.display = "none";
      });
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
  width: 40%;
  /* margin:0 auto; */
  text-align: center;
  /* margin-left: 50px; */
  margin: 20px;
  padding: 10px;
  height: 45vw;
  overflow: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.right-echart {
  width: 50%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px;
}
element.style {
  width: 800px;
  height: 650px;
}
.axis-tip {
  display: none;
  position: absolute;
  margin-left: 550px;
  margin-top: -30px;
  padding: 5px 5px;
  font-size: 12px;
  line-height: 18px;
  color: #575757;
  background: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

#main {
  left: -10px;
  width: 800px;
  height: 80vh;
}
</style>
