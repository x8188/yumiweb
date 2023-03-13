<!-- svg标签组件 -->
<!-- by: hty -->
<!-- date: 2023.3.3 -->
<!--
<svg-icon
  :icon-class="camera"
  color="409eff"
 /> -->
<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" :fill="iconColor" />
  </svg>
</template>

<script>
export default{
  props: {
    prefix: {
    type: String,
    default: 'icon'
  },
  iconClass: {
    type: String,
    required: false
  },
  color: {
    type: String,
    default: ''
  }
  },
  computed: {
    symbolId() {
      const symbolId =  `#${this.prefix}-${this.iconClass}`
      return symbolId
    },
    iconColor() {
      const color = `#${this.color}`
      return color
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>
