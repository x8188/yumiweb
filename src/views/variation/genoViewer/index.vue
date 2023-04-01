<template>
  <div>
    <!-- <GenoViewer /> -->
    <ResultInfos/>
  </div>
</template>

<script>
import ResultInfos from './components/result-infos.vue' 
import GenoViewer from './components/geno-viewer.vue'
export default {
  components: {  GenoViewer, ResultInfos }
}
</script>

<style lang="scss" scoped>
</style>