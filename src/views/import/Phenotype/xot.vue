<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="100px">
      <el-form-item label="omics" prop="omics">
        <el-input
          v-model="queryParams.omics"
          placeholder="请输入omics"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="category" prop="category">
        <el-input
          v-model="queryParams.category"
          placeholder="请输入category"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="name" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入name"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="xotUid" prop="xotUid">
        <el-input
          v-model="queryParams.xotUid"
          placeholder="请输入xotUid"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="analysisId" prop="analysisId">
        <el-input
          v-model="queryParams.analysisId"
          placeholder="请输入analysisId"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="crossrefid" prop="crossrefid">
        <el-input
          v-model="queryParams.crossrefid"
          placeholder="请输入crossrefid"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="crossreflink" prop="crossreflink">
        <el-input
          v-model="queryParams.crossreflink"
          placeholder="请输入crossreflink"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="description" prop="description">
        <el-input
          v-model="queryParams.description"
          placeholder="请输入description"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
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
          v-hasPermi="['zeamap:ImportXot:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['zeamap:ImportXot:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['zeamap:ImportXot:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['zeamap:ImportXot:export']"
        >导出</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          icon="el-icon-upload2"
          size="mini"
          @click="handleImport"
          v-hasPermi="['zeamap:ImportXot:import']"
        >导入</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="ImportXotList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="xotId" align="center" prop="xotId" />
      <el-table-column label="omics" align="center" prop="omics" />
      <el-table-column label="category" align="center" prop="category" />
      <el-table-column label="type" align="center" prop="type" />
      <el-table-column label="name" align="center" prop="name" />
      <el-table-column label="xotUid" align="center" prop="xotUid" />
      <el-table-column label="analysisId" align="center" prop="analysisId" />
      <el-table-column label="crossrefid" align="center" prop="crossrefid" />
      <el-table-column label="crossreflink" align="center" prop="crossreflink" />
      <el-table-column label="description" align="center" prop="description" />
      <el-table-column label="mesuredetail" align="center" prop="mesuredetail" />
      <el-table-column label="traitdetail" align="center" prop="traitdetail" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['zeamap:ImportXot:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['zeamap:ImportXot:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改1对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="omics" prop="omics">
          <el-input v-model="form.omics" placeholder="请输入omics" />
        </el-form-item>
        <el-form-item label="category" prop="category">
          <el-input v-model="form.category" placeholder="请输入category" />
        </el-form-item>
        <el-form-item label="name" prop="name">
          <el-input v-model="form.name" placeholder="请输入name" />
        </el-form-item>
        <el-form-item label="xotUid" prop="xotUid">
          <el-input v-model="form.xotUid" placeholder="请输入xotUid}" />
        </el-form-item>
        <el-form-item label="analysisId" prop="analysisId">
          <el-input v-model="form.analysisId" placeholder="请输入analysisId" />
        </el-form-item>
        <el-form-item label="crossrefid" prop="crossrefid">
          <el-input v-model="form.crossrefid" placeholder="请输入crossrefid" />
        </el-form-item>
        <el-form-item label="crossreflink" prop="crossreflink">
          <el-input v-model="form.crossreflink" placeholder="请输入crossreflink" />
        </el-form-item>
        <el-form-item label="description" prop="description">
          <el-input v-model="form.description" placeholder="请输入description" />
        </el-form-item>
        <el-form-item label="mesuredetail" prop="mesuredetail">
          <el-input v-model="form.mesuredetail" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="traitdetail" prop="traitdetail">
          <el-input v-model="form.traitdetail" type="textarea" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>


    <!-- 用户导入对话框 -->
    <el-dialog :title="upload.title" :visible.sync="upload.open" width="400px" append-to-body>
      <el-upload
        ref="upload"
        :limit="1"
        accept=".xlsx, .xls"
        :headers="upload.headers"
        :action="upload.url + '?updateSupport=' + upload.updateSupport"
        :disabled="upload.isUploading"
        :on-progress="handleFileUploadProgress"
        :on-success="handleFileSuccess"
        :auto-upload="false"
        drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip text-center" slot="tip">
          <div class="el-upload__tip" slot="tip">
            <el-checkbox v-model="upload.updateSupport" /> 是否更新已经存在的用户数据
          </div>
          <span>仅允许导入xls、xlsx格式文件。</span>
          <el-link type="primary" :underline="false" style="font-size:12px;vertical-align: baseline;" @click="importTemplate">下载模板</el-link>
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitFileForm">确 定</el-button>
        <el-button @click="upload.open = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listImportXot, getImportXot, delImportXot, addImportXot, updateImportXot } from "@/api/import/Phenotype/xot";
import { getToken } from "@/utils/auth";



export default {
  name: "xot",
  data() {
    return {
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
      // 1表格数据
      ImportXotList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        omics: null,
        category: null,
        type: null,
        name: null,
        xotUid: null,
        analysisId: null,
        crossrefid: null,
        crossreflink: null,
        description: null,
        mesuredetail: null,
        traitdetail: null
      },
      upload: {
        // 是否显示弹出层（用户导入）
        open: false,
        // 弹出层标题（用户导入）
        title: "",
        // 是否禁用上传
        isUploading: false,
        // 是否更新已经存在的用户数据
        updateSupport: 0,
        // 设置上传的请求头部
        headers: { Authorization: "Bearer " + getToken() },
        // 上传的地址
        url: process.env.VUE_APP_BASE_API + "/zeamap/import/importXotData" // todo
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询1列表 */
    getList() {
      this.loading = true;
      listImportXot(this.queryParams).then(response => {
        this.ImportXotList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        xotId: null,
        omics: null,
        category: null,
        type: null,
        name: null,
        xotUid: null,
        analysisId: null,
        crossrefid: null,
        crossreflink: null,
        description: null,
        mesuredetail: null,
        traitdetail: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.xotId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加1";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const xotId = row.xotId || this.ids
      getImportXot(xotId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改1";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.xotId != null) {
            updateImportXot(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addImportXot(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const xotIds = row.xotId || this.ids;
      this.$modal.confirm('是否确认删除1编号为"' + xotIds + '"的数据项？').then(function() {
        return delImportXot(xotIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('zeamap/ImportXot/export', {
        ...this.queryParams
      }, `ImportXot_${new Date().getTime()}.xlsx`)
    },
    /** 导入按钮操作 */
    handleImport() {
      this.upload.title = "导入"; // todo
      this.upload.open = true;
    },
    /** 下载模板操作 */
    importTemplate() {
      this.download('zeamap/import/importXotTemplate', {
      }, `stu_base_template_${new Date().getTime()}.xlsx`)  // todo
    },
// 文件上传中处理
    handleFileUploadProgress(event, file, fileList) {
      this.upload.isUploading = true;
    },
// 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      this.upload.open = false;
      this.upload.isUploading = false;
      this.$refs.upload.clearFiles();
      this.$alert("<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>" + response.msg + "</div>", "导入结果", { dangerouslyUseHTMLString: true });
      this.getList();
    },
// 提交上传文件
    submitFileForm() {
      this.$refs.upload.submit();
    }

  }
};
</script>
