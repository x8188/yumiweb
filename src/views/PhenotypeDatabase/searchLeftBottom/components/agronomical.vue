<template>
  <div class="all-mor">
    <div class="chart-mor">
      <el-table :data="tableData" height="800" border style="width: 100%">
        <el-table-column
        label="序号"
        type="index"
        :align="'center'"
        width="80"
        fixed="left"
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
          prop="pedigreesource1"
          label="新来源"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="pedigreesource2"
          label="旧来源"
          width="120"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="fieldEvaluation" label="田评" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="fieldEvaluation2" label="田评2" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="laboratoryEvaluation" label="室评" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="laboratoryEvaluation2" label="室评2" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="benefitial" label="沾光" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="emptyStalkNumber" label="空杆数" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="selectedPlantNumber" label="入选株数" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="plantNumber" label="区株数" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="leafStayGreen" label="保绿度" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="pollinationPlan1" label="授粉计划1" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="pollinationPlan2" label="授粉计划2" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="doubleEarNumber" label="双穗数" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="decisionStrip" label="翌年处理意见" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="decisionSource" label="决策来源" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="siteDiscrepancy" label="位点差" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="tests1" label="测试种1" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="tests2" label="测试种2" :align="'center'" width="200">
        </el-table-column>
        <!-- <el-table-column prop="daysToTassel" label="抽雄期" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="daysToSeedling" label="出苗期" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="daysToMaturity" label="成熟期" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="datePlanted" label="播种期" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="growthPeriod" label="生育期" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="daysToAnther" label="散粉期" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="daysToSilk" label="吐丝期" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="dateHarvested" label="收获日期" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="daysToAnther2" label="散粉期（补）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="daysToSilk2" label="吐丝期（补）" :align="'center'" width="200">
        </el-table-column> -->
        <el-table-column prop="antherTasselInterval" label="散粉吐丝间隔" :align="'center'" width="200">
        </el-table-column> 
      </el-table>
    </div>
    <div id="main" class="echart-mor" ref="chart"></div>
  </div>
</template>

<script>
import "echarts-gl";

import {
  btnAgroAll,
  btnAgro,
} from "@/api/jointCreation/searchLeftBottom/index";
// import { resolve } from "q";
export default {
  data() {
    return {
      tableData: [],
      AgroData: [],
    };
  },
  mounted() {
    this.getAgroAll();
  },
  methods: {
    // 获取表格数据
    getAgroAll() {
      return new Promise((resolve) => {
        btnAgroAll().then((res) => {
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
        })
        .catch((error) => {
        console.log(error);
        this.$message.warning("暂无数据");
      });

        // 获取小提琴图数据
        btnAgro().then((res) => {
          let AgroData = res.data;

          this.AgroData = AgroData.map((item) => ({
            year: item.year,
            grainlength: item.grainlength,
            grainweight: item.grainweight,
            grainwidth: item.grainwidth,
            kernels: item.kernels,
            row: item.row,
            seedyield: item.seedyield,
            spikelength: item.spikelength,
            spikewidth: item.spikewidth,
            yield: item.yield,
          }));
          resolve();
          console.log(this.AgroData, "this.AgroData");
          this.getAgroChartData();
        });
      });
    },
    getAgroChartData() {
      // 小提琴图x轴数据
      const xAxisData1 = this.AgroData.map((item) => [
        item.year + "田评",
        item.year + "田评2",
        item.year + "室评",
        item.year + "室评2",
        item.year + "沾光",
        item.year + "空杆数",
        item.year + "入选株数",
        item.year + "区株数",
        item.year + "保绿度",
        item.year + "授粉计划1",
        item.year + "授粉计划2",
        item.year + "双穗数",
        item.year + "翌年处理意见",
        item.year + "决策来源",
        item.year + "位点差",
        item.year + "测试种1",
        item.year + "测试种2",
        item.year + "散粉吐丝间隔",
      ]);
      const xAxisData2 = [];
      xAxisData1.forEach(function (row) {
        row.forEach(function (element) {
          xAxisData2.push(element);
        });
      });
      const xAxisData3 = [];
      const seen = {};

      for (const item of xAxisData2) {
        if (!seen[item]) {
          seen[item] = true;
          xAxisData3.push([item]);
        } else {
          xAxisData3[Object.keys(seen).indexOf(item)].push(item);
        }
      }
      // 将x轴数据按顺序依次渲染（确保与y轴数据一一对应）
      xAxisData3.sort((a, b) => {
        const yearA = Number(a[0].substring(0, 4)); // 提取年份并转换为数字
        const yearB = Number(b[0].substring(0, 4));
        return yearA - yearB;
      });
      const flatten_xAxisData = xAxisData3.reduce((acc, subArray) => {
        const year = subArray[0].substring(0, 4); // 提取年份
        console.log(year, "year");
        const items = subArray.slice(0);
        console.log(items, "items");
        const combinedItems = items.map((item) => item);
        return acc.concat(combinedItems);
      }, []);
      console.log(flatten_xAxisData, "flatten_xAxisData");

      // 将y轴数据按顺序放入一维数组，确保与x轴一一对应

      const yAxisData1 = this.AgroData.reduce((result, obj) => {
        const year = obj.year;
        const attributes = [
          "fieldEvaluation",
          "fieldEvaluation2",
          "laboratoryEvaluation",
          "laboratoryEvaluation2",
          "benefitial",
          "emptyStalkNumber",
          "selectedPlantNumber",
          "plantNumber",
          "leafStayGreen",
          "pollinationPlan1",
          "pollinationPlan2",
          "doubleEarNumber",
          "decisionStrip",
          "decisionSource",
          "siteDiscrepancy",
          "tests1",
          "tests2",
          "antherTasselInterval"

        ];
        attributes.forEach((attribute) => {
          const key = `${year}${attribute
            .charAt(0)
            .toUpperCase()}${attribute.slice(1)}`;
          if (!result[key]) {
            result[key] = [];
          }
          result[key].push(obj[attribute]);
        });
        return result;
      }, {});
      console.log(yAxisData1, "yAxisData1");
      // 把对象转换为二维数组
      const sortedEntries = Object.entries(yAxisData1).sort();
      // 把二维数组展平为一维数组
      const newArray = [];
      for (const [key, value] of sortedEntries) {
        newArray.push(value);
      }
      const flattenedArray = newArray
        .flat()
        .map((value) => (value === null ? 0 : value));
      console.log(flattenedArray, "flattenedArray");

      // 小提琴图配置
      const chartdata = [
        {
          type: "violin",
          x: flatten_xAxisData,
          y: flattenedArray,
        },
      ];
      const layout = {
        violinmode: "group",
        showlegend: true,
        legend: {
          x: 1,
          y: 1,
        },
      };
      Plotly.newPlot("main", chartdata, layout);
    },
  },
};
</script>

<style scoped>
.all-mor {
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  text-align: center;
}
.chart-mor {
  width: 40%;
  height: 44vw;
  overflow: auto;
  margin: 0 auto;
  padding: 10px;
  margin-top: 50px;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.echart-mor {
  margin: 0 auto;
  height: 58vw;
  margin-left: 20px;
  margin-top: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
#main {
  width: 700px;
  height: 630px;
}
</style>
