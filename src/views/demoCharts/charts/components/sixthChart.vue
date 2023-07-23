<template>
  <ZeamapCard>
    <template slot="header">
      <Title>第六个chart</Title>
    </template>
      <div id="sixthChart"></div>
  </ZeamapCard>
</template>

<script>
import * as vis from "vis-network";
import { DataSet } from "vis-data";

export default {
  data() {
    return {
      nodes: [],
      links: [],
    };
  },
  mounted() {
    this.initData();
    this.initChart();
  },
  methods: {
    initData() {
      let nodeArr = [
        {
          id: 1,
          label: "KA1",
          color: { background: "#DAD5D0", border: "#FD1313" },
          size: 10,
        },
        {
          id: 2,
          label: "KA2",
          color: { background: "#DAD5D0", border: "#FD1313" },
          size: 20,
        },
        {
          id: 3,
          label: "KA3",
          color: { background: "#DAD5D0", border: "#FD1313" },
          size: 30,
        },
        {
          id: 4,
          label: "KA4",
          color: { background: "#DAD5D0", border: "#FD1313" },
          size: 80,
        },
        {
          id: 5,
          label: "KA5",
          color: { background: "#DAD5D0", border: "#FD1313" },
          size: 70,
        },
        {
          id: 6,
          label: "KA6",
          color: { background: "#FEBE5A", border: "#FD1313" },
          size: 60,
        },
        {
          id: 7,
          label: "KA7",
          color: { background: "#FEBE5A", border: "#FD1313" },
          size: 70,
        },
        {
          id: 8,
          label: "KA8",
          color: { background: "#FEBE5A", border: "#FD1313" },
          size: 80,
        },
        {
          id: 9,
          label: "KA9",
          color: { background: "#FEBE5A", border: "#FD1313" },
          size: 90,
        },
      ];

      nodeArr.forEach((i) => {
        // i.size=101 - i.size
        i.font = {
          size: 101 - i.size,
          // strokeWidth:10
        };
        i.margin = {
          top: 11 - i.id,
          bottom: 11 - i.id,
          right: 5 * (11 - i.id),
          left: 5 * (11 - i.id),
        };
      });

      console.log("nodeArr:", nodeArr);
      this.nodes = nodeArr;

      // 初始化每一个关系
      this.links = [
        {
          from: 1,
          to: 2,
          color: "#0201FD",
          background: {
            enabled: true,
            color: "#0201FD",
            size: 40,
          },
        },
        {
          from: 1,
          to: 3,
          color: "#0201FD",
          background: {
            enabled: true,
            color: "#0201FD",
            size: 35,
          },
        },
        {
          from: 2,
          to: 4,
          color: "#0201FD",
          background: {
            enabled: true,
            color: "#0201FD",
            size: 30,
          },
        },
        {
          from: 2,
          to: 7,
          color: "#0201FD",
          background: {
            enabled: true,
            color: "#0201FD",
            size: 5,
          },
        },
        {
          from: 2,
          to: 5,
          color: "#0201FD",
          background: {
            enabled: true,
            color: "#0201FD",
            size: 10,
          },
        },
        {
          from: 3,
          to: 6,
          color: "#0201FD",
          background: {
            enabled: true,
            color: "#0201FD",
            size: 20,
          },
        },
        { from: 3, to: 9, color: "#0201FD" },
        { from: 6, to: 7, color: "#0201FD", dashes: true },
        { from: 6, to: 8, color: "#0201FD", dashes: true },
        { from: 6, to: 9, color: "#0201FD", dashes: true },
        { from: 4, to: 11, color: "#0201FD" },
        { from: 4, to: 12, color: "#0201FD" },
        { from: 5, to: 13, color: "#0201FD" },
        { from: 5, to: 14, color: "#0201FD" },
        { from: 7, to: 17, color: "#0201FD" },
        { from: 7, to: 17, color: "#0201FD" },
        { from: 8, to: 18, color: "#0201FD" },
        { from: 8, to: 18, color: "#0201FD" },
        { from: 9, to: 10, color: "#0201FD" },
      ];
    },
    initChart() {
      const nodes = new DataSet(this.nodes);

      const edges = new DataSet(this.links);

      const container = document.getElementById("sixthChart");
      const data = {
        nodes: nodes,
        edges: edges,
      };
      const options = {
        // autoResize:false,
        nodes: {
          borderWidth: 3,
          shape: "box",
          color: {
            border: "#FD1313",
          },
        },
        edges: {
          //   shadow: true,
          smooth: true,
          background: {
            // enabled: true,
            color: "#ff0000",
          },
          font: "120px arial #ff0000",
        },
        physics: {
          // enabled: true
        },
        layout: {
          hierarchical: {
            // parentCentralization: false,
            direction: "DU", //层次布局的方向。可选选项为:。简化一下:上-下，下-上，左右，右左。UD, DU, LR, RL
            sortMethod: "directed", //该算法用于根据数据确定节点的级别。可能的选项是:。
            //Hubsize取边缘最多的节点，并将它们放在顶部。在此基础上计算层次结构的其余部分。
            //Directed坚持边的to和from数据。A -> B所以B比A低一级hubsize，有向的
            // levelSeparation: 50//不同层次之间的距离。
          },
        },
      };
      const network = new vis.Network(container, data, options);
    },
  },
};
</script>

<style scoped>
#sixthChart {
  position: relative;
  width: 90%;
  height: 400px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 25px;
}
</style>
