<template>
  <div class="all-mor">
    <div class="chart-mor">
      <el-table :data="tableData" border height="800" style="width: 100%">
        <el-table-column
        label="序号"
        type="index"
        :align="'center'"
        width="80"
        fixed="left"
      >
      </el-table-column>
        <el-table-column
          prop="pedid"
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
          :fixed="false"
          prop="pedigreesource1"
          label="来源1"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          :fixed="false"
          prop="pedigreesource2"
          label="来源2"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="plantHeight" label="株高" :align="'center'">
        </el-table-column>
        <el-table-column prop="earHeight" label="穗位" :align="'center'">
        </el-table-column>
        <!-- <el-table-column
          prop="tasselLengthTop"
          label="雄穗最上面节间长度"
          :align="'center'"
          width="200"
        >
        </el-table-column> -->
        <el-table-column
          prop="tasselBranchNumber"
          label="雄一级侧枝数目"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="tasselNumberAboveEar"
          label="穗上叶片数"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="seedlingPotential"
          label="苗势"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="tasselLength2"
          label="雄穗倒数第二侧枝长度"
          :align="'center'"
          width="250"
        >
        </el-table-column>
        <el-table-column
          prop="tasselPosture2"
          label="雄穗倒数第二侧枝姿势"
          :align="'center'"
          width="250"
        >
        </el-table-column>
        <el-table-column
          prop="tasselAngle2"
          label="雄穗主轴与倒数第二侧枝夹角"
          :align="'center'"
          width=300
        >
        </el-table-column>
        <el-table-column
          prop="tasselLength3"
          label="雄穗最低位侧枝以上主轴长度"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="tasselLength4"
          label="雄穗最高位侧枝以上主轴长度"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="tasselDensity"
          label="雄穗小穗密度"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="tasselWeight1"
          label="雄穗鲜重"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="tasselWeight2"
          label="雄穗干重"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="tasselFloretNumber"
          label="穗小花数"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="pollenQuantity" label="花粉量" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="rootDistribution"
          label="根分布"
          :align="'center'"
        >
        </el-table-column> -->
        <el-table-column prop="rootLayer" label="根层" :align="'center'">
        </el-table-column>
        <!-- <el-table-column prop="rootThickness" label="根粗细" :align="'center'">
        </el-table-column>
        <el-table-column prop="rootAngle" label="根夹角" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="femaleRootDistribution"
          label="母根分布"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="maleRootDistribution"
          label="父根分布"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          prop="leafShape1"
          label="第一叶顶端形状"
          :align="'center'"
          width="250"
        >
        </el-table-column>
        <el-table-column prop="leafPosture1" label="顶叶叶姿" :align="'center'">
        </el-table-column> -->
        <!-- <el-table-column
          prop="leafAngle"
          label="上位穗上叶与茎杆夹角"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="leafPosture2"
          label="上位穗上叶姿态"
          :align="'center'"
          width="200"
        >
        </el-table-column> -->
        <el-table-column
          prop="leafNumber1"
          label="成株叶片数"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="earBearingPosture"
          label="果穗着生姿态"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="huskTier" label="苞叶层数" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="huskThickness1"
          label="苞叶总厚度"
          :align="'center'"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="huskThickness2"
          label="苞叶厚度"
          :align="'center'"
        >
        </el-table-column> -->
        <el-table-column
          prop="silkColor"
          label="花丝花青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="antherColor"
          label="花药花青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="stemRootColor"
          label="茎支持根花青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column> -->
        <el-table-column prop="rachisColor" label="穗轴颜色" :align="'center'">
        </el-table-column>
        <!-- <el-table-column
          prop="sheathColor1"
          label="第一叶鞘青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="glumeColor"
          label="颖片基部青甙显色"
          :align="'center'"
          width="300"
        >
        </el-table-column> -->
        <!-- <el-table-column prop="leafColor1" label="幼苗叶色" :align="'center'">
        </el-table-column> -->
        <!-- <el-table-column
          prop="grainColor2"
          label="籽粒背面颜色"
          :align="'center'"
          width=300
        >
        </el-table-column> -->
        <el-table-column prop="grainColor" label="籽粒颜色" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="tasselBranchNumber"
          label="雄穗分枝数"
          width="200"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="leafLength" label="穗上叶长" :align="'center'">
        </el-table-column>
        <el-table-column prop="leafWidth" label="穗上叶宽" :align="'center'">
        </el-table-column>
        <el-table-column prop="stemDiameter" label="茎粗" :align="'center'">
        </el-table-column>
        <!-- <el-table-column prop="spindleLength" label="轴长" :align="'center'">
        </el-table-column> -->
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

          console.log(chartData, "chartData");
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
        item.year + "穗上叶长",
        item.year + "穗上叶宽",
        item.year + "株高",
        item.year + "穗位",
        item.year + "雄穗最上面节间长度",
        item.year + "雄一级侧枝数目",
        item.year + "穗上叶片数",
        item.year + "苗势",
        item.year + "雄穗倒数第二侧枝长度",
        item.year + "雄穗倒数第二侧枝姿势",
        item.year + "雄穗主轴与倒数第二侧枝夹角",
        item.year + "雄穗最低位侧枝以上主轴长度",
        item.year + "雄穗最高位侧枝以上主轴长度",
        item.year + "雄穗小穗密度",
        item.year + "雄穗鲜重",
        item.year + "雄穗干重",
        item.year + "穗小花数",
        item.year + "花粉量",
        item.year + "根分布",
        item.year + "根层",
        item.year + "根粗细",
        item.year + "根夹角",
        item.year + "母根分布",
        item.year + "父根分布",
        item.year + "第一叶顶端形状",
        item.year + "顶叶叶姿",
        item.year + "上位穗上叶与茎杆夹角",
        item.year + "上位穗上叶姿态",
        item.year + "成株叶片数",
        item.year + "果穗着生姿态",
        item.year + "苞叶层数",
        item.year + "苞叶总厚度",
        item.year + "苞叶厚度",
        item.year + "花丝花青甙显色",
        item.year + "花药花青甙显色",
        item.year + "茎支持根花青甙显色",
        item.year + "穗轴颜色",
        item.year + "第一叶鞘青甙显色",
        item.year + "颖片基部青甙显色",
        item.year + "幼苗叶色",
        item.year + "籽粒背面颜色",
        item.year + "籽粒颜色",
        item.year + "上位穗上叶鞘花青甙显色",
        item.year + "上位穗上叶叶色",

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
          "leafLength",
          "leafWidth",
          "plantHeight",
          "earHeight",
          "tasselLengthTop",
          "tasselBranchNumber1",
          "tasselNumberAboveEar",
          "seedlingPotential",
          "tasselLength2",
          "tasselPosture2",
          "tasselAngle2",
          "tasselLength3",
          "tasselLength4",
          "tasselDensity",
          "tasselWeight1",
          "tasselWeight2",
          "tasselFloretNumber",
          "pollenQuantity",
          "rootDistribution",
          "rootLayer",
          "rootThickness",
          "rootAngle",
          "femaleRootDistribution",
          "maleRootDistribution",
          "leafShape1",
          "leafPosture1",
          "leafAngle",
          "leafPosture2",
          "leafNumber1",
          "earBearingPosture",
          "huskTier",
          "huskThickness1",
          "huskThickness2",
          "silkColor",
          "antherColor",
          "stemRootColor",
          "rachisColor",
          "sheathColor1",
          "glumeColor",
          "leafColor1",
          "grainColor2",
          "grainColor",
          "sheathColor",
          "leafColor",
          "tasselBranchNumber"


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
