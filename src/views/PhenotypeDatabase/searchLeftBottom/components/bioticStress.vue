<template>
  <div class="all-mor">
    <div class="chart-mor">
      <el-table :data="tableData" height="800" border style="width: 100%">
        <el-table-column prop="code" label="系谱内部码" width="100" :align="'center'">
        </el-table-column>
        <el-table-column prop="pedigree" label="系谱" width="280" :align="'center'">
        </el-table-column>
        <el-table-column prop="year" label="年份" width="120" :align="'center'">
        </el-table-column>
        <el-table-column prop="location" label="地区" width="120" :align="'center'">
        </el-table-column>

        <el-table-column prop="newsource" label="新来源" width="100" :align="'center'">
        </el-table-column>
        <el-table-column prop="pastsource" label="旧来源" width="120" :align="'center'">
        </el-table-column>
        <el-table-column prop="rates" label="倒伏倒折率之和" width="120" :align="'center'"> </el-table-column>
      </el-table>
    </div>
    <div id="main" class="echart-mor" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";

import { btnBio, btnBioAll } from "@/api/jointCreation/searchLeftBottom/index";
// import { resolve } from "q";
export default {
  data() {
    return {
      tableData: [],
      BioData: [],
    };
  },
  mounted() {
    this.getBioAll();
  },
  methods: {

    getBioAll() {
      return new Promise((resolve) => {
// 获取表格数据
        btnBioAll().then((res) => {
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
        });
// 获取小提琴图数据
        btnBio().then((res) => {
          let BioData = res.data;
          this.BioData = BioData.map((item) => ({
            year: item.year,
            rates: item.rates,
          }));
          resolve();
          this.getMorChartAll();
        });
      });
    },
    getMorChartAll() {
// 小提琴图x轴数据
      const xAxisData1 = this.BioData.map((item) => [
        item.year + "倒伏倒折率之和",
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
      xAxisData3.sort((a, b) => {
        const yearA = Number(a[0].substring(0, 4)); // 提取年份并转换为数字
        const yearB = Number(b[0].substring(0, 4));
        return yearA - yearB;
      });
// 将x轴数据按顺序依次渲染（确保与y轴数据一一对应）
      const flatten_xAxisData = xAxisData3.reduce((acc, subArray) => {
        const year = subArray[0].substring(0, 4); // 提取年份
        console.log(year, "year");
        const items = subArray.slice(0);
        console.log(items, "items");
        const combinedItems = items.map((item) => item);
        return acc.concat(combinedItems);
      }, []);
// 将y轴数据按顺序放入一维数组，确保与x轴一一对应
      const yAxisData1 = this.BioData.reduce((result, obj) => {
        const year = obj.year;
        const attributes = [
          "rates",
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
// 把对象转换为二维数组
      const sortedEntries = Object.entries(yAxisData1).sort();
// 再把二维数组展平为一个一维数组，null值转换为0
      const newArray = [];
      for (const [key, value] of sortedEntries) {
        newArray.push(value);
      }
      const flattenedArray = newArray
        .flat()
        .map((value) => (value === null ? 0 : value));
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
