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
            { name: "雄穗分枝数" },
            { name: "雄花主轴长度" },
            { name: "穗上叶长" },
            { name: "穗上叶宽" },
            { name: "茎粗" },
          ],
        },
        {
          name: "Agronomical",
          children: [
            { name: "吐丝期" },
            { name: "散粉期" },
            { name: "成熟期" },
            { name: "空杆(%)" },
            { name: "穗长" },
            { name: "穗粗" },
            { name: "穗行数" },
            { name: "行粒数" },
            { name: "轴色" },
            { name: "百粒重" },
            { name: "籽粒长" },
            { name: "籽粒宽" },
            { name: "小区标准产量(Kg)" },
            { name: "出籽率(%)" },
            { name: "过穗表现" },
          ],
        },
        {
          name: "Biotic stress",
          children: [
            { name: "锈病（级）" },
            { name: "茎腐病（%）" },
            { name: "粗缩（%）" },
            { name: "黑粉" },
          ],
        },
        {
          name: "Abiotic stress",
          children: [
            { name: "倒伏倒折率之和（%）" },
            { name: "耐旱性" },
            { name: "耐热性" },
            { name: "耐盐碱" },
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
