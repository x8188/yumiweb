<template>
  <div class="all-abio">
    <div class="chart-abio">
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
          label="来源1"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="pedigreesource2"
          label="来源2"
          width="120"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="rootLodging" label="根倒性" :align="'center'">
        </el-table-column>
        <el-table-column prop="lodgingResistance" label="抗倒性" :align="'center'">
        </el-table-column>
        <el-table-column prop="stemLodging" label="茎倒性" :align="'center'">
        </el-table-column>
        <el-table-column prop="seedlingDeathPercent1" label="死苗率1" :align="'center'">
        </el-table-column>
        <el-table-column prop="deadSeedlingNumber1" label="死苗数1" :align="'center'">
        </el-table-column>
        <el-table-column prop="seedlingDeathPercent2" label="死苗率2" :align="'center'">
        </el-table-column>
        <el-table-column prop="deadSeedlingNumber2" label="死苗数2" :align="'center'">
        </el-table-column>
        <el-table-column prop="seedlingDeathPercent3" label="死苗率3" :align="'center'">
        </el-table-column>
        <el-table-column prop="deadSeedlingNumber3" label="死苗数3" :align="'center'">
        </el-table-column>
        <el-table-column prop="treatName" label="鉴定药品" :align="'center'">
        </el-table-column>
        <el-table-column prop="deformedSeedlingPercent" label="畸形苗率%" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="deformedSeedlingNumber" label="畸形苗数" :align="'center'">
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
        item.year + "根倒性",
        item.year + "抗倒性",
        item.year + "茎倒性",
        item.year + "死苗率1",
        item.year + "死苗数1",
        item.year + "死苗率2",
        item.year + "死苗数2",
        item.year + "死苗率3",
        item.year + "死苗数3",
        item.year + "鉴定药品",
        item.year + "畸形苗率",
        item.year + "畸形苗数",
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
        const attributes = [
          "lodgingResistance",
          "stemLodging",
          "seedingDeathPercent1",
          "deadSeedingNumber1",
          "seedingDeathPercent2",
          "deadSeedingNumber2",
          "seedingDeathPercent3",
          "deadSeedingNumber3",
          "treatName",
          "deformedSeedlingPercent",
          "deformedSeedlingNumber"
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
  height: 80vh;
  overflow: auto;
  margin: 0 auto;
  padding: 10px;
  margin-top: 50px;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.echart-abio {
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  margin-left: 20px;
  margin-top: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
#main {
  width: 700px;
  height: 630px;
}
</style>
