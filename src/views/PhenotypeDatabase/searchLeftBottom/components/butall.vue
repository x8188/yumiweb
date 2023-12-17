<template>
  <div class="content">
    <el-table
      ref="multipleTable"
      :data="tableData"
      height="660"
      style="width: 100%;margin:auto"
      tooltip-effect="dark"
      class="main trait-form-table"
      stripe
      border
    >
      <el-table-column
        prop="code"
        fixed="left"
        label="系谱内部码"
        width="100"
        :align="'center'"
        class="charts-detail"
      >
      </el-table-column>
      <el-table-column
        prop="pedigree"
        fixed="left"
        label="系谱"
        width="260"
        class="charts-detail"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        prop="location"
        fixed="left"
        label="地区"
        width="120"
        class="charts-detail"
        :align="'center'"
      >

      </el-table-column>
      <el-table-column
        prop="year"
        class="charts-detail"
        fixed="left"
        label="年份"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="newsource"
        label="新来源"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="pastsource"
        label="旧来源"
        width="140"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="silking"
        label="吐丝期"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="dispersal"
        label="散粉期"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="mature"
        label="成熟期"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column :fixed="false" prop="height" label="株高" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="earheight" label="穗位" :align="'center'">
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="malespikes"
        label="雄穗分枝数"
        width="100"
        :align="'center'"
      >
      </el-table-column>

      <el-table-column
        :fixed="false"
        prop="spindlelength"
        label="雄花主轴长度"
        width="100"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column :fixed="false" prop="leaflength" label="穗上叶长" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="leaflength" label="穗上叶宽" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="stemdiameter" label="茎粗" :align="'center'">
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="rates"
        label="倒伏折射率之和(%)"
        width="140"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column :fixed="false" prop="rust" label="锈病(级)" :align="'center'">
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="stemrot"
        label="茎腐病(%)"
        width="120"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column :fixed="false" prop="roughdwarf" label="粗缩(%)" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="hollow" label="空杆(%)" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="plantsnum" label="株数" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="blackpowder" label="黑粉" :align="'center'">
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="expression"
        label="果穗表现"
        width="200"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column :fixed="false" prop="spikelength" label="穗长" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="spikewidth" label="穗粗" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="row" label="穗行数" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="kernels" label="行粒数" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="axiscolor" label="轴色" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="grainweight" label="百粒重" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="grainlength" label="籽粒长" :align="'center'">
      </el-table-column>
      <el-table-column :fixed="false" prop="grainwidth" label="籽粒宽" :align="'center'">
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="yield"
        label="小区标准产量(KG)"
        width="140 "
        :align="'center'"
      >
      </el-table-column>
      <el-table-column :fixed="false" prop="seedyield" label="出籽率" :align="'center'">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { btnAll } from "@/api/jointCreation/searchLeftBottom/index";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    // 获取表格数据
    btnAll().then((res) => {
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
    });
  },
};
</script>

<style type="less" scoped>
/* /deep/ .el-scrollbar__bar {
  z-index: 2;
} */
.content {
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 10px;
  box-shadow: 0 2px 12px 0 rgba(214, 32, 32, 0.1);
}
:deep(.el-scrollbar__wrap) {
    z-index: 100; /* 设置横向拉动条的层叠顺序为较高的值 */
  }
:deep(.content::-webkit-scrollbar) {
  z-index: 100000;
}
:deep(.el-table__fixed-right),:deep(.el-table__fixed) {
        height: auto !important;
        bottom: 6px !important;
    }
</style>>
