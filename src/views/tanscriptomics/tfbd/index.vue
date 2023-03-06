<template>
  <div class="app-container">
    <!-- <el-form
      :model="queryParams"
      ref="queryForm"
      size="small"
      :inline="true"
      v-show="showSearch"
      label-width="68px"
    >
      <el-form-item label="基因名" prop="tfbdName">
        <el-input
          v-model="queryParams.tfbdName"
          placeholder="请输入基因名"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="组群" prop="tfbdFamily">
        <el-input
          v-model="queryParams.tfbdFamily"
          placeholder="请输入组群"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="simplename" prop="tfbdSimplename">
        <el-input
          v-model="queryParams.tfbdSimplename"
          placeholder="请输入simplename"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="genev4" prop="tfbdGenev4">
        <el-input
          v-model="queryParams.tfbdGenev4"
          placeholder="请输入genev4"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="genev3" prop="tfbdGenev3">
        <el-input
          v-model="queryParams.tfbdGenev3"
          placeholder="请输入genev3"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="class" prop="tfbdClass">
        <el-input
          v-model="queryParams.tfbdClass"
          placeholder="请输入class"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="AtID" prop="tfbdAtid">
        <el-input
          v-model="queryParams.tfbdAtid"
          placeholder="请输入AtID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="atsimplename" prop="tfbdAtsimplename">
        <el-input
          v-model="queryParams.tfbdAtsimplename"
          placeholder="请输入atsimplename"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="description" prop="tfbdDescription">
        <el-input
          v-model="queryParams.tfbdDescription"
          placeholder="请输入description"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="analysisID" prop="tfbdAnalysisid">
        <el-input
          v-model="queryParams.tfbdAnalysisid"
          placeholder="请输入analysisID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['zeamap:tfbd:add']"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['zeamap:tfbd:edit']"
          >修改</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['zeamap:tfbd:remove']"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['zeamap:tfbd:export']"
          >导出</el-button
        >
      </el-col>
      <right-toolbar
        :showSearch.sync="showSearch"
        @queryTable="getList"
      ></right-toolbar>
    </el-row> -->
    <div class="tableDiv">
      <div :class="{ fitershide:filterHide }" class="filterDiv">
        <div @click="filterHide = !filterHide" class="fiterShow">
        <i v-if="filterHide" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
        </div>
        <div v-show="filterHide">
          <div>
            <i class="el-icon-refresh-left refFilter"></i>
          </div>
          <el-form
            ref="elForm"
            :model="formData"
            :rules="rules"
            size="medium"
            label-width="100px"
            label-position="top"
          >
            <el-form-item label="Reference" prop="reference">
              <el-select
                v-model="formData.reference"
                placeholder="请选择Reference"
                clearable
                :style="{ width: '100%' }"
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
                v-model="formData.version"
                placeholder="请选择Version"
                clearable
                :style="{ width: '100%' }"
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
            <el-form-item label="Target Gene ID" prop="geneId">
              <el-select
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
                placeholder="请输入Maximun Confidence P-value"
                clearable
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="tabelhide tableclass">
        <!-- v-loading="loading" -->
        <el-table
          
          :data="tfbdList"
          
        >
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column label="编号" align="center" prop="tfbdId" />
          <el-table-column label="基因名" align="center" prop="tfbdName" />
          <el-table-column label="组群" align="center" prop="tfbdFamily" />
          <el-table-column
            label="simplename"
            align="center"
            prop="tfbdSimplename"
          />
          <el-table-column label="genev4" align="center" prop="tfbdGenev4" />
          <el-table-column label="genev3" align="center" prop="tfbdGenev3" />
          <el-table-column label="class" align="center" prop="tfbdClass" />
          <el-table-column label="AtID" align="center" prop="tfbdAtid" />
          <el-table-column
            label="atsimplename"
            align="center"
            prop="tfbdAtsimplename"
          />
          <el-table-column
            label="description"
            align="center"
            prop="tfbdDescription"
          />
          <el-table-column
            label="phenotype"
            align="center"
            prop="tfbdPhenotype"
          />
          <el-table-column
            label="analysisID"
            align="center"
            prop="tfbdAnalysisid"
          />
          <el-table-column
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
          </el-table-column>
        </el-table>
      </div>
    </div>
      <!-- @pagination="getList" -->
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      
    />

    <!-- 添加或修改Transcriptomics对话框 -->
    <!-- <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="基因名" prop="tfbdName">
          <el-input v-model="form.tfbdName" placeholder="请输入基因名" />
        </el-form-item>
        <el-form-item label="组群" prop="tfbdFamily">
          <el-input v-model="form.tfbdFamily" placeholder="请输入组群" />
        </el-form-item>
        <el-form-item label="simplename" prop="tfbdSimplename">
          <el-input
            v-model="form.tfbdSimplename"
            placeholder="请输入simplename"
          />
        </el-form-item>
        <el-form-item label="genev4" prop="tfbdGenev4">
          <el-input v-model="form.tfbdGenev4" placeholder="请输入genev4" />
        </el-form-item>
        <el-form-item label="genev3" prop="tfbdGenev3">
          <el-input v-model="form.tfbdGenev3" placeholder="请输入genev3" />
        </el-form-item>
        <el-form-item label="class" prop="tfbdClass">
          <el-input v-model="form.tfbdClass" placeholder="请输入class" />
        </el-form-item>
        <el-form-item label="AtID" prop="tfbdAtid">
          <el-input v-model="form.tfbdAtid" placeholder="请输入AtID" />
        </el-form-item>
        <el-form-item label="atsimplename" prop="tfbdAtsimplename">
          <el-input
            v-model="form.tfbdAtsimplename"
            placeholder="请输入atsimplename"
          />
        </el-form-item>
        <el-form-item label="description" prop="tfbdDescription">
          <el-input
            v-model="form.tfbdDescription"
            placeholder="请输入description"
          />
        </el-form-item>
        <el-form-item label="analysisID" prop="tfbdAnalysisid">
          <el-input
            v-model="form.tfbdAnalysisid"
            placeholder="请输入analysisID"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog> -->
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

export default {
  name: "Tfbd",
  data() {
    return {
      formData: {
        reference: undefined,
        version: "",
        analysis: undefined,
        tf: undefined,
        geneId: undefined,
        maxPvalue: undefined,
      },
      rules: {
        reference: [],
        version: [],
        analysis: [],
        tf: [],
        geneId: [
          {
            required: true,
            message: "请选择Target Gene ID",
            trigger: "change",
          },
        ],
        maxPvalue: [],
      },
      referenceOptions: [
        {
          label: "B73",
          value: 1,
        },
        {
          label: "XXXX",
          value: 2,
        },
      ],
      versionOptions: [
        {
          label: "4.43.0",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      analysisOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      tfOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      geneIdOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],

      // 筛选器是否隐藏
      filterHide: false,
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
    };
  },
  created() {
    // this.getList();
  },
  methods: {
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
}
.tableclass {
  // 很神奇，加上width：0之后，flex才不会突破父元素宽度。
  width: 0;
  min-width: 0;
  flex-grow: 1;
}
.filterDiv{
  margin-right: 10px;
}
.fitershide {
  // flex:none;
  width: 300px;
  flex-shrink: 0;
}

.refFilter{
  font-size: 25px;
  font-weight: bold;
  float:right;
  margin-right: 10px;
  margin-top: -30px;
  cursor: pointer;
}
.fiterShow i{
  font-size: 30px;
  color: #489E38;
  cursor: pointer;
  margin: 10px 10px 10px 5px;
  // margin: 10px;
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
</style>
