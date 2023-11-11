<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="class" label="Class" width="180"> </el-table-column>
    <el-table-column prop="num" label="Trait Num" width="180">
    </el-table-column>
    <el-table-column prop="recordNum" label="record num"> </el-table-column>
  </el-table>
</template>

<script>
import { getCheckTrait } from "@/api/jointCreation/searchLeftTop";

export default {
  data() {
    return {
      isLoading:false,
      tableData: [],
      Morphological: "Morphological",
      Agronomical: "Agronomical",
      Abioticstress: "Abioticstress",
      Bioticstress: "Bioticstress",
    };
  },
  mounted() {
    this.getCheckTraitData();
  },
  methods: {
    async getCheckTraitData() {
      if(this.isLoading){
        return;
      }
      this.isLoading = true;
  try {
    const rows = [
      { key: "Morphological", value: this.Morphological },
      { key: "Agronomical", value: this.Agronomical },
      { key: "Bioticstress", value: this.Bioticstress },
      { key: "Abioticstress", value: this.Abioticstress },
    ];
console.log(rows,'ggg');
    const requests = rows.map(async (row) => {
      const params = { [row.key]: row.value };
      const response = await getCheckTrait(params);
      return response.data;
    });

    const data = await Promise.all(requests);
    this.tableData = data;
  } catch (error) {
    console.log(error);
  }
},
    calculateTotalSum() {
      this.totalSum = this.tableData.reduce(
        (sum, row) => sum + row.recordNum,
        0
      );
    },
  },
};
</script>
