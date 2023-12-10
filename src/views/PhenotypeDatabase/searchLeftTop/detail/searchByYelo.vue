<template>
  <div class="content">
    <el-table
      :data="tableData"
      border
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
        prop="silking"
        label="吐丝期"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        prop="dispersal"
        label="散粉期"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        prop="mature"
        label="成熟期"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="height" label="株高" :align="'center'">
      </el-table-column>
      <el-table-column prop="earheight" label="穗位" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="malespikes"
        label="雄穗分枝数"
        width="100"
        :align="'center'"
      >
      </el-table-column>

      <el-table-column
        prop="spindlelength"
        label="雄花主轴长度"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="leaflength" label="穗上叶长" :align="'center'">
      </el-table-column>
      <el-table-column prop="leafwidth" label="穗上叶宽" :align="'center'">
      </el-table-column>
      <el-table-column prop="stemdiameter" label="茎粗" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="rates"
        label="倒伏折射率之和(%)"
        width="140"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="rust" label="锈病(级)" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="stemrot"
        label="茎腐病(%)"
        width="120"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="roughdwarf" label="粗缩(%)" :align="'center'">
      </el-table-column>
      <el-table-column prop="hollow" label="空杆(%)" :align="'center'">
      </el-table-column>
      <el-table-column prop="plantsnum" label="株数" :align="'center'">
      </el-table-column>
      <el-table-column prop="blackpowder" label="黑粉" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="expression"
        label="果穗表现"
        width="200"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="spikelength" label="穗长" :align="'center'">
      </el-table-column>
      <el-table-column prop="spikewidth" label="穗粗" :align="'center'">
      </el-table-column>
      <el-table-column prop="row" label="穗行数" :align="'center'">
      </el-table-column>
      <el-table-column prop="kernels" label="行粒数" :align="'center'">
      </el-table-column>
      <el-table-column prop="axiscolor" label="轴色" :align="'center'">
      </el-table-column>
      <el-table-column prop="grainweight" label="百粒重" :align="'center'">
      </el-table-column>
      <el-table-column prop="grainlength" label="籽粒长" :align="'center'">
      </el-table-column>
      <el-table-column prop="grainwidth" label="籽粒宽" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="yield"
        label="小区标准产量(KG)"
        width="140"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="seedyield" label="出籽率" :align="'center'">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { searchByYelo } from "@/api/jointCreation/searchLeftTop/index";
export default {
  data() {
    return {
      tableData: [],
    };
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
  width: 90%;
  height: 800px;
  overflow: auto;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
