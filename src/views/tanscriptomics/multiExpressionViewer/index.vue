<template>
  <div>
    <MultiExpressionViewer  v-if="!showResult" @showResult="showResultData"/>
    <ResultInfos v-if="showResult" @returnMultiExpression="returnMultiExpression"/>
  </div>
</template>

<script>
import MultiExpressionViewer from './components/multi-expression-viewer.vue'
import ResultInfos from './components/result-infos.vue'
export default {
  components: { MultiExpressionViewer, ResultInfos },
  data() {
    return {
      showResult: false,
      formInfo : ''
    }
  },
  methods: {
    showResultData(form) {
      this.showResult = true
      this.formInfo = form
    },
    returnMultiExpression() {
      this.showResult = false
    }
  }
}
</script>

<style scoped>

</style>
