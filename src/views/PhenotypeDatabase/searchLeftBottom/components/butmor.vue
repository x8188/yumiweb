<template>
  <div class="all-mor">
    <div class="chart-mor">
      <el-table :data="tableData" border height="800" style="width: 100%">
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
        <el-table-column prop="height" label="株高" :align="'center'">
        </el-table-column>
        <el-table-column prop="earHeight" label="穗位" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="maleSpikes"
          label="雄穗分枝数"
          width="100"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="leafLength" label="穗上叶长" :align="'center'">
        </el-table-column>
        <el-table-column prop="leafWidth" label="穗上叶宽" :align="'center'">
        </el-table-column>
        <el-table-column prop="stemDiameter" label="茎粗" :align="'center'">
        </el-table-column>
        <el-table-column prop="spindleLength" label="轴长" :align="'center'">
        </el-table-column>
      </el-table>
    </div>
    <div id="main" class="echart-mor" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";

import { btnMor, btnMorAll } from "@/api/jointCreation/searchLeftBottom/index";
// import { resolve } from "q";
export default {
  data() {
    return {
      tableData: [],
      MorData: [],
    };
  },
  mounted() {
    this.getMorAll();
  },
  methods: {
    getMorAll() {
      // 获取表格数据
      return new Promise((resolve) => {
        btnMorAll().then((res) => {
          console.log(res.data, "MorAll");
          let chartData = res.data;

          console.log(chartData,'chartData');
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
        btnMor().then((res) => {
          let MorData = res.data;
          this.MorData = MorData.map((item) => ({
            year: item.year,
            height: item.height,
            earHeight: item.earHeight,
            stemDiameter: item.stemDiameter,
            leafLength: item.leafLength,
            leafWidth: item.leafWidth,
            maleSpikes: item.maleSpikes,
            spindleLength: item.spindleLength,
          }));
          resolve();
          this.getMorChartAll();
        });
      });
    },
    getMorChartAll() {
      // 小提琴图x轴数据
      const xAxisData1 = this.MorData.map((item) => [
        item.year + "株高",
        item.year + "叶长",
        item.year + "叶宽",
        item.year + "雄穗",
        item.year + "轴长",
        item.year + "茎干",
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
      const yAxisData1 = this.MorData.reduce((result, obj) => {
        const year = obj.year;
        const attributes = [
          "height",
          "leafLength",
          "leafWidth",
          "maleSpikes",
          "spindleLength",
          "stemDiameter",
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
