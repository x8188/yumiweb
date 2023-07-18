<template>
    <div class="charts-container">
      <first-chart></first-chart>
      <second-chart></second-chart>
      <third-chart></third-chart>
    </div>
</template>

<script>
import firstChart from "./components/firstChart.vue";
import secondChart from "./components/secondChart.vue";
import thirdChart from "./components/thirdChart.vue";
export default {
  components: {
    firstChart,
    secondChart,
    thirdChart,
  },
};
</script>

<style scoped>
</style>