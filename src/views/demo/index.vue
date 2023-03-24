<template>
    <ZeamapCard >
      <template v-slot:header>
        <div class="">
          <Title>header</Title>
        </div>
      </template>


      <template>
        <el-button style="background-color: pink;" @click="hello">Say Hello</el-button>
      </template>
      
      <template v-slot:footer>
        <el-button style="margin-right: 20px;">footer1</el-button>
        <el-button type="primary">footer2</el-button>
      </template>
    </ZeamapCard>
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

<style scoped>

</style>