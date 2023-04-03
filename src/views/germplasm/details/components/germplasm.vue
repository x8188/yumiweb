<template>
  <div class="app">
    <Title>Germplasm</Title>
    <div class="germplasm_content">
      <div>
        <p>Collection of more than 500 inbreds for association mapping panel(AMP)with different populations including non-stiff-stock(NSS);Stiff-stock(SS);Tropical and Semi-tropical(TST).</p>
      </div>
      <div>
          <el-row :gutter="15">
            <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="70px">
              <el-col :span="17">
                <el-form-item label="Name" prop="field101">
                  <el-input v-model="formData.field107" placeholder="请输入Name" clearable
                            suffix-icon='el-icon-caret-bottom' :style="{width: '40%'}"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="" prop="field102">
                  <el-button type="primary" size="medium"> Download </el-button>
                </el-form-item>
              </el-col>
            </el-form>
          </el-row>
      </div>
      <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="Name"
            label="Name"
            width="90">
          </el-table-column>
          <el-table-column
            prop="NGBID"
            label="NGB ID"
            width="150">
          </el-table-column>
          <el-table-column
            prop="Origin"
            label="Origin"
            width="90">
          </el-table-column>
          <el-table-column
            prop="Description"
            label="Description">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/CommonComponents/Title";
import {choose} from "@/api/germplasm/details/germplasm";
import {listGermplasm} from "@/api/germplasm/details/germplasm";

export default {
  name: "germplasm",
  components: {
    Title
  },
  props:[],
  data() {
    return {
      tableData: [

      ],
      formData: {
        field107: undefined,
        Download: undefined,
      },
      rules: {
        field107: [],
      },
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getTabbleData();
  },
  mounted() {},
  methods: {
    getTabbleData(){
      listGermplasm().then(res=>{
        this.tableData=res.rows;
      })
    },
    screening(){
      choose(this.field107).then(res=>{
        this.tableData=res.rows;
      })
    },
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}
</script>

<style scoped>

.app{
  width: 100%;
  height: auto;
}
.germplasm_content p{
  padding: 10px 0;
}
</style>


