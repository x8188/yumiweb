<template>
  <div>
    <div class="content">
      <Title>Catalog</Title>
      <div class="catalog_content">
        <ul>
          <li>Germplasm</li>
          <li>PCA</li>
          <li>Population Structure</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "catalog",
}
</script>

<style scoped>
.content{
  margin-left: 10px;
}
.catalog_content{
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top:30px
}
ul{
  width: 250px;
  border: #ebebeb solid 1px;
  margin-left: 40px;
  padding-left: 25px;
}
li{
  width: 200px;
  height: 40px;
  padding-top: 12px;
  border-bottom: #ebebeb solid 1px;
  font-size: 14px;
}
</style>
