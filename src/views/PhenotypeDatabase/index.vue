<template>
  <div class="content">
    <div class="left-top">
      <search-land></search-land>
    </div>
    <div class="right-top">
      <chart-tree></chart-tree>
    </div>
    <div class="left-bottom">
      <search-buttom></search-buttom>
    </div>

    <div class="right-bottom">
      <his-chart></his-chart>
    </div>
    <!-- <div class="button">
      <button @click="toggleLanguage">{{ $t('switchLanguage') }}</button>
    </div> -->
  </div>
</template>

<script>
import searchLand from "./searchLeftTop/index.vue";
import searchButtom from "./searchLeftBottom/index.vue";
import chartTree from "./chartsRightTop/index.vue";
import hisChart from "./chartsRightbottom/index.vue";
export default {
  components: {
    searchLand,
    searchButtom,
    chartTree,
    hisChart,
  },
  // methods: {
  //   toggleLanguage() {
  //     if (this.$i18n.locale === 'en') {
  //       this.$i18n.locale = 'zh';
  //     } else {
  //       this.$i18n.locale = 'en';
  //     }
  //   }
  // }
};
</script>

<style scoped>
.content {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
}
.left-top {
  display: flex;
  justify-content: center;
  margin-left: 20px;
  align-items: center;
  margin: 0 auto;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 38%;
  margin-top: 30px;
  border-top:60px solid rgb(9, 107, 117);
  border-radius: 10px;

}
.left-bottom {
  width: 38%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  margin: 0 auto;
  margin-top: 30px;
  border-top:60px solid rgb(9, 107, 117);
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.right-top {
  width: 40%;
  margin-left: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 30px;
  border-top:60px solid rgb(9, 107, 117);
  border-radius: 10px;
}
.right-bottom {
  width: 40%;
  margin: 0 auto;
  margin-left: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  margin-top: 30px;
  border-top:60px solid rgb(9, 107, 117);
  border-radius: 10px;
}
.button{
  /* display: flex; */
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>
