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
                <el-select
                  v-model="value"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入Name"
                  :remote-method="remoteMethod"
                  :loading="loading"
                  @change="Screening(value)"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-button type="primary" @click="resetTable">重置</el-button>
              </el-col>
            </el-form>
          </el-row>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="Name"
            width="90">
          </el-table-column>
          <el-table-column
            prop="ngbId"
            label="NGB ID"
            width="150">
          </el-table-column>
          <el-table-column
            prop="origin"
            label="Origin"
            width="90">
          </el-table-column>
          <el-table-column
            prop="comment"
            label="Description">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {choose} from "@/api/germplasm/details/germplasm";
import {listGermplasm} from "@/api/germplasm/details/germplasm";

export default {
  name: "germplasm",
  components: {
  },
  props:[],
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [],
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
  watch: {},
  created() {
    this.getTableData();
  },
  mounted() {
  },
  computed: {
    listSet() {
      return this.states.map(item => {
        return {value: `${item}`, label: `${item}`};
      });
    },
  },
  methods: {
    resetTable() {
      this.options = [];
      this.getTableData();
      this.value =[];
    },
    Screening(value) {
      if (value!== null){
        choose({name : value}).then(res=>{
          console.log(res)
          //this.getTableData()
          this.tableData=res.rows
          console.log(res.rows)
          console.log(this.tableData)
        })
      } else {
        this.getTableData()
        console.log(this.tableData)
      }
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.listSet.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
        this.getTableData()
      }
    },
    getTableData(){
      listGermplasm().then(res=>{
        this.tableData=res.rows;
        console.log(res);
        this.states = res.rows.map(function (item) {
          return item.name
        })
        console.log(this.states,'9090')
      })
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
.table{
  padding-top: 30px;
}
</style>


