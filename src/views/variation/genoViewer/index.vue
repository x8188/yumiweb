<template>
  <div>
    <transition name="fade-transform" mode="out-in" >
      <GenoViewer v-show="!showResult" @showResult="showResultData" />
    </transition>
    <transition name="fade-transform" mode="out-in" >
      <ResultInfos v-show="showResult" @returnMultiExpression="returnMultiExpression"/>
    </transition>
  </div>
</template>

<script>
import ResultInfos from './components/result-infos.vue' 
import GenoViewer from './components/geno-viewer.vue'
export default {
  components: {  GenoViewer, ResultInfos },
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

<style lang="scss" scoped>
</style>