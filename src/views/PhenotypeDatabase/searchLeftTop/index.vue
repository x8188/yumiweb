<template>
  <div class="left_top">
    <div class="top_search">{{ $i18n.t("search") }}</div>
    <el-form
      :label-position="labelPosition"
      label-width="90px"
      v-model="formLabelAlign"
      style="margin: 40px"
    >
      <el-form-item :label="$i18n.t('name/pedigree')">
        <el-select
          v-model="formLabelAlign.pedigree"
          :multiple="false"
          filterable
          remote
          :loading="loading"
          :default-first-option="false"
        >
          <el-option
            v-for="(item, index) in pedigrees"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        <!-- <el-input

          class="input_chart"
          v-model="formLabelAlign.pedigree"
          placeholder="请输入"
          suffix-icon="xxxx"
        ></el-input> -->
      </el-form-item>
      <el-form-item :label="$i18n.t('year')">
        <el-select
          v-model="formLabelAlign.year"
          multiple
          filterable
          remote
          :loading="loading"
          :default-first-option="false"
        >
          <el-option
            v-for="(item, index) in years"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item :label="$i18n.t('trait')">
        <el-select
          v-model="formLabelAlign.trait"
          multiple
          filterable
          remote
          :loading="loading"
          :default-first-option="false"
        >
          <el-option
            v-for="(item, index) in traits"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item :label="$i18n.t('location')">
        <el-select
          v-model="formLabelAlign.location"
          multiple
          filterable
          remote
          :loading="loading"
          :default-first-option="false"
        >
          <el-option
            v-for="(item, index) in locations"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-button class="left_search" @click="search" type="info" plain>{{
        $i18n.t("search")
      }}</el-button>
    </el-form>
  </div>
</template>

<script>
import { param } from "@/utils";
import { Message, MessageBox } from "element-ui";
// import { $t } from 'vue-i18n';
import en from "../../../locales/en";
import {
  getPedigree,
  getYear,
  getLocation,
  getTrait,
} from "@/api/jointCreation/searchLeftTop";
export default {
  data() {
    return {
      item: null,
      pedigrees:[],
      years: [],
      traits: [],
      locations: [],
      labelPosition: "left",
      formLabelAlign: {
        pedigree: "",
        year: [],
        trait: "",
        location: "",
      },
      loading: false,
    };
  },

  created() {
    // 在组件创建时从后端获取可选的年份列表
    this.getPedigreeData();
    this.getYearData();
    this.getTraitData();
    this.getLocationData();
  },
  methods: {
    getPedigreeData() {
      getPedigree().then((res) => {
        this.pedigrees = [...res.data];
        console.log(this.pedigrees, "ererer");
      });
    },
    getYearData() {
      getYear().then((res) => {
        this.years = [...res.data];
      });
    },
    getTraitData() {
      getTrait().then((res) => {
        this.traits = [...res.data];
      });
    },
    getLocationData() {
      getLocation().then((res) => {
        this.locations = [...res.data];
      });

    },

    search() {
      const pedigree = this.formLabelAlign.pedigree;
      const year = this.formLabelAlign.year; 
      const trait = this.formLabelAlign.trait;
      const location = this.formLabelAlign.location;
      let params = {};
      if (
    pedigree.length === 0 &&
    Object.keys(year).length === 0 &&
    Object.keys(location).length === 0 &&
    Object.keys(trait).length === 0
  ) {
    // 提示用户输入搜索条件
     this.$message.error("请选择搜索条件")
    return;
  }
      // 根据需要构建查询参数
      let searchUrl = "/PhenotypeDatabase/searchLeftTop/detail";
      console.log(pedigree, year, trait, location, "vbvbvb");
     if (
        Object(pedigree).length !== 0 &&
        Object.keys(year).length == 0 &&
        Object.keys(location).length == 0 &&
        Object.keys(trait).length == 0
      ) {
        searchUrl += `/searchByName`;
        params = { pedigree: pedigree };
      } else if (
        Object.keys(pedigree).length == 0 &&
        Object.keys(year).length !== 0 &&
        Object.keys(location).length == 0 &&
        Object.keys(trait).length == 0
      ) {
        searchUrl += "/searchByYear";
        params.year = year;
      } else if (
        Object.keys(pedigree).length == 0 &&
        Object.keys(year).length == 0 &&
        Object.keys(location).length !== 0 &&
        Object.keys(trait).length == 0
      ) {
        searchUrl += `/searchByLocation`;
        params = { location: location };
      } else if (
        Object.keys(pedigree).length == 0 &&
        Object.keys(year).length == 0 &&
        Object.keys(location).length == 0 &&
        Object.keys(trait).length !== 0
      ) {
        searchUrl += `/searchByTrait`;
        params = { trait: trait };
      } else if (
        Object.keys(pedigree).length !== 0 &&
        Object.keys(year).length == 0 &&
        Object.keys(location).length == 0 &&
        Object.keys(trait).length !== 0
      ) {
        searchUrl += `/searchByNatr`;
        params = { pedigree: pedigree, trait: trait };
      } else {
        searchUrl += `/searchByYelo`;
        params = {
          pedigree: pedigree,
          year: year,
          trait: trait,
          location: location,
        };
      }
      //   console.log(params,'hhh');
      // }
      //   window.location.href = searchUrl;
      //  //跳转到另一个页面，传递查询参数
      return this.$router.push({
        path: searchUrl,
        query: params ? params : "",
      });
    },
  },

  mounted() {
    this.$i18n.setLocaleMessage("en", en);
    this.$i18n.locale = "en";
  },
};
</script>
<style scoped>
.left_top {
  width: 100%;
  margin: 0 auto;
}
.top_search {
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
.left_search:hover {
  background: rgb(9, 107, 117);
}
.input_chart {
  margin-left: 3px;
  width: 191px;
  height: 38px;
}
</style>
