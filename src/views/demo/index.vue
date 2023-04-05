<template>
 <ZeamapHeaderCard title="go" style="margin:100px">
     <p class="hover-green-link">链接</p>
 </ZeamapHeaderCard>
</template>

<script>
export default {
  methods: {
    hello() {
      this.$message.success('HELLO')
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
}
</style>