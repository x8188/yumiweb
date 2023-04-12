<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="${comment}" prop="chr">
        <el-input
          v-model="queryParams.chr"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="start">
        <el-input
          v-model="queryParams.start"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="end">
        <el-input
          v-model="queryParams.end"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="qtlUid">
        <el-input
          v-model="queryParams.qtlUid"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="log">
        <el-input
          v-model="queryParams.log"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="dbxrefId">
        <el-input
          v-model="queryParams.dbxrefId"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="traitId">
        <el-input
          v-model="queryParams.traitId"
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
          v-hasPermi="['zeamap:ImportAqtl:add']"
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
          v-hasPermi="['zeamap:ImportAqtl:edit']"
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
          v-hasPermi="['zeamap:ImportAqtl:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['zeamap:ImportAqtl:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="ImportAqtlList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="${comment}" align="center" prop="associationQtlId" />
      <el-table-column label="${comment}" align="center" prop="chr" />
      <el-table-column label="${comment}" align="center" prop="start" />
      <el-table-column label="${comment}" align="center" prop="end" />
      <el-table-column label="${comment}" align="center" prop="qtlUid" />
      <el-table-column label="${comment}" align="center" prop="log" />
      <el-table-column label="${comment}" align="center" prop="dbxrefId" />
      <el-table-column label="${comment}" align="center" prop="traitId" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['zeamap:ImportAqtl:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['zeamap:ImportAqtl:remove']"
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

    <!-- 添加或修改ImportAqtl对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="${comment}" prop="chr">
          <el-input v-model="form.chr" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="start">
          <el-input v-model="form.start" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="end">
          <el-input v-model="form.end" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="qtlUid">
          <el-input v-model="form.qtlUid" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="log">
          <el-input v-model="form.log" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="dbxrefId">
          <el-input v-model="form.dbxrefId" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="traitId">
          <el-input v-model="form.traitId" placeholder="请输入${comment}" />
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
import { listImportAqtl, getImportAqtl, delImportAqtl, addImportAqtl, updateImportAqtl } from "@/api/import/QTL/association_qtl";

export default {
  name: "association_qtl",
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
      // ImportAqtl表格数据
      ImportAqtlList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        chr: null,
        start: null,
        end: null,
        qtlUid: null,
        log: null,
        dbxrefId: null,
        traitId: null
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
    /** 查询ImportAqtl列表 */
    getList() {
      this.loading = true;
      listImportAqtl(this.queryParams).then(response => {
        this.ImportAqtlList = response.rows;
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
        associationQtlId: null,
        chr: null,
        start: null,
        end: null,
        qtlUid: null,
        log: null,
        dbxrefId: null,
        traitId: null
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
      this.ids = selection.map(item => item.associationQtlId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加ImportAqtl";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const associationQtlId = row.associationQtlId || this.ids
      getImportAqtl(associationQtlId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改ImportAqtl";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.associationQtlId != null) {
            updateImportAqtl(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addImportAqtl(this.form).then(response => {
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
      const associationQtlIds = row.associationQtlId || this.ids;
      this.$modal.confirm('是否确认删除ImportAqtl编号为"' + associationQtlIds + '"的数据项？').then(function() {
        return delImportAqtl(associationQtlIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('zeamap/ImportAqtl/export', {
        ...this.queryParams
      }, `ImportAqtl_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
