<template>
  <div class="content">
      <el-table :data="tableData" border style="width: 100%;margin-bottom:50px">
        <el-table-column prop="code" label="系谱内部码" width="100">
        </el-table-column>
        <el-table-column prop="pedigree" label="系谱" width="280">
        </el-table-column>
        <el-table-column prop="newsource" label="新来源" width="100" >
        </el-table-column>
        <el-table-column prop="pastsource" label="旧来源" width="100" >
        </el-table-column>
        <el-table-column prop="silking" label="吐丝期" width="100">
        </el-table-column>
        <el-table-column prop="oldSource" label="旧来源" width="120">
        </el-table-column>
        <el-table-column prop="dispersal" label="散粉期" width="100">
        </el-table-column>
        <el-table-column prop="mature" label="成熟期" width="100">
        </el-table-column>
        <el-table-column prop="height" label="株高">
        </el-table-column>
        <el-table-column prop="earheight" label="穗位">
        </el-table-column>
        <el-table-column prop="malespikes" label="雄穗分枝数" width="100">
        </el-table-column>

        <el-table-column prop="oldSource" label="雄花主轴长度" width="100">
        </el-table-column>
        <el-table-column prop="leaflenght" label="穗上叶长"> </el-table-column>
        <el-table-column prop="leaflength" label="穗上叶宽"> </el-table-column>
        <el-table-column prop="stemdiameter" label="茎粗"> </el-table-column>
        <el-table-column prop="rates" label="倒伏折射率之和(%)" width="140">
        </el-table-column>
        <el-table-column prop="rust" label="锈病(级)"> </el-table-column>
        <el-table-column prop="stemrot" label="茎腐病(%)" width="120"> </el-table-column>
        <el-table-column prop="roughdwarf" label="粗缩(%)"> </el-table-column>
        <el-table-column prop="hollow" label="空杆(%)"> </el-table-column>
        <el-table-column prop="plantsnum" label="株数"> </el-table-column>
        <el-table-column prop="blackpowder" label="黑粉"> </el-table-column>
        <el-table-column prop="expression" label="果穗表现" width="200"> </el-table-column>
        <el-table-column prop="spikelength" label="穗长"> </el-table-column>
        <el-table-column prop="spikewidth" label="穗粗"> </el-table-column>
        <el-table-column prop="row" label="穗行数"> </el-table-column>
        <el-table-column prop="kernels" label="行粒数"> </el-table-column>
        <el-table-column prop="axiscolor" label="轴色"> </el-table-column>
        <el-table-column prop="grainweight" label="百粒重"> </el-table-column>
        <el-table-column prop="grainlength" label="籽粒长"> </el-table-column>
        <el-table-column prop="grainwidth" label="籽粒宽"> </el-table-column>
        <el-table-column prop="yield" label="小区标准产量(KG)" width="140">
        </el-table-column>
        <el-table-column prop="seedyield" label="出籽率"> </el-table-column>
      </el-table>
  </div>
</template>

<script>
  import {searchByLocation} from '@/api/jointCreation/searchLeftTop/index'
  export default {
    data() {
      return {
        tableData: []
      }
    },
    // created(){
    //   this.searchByLocation()
    // },
    // methods: {
    //   deleteRow(index, rows) {
    //     rows.splice(index, 1);
    //   }
    // },
    mounted() {
      const location = this.$route.query.location;
      const query = {
        location : location
      }
      searchByLocation(query)
      .then(res => {
        const data = res.data;
        this.tableData = data
      })
    },
//     methods: {
//     async searchByLocation() {
//           console.log(res.data)
//           this.tableData = res.data
//   }
// }
  }
</script>
<style scoped>
  .content{
    width: 95%;
    height: 800px;
    padding: 5px;
    overflow: auto;
    margin: 0 auto;
    margin-top: 50px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  }
</style>
