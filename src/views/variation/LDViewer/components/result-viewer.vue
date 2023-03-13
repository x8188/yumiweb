<template>
  <div class="result-views-container">
    <div class="result-data">
      <el-card>
        <Title>Result</Title>
        <div class="svg-container">
          <div>
            <BbMap />
        </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import BbMap from './bbmap.vue';
import Title from '@/components/CommonComponents/Title.vue'
export default {
  components: { Title, BbMap }
}
</script>

<style scoped>
.result-views-container {
background-color: #F5F6F5;
}
.result-data {
position: relative;
left: 50%;
transform: translateX(-50%);
width: 90%;
min-width: 900px;
padding-top: 30px;
}
</style>