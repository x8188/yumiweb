<template>
  <div class="result-container">
    <el-card>
      <Title>Result</Title>
      <el-button
        type="primary"
        style="margin-bottom: 20px"
        @click="returnMultiExpression()"
        >Return</el-button
      >
      <div
        class="table-title"
        style="display: flex; justify-content: space-between"
      >
        <div class="info-nums">
          <span>show</span>
          <el-select
            filterable
            @change="changeResultsNums"
            v-model="page.pageSize"
            style="width: 80px; margin: 0 10px"
          >
            <el-option label="10" :value="10"></el-option>
            <el-option label="15" :value="15"></el-option>
            <el-option label="20" :value="20"></el-option>
            <el-option label="25" :value="25"></el-option>
            <el-option label="50" :value="50"></el-option>
          </el-select>
          <span>results</span>
        </div>
        <button style="padding: 5px" @click="downloadData">
          <SvgIcon icon-class="download02" color="858585" />
          <span style="margin-left: 8px; color: #929292"
            >Download the results</span
          >
        </button>
      </div>
      <div class="table-container">
        <el-table
          border
          style="width: 100%; margin-top: 30px"
          :data="tableData"
          @selection-change="handleSelectionChange"
          v-loading="tableloading"
        >
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column
            label="QTL ID"
            align="center"
            :prop="filterInfo.hasOwnProperty('linkagemap')?'linkageQtlId':'associationQtlId'"
          />
          <el-table-column label="REF" align="center" prop="accession" />
          <el-table-column label="Version" align="center" prop="version" />
          <el-table-column label="Trait Category" align="center" prop="omics" />
          <el-table-column label="Trait ID" align="center" prop="xot_uid" />
          <el-table-column v-if="!filterInfo.hasOwnProperty('linkagemap')" label="Leading -log10(P)" align="center" prop="log" />
          <el-table-column v-if="filterInfo.hasOwnProperty('linkagemap')" label="LOD" align="center" prop="lod" />
          <el-table-column v-if="filterInfo.hasOwnProperty('linkagemap')" label="Linkage Map" align="center" prop="linkagemap" />
        </el-table>
        <el-pagination
          background
          :page-size="page.pageSize"
          :current-page="page.pageNum"
          @current-change="nowPage"
          layout="prev, pager, next"
          :total="page.total"
          style="margin-top: 25px; margin-bottom: 50px; float: right"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
import SvgIcon from "@/components/CommonComponents/SvgIcon.vue";
import { download } from "@/utils/request";
import { blobValidate } from "@/utils/ruoyi";

export default {
  components: { SvgIcon },
  props: {
    tableData: {
      type: Array,
      default: [],
    },
    filterInfo: {
      type: Object,
      default: {},
    },
    page: {
      type: Object,
      default: {},
    },
    tableloading:{
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      infoNums: 10,
      multipleSelection: [],
    };
  },
  methods: {
    returnMultiExpression() {
      this.$emit("returnMultiExpression");
    },
    // Qtldownload() {
    //   this.$confirm("是否确认导出出qtl数据项?", "警告", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //       this.exportLoading = true;
    //       let data = this.filterInfo;
    //       if (!data.hasOwnProperty("linkagemap")) {
    //         this.download(
    //           "genetics/search_qtl/association_qtl/download",
    //           {
    //             ...data,
    //           },
    //           `association_qtl_${new Date().getTime()}.xlsx`
    //         );
    //       } else {
    //         this.download(
    //           "/genetics/search_qtl/linkage_qtl/download",
    //           {
    //             ...data,
    //           },
    //           `linkage_qtl_${new Date().getTime()}.xlsx`
    //         );
    //       }
    //     })
    //     .catch(() => {});
    // },
    async downloadData() {
      console.log(this.multipleSelection);

      if (!this.filterInfo.hasOwnProperty("linkagemap")) {
        const data = await this.$API.Qtl.reqqtldownload(this.multipleSelection);
        const isOk = await blobValidate(data);
        if (isOk) {
          this.$notify({
            title: "成功",
            message: "请求成功，正在下载",
            type: "success",
          });

          // const res2 = await blobValidate(res1)
          const res1 = new Blob([data]);
          const fileName = "association_qtl_" + new Date().getTime() + ".xlsx";

          this.$download.saveAs(res1, fileName);
        } else {
          this.$notify.error({
            title: "错误",
            message: "下载失败，请联系管理员",
          });
        }
      } else {
        const data = await this.$API.Qtl.reqlinkagedownload(this.multipleSelection);
        const isOk = await blobValidate(data);
        if (isOk) {
          this.$notify({
            title: "成功",
            message: "请求成功，正在下载",
            type: "success",
          });

          // const res2 = await blobValidate(res1)
          const res1 = new Blob([data]);
          const fileName = "linkage_qtl_" + new Date().getTime() + ".xlsx";

          this.$download.saveAs(res1, fileName);
        } else {
          this.$notify.error({
            title: "错误",
            message: "下载失败，请联系管理员",
          });
        }
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // changePage() {
    //   this.$emit("changePage", this.page);
    // },
    async nowPage(newVal) {
      this.page.pageNum = newVal;
      await this.$bus.$emit("changeQtlPage");
    },
    async changeResultsNums(newVal) {
      this.page.pageSize = newVal;
      await this.$bus.$emit("changeQtlPage");
    },
  },
};
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
