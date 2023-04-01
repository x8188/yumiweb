<template>
  <!--  任务5.1-->
  <div>
    <div class="single-expression-viewer-content">
      <div class="top-container">
        <Title>Single expression viewer</Title>
        <div class="info-help">
          <p>This tool accepts query of one gene ID,and the expressions of the query gene among different tissues would be plottedboth as heatmap diagram and statistical barplot.Currently,only genes within the genomes storged in the genomics modure of our database are valid.<br>
          For expressions of gege IDs and/or tissues/treatments not in our database,please visit  <a href="https://science.sciencemag.org/content/353/6301/814">ePlant maize </a>and<a href="https://www.nature.com/articles/s41588-019-0427-6"> MaizeGDB. </a><br>
          For more detailed usage,please refer to the<a href="http://bar.utoronto.ca/eplant_maize/"> tutorial</a> .
          </p>
        </div>
        <div class="search-container">
          <span style="margin-right: 20px;">Search</span>
          <el-input
            clearable
            v-model="expressionCode"
            class="search-input"
          ></el-input>
        </div>
      </div>
    <div class="tissue-overview-content">
      <Title>Tissue Overview</Title>
      <div class="svg-viewer-data">
        <div @click="downloadTsv" class="download-TSV">
          <SvgIcon icon-class="download02" color="717171" style="width: 25px;height: 25px;"/>
        </div>
        <div  @click="checkBigImg" class="check-big-img">
          <SvgIcon icon-class="camera" color="19692C" style="width: 25px;height: 25px;"/>
        </div>
        <img src='@/assets/images/zeamap.svg' />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/CommonComponents/SvgIcon.vue' 
import Title from "@/components/CommonComponents/Title.vue";
export default {
  name: "FirstTask",
  components: { Title, SvgIcon },
  data() {
    return {
      expressionCode: "",
    };
  },
  methods: {
    checkBigImg() {

    },
    downloadTsv() {
      // 请求下载
    },
    search() {
      // 发请求
      this.expressionCode = ""
    }
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #28a745;
$deepMainColor: #19692C;
a {
  color: #28a745;
  &:hover {
    color: #19692C;
    text-decoration: underline;
  }
}
p {
  line-height: 37px;
  font-size: 16px;
  margin: 15px 0;
}
.single-expression-viewer-content {
  width: 90%;
  background: #fff;
  color: #222222;
  margin: 0 auto;
  border-radius: 3px;
  padding: 30px;
  .search-input {
    width: 40%;
    height: 38px;
    margin-right: 10px;
  }
}

.tissue-overview-content{
  background: #fff;
  margin: 20px auto;
  border-radius: 3px;
  .svg-title {
    h4 {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
}
.download-TSV,
.check-big-img {
  float: right;
  margin: 0 10px;
  opacity: 0.8;
  &:active {
    opacity: 1;
  }
}
.svg-viewer-data {
  width: 100%;
  border: 1px solid #EEEEEE;
  border-radius: 5px; 
  padding: 15px 10px;
  }
::v-deep .el-input__inner {
  height: 38px;
  &:focus {
    border: 1px solid $mainColor;
    box-shadow: 5px 5px  20px #C9E9D0;
  }
}
</style>
