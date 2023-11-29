<template>
  <div class="all-abio">
    <div class="chart-abio">
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
        <el-table-column prop="blackpowder" label="黑粉" :align="'center'">
        </el-table-column>
        <el-table-column prop="roughdwarf" label="粗缩" :align="'center'">
        </el-table-column>
        <el-table-column prop="rust" label="锈病" width="100" :align="'center'">
        </el-table-column>
        <el-table-column prop="stemrot" label="茎腐病" :align="'center'">
        </el-table-column>
      </el-table>
    </div>
    <div id="main" class="echart-abio" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";

import {
  btnAbio,
  btnAbioAll,
} from "@/api/jointCreation/searchLeftBottom/index";
export default {
  data() {
    return {
      tableData: [],
      AbioData: [],
    };
  },
  mounted() {
    this.getAbioAll();
  },
  methods: {
    // 获取左侧表格数据
    getAbioAll() {
      return new Promise((resolve) => {
        btnAbioAll().then((res) => {
          this.tableData = res.data;
          resolve();
        });
        // 获取小提琴图数据
        btnAbio().then((res) => {
          let AbioData = res.data;
          this.AbioData = AbioData.map((item) => ({
            year: item.year,
            rust: item.rust,
            stemrot: item.stemrot,
            roughdwarf: item.roughdwarf,
            blackpowder: item.blackpowder,
          }));
          resolve();
          console.log(this.AbioData, "this.AbioData");
          this.getAbioChartData();
        });
      });
    },
    getAbioChartData() {
      // 小提琴图x轴数据
      const xAxisData1 = this.AbioData.map((item) => [
        item.year + "黑粉",
        item.year + "粗缩",
        item.year + "锈病",
        item.year + "茎腐病",
      ]);
      // 形成year+text数据数组
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
      console.log(xAxisData3, "xAxisData3");
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
      // 将y轴数据按顺序放入一维数组，确保与x轴一一对应
      const yAxisData1 = this.AbioData.reduce((result, obj) => {
        const year = obj.year;
        const attributes = ["blackpowder", "roughdwarf", "rust", "stemrot"];
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
      // 把二维数组展平为一维数组
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
.all-abio {
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  text-align: center;
}
.chart-abio {
  width: 40%;
  height: 44vw;
  overflow: auto;
  margin: 0 auto;
  padding: 10px;
  margin-top: 50px;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.echart-abio {
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
