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
          <el-select @change="changePageSize" filterable v-model="page.infoNums" placeholder="" style="width: 80px; margin: 0 8px;">
            <el-option label="10" value="10"></el-option>
            <el-option label="20" value="20"></el-option>
            <el-option label="30" value="30"></el-option>
            <el-option label="50" value="50"></el-option>
          </el-select>
          <span>results</span>
        </div>
      </div>
      <div class="table-container">
        <el-table
        v-loading="loading"
        border
        :data="tableData"
        style="width: 100%;margin-top: 30px;">
        <el-table-column
          label="Position"
          prop="position"
        >
        </el-table-column>
        <el-table-column
          label="ID"
          prop="id"
        >
        </el-table-column>
        <el-table-column
          v-for="name in formInfo.germplasm"
          :label="name"
          :prop="name">
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
import { selectData } from '@/api/geno-viewer/index'
export default {
  props: {
    formInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      page: {
        infoNums: 10,
        pageNum : 1,
        pageSize: 10,
        total: 0
      },
      formAll: {},
      tableData: []
    }
  },
  created() {
    this.mergeFormInfos()
    this.selectData()
  },
  methods: {
    // 合并查询数据
    mergeFormInfos() {
      this.loading = true
      this.formAll.accession = this.formInfo.accession
      this.formAll.version = this.formInfo.version
      this.formAll.alias = this.formInfo.alias
      this.formAll.description = this.formInfo.description
      this.formAll.choose = this.formInfo.germplasm.join(',')
      this.formAll.chorm = this.formInfo.chorm
      this.formAll.start = this.formInfo.start
      this.formAll.end = this.formInfo.end
      this.formAll.pageNum = this.page.pageNum
      this.formAll.pageSize = this.page.pageSize
    },
    // 查数据 格式化数据
    async selectData() {
      const { total, rows } = await selectData(this.formAll)

      this.page.total = total
      const germplasms = this.formInfo.germplasm
      const data = []
      rows.map(item => {
        const info = item.split(" ")
        const dataInfo1 = {
          position: this.formAll.chorm + ":" + info[0],
          id: info[1]
        }
        const dataInfo2 = {} 

        germplasms.map((germplasm,index) => {
          dataInfo2[germplasm] = info[index+2]
        })

        const allData = {...dataInfo1,...dataInfo2}
        data.push(allData)
      })
      this.tableData = data
      this.loading = false
    },
    // 改变页码
    changePage(newVal) {
      this.page.pageNum = newVal
      this.mergeFormInfos()
      this.selectData()
    },
    // 改变pageSize
    changePageSize(newVal) {
      this.page.pageSize = Number(newVal)
      this.page.pageNum = 1
      this.mergeFormInfos()
      this.selectData()
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