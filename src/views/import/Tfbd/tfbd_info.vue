<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="100px">
      <el-form-item label="name" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入name"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="family" prop="family">
        <el-input
          v-model="queryParams.family"
          placeholder="请输入family"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="simplename" prop="simplename">
        <el-input
          v-model="queryParams.simplename"
          placeholder="请输入simplename"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="genev4" prop="genev4">
        <el-input
          v-model="queryParams.genev4"
          placeholder="请输入genev4"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="genev3" prop="genev3">
        <el-input
          v-model="queryParams.genev3"
          placeholder="请输入genev3"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="tfClass" prop="tfClass">
        <el-input
          v-model="queryParams.tfClass"
          placeholder="请输入tfClass"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="atid" prop="atid">
        <el-input
          v-model="queryParams.atid"
          placeholder="请输入atid"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="atsimplename" prop="atsimplename">
        <el-input
          v-model="queryParams.atsimplename"
          placeholder="请输入atsimplename"
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
          v-hasPermi="['zeamap:ImportTfdbinfo:add']"
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
          v-hasPermi="['zeamap:ImportTfdbinfo:edit']"
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
          v-hasPermi="['zeamap:ImportTfdbinfo:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['zeamap:ImportTfdbinfo:export']"
        >导出</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          icon="el-icon-upload2"
          size="mini"
          @click="handleImport"
          v-hasPermi="['zeamap:ImportTfdbinfo:import']"
        >导入</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="infoList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="tfbdId" align="center" prop="tfbdId" />
      <el-table-column label="name" align="center" prop="name" />
      <el-table-column label="family" align="center" prop="family" />
      <el-table-column label="simplename" align="center" prop="simplename" />
      <el-table-column label="genev4" align="center" prop="genev4" />
      <el-table-column label="genev3" align="center" prop="genev3" />
      <el-table-column label="tfClass" align="center" prop="tfClass" />
      <el-table-column label="enrichGo" align="center" prop="enrichGo" />
      <el-table-column label="enrichMp" align="center" prop="enrichMp" />
      <el-table-column label="atid" align="center" prop="atid" />
      <el-table-column label="atsimplename" align="center" prop="atsimplename" />
      <el-table-column label="description" align="center" prop="description" />
      <el-table-column label="phenotype" align="center" prop="phenotype" />
      <el-table-column label="analysisId" align="center" prop="analysisId" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['zeamap:ImportTfdbinfo:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['zeamap:ImportTfdbinfo:remove']"
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

    <!-- 添加或修改Import对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="name" prop="name">
          <el-input v-model="form.name" placeholder="请输入name" />
        </el-form-item>
        <el-form-item label="family" prop="family">
          <el-input v-model="form.family" placeholder="请输入family" />
        </el-form-item>
        <el-form-item label="simplename" prop="simplename">
          <el-input v-model="form.simplename" placeholder="请输入simplename" />
        </el-form-item>
        <el-form-item label="genev4" prop="genev4">
          <el-input v-model="form.genev4" placeholder="请输入genev4" />
        </el-form-item>
        <el-form-item label="genev3" prop="genev3">
          <el-input v-model="form.genev3" placeholder="请输入genev3" />
        </el-form-item>
        <el-form-item label="tfClass" prop="tfClass">
          <el-input v-model="form.tfClass" placeholder="请输入tfClass" />
        </el-form-item>
        <el-form-item label="enrichGo" prop="enrichGo">
          <el-input v-model="form.enrichGo" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="enrichMp" prop="enrichMp">
          <el-input v-model="form.enrichMp" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="atid" prop="atid">
          <el-input v-model="form.atid" placeholder="请输入atid" />
        </el-form-item>
        <el-form-item label="atsimplename" prop="atsimplename">
          <el-input v-model="form.atsimplename" placeholder="请输入atsimplename" />
        </el-form-item>
        <el-form-item label="description" prop="description">
          <el-input v-model="form.description" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="analysisId" prop="analysisId">
          <el-input v-model="form.analysisId" placeholder="请输入analysisId" />
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
import { listInfo, getInfo, delInfo, addInfo, updateInfo } from "@/api/import/Tfbd/tfbd_info";
import { getToken } from "@/utils/auth";




export default {
  name: "tfbd_info",
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
      // Import表格数据
      infoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: null,
        family: null,
        simplename: null,
        genev4: null,
        genev3: null,
        tfClass: null,
        enrichGo: null,
        enrichMp: null,
        atid: null,
        atsimplename: null,
        description: null,
        phenotype: null,
        analysisId: null
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
        url: process.env.VUE_APP_BASE_API + "/zeamap/import/import1TfbdInfoData" // todo
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
    /** 查询Import列表 */
    getList() {
      this.loading = true;
      listInfo(this.queryParams).then(response => {
        this.infoList = response.rows;
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
        tfbdId: null,
        name: null,
        family: null,
        simplename: null,
        genev4: null,
        genev3: null,
        tfClass: null,
        enrichGo: null,
        enrichMp: null,
        atid: null,
        atsimplename: null,
        description: null,
        phenotype: null,
        analysisId: null
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
      this.ids = selection.map(item => item.tfbdId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加Import";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const tfbdId = row.tfbdId || this.ids
      getInfo(tfbdId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改Import";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.tfbdId != null) {
            updateInfo(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addInfo(this.form).then(response => {
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
      const tfbdIds = row.tfbdId || this.ids;
      this.$modal.confirm('是否确认删除Import编号为"' + tfbdIds + '"的数据项？').then(function() {
        return delInfo(tfbdIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('zeamap/ImportTfbdinfo/export', {
        ...this.queryParams
      }, `info_${new Date().getTime()}.xlsx`)
    },
    /** 导入按钮操作 */
    handleImport() {
      this.upload.title = "导入"; // todo
      this.upload.open = true;
    },
    /** 下载模板操作 */
    importTemplate() {
      this.download('zeamap/import/importTfbdInfoTemplate', {
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
