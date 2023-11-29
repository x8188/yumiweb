<template>
  <div class="all-mor">
    <div class="chart-mor">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="code"
          label="系谱内部码"
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
          prop="newsource"
          label="新来源"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="pastsource"
          label="旧来源"
          width="120"
          :align="'center'"
        >
        </el-table-column>

        <el-table-column prop="grainLength" label="籽粒长" :align="'center'">
        </el-table-column>
        <el-table-column prop="grainWeight" label="百粒重" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="grainWidth"
          label="籽粒宽"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="kernels" label="行粒数" :align="'center'">
        </el-table-column>
        <el-table-column prop="row" label="穗行数" :align="'center'">
        </el-table-column>
        <el-table-column prop="seedYield" label="出籽率" :align="'center'">
        </el-table-column>
        <el-table-column prop="spikeLength" label="穗长" :align="'center'">
        </el-table-column>
        <el-table-column prop="spikeWidth" label="穗宽" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="yield"
          label="小区标准产量"
          width="120"
          :align="'center'"
        >
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
          this.tableData = res.data;
          resolve();
          console.log(this.tableData, "this.tableData");
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
        // item.year + "籽粒长",
        // item.year + "百粒重",
        // item.year + "籽粒宽",
        item.year + "行粒数",
        item.year + "穗行树",
        // item.year + "出籽率",
        // item.year + "穗长",
        // item.year + "穗宽",
        item.year + "小区标准产量",
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
          // "grainlength",
          // "grainweight",
          // "grainwidth ",
          "kernels",
          "row",
          // "seedyield",
          // "spikelength",
          // "spikewidth",
          "yield"
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
      console.log(yAxisData1,'yAxisData1');
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
  width: 600px;
  height: 630px;
}
</style>
