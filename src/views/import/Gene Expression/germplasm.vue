<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="${comment}" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="genus">
        <el-input
          v-model="queryParams.genus"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="species">
        <el-input
          v-model="queryParams.species"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="commonName">
        <el-input
          v-model="queryParams.commonName"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="comment">
        <el-input
          v-model="queryParams.comment"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="groupId">
        <el-input
          v-model="queryParams.groupId"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="populationId">
        <el-input
          v-model="queryParams.populationId"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="latitude">
        <el-input
          v-model="queryParams.latitude"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="longtitude">
        <el-input
          v-model="queryParams.longtitude"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="ngbId">
        <el-input
          v-model="queryParams.ngbId"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="origin">
        <el-input
          v-model="queryParams.origin"
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
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="germplasmList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="${comment}" align="center" prop="germplasmId" />
      <el-table-column label="${comment}" align="center" prop="name" />
      <el-table-column label="${comment}" align="center" prop="genus" />
      <el-table-column label="${comment}" align="center" prop="species" />
      <el-table-column label="${comment}" align="center" prop="commonName" />
      <el-table-column label="${comment}" align="center" prop="comment" />
      <el-table-column label="${comment}" align="center" prop="groupId" />
      <el-table-column label="${comment}" align="center" prop="populationId" />
      <el-table-column label="${comment}" align="center" prop="latitude" />
      <el-table-column label="${comment}" align="center" prop="longtitude" />
      <el-table-column label="${comment}" align="center" prop="ngbId" />
      <el-table-column label="${comment}" align="center" prop="origin" />
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
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="${comment}" prop="name">
          <el-input v-model="form.name" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="genus">
          <el-input v-model="form.genus" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="species">
          <el-input v-model="form.species" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="commonName">
          <el-input v-model="form.commonName" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="comment">
          <el-input v-model="form.comment" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="groupId">
          <el-input v-model="form.groupId" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="populationId">
          <el-input v-model="form.populationId" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="latitude">
          <el-input v-model="form.latitude" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="longtitude">
          <el-input v-model="form.longtitude" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="ngbId">
          <el-input v-model="form.ngbId" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="origin">
          <el-input v-model="form.origin" placeholder="请输入${comment}" />
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
import { listGermplasm, getGermplasm, delGermplasm, addGermplasm, updateGermplasm } from "@/api/import/Gene expression/germplasm";

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
    }
  }
};
</script>
