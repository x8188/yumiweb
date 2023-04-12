<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="${comment}" prop="variantId">
        <el-input
          v-model="queryParams.variantId"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="vid">
        <el-input
          v-model="queryParams.vid"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="chr">
        <el-input
          v-model="queryParams.chr"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="posi">
        <el-input
          v-model="queryParams.posi"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="genorate">
        <el-input
          v-model="queryParams.genorate"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="maf">
        <el-input
          v-model="queryParams.maf"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="consequences">
        <el-input
          v-model="queryParams.consequences"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="impacts">
        <el-input
          v-model="queryParams.impacts"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="analysisId">
        <el-input
          v-model="queryParams.analysisId"
          placeholder="请输入${comment}"
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
          v-hasPermi="['zeamap:ImportVariant:add']"
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
          v-hasPermi="['zeamap:ImportVariant:edit']"
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
          v-hasPermi="['zeamap:ImportVariant:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['zeamap:ImportVariant:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="ImportVariantList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="${comment}" align="center" prop="variantId" />
      <el-table-column label="${comment}" align="center" prop="vid" />
      <el-table-column label="${comment}" align="center" prop="type" />
      <el-table-column label="${comment}" align="center" prop="chr" />
      <el-table-column label="${comment}" align="center" prop="posi" />
      <el-table-column label="${comment}" align="center" prop="genorate" />
      <el-table-column label="${comment}" align="center" prop="maf" />
      <el-table-column label="${comment}" align="center" prop="consequences" />
      <el-table-column label="${comment}" align="center" prop="impacts" />
      <el-table-column label="${comment}" align="center" prop="analysisId" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['zeamap:ImportVariant:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['zeamap:ImportVariant:remove']"
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

    <!-- 添加或修改ImportVariant对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="${comment}" prop="variantId">
          <el-input v-model="form.variantId" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="vid">
          <el-input v-model="form.vid" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="chr">
          <el-input v-model="form.chr" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="posi">
          <el-input v-model="form.posi" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="genorate">
          <el-input v-model="form.genorate" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="maf">
          <el-input v-model="form.maf" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="consequences">
          <el-input v-model="form.consequences" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="impacts">
          <el-input v-model="form.impacts" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="analysisId">
          <el-input v-model="form.analysisId" placeholder="请输入${comment}" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listImportVariant, getImportVariant, delImportVariant, addImportVariant, updateImportVariant } from "@/api/import/Variant/variant";

export default {
  name: "ImportVariant",
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
      // ImportVariant表格数据
      ImportVariantList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        variantId: null,
        vid: null,
        type: null,
        chr: null,
        posi: null,
        genorate: null,
        maf: null,
        consequences: null,
        impacts: null,
        analysisId: null
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
    /** 查询ImportVariant列表 */
    getList() {
      this.loading = true;
      listImportVariant(this.queryParams).then(response => {
        this.ImportVariantList = response.rows;
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
        variantId: null,
        vid: null,
        type: null,
        chr: null,
        posi: null,
        genorate: null,
        maf: null,
        consequences: null,
        impacts: null,
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
      this.ids = selection.map(item => item.variantId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加ImportVariant";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const variantId = row.variantId || this.ids
      getImportVariant(variantId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改ImportVariant";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.variantId != null) {
            updateImportVariant(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addImportVariant(this.form).then(response => {
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
      const variantIds = row.variantId || this.ids;
      this.$modal.confirm('是否确认删除ImportVariant编号为"' + variantIds + '"的数据项？').then(function() {
        return delImportVariant(variantIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('zeamap/ImportVariant/export', {
        ...this.queryParams
      }, `ImportVariant_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
