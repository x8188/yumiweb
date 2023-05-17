<template>
  <div class="geno-viewer-container">
    <transition name="fade-trans" mode="out-in">
      <GenoViewer v-show="!showResult" @showResult="showResultData" :page="page"/>
    </transition>
    <transition name="fade-trans" mode="out-in">
      <ResultInfos
        v-show="showResult"
        @returnMultiExpression="returnMultiExpression"
        :tableData="formInfo"
        :filterInfo="filterInfo"
        @changePage="changePage"
        :page="page"
      />
    </transition>
  </div>
</template>

<script>
import ResultInfos from "./components/result-infos.vue";
import GenoViewer from "./components/geno-viewer.vue";
export default {
  components: { GenoViewer, ResultInfos },
  data() {
    return {
      showResult: false,
      formInfo: [],
      filterInfo: {},
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  methods: {
    showResultData(form, filter) {
      this.showResult = true;
      this.formInfo = form;
      this.filterInfo = filter;
    },
    returnMultiExpression() {
      this.showResult = false;
    },
    changePage(page){
      this.page=page
    }
  },
};
</script>

<style lang="scss" scoped>
.fade-trans--move,
.fade-trans-leave-active,
.fade-trans-enter-active {
  transition: all 0.5s linear;
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