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
      <el-form-item label="genus" prop="genus">
        <el-input
          v-model="queryParams.genus"
          placeholder="请输入genus"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="species" prop="species">
        <el-input
          v-model="queryParams.species"
          placeholder="请输入species"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="commonName" prop="commonName">
        <el-input
          v-model="queryParams.commonName"
          placeholder="请输入commonName"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="comment" prop="comment">
        <el-input
          v-model="queryParams.comment"
          placeholder="请输入comment"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="groupId" prop="groupId">
        <el-input
          v-model="queryParams.groupId"
          placeholder="请输入groupId"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="populationId" prop="populationId">
        <el-input
          v-model="queryParams.populationId"
          placeholder="请输入populationId"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="latitude" prop="latitude">
        <el-input
          v-model="queryParams.latitude"
          placeholder="请输入latitude"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="longtitude" prop="longtitude">
        <el-input
          v-model="queryParams.longtitude"
          placeholder="请输入longtitude"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="ngbId" prop="ngbId">
        <el-input
          v-model="queryParams.ngbId"
          placeholder="请输入ngbId"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="origin" prop="origin">
        <el-input
          v-model="queryParams.origin"
          placeholder="请输入origin"
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
          v-hasPermi="['zeamap:germplasm:add']"
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
          v-hasPermi="['zeamap:germplasm:edit']"
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
          v-hasPermi="['zeamap:germplasm:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['zeamap:germplasm:export']"
        >导出</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          icon="el-icon-upload2"
          size="mini"
          @click="handleImport"
          v-hasPermi="['zeamap:germplasm:import']"
        >导入</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="germplasmList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="germplasmId" align="center" prop="germplasmId" />
      <el-table-column label="name" align="center" prop="name" />
      <el-table-column label="genus" align="center" prop="genus" />
      <el-table-column label="species" align="center" prop="species" />
      <el-table-column label="commonName" align="center" prop="commonName" />
      <el-table-column label="comment" align="center" prop="comment" />
      <el-table-column label="groupId" align="center" prop="groupId" />
      <el-table-column label="populationId" align="center" prop="populationId" />
      <el-table-column label="latitude" align="center" prop="latitude" />
      <el-table-column label="longtitude" align="center" prop="longtitude" />
      <el-table-column label="ngbId" align="center" prop="ngbId" />
      <el-table-column label="origin" align="center" prop="origin" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['zeamap:germplasm:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['zeamap:germplasm:remove']"
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

    <!-- 添加或修改产品详情对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="name" prop="name">
          <el-input v-model="form.name" placeholder="请输入name" />
        </el-form-item>
        <el-form-item label="genus" prop="genus">
          <el-input v-model="form.genus" placeholder="请输入genus" />
        </el-form-item>
        <el-form-item label="species" prop="species">
          <el-input v-model="form.species" placeholder="请输入species}" />
        </el-form-item>
        <el-form-item label="commonName" prop="commonName">
          <el-input v-model="form.commonName" placeholder="请输入commonName" />
        </el-form-item>
        <el-form-item label="comment" prop="comment">
          <el-input v-model="form.comment" placeholder="请输入comment" />
        </el-form-item>
        <el-form-item label="groupId" prop="groupId">
          <el-input v-model="form.groupId" placeholder="请输入groupId" />
        </el-form-item>
        <el-form-item label="populationId" prop="populationId">
          <el-input v-model="form.populationId" placeholder="请输入populationId" />
        </el-form-item>
        <el-form-item label="latitude" prop="latitude">
          <el-input v-model="form.latitude" placeholder="请输入latitude" />
        </el-form-item>
        <el-form-item label="longtitude" prop="longtitude">
          <el-input v-model="form.longtitude" placeholder="请输入longtitude" />
        </el-form-item>
        <el-form-item label="ngbId" prop="ngbId">
          <el-input v-model="form.ngbId" placeholder="请输入ngbId" />
        </el-form-item>
        <el-form-item label="origin" prop="origin">
          <el-input v-model="form.origin" placeholder="请输入origin" />
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
import { listGermplasm, getGermplasm, delGermplasm, addGermplasm, updateGermplasm } from "@/api/import/GeneExpression/germplasm";
import { getToken } from "@/utils/auth";



export default {
  name: "germplasm",
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
      // 产品详情表格数据
      germplasmList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: null,
        genus: null,
        species: null,
        commonName: null,
        comment: null,
        groupId: null,
        populationId: null,
        latitude: null,
        longtitude: null,
        ngbId: null,
        origin: null
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
        url: process.env.VUE_APP_BASE_API + "/zeamap/import/importGermplasmData" // todo
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
    /** 查询产品详情列表 */
    getList() {
      this.loading = true;
      listGermplasm(this.queryParams).then(response => {
        this.germplasmList = response.rows;
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
        germplasmId: null,
        name: null,
        genus: null,
        species: null,
        commonName: null,
        comment: null,
        groupId: null,
        populationId: null,
        latitude: null,
        longtitude: null,
        ngbId: null,
        origin: null
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
      this.ids = selection.map(item => item.germplasmId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加产品详情";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const germplasmId = row.germplasmId || this.ids
      getGermplasm(germplasmId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改产品详情";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.germplasmId != null) {
            updateGermplasm(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addGermplasm(this.form).then(response => {
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
      const germplasmIds = row.germplasmId || this.ids;
      this.$modal.confirm('是否确认删除产品详情编号为"' + germplasmIds + '"的数据项？').then(function() {
        return delGermplasm(germplasmIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('zeamap/germplasm/export', {
        ...this.queryParams
      }, `germplasm_${new Date().getTime()}.xlsx`)
    },
    /** 导入按钮操作 */
    handleImport() {
      this.upload.title = "导入"; // todo
      this.upload.open = true;
    },
    /** 下载模板操作 */
    importTemplate() {
      this.download('zeamap/import/importGermplasmTemplate', {
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
