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
          prop="pedigreeSource1"
          label="来源1"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="pedigreeSource2"
          label="来源2"
          width="120"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="pedid"
          label="系谱内部码"
          width="120"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="kernel_numbers_per_row" label="行粒数" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="ear_diameter" label="穗粗" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="yield" label="小区产量" :align="'center'" width="200">
        </el-table-column>

      </el-table>
    </div>
    <div id="main" class="echart-mor" ref="chart"></div>
  </div>
</template>

<script>
import "echarts-gl";

import {
  btnYieldAll,
  btnYield,
} from "@/api/jointCreation/searchLeftBottom/index";
// import { resolve } from "q";
export default {
  data() {
    return {
      tableData: [],
      YieldData: [],
    };
  },
  mounted() {
    this.getYieldAll();
  },
  methods: {
    // 获取表格数据
    getYieldAll() {
      return new Promise((resolve) => {
        btnYieldAll().then((res) => {
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
        btnYield().then((res) => {
          let YieldData = res.data;

          this.YieldData = YieldData.map((item) => ({
            year: item.year,
            grainLength: item.grainLength,
            grainWidth: item.grainWidth,
            earLength: item.earLength,
            earDiameter: item.earDiameter,
            kernelRowNumber: item.kernelRowNumber,
            kernelNumbersPerRow: item.kernelNumbersPerRow,
            grainWeight: item.grainWeight,
            yield: item.yield,
            kernelNumbersPerEar: item.kernelNumbersPerEar,
            earKernelWeight:item.earKernelWeight,
            grainWaterContent:item.grainWaterContent,
            kernelPercentage:item.kernelPercentage,
          }));
          resolve();
          console.log(this.YieldData, "this.YieldData");
          this.getYieldChartData();
        });
      });
    },
    getYieldChartData() {
      // 小提琴图x轴数据
      const xAxisData1 = this.YieldData.map((item) => [
        item.year + "粒长",
        item.year + "粒宽",
        item.year + "穗长",
        item.year + "穗粗",
        item.year + "穗行数",
        item.year + "行粒数",
        item.year + "百粒重",
        item.year + "小区产量",
        item.year + "穗粒数",
        item.year + "穗粒重",
        item.year + "粒籽含水量",
        item.year + "出籽率",

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

      const yAxisData1 = this.YieldData.reduce((result, obj) => {
        const year = obj.year;
        const attributes = [
          "grainLength",
          "grainWidth",
          "earLength",
          "earDiameter",
          "kernelRowNumber",
          "kernelNumbersPerRow",
          "grainWeight",
          "yield",
          "kernelNumbersPerEar",
          "earKernelWeight",
          "grainWaterContent",
          "kernelPercentage",

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
