<template>
    <div class="charts-container">
      <ninth-chart></ninth-chart>
      <first-chart></first-chart>
      <second-chart></second-chart>
      <third-chart></third-chart>
      <fourth-chart></fourth-chart>
      <fifth-chart></fifth-chart>
      <sixth-chart></sixth-chart>
      <seventh-chart></seventh-chart>
      <eighth-chart></eighth-chart>
    </div>
</template>

<script>
import firstChart from "./components/firstChart.vue";
import secondChart from "./components/secondChart.vue";
import thirdChart from "./components/thirdChart.vue";
import fourthChart from "./components/fourthChart.vue";
import fifthChart from "./components/fifthChart.vue";
import sixthChart from "./components/sixthChart.vue";
import seventhChart from "./components/seventhChart.vue";
import eighthChart from "./components/eighthChart.vue";
import ninthChart from "./components/ninthChart.vue";
export default {
  components: {
    firstChart,
    secondChart,
    thirdChart,
    fourthChart,
    fifthChart,
    sixthChart,
    seventhChart,
    eighthChart,
    ninthChart,
  },
};
</script>

<style scoped>
</style>