<template>
  <ZeamapCard>
    <template v-slot:header>
      <Title>Result</Title>
    </template>

    <template>
      <el-button type="primary" style="margin-bottom: 20px;" @click="returnMultiExpression()"><i class="el-icon-arrow-left
"></i> Return</el-button>
      <div class="table-title" style="display: flex;justify-content: space-between;">
        <div class="info-nums">
          <span>show</span> 
          <el-select filterable v-model="page.infoNums" placeholder="" style="width: 80px; margin: 0 8px;">
            <el-option label="10" value="10"></el-option>
            <el-option label="20" value="20"></el-option>
            <el-option label="30" value="30"></el-option>
            <el-option label="50" value="50"></el-option>
          </el-select>
          <span>results</span>
        </div>
        <button style="padding: 5px;">
          <span style="margin-left: 8px; color: #929292"><i class="el-icon-download"></i> Download the results</span>
        </button>
      </div>
      <div class="table-container">
        <el-table
        border
        style="width: 100%;margin-top: 30px;">
        <el-table-column
          label="Position"
        >
        </el-table-column>
        <el-table-column
          label="ID"
        >
        </el-table-column>
        <el-table-column
          label="REF">
        </el-table-column>
        <el-table-column
          label="ALT">
        </el-table-column>
        <el-table-column
          label="238">
        </el-table-column>
        <el-table-column
          label="268">
        </el-table-column>
        <el-table-column
          label="501">
        </el-table-column>
        <el-table-column
          label="1462">
        </el-table-column>
        <el-table-column
          label="4019">
        </el-table-column>
        <el-table-column
          label="5237">
        </el-table-column>
        <el-table-column
          label="5311">
        </el-table-column>
        <el-table-column
          label="7327">
        </el-table-column>
        <el-table-column
          label="7381">
        </el-table-column>
        <el-table-column
          label="9782">
        </el-table-column>
        <el-table-column
          label="526018">
        </el-table-column>
        <el-table-column
          label="CIMBL">
        </el-table-column>
      </el-table>
    </div>

    <el-pagination
      background
      :page-size="page.pageSize"
      @current-change="changePage"
      layout="prev, pager, next"
      :total="page.total"
      style="margin-top: 25px;margin-bottom: 50px;float: right;">
    </el-pagination>
    </template>
  </ZeamapCard>
</template>
<script>
export default {
  props: {
    formInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      page: {
        infoNums: 10,
        pageNum : 1,
        pageSize: 10,
        total: 0
      } 
    }
  },
  created() {
    this.demo()
  },
  methods: {
    demo() {
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@' , this.formInfo);
    },
    returnMultiExpression() {
      this.$emit('returnMultiExpression')
    }
  }
}
</script>

<style scoped>
.result-container {
position: relative;
left: 50%;
transform: translateX(-50%);
width: 90%;
min-width: 900px;
}
</style>