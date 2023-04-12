<template>
  <div class="geno-viewer-container">
    <transition name="fade-trans" mode="out-in">
      <GenoViewer v-show="!showResult" @showResult="showResultData" />
    </transition>
    <transition name="fade-trans" mode="out-in">
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
.fade-trans--move,
.fade-trans-leave-active,
.fade-trans-enter-active {
  transition: all 0.5s;
}

.fade-trans-leave-active {
  position: absolute;
}

.fade-trans-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-trans-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

</style>