<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="class" :label="$i18n.t('Class')" width="180">
    </el-table-column>
    <el-table-column prop="num" :label="$i18n.t('Trait Num')" width="180">
    </el-table-column>
    <el-table-column prop="recordNum" :label="$i18n.t('record num')">
    </el-table-column>
  </el-table>
</template>

<script>
import { getCheckTrait } from "@/api/jointCreation/searchLeftTop";

export default {
  data() {
    return {
      isLoading: false,
      tableData: [],
      Morphological: "Morphological",
      Agronomical: "Agronomical",
      "Abiotic stress": "Abiotic stress",
      "Biotic stress": "Biotic stress",
      sum: "sum",
    };
  },
  mounted() {
    this.getCheckTraitData().then(() => {
      this.calculateTotalSum();
    });
  },
  methods: {
    async getCheckTraitData() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      try {
        const rows = [
          { key: "Morphological", value: this.Morphological },
          { key: "Agronomical", value: this.Agronomical },
          { key: "Biotic stress", value: "this.Biotic stress" },
          { key: "Abiotic stress", value: "this.Abiotic stress" },
        ];
        console.log(rows, "ggg");
        let index = 0;
        for (const row of rows){
          const response = await getCheckTrait();
          this.tableData.push({
            class: row.key,
            num: response.data[index],
            recordNum: null,
          });
          index++;
        }
        // rows.forEach(async (row) => {
        //   const response = await getCheckTrait();
        //   this.tableData.push({
        //     class: row.key,
        //     num: response.data[index],
        //     recordNum: null,
        //   });
        //   index++;
        // });
        this.tableData = data;
      } catch (error) {
        console.log(error);
      }
    },
    calculateTotalSum() {
      this.totalSum = this.tableData.reduce(
        (sum, row) => sum + row.num,
        0
      );

      const totalSumRow = {
        class: "sum",
        num: this.totalSum,
        recordNum: null,
      };

      this.tableData.push(totalSumRow);
    },
  },
};
</script>
