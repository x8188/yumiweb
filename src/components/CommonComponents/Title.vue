<!--通用title组件-->
<!--by：hxx-->
<!--date：2023.1.13-->
<template>
<h2 class="title-content">
  <slot></slot>
</h2>
</template>

<script>
export default {
  name: "Title"
}

</script>
<style scoped>
.title-content
{
  font-size: 22px;
  line-height: 30px;
  padding-left: 10px;
  border-left: 5px solid forestgreen;
}
</style>
