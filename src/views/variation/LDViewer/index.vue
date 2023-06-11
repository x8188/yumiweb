<template>
    <div class="">
      <LdViewer @showResultData="showResultData"/>
      <ResultViewer :formInfo="formInfo"/>
    </div>
</template>

<script>
import LdViewer from './components/ld-viewer.vue'
import ResultViewer from './components/result-viewer.vue'
export default {
  components: { LdViewer, ResultViewer },
  data() {
    return {
      formInfo: {}
    }
  },
  methods: {
    showResultData(data) {
      this.formInfo = data
    }
  }
}
</script>

<style scoped>
</style>