<!--通用title组件-->
<!--by：hxx-->
<!--date：2023.1.13-->
<template>
  <div>
    <!-- <h2 class="title-content">
    <slot></slot>
  </h2> -->
    <div class="svg-wrapper">
      <svg height="60" width="320">
        <rect class="shape" height="60" width="320" />
        <!-- <div class="text">xxxxxxx</div> -->
        <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" class="text"><slot></slot></text>
      </svg>
      
    </div>
  </div>

  </template>
  
  
  <script>
  export default {
    name: "Title"
  }
  
  </script>
  <style scoped>
  .title-content
  {
    font-size: 28px;
    line-height: 30px;
    padding-left: 10px;
    border-left: 5px solid forestgreen;
  }
  .svg-wrapper {
  /* position: relative; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
	/* margin: 0 auto; */
  /* width: 320px;   */
}
.shape {
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  fill: transparent;
  stroke: #40878f;
  border-bottom: 5px solid black;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
}
.text {
  font-family: 'Roboto Condensed';
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 3px;
  color: #000000;
  /* top: -48px; */
  position: relative;
  pointer-events: none;
  font-weight: bolder;
}
.shape:hover {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}

  </style>
  