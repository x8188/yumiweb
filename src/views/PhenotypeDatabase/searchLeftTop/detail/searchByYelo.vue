<template>
  <div class="content">
    <el-table
      :data="tableData"
      border
      height="650"
      tooltip-effect="dark"
      stripe
      style="width: 100%"
    >
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
      <el-table-column
        prop="trait"
        :label=translatedTraitLabel
        width="140"
        :align="'center'"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { searchByYelo } from "@/api/jointCreation/searchLeftTop/index";
export default {
  data() {
    return {
      traitLabel:"",
      tableData: [],
    };
  },
  computed: {
    translatedTraitLabel() {
      // 中英文转换逻辑
      const translationMap = {
        // 中文 -> 英文 映射关系
        'height': '株高',
        'silking':'吐丝期',
        'dispersal':'散粉期',
        'mature':'成熟期',
        'earheight':'穗位',
        'maleSpikes':'雄穗分枝数',
        'malespikes':'雄穗分枝数',
        'spindlelength':'雄花主轴长度',
        'spindleLength':'雄花主轴长度',
        'leaflength':'穗上叶长',
        'leafLength':'穗上叶长',
        'leafwidth':'穗上叶宽',
        'leafWidth':'穗上叶宽',
        'stemdiameter':'茎粗',
        'stemDiameter':'茎粗',
        'rates':'倒伏折射率之和(%)',
        'rust':'锈病(级)',
        'stemrot':'茎腐病(%)',
        'roughdwarf':'粗缩(%)',
        'roughDwarf':'粗缩(%)',
        'hollow':'空杆(%)',
        'plantsnum':'株数',
        'plantsNum':'株数',
        'blackpowder':'黑粉',
        'blackPowder':'黑粉',
        'expression':'果穗表现',
        'spikelength':'穗长',
        'spikeLength':'穗长',
        'spikewidth':'穗粗',
        'spikeWidth':'穗粗',
        'row':'穗行数',
        'kernels':'行粒数',
        'axiscolor':'轴色',
        'axisColor':'轴色',
        'grainweight':'百粒重',
        'grainWeight':'百粒重',
        'grainlength':'籽粒长',
        'grainLength':'籽粒长',
        'grainwidth':'籽粒宽',
        'grainWidth':'籽粒宽',
        'yield':'小区标准产量(KG)',
        'seedyield':'出籽率',
        'seedYield':'出籽率',

        // 添加更多映射关系...
      };

      // 根据traitLabel的值进行中英文转换
      const translatedLabel = translationMap[this.traitLabel] || this.traitLabel;

      return translatedLabel;
    }
  },
  mounted() {
    const pedigree = this.$route.query.pedigree;
    const trait = this.$route.query.trait;
    const year = this.$route.query.year;
    const location = this.$route.query.location;
    const query = {
      pedigree,
      trait,
      year,
      location,
    };
    // 获取表格数据
    searchByYelo(query)
      .then((res) => {
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
        this.traitLabel = trait;
        console.log(this.tableData,'this.tableData');
      })
      .catch((error) => {
        console.log(error);
        this.$message.warning("暂无数据");
      });
  },
};
</script>
<style scoped>
.content {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 5px;
  width: 80%;
  /* height: 800px; */
  overflow: auto;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
