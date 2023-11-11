<template>
  <div class="all-mor">
    <div class="chart-mor">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="height" label="株高"> </el-table-column>
        <el-table-column prop="earHeight" label="穗位"> </el-table-column>
        <el-table-column prop="maleSpikes" label="雄穗分枝数" width="100">
        </el-table-column>
        <el-table-column prop="leafLength" label="穗上叶长"> </el-table-column>
        <el-table-column prop="leafWidth" label="穗上叶宽"> </el-table-column>
        <el-table-column prop="stemDiameter" label="茎粗"> </el-table-column>
        <el-table-column prop="spindleLength" label="轴长">
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
      return new Promise((resolve) => {
        btnMorAll().then((res) => {
          this.tableData = res.data;
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
          console.log(this.MorData, "dfdff");
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
      const xAxisData2 = [];
      xAxisData1.forEach(function (row) {
        row.forEach(function (element) {
          xAxisData2.push(element);
        });
      });
      console.log(xAxisData2, "rrrr");
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
      const order = [
        "2013株高",
        "2013叶长",
        "2013叶宽",
        "2013雄穗",
        "2013轴长",
        "2013茎干",
        "2021株高",
        "2021叶长",
        "2021叶宽",
        "2021雄穗",
        "2021轴长",
        "2021茎干",
        "2022株高",
        "2022叶长",
        "2022叶宽",
        "2022雄穗",
        "2022轴长",
        "2022茎干",
      ];
      xAxisData3.sort((a, b) => {
        const indexA = order.indexOf(a[0]);
        const indexB = order.indexOf(b[0]);
        return indexA - indexB;
      });
      const flatten_xAxisData1 = xAxisData3.flat();
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
      const orders = [
        "2013Height",
        "2013LeafLength",
        "2013LeafWidth",
        "2013MaleSpikes",
        "2013SpindleLength",
        "2013StemDiameter",
        "2021Height",
        "2021LeafLength",
        "2021LeafWidth",
        "2021MaleSpikes",
        "2021SpindleLength",
        "2021StemDiameter",
        "2022Height",
        "2022LeafLength",
        "2022LeafWidth",
        "2022MaleSpikes",
        "2022SpindleLength",
        "2022StemDiameter", /*...*/,
      ];
      const flatten_yAxisData1 = orders.reduce((acc, key) => {
        const arr = yAxisData1[key];
        if (arr !== undefined) {
          return acc.concat(arr);
        } else {
          return acc.concat(0);
        }
      }, []);
      // 小提琴图配置
      const chartdata = [
        {
          type: "violin",
          x: flatten_xAxisData1,
          y: flatten_yAxisData1,
          box: {
            visible: true,
          },
          meanline: {
            visible: true,
          },
          // name: "data 1",
        },
      ];
      const layout = {
        // xaxis: {
        //   title: "xaxis title",
        // },
        // yaxis: {
        //   title: "yaxis title",
        // },
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

<style>
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
  height:630px;
}
</style>
