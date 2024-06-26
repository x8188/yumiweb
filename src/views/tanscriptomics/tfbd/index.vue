<template>
  <div>
    <div class="tableDiv">
      <div :class="{ fitershide: filterHide }" class="filterDiv" style="background-color:#f4f4f4;padding: 10px 5px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);">
        <span @click="filterHide = !filterHide" class="fiterShow">
          <i v-if="filterHide" class="el-icon-caret-top"></i>
          <i v-else class="el-icon-caret-bottom"></i>
        </span>
        <div v-show="filterHide" v-loading="filterloading">
          <!-- <div>
            <i class="el-icon-refresh-left refFilter" @click="reset"></i>
          </div> -->
          <el-form
            ref="elForm"
            :model="formData"
            :rules="rules"
            size="medium"
            :inline="true"
          >
          <el-row :gutter="24" type="flex" justify="center">
            <el-form-item label="Reference" prop="reference">
              <el-select
                filterable
                v-model="formData.reference"
                placeholder="请选择Reference"
                clearable
                :style="{ width: '100%' }"
                @change="getVersionOp"
              >
                <el-option
                  v-for="(item, index) in referenceOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Version" prop="version">
              <el-select
                filterable
                v-model="formData.version"
                placeholder="请选择Version"
                clearable
                :style="{ width: '100%' }"
                :disabled="formData.reference == undefined"
              >
                <el-option
                  v-for="(item, index) in versionOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Analysis" prop="analysis">
              <el-select
                filterable
                v-model="formData.analysis"
                placeholder="请选择Analysis"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option
                  v-for="(item, index) in analysisOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="TF" prop="tf">
              <el-select
                filterable
                v-model="formData.tf"
                placeholder="请选择TF"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option
                  v-for="(item, index) in tfOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
          
          </el-row>
          <el-row :gutter="24" type="flex" justify="center">
            <el-form-item label="TF Family" prop="tf">
              <el-select
                filterable
                v-model="formData.tfFamily"
                placeholder="请选择TF"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option
                  v-for="(item, index) in tfFamilyOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="TF Name" prop="tf">
              <el-select
                filterable
                v-model="formData.tfName"
                placeholder="请选择TF"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option
                  v-for="(item, index) in tfNameOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Target Gene ID" prop="geneId">
              <el-select
                filterable
                v-model="formData.geneId"
                placeholder="请选择Target Gene ID"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option
                  v-for="(item, index) in geneIdOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Maximun Confidence P-value" prop="maxPvalue">
              <el-input
                v-model="formData.maxPvalue"
                placeholder="The range of Max P-value is 0-1"
                clearable
                :style="{ width: '100%' }"
                @input="onInputRebate"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          
        </el-row>
          </el-form>
          <!-- <el-button type="" @click="updata">筛选</el-button> -->
          <el-row  type="flex" justify="center">
            <div class="footer">
            <el-button size="small" @click="reset" style="margin-right: 15px">
              <SvgIcon
                icon-class="CLEAR"
                color="04afaf"
                style="margin-right: 7px; margin-left: 0"
              ></SvgIcon>
              <span style="color: #04afaf">清空</span>
            </el-button>
            <el-button type="primary" size="small" @click="updata">
              <SvgIcon
                icon-class="search"
                color="fff"
                style="margin-left: 7px"
              ></SvgIcon>查询
            </el-button>
          </div>


          </el-row>

        </div>
      </div>
        <div style="text-align: center;align-items: center; margin-bottom: 10px;line-height: 30px;margin-top: 10px;">
            <p style="display:inline;font-size:25px;color:#136649;font-weight:bolder;font-family:'Times New Roman';">Transcription factor binding site</p>
            <el-button
              @click="downloadData()"
              type="primary"
              icon="el-icon-download"
              style="width: 100px;float:right;"
              >下载</el-button
            >
          </div>
        <el-table
          :data="tfbdList"
          @selection-change="handleSelectionChange"
          v-loading="tableloading"
          
        >
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column label="accession" align="center" prop="accession" />
          <el-table-column label="version" align="center" prop="version" />
          <el-table-column
            label="analysis"
            align="center"
            prop="analysis_name"
          />
          <el-table-column label="info" align="center" prop="info_name" />
          <el-table-column
            label="info_simplename"
            align="center"
            prop="info_simplename"
          />
          <el-table-column
            label="info_family"
            align="center"
            prop="info_family"
          />
          <el-table-column
            label="target_gene"
            align="center"
            prop="target_gene"
          />
          <!-- <el-table-column
            label="updateTime"
            align="center"
            prop="updateTime"
          />
          <el-table-column label="updateBy" align="center" prop="updateBy" />
          <el-table-column
            label="createTime"
            align="center"
            prop="createTime"
          />
          <el-table-column label="createBy" align="center" prop="createBy" /> -->
          <el-table-column label="p_value" align="center" prop="p_value" />
          <!-- <el-table-column
            label="操作"
            align="center"
            class-name="small-padding fixed-width"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                icon="el-icon-edit"
                @click="handleUpdate(scope.row)"
                v-hasPermi="['zeamap:tfbd:edit']"
                >修改</el-button
              >
              <el-button
                size="mini"
                type="text"
                icon="el-icon-delete"
                @click="handleDelete(scope.row)"
                v-hasPermi="['zeamap:tfbd:remove']"
                >删除</el-button
              >
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination
          v-show="total > 0"
          :total="total"
          :page-size="page.pageSize"
          :current-page="page.pageNum"
          @current-change="nowPage"
          layout="prev, pager, next"
          background
          style="margin-top: 25px; margin-bottom: 50px; float: right"
        />
      </div>
    </div>
</template>

<script>
// import {
//   listTfbd,
//   getTfbd,
//   delTfbd,
//   addTfbd,
//   updateTfbd,
// } from "@/api/zeamap/tfbd";
import { blobValidate } from "@/utils/ruoyi";
import SvgIcon from "@/components/CommonComponents/SvgIcon.vue";

export default {
  components: { SvgIcon },
  name: "Tfbd",
  data() {
    return {
      formData: {
        reference: undefined,
        version: undefined,
        analysis: undefined,
        tf: undefined,
        tfFamily: undefined,
        tfName: undefined,
        geneId: undefined,
        maxPvalue: undefined,
      },
      rules: {
        reference: [],
        version: [],
        analysis: [],
        tf: [],
        geneId: [],
        maxPvalue: [],
      },
      referenceOptions: [],
      versionOptions: [],
      analysisOptions: [],
      tfOptions: [],
      geneIdOptions: [],

      tfNameOptions: [],
      tfFamilyOptions: [],
      // 筛选器是否隐藏
      filterHide: true,
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // Transcriptomics表格数据
      tfbdList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        tfbdName: null,
        tfbdFamily: null,
        tfbdSimplename: null,
        tfbdGenev4: null,
        tfbdGenev3: null,
        tfbdClass: null,
        tfbdAtid: null,
        tfbdAtsimplename: null,
        tfbdDescription: null,
        tfbdPhenotype: null,
        tfbdAnalysisid: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {},
      page: {
        pageNum: 1,
        pageSize: 10,
      },
      multipleSelection: [],

      tableloading: false,
      filterloading: false,
    };
  },
  // async created() {
  //   // this.getList();
  //   await this.getFilterOp();
  //   this.formData.reference = this.referenceOptions[0].value;
  //   await this.getVersionOp();

  //   this.updata();
  //   // let data = {
  //   //   accession: this.formData.reference,
  //   //   version: this.formData.version,
  //   //   analysis_name: null,
  //   //   info_name: null,
  //   //   info_simplename: null,
  //   //   info_family: null,
  //   //   target_gene: null,
  //   //   p_value: null,
  //   // };
  //   // let pageParams = {
  //   //   pageNum: 1,
  //   //   pageSize: 10,
  //   // };
  //   // this.getTaleData(data, pageParams);
  // },
  methods: {
    onInputRebate() {
      // 获取当前表单输入的返点
      let rebate = this.formData.maxPvalue;
      // 去除小数点和数字以外的字符
      let newRebate = rebate.replace(/[^\d.]/g, "");
      // 将返点字符拆分成数组
      let splitRebate = newRebate.split("");
      // 第一个字符必须为0
      if (splitRebate[0] && splitRebate[0] != "0") {
        splitRebate[0] = "";
      }
      // 第二个字符必须为小数点
      if (splitRebate[1] && splitRebate[1] != ".") {
        splitRebate = ["0"];
      }

      this.formData.maxPvalue = splitRebate.join("");
    },
    // 下载
    async downloadData() {
      console.log(this.multipleSelection);
      // const tempQuery = {
      //   accession: "B73",
      //   version: "4.43.0",
      //   analysis: "ZhangXY-leaf_K4me3-HiChIP",
      //   chrA: "chr1",
      //   startA: "1",
      //   endA: "9999999999",
      //   chrB: "chr1",
      //   startB: "1",
      //   endB: "99999999999",
      // };
      const data = await this.$API.trans.reqDownload(this.multipleSelection);
      const isOk = await blobValidate(data);
      if (isOk) {
        this.$notify({
          title: "成功",
          message: "请求成功，正在下载",
          type: "success",
        });

        // const res2 = await blobValidate(res1)
        const res1 = new Blob([data]);
        const fileName = "transcriptomics_" + new Date().getTime() + ".xlsx";

        this.$download.saveAs(res1, fileName);
      } else {
        this.$notify.error({
          title: "错误",
          message: "下载失败，请联系管理员",
        });
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async getFilterOp() {
      this.filterloading = true;

      let res1 = await this.$API.trans.reqSelectReference();
      if (res1.code == 200) {
        this.referenceOptions = res1.data.map((x) => ({
          label: x,
          value: x,
        }));
      }

      let res3 = await this.$API.trans.reqSelectAnalysis();
      if (res3.code == 200) {
        this.analysisOptions = res3.data.map((x) => ({
          label: x,
          value: x,
        }));
      }
      let res4 = await this.$API.trans.reqSelectTFID();
      if (res4.code == 200) {
        this.tfOptions = res4.data.map((x) => ({
          label: x,
          value: x,
        }));
      }
      let res5 = await this.$API.trans.reqSelectTFGeneID();
      if (res5.code == 200) {
        let ref = res5.data.slice(0, 10);
        this.geneIdOptions = ref.map((x) => ({
          label: x,
          value: x,
        }));
      }
      let res6 = await this.$API.trans.reqSelectTFName();
      if (res6.code == 200) {
        this.tfNameOptions = res6.data.map((x) => ({
          label: x,
          value: x,
        }));
      }
      let res7 = await this.$API.trans.reqSelectTFFamily();
      if (res7.code == 200) {
        this.tfFamilyOptions = res7.data.map((x) => ({
          label: x,
          value: x,
        }));
      }
      this.filterloading = false;
    },
    async getVersionOp() {
      // let file = new FormData();
      // file.append('accession',this.formData.reference);
      this.filterloading = true;

      let res2 = await this.$API.trans.reqSelectVersion(
        this.formData.reference
      );
      if (res2.code == 200) {
        this.versionOptions = res2.data.map((x) => ({
          label: x,
          value: x,
        }));
        this.formData.version = this.versionOptions[0].value;
      }
      this.filterloading = false;
    },

    async getTaleData(data, pageParams) {
      let result = await this.$API.trans.reqSelectInfo(data, pageParams);
      if (result.code == 200) {
        this.tfbdList = result.rows;
        this.total = result.total;
      }
    },

    async updata() {
      // let file = new FormData();
      // file.append("accession",  this.formData.reference || "");
      // file.append("version", this.formData.version || "");
      // file.append("analysis_name", this.formData.analysis || "");
      // file.append("info_name",  this.formData.tf || "");
      // file.append("info_simplename", this.formData.tfName || "");
      // file.append("info_family",  this.formData.tfFamily || "");
      // file.append("target_gene", this.formData.geneId || "");
      // file.append("p_value", this.formData.maxPvalue || "");
      this.$refs["elForm"].validate(async (valid) => {
        if (valid) {
          this.tableloading = true;
          let data = {
            accession: this.formData.reference,
            version: this.formData.version,
            analysis_name: this.formData.analysis,
            info_name: this.formData.tf,
            info_simplename: this.formData.tfName,
            info_family: this.formData.tfFamily,
            target_gene: this.formData.geneId,
            p_value: this.formData.maxPvalue,
          };
          let pageParams = {
            pageNum: this.page.pageNum,
            pageSize: this.page.pageSize,
          };
          await this.getTaleData(data, pageParams);
          this.tableloading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    nowPage(newVal) {
      this.page.pageNum = newVal;
      this.updata();
    },
    changeResultsNums(newVal) {
      this.page.pageSize = newVal;
      this.updata();
    },
    async reset() {
      this.formData = {
        reference: undefined,
        version: undefined,
        analysis: undefined,
        tf: undefined,
        tfFamily: undefined,
        tfName: undefined,
        geneId: undefined,
        maxPvalue: undefined,
      };
      await this.getFilterOp();
      this.formData.reference = this.referenceOptions[0].value;
      await this.getVersionOp();

      this.updata();
    },
    // /** 查询Transcriptomics列表 */
    // getList() {
    //   this.loading = true;
    //   // listTfbd(this.queryParams).then((response) => {
    //   //   this.tfbdList = response.rows;
    //   //   this.total = response.total;
    //   //   this.loading = false;
    //   // });
    // },
    // // 取消按钮
    // cancel() {
    //   this.open = false;
    //   this.reset();
    // },
    // // 表单重置
    // reset() {
    //   this.form = {
    //     tfbdId: null,
    //     tfbdName: null,
    //     tfbdFamily: null,
    //     tfbdSimplename: null,
    //     tfbdGenev4: null,
    //     tfbdGenev3: null,
    //     tfbdClass: null,
    //     tfbdAtid: null,
    //     tfbdAtsimplename: null,
    //     tfbdDescription: null,
    //     tfbdPhenotype: null,
    //     tfbdAnalysisid: null,
    //   };
    //   this.resetForm("form");
    // },
    // /** 搜索按钮操作 */
    // handleQuery() {
    //   this.queryParams.pageNum = 1;
    //   this.getList();
    // },
    // /** 重置按钮操作 */
    // resetQuery() {
    //   this.resetForm("queryForm");
    //   this.handleQuery();
    // },
    // // 多选框选中数据
    // handleSelectionChange(selection) {
    //   this.ids = selection.map((item) => item.tfbdId);
    //   this.single = selection.length !== 1;
    //   this.multiple = !selection.length;
    // },
    // /** 新增按钮操作 */
    // handleAdd() {
    //   this.reset();
    //   this.open = true;
    //   this.title = "添加Transcriptomics";
    // },
    // /** 修改按钮操作 */
    // handleUpdate(row) {
    //   this.reset();
    //   const tfbdId = row.tfbdId || this.ids;
    //   // getTfbd(tfbdId).then((response) => {
    //   //   this.form = response.data;
    //   //   this.open = true;
    //   //   this.title = "修改Transcriptomics";
    //   // });
    // },
    // /** 提交按钮 */
    // submitForm() {
    //   this.$refs["form"].validate((valid) => {
    //     if (valid) {
    //       if (this.form.tfbdId != null) {
    //         // updateTfbd(this.form).then((response) => {
    //         //   this.$modal.msgSuccess("修改成功");
    //         //   this.open = false;
    //         //   this.getList();
    //         // });
    //       } else {
    //         // addTfbd(this.form).then((response) => {
    //         //   this.$modal.msgSuccess("新增成功");
    //         //   this.open = false;
    //         //   this.getList();
    //         // });
    //       }
    //     }
    //   });
    // },
    // /** 删除按钮操作 */
    // handleDelete(row) {
    //   const tfbdIds = row.tfbdId || this.ids;
    //   this.$modal
    //     .confirm('是否确认删除Transcriptomics编号为"' + tfbdIds + '"的数据项？')
    //     .then(function () {
    //       return delTfbd(tfbdIds);
    //     })
    //     .then(() => {
    //       this.getList();
    //       this.$modal.msgSuccess("删除成功");
    //     })
    //     .catch(() => {});
    // },
    // /** 导出按钮操作 */
    // handleExport() {
    //   this.download(
    //     "zeamap/tfbd/export",
    //     {
    //       ...this.queryParams,
    //     },
    //     `tfbd_${new Date().getTime()}.xlsx`
    //   );
    // },
    // onClose() {
    //   this.$refs["elForm"].resetFields();
    // },
    // close() {
    //   this.$emit("update:visible", false);
    // },
    // handleConfirm() {
    //   this.$refs["elForm"].validate((valid) => {
    //     if (!valid) return;
    //     this.close();
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.tableDiv {
  display: flex;
  flex-direction: column;
  
}
.tableclass {
  // 很神奇，加上width：0之后，flex才不会突破父元素宽度。
  // width: 0;
  // min-width: 0;
  // flex-grow: 1;
  flex: 1;
  overflow: hidden;
  overflow: hidden;
  border: 0px solid;

  .el-button {
    float: right;

  }

  .el-table {
    margin-left: 15px;
  }

  .pagination-container {
    margin-left: 15px;
  }
}
.filterDiv {
  .el-form {
    width: 100%;
    margin-top: 10px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;

    .el-col {
      margin: 0 auto;
      //  width: 300px;
      width: 80%;


    }

    #col-one {
      display: flex;
      padding-left: 6px;
      padding-right: 6px;

      span {
        flex: 1;
        text-align: center;
      }

      #span-second {
        color: #409EFF;
        cursor: pointer;
      }
    }
  }
}
// .fitershide {
//   // flex:none;
//   width: 300px;
//   flex-shrink: 0;
// }

.refFilter {
  font-size: 25px;
  font-weight: bold;
  float: right;
  margin-right: 10px;
  margin-top: -30px;
  cursor: pointer;
}
.fiterShow i {
  font-size: 30px;
  color: #40878f;
  cursor: pointer;
  margin: 10px 10px 10px 5px;
  // margin: 10px;

  float: left;
  z-index: 99;
  position: relative;
}
// // 此处要么去掉scoped，要么加上v-deep。推测原因是有el-button这个el自带组件
// ::v-deep .hideclass {
//   // .tabelhide{
//   //   margin-left: 200px;
//   // }
//   .fitershide{
//     width: 200px !important;
//   }
// }
.data-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.footer {
  // margin-top: 20px;
  // margin-right: 20px;
  display: flex;
  justify-content: flex-end;
}

::v-deep .el-table .el-table__header-wrapper tr th {
	// background-color: #1FB864 !important;
  background-color: #40878f !important;
	color: rgb(255, 255, 255);
}
::v-deep .el-form-item__label{
    color: #337177;
  }
</style>
