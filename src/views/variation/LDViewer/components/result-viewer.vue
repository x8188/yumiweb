<template>
  <ZeamapCard>
    <template v-slot:header>
      <Title>Result</Title>
    </template>
    <BbMap />
  </ZeamapCard>
</template>

<script>
import ZeamapCard from '@/components/UnionStyle/zeamap-card.vue';
import BbMap from './bbmap.vue';
export default {
  components: { BbMap, ZeamapCard }
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