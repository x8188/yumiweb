<template>
  <div id="main" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    // 静态树状图配置
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    myChart.showLoading();
    const data = {
// 总节点
      name: "ALL",
// 二级节点
      children: [
        {
          name: "Morphological",
          children: [
            { name: "株高" },
            { name: "穗位" },
            { name: "穗上叶长" },
            { name: "穗上叶宽" },
            { name: "雄穗分枝数" },
            { name: "根层" },
            { name: "成株叶片数" },
            {name:"茎粗"},
            {name:"花丝花青甙显色"},
            {name:"花药花青甙显色"},
            {name:"穗轴颜色"},
            {name:"籽粒颜色"},
          ],
        },
        {
          name: "Agronomical",
          children: [
            {name:"田评"},
            {name:"室评"},
            {name:"沾光"},
            {name:"空秆数"},
            {name:"入选株数"},
            {name:"区株数"},
            {name:"保绿度"},
            {name:"授粉计划"},
            {name:"双穗数"},
            {name:"翌年处理意见"},
            {name:"决策来源"},
            {name:"位点差"},
            {name:"抽雄期"},
            {name:"出苗期"},
            {name:"成熟期"},
            {name:"播种期"},
            {name:"生育期"},
            {name:"散粉期"},
            {name:"吐丝期"},
            {name:"收获日期"},
            {name:"散粉吐丝间隔"},

          ],
        },
        {
          name:"Yeild",
          children:[
            {name:"粒长"},
            {name:"粒宽"},
            {name:"穗长"},
            {name:"穗粗"},
            {name:"穗行数"},
            {name:"行粒数"},
            {name:"百粒重"},
            {name:"小区产量"},
            {name:"穗粒数"},
            {name:"穗粒重"},
            {name:"籽粒含水量"},
            {name:"出籽率"}
        ]
        },
        {
          name: "Biotic stress",
          children: [
            { name: "瘤黑粉" },
            { name: "穗腐病" },
            { name: "纹枯病" },
            { name: "锈病" },
            { name: "叶斑病" },
            { name: "玉米螟" },
            { name: "茎腐病" },
            { name: "粗缩病" },
            { name: "锈病" },
            { name: "大斑病" },
            { name: "矮花叶病" },
            { name: "白化病" },
            { name: "褐斑病" },
            { name: "灰斑病" },
            { name: "粒腐病" },
            { name: "小斑病" },
            { name: "禾谷茎腐" },
            { name: "腐霉茎腐" },
            { name: "禾谷穗腐" },
            { name: "拟轮枝穗腐" },
            { name: "蚜虫" },
            { name: "抗虫性" },
            { name: "接种处理" },
          ],
        },
        {
          name: "Abiotic stress",
          children: [
            {name:"根倒伏"},
            {name:"抗倒性"},
            {name:"茎倒伏"},
            {name:"死苗率"},
            {name:"鉴定药品"},
            {name:"畸形苗率"},
            {name:"畸形苗数"}, 
          ],
        },
      ],
    };

    myChart.hideLoading();
    myChart.setOption(
      (option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        legend: {
          top: "2%",
          left: "10%",
          orient: "vertical",
          data: [
            {
              name: "表型总览",
              icon: "rectangle",
            },
          ],
          borderColor: "#c23531",
        },
        series: [
          {
            type: "tree",
            name: "tree1",
            data: [data],
            layout: "orthogonal",
            orient: "LR",
            top: "5%",
            left: "5%",
            bottom: "2%",
            right: "27%",
            symbolSize: 10,
            lineStyle: {
              color: " #6699cc",
              width: 2,
            },
            itemStyle: {
              color: "#f0f0f0",
              borderColor: "blue",
              shape: "rect", // 设置节点形状为长方形
              borderWidth: 5,
              borderRadius: 0,
            },
            label: {
              show: true, // 显示节点标签
              position: "left", // 设置标签位置为节点内部
              width: 100, // 设置文本的最大宽度
              overflow: "truncate", // 文本超出部分使用省略号
              align: "center", // 文本水平居中
              verticalAlign: "middle", // 文本垂直居中
              lineHeight: 20, // 设置文本行高
              // 其他样式属性...
            },
            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
              },
            },
            emphasis: {
              focus: "descendant",
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      })
    );

    option && myChart.setOption(option);
  },
};
</script>

<style scoped>
#main {
  width: 500px;
  height: 500px;
}
</style>
