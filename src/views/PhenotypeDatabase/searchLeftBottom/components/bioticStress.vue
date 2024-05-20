<template>
  <div class="all-mor" v-loading="loading">
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
        <el-table-column prop="pedigree" label="系谱" width="280" :align="'center'">
        </el-table-column>
        <el-table-column prop="year" label="年份" width="120" :align="'center'">
        </el-table-column>
        <el-table-column prop="location" label="地区" width="120" :align="'center'">
        </el-table-column>

        <el-table-column prop="pedigreeSource1" label="来源1" width="100" :align="'center'">
        </el-table-column>

        <el-table-column prop="pedigreeSource2" label="来源2" width="120" :align="'center'">
        </el-table-column>
        <el-table-column prop="ustilagoMaydis" label="瘤黑粉" :align="'center'">
        </el-table-column>
        <el-table-column prop="maizeEarRot" label="穗腐病" :align="'center'">
        </el-table-column>
        <el-table-column prop="maizeSheathBlight" label="纹枯病（级）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="southernCornRust" label="锈病（级）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="leafSpotDisease" label="叶斑病（级）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="maizeBorer" label="玉米螟" :align="'center'">
        </el-table-column>
        <el-table-column prop="maizeStalkRot" label="茎腐病（青枯病）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="maizeRoughDwarfDisease" label="粗缩病" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="southernCornRustTxt" label="锈病txt" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="northernLeafBlight" label="大斑病" :align="'center'">
        </el-table-column>
        <el-table-column prop="maizeDwarfMosaicDisease" label="矮花叶病" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="maizeAlbinism" label="白化病" :align="'center'">
        </el-table-column>
        <el-table-column prop="physodermaMaydis" label="褐斑病" :align="'center'">
        </el-table-column>
        <el-table-column prop="grayLeafSpot" label="灰斑病" :align="'center'">
        </el-table-column>
        <el-table-column prop="earKernelRot" label="粒腐病" :align="'center'">
        </el-table-column>
        <el-table-column prop="southernLeafBlight" label="小斑病" :align="'center'">
        </el-table-column>
        <el-table-column prop="graminearumStalkRot" label="禾谷茎腐（%）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="pythiumStalkRot" label="腐霉茎腐（%）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="fGraminearum" label="禾谷穗腐（%）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="fVerticillioides" label="拟轮枝穗腐（级）" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="aphis" label="蚜虫" :align="'center'">
        </el-table-column>
        <el-table-column prop="borerResistance" label="抗虫性" :align="'center'">
        </el-table-column>
        <el-table-column prop="treatmentsApplied" label="接种处理" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="resistanceCharacters1" label="抗性性状1" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="resistanceCharacters2" label="抗性性状2" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="resistanceCharacters3" label="抗性性状3" :align="'center'" width="200">
        </el-table-column>
        <el-table-column prop="comprehensiveResistance" label="综合抗性" :align="'center'" width="200">
        </el-table-column>
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
      loading: false,
    };
  },
  mounted() {
    this.getBioAll();
  },
  methods: {

    getBioAll() {
      return new Promise((resolve) => {
        this.loading=true;
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
        })
        .catch((error) => {
        console.log(error);
        this.$message.warning("暂无数据");
      }).finally(() => {
        this.loading=false;
      })
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
        item.year + "瘤黑粉",
        item.year + "穗腐病",
        item.year + "纹枯病（级)",
        item.year + "锈病（级）",
        item.year + "叶斑病（级）",
        item.year + "玉米螟",
        item.year + "茎腐病（青枯病）",
        item.year + "粗缩病",
        item.year + "锈病txt",
        item.year + "大斑病",
        item.year + "矮花叶病",
        item.year + "白化病",
        item.year + "褐斑病",
        item.year + "灰斑病",
        item.year + "粒腐病",
        item.year + "小斑病",
        item.year + "禾谷茎腐（%）",
        item.year + "腐霉茎腐（%）",
        item.year + "拟轮枝穗腐（级）",
        item.year + "蚜虫",
        item.year + "抗虫性",
        item.year + "接种处理",
        item.year + "抗性性状1",
        item.year + "抗性性状2",
        item.year + "抗性性状3",
        item.year + "综合抗性",
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
          "ustilagoMaydis",
          "maizeEarRot",
          "maizeSheathBlight",
          "southernCornRust",
          "leafSpotDisease",
          "maizeBorer",
          "maizeStalkRot",
          "maizeRoughDwarfDisease",
          "southernCornRustTxt",
          "northernLeafBlight",
          "maizeDwarfMosaicDisease",
          "maizeAlbinism",
          "physodermaMaydis",
          "grayLeafSpot",
          "earKernelRot",
          "southernLeafBlight",
          "graminearumStalkRot",
          "pythiumStalkRot",
          "f.graminearum",
          "f.verticillioides",
          "aphis",
          "borerResistance",
          "treatmentsApplied",
          "resistanceCharacters1",
          "resistanceCharacters2",
          "resistanceCharacters3",
          "comprehensiveResistance"
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
