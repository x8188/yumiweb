<template>
  <div class="left_top">
    <div class="top_search">{{ $i18n.t('search')}}</div>
    <el-form
      :label-position="labelPosition"
      label-width="90px"
      v-model="formLabelAlign"
      style="margin: 40px"
    >
      <el-form-item :label="$i18n.t('name/pedigree')"  >
        <el-input class="input_chart" v-model="formLabelAlign.pedigree"></el-input>
      </el-form-item>
      <el-form-item :label="$i18n.t('year')">
        <el-input class="input_chart" v-model="formLabelAlign.year"></el-input>
      </el-form-item>
      <el-form-item :label="$i18n.t('trait')">
        <el-input class="input_chart" v-model="formLabelAlign.trait"></el-input>
      </el-form-item>
      <el-form-item :label="$i18n.t('location')" >
        <el-input
          class="input_chart"
          v-model="formLabelAlign.location"
        ></el-input>
      </el-form-item>
      <el-button class="left_search" @click="search" type="info" plain
        >{{ $i18n.t('search')}}</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { param } from "@/utils";
// import { $t } from 'vue-i18n';
import en from '../../../locales/en'

// import {detail} from "@/api/"
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        pedigree:"",
        year: "",
        trait: "",
        location: "",
      },
    };
  },
  methods: {

    search() {
      const pedigree = this.formLabelAlign.pedigree;
      const year = this.formLabelAlign.year;
      const trait = this.formLabelAlign.trait;
      const location = this.formLabelAlign.location;

      let params = {};
      // 根据需要构建查询参数
      let searchUrl = "/PhenotypeDatabase/searchLeftTop/detail";

      if(pedigree && !year && !location && !trait){
        searchUrl += `/searchByName`;
        params = {pedigree: pedigree}
      }else if(!pedigree && year && !location && !trait){
        searchUrl += `/searchByYear`;
        params = {year: year}
      }else if(!pedigree && !year && location && !trait){
        searchUrl += `/searchByLocation`;
        params = {location: location}
      }else if(!pedigree && !year && !location && trait){
        searchUrl += `/searchByTrait`;
        params = {trait: trait}
      }else if(pedigree && !year && !location && trait){
        searchUrl += `/searchByNatr`;
        params = { pedigree: pedigree, trait: trait };
      }else{
        searchUrl += `/searchByYelo`;
        params = {pedigree: pedigree, year: year, trait: trait, location: location}
      }
      //   window.location.href = searchUrl;
      //  //跳转到另一个页面，传递查询参数
      this.$router.push({
        path: searchUrl,
        query: params ? params : "",
      });
    },
  },
  mounted(){
    this.$i18n.setLocaleMessage('en', en);
    this.$i18n.locale = 'en';
  }
};
</script>
<style scoped>
.left_top{
  width: 100%;
  margin: 0 auto;
}
.top_search{
  margin-top: 20px;
  font-size: 45px;
  margin-left: 50px;
  text-align: left;

}
.left_search {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
  /* margin-left: 20px; */
  margin-bottom: 30px;
  background: #f1f8f8;
}
.left_search:hover{
  background: rgb(9, 107, 117);
}
.input_chart {
  margin-left: 20px;
  width: 200px;
}
</style>
