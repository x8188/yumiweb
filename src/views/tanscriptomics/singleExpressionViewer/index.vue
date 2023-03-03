<template>
  <!--  任务5.1-->
  <div>
    <div class="single-expression-viewer-content">
      <Title>Single Expression Viewer</Title>
      <p>
        Vue CLI is based on webpack, while create-vue is based on Vite. Vite
        supports most of the configured conventions found in Vue CLI projects
        out of the box, and provides a significantly better development
        experience due to its extremely fast startup and hot-module replacement
        speed. Learn more about why we recommend Vite over webpack here.
      </p>
      <p>
        Vue CLI is based on webpack, while create-vue is based on Vite. Vite
        supports most of the configured conventions found in Vue CLI projects
        out of the box, and provides a significantly better development
        experience due to its extremely fast startup and hot-module replacement
        speed. Learn more about why we recommend Vite over webpack here.
      </p>
      <p>
        Vue CLI is based on webpack, while create-vue is based on Vite. Vite
        supports most of the configured conventions found in Vue CLI projects
        out of the box, and provides a significantly better development
        experience due to its extremely fast startup and hot-module replacement
        speed. Learn more about why we recommend Vite over webpack here.
      </p>
      <el-input
        v-model="expressionCode"
        placeholder="请输入内容"
        clearable
      ></el-input>
    </div>
    <div class="tissue-overview-content">
      <Title>Tissue Overview</Title>
      <div class="tissue-overview-iamge">
        <img src="../../../../public/zeamap.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/CommonComponents/Title.vue";
export default {
  name: "FirstTask",
  components: { Title },
  data() {
    return {
      expressionCode: "",
    };
  },
};
</script>

<style scoped>
.single-expression-viewer-content {
  background: #fff;
  color: #222222;
  margin: 0 auto;
  border-radius: 3px;
  padding: 30px;
}
p {
  line-height: 26px;
  font-size: 16px;
  margin: 15px 0;
}
.tissue-overview-content{
  padding: 10px;
  background: #fff;
  margin: 20px auto;
  padding:30px;
  border-radius: 3px;
}
.tissue-overview-iamge
{
  width: 100%;
}
.tissue-overview-iamge img
{
  width: 100%;
}
</style>
