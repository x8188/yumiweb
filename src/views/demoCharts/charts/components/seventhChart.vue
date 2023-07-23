<template>
  <ZeamapCard>
    <template slot="header">
      <Title>第七个图</Title>
    </template>
    <div id="mire"></div>
  </ZeamapCard>
</template>

<script>
import * as d3 from "d3";

export default {
  mounted() {
    this.createChart();
  },
  methods: {
    generateBlock({
      title, // 题目
      x, // 偏移量
      colorTop, // ['red','blue'] 一个数组，包含两个颜色值
      data_mid = Array.from(Array(5), (i, index) => `HC${index}${index + 1}`),
      data_bottom = Array.from(
        Array(48),
        (i, index) => `HNC${index}${index + 1}`
      ),
      top_display = true,
      prm_text = "113.7(27.8)",
      mza = "4",
    }) {
      const svg = d3.select("#mire").select("svg");

      // 包含上中下的一条
      var block = svg
        .append("g")
        .attr("transform", "translate(" + x + "," + 20 + ")");

      // 顶部矩形
      var top1 = block
        .append("g")
        .attr("transform", "translate(" + 60 + "," + 0 + ")")
        .attr("stroke", "black")
        .attr("stroke-width", "1");
      // 边框
      top1
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 0)
        .attr("ry", 0)
        .attr("width", 100)
        .attr("height", 60)
        .attr("fill", "transparent")
        .attr("stroke", "black")
        .attr("stroke-width", "1")
        .attr("id", "reglineTx2")
        .attr("dx", 0)
        .attr("dy", 0);
      // title
      top1
        .append("text")
        .attr("dx", 0)
        .attr("dy", 0)
        .attr("x", 35)
        .attr("y", 15)
        .attr("font-size", "10px")
        .attr("font-weight", "300")
        .attr("fill", "#545454")
        .text(title);

      if (top_display) {
        // text
        top1
          .append("text")
          .attr("dx", 0)
          .attr("dy", 0)
          .attr("x", 5)
          .attr("y", 30)
          .attr("font-size", "10px")
          .attr("font-weight", "300")
          .attr("fill", "#545454")
          .text("HAP_IBD");
        top1
          .append("text")
          .attr("dx", 0)
          .attr("dy", 0)
          .attr("x", 5)
          .attr("y", 50)
          .attr("font-size", "10px")
          .attr("font-weight", "300")
          .attr("fill", "#545454")
          .text("HAP_IIS");

        // color
        top1
          .append("rect")
          .attr("x", 50)
          .attr("y", 20)
          .attr("width", 45)
          .attr("height", 12)
          .attr("fill", colorTop[0])
          .attr("stroke", "black")
          .attr("stroke-width", "1")
          .attr("id", "reglineTx2");

        top1
          .append("rect")
          .attr("x", 50)
          .attr("y", 40)
          .attr("width", 45)
          .attr("height", 12)
          .attr("fill", colorTop[1])
          .attr("stroke", "black")
          .attr("stroke-width", "1")
          .attr("id", "reglineTx2");

        top1
          .append("line")
          .attr("x1", 75)
          .attr("y1", 32)
          .attr("x2", 60)
          .attr("y2", 40);

        top1
          .append("line")
          .attr("x1", 90)
          .attr("y1", 32)
          .attr("x2", 80)
          .attr("y2", 40);
      }

      // mid
      var mid = block
        .append("g")
        .attr("transform", "translate(" + 60 + "," + 70 + ")")
        .attr("stroke", "black")
        .attr("stroke-width", "1");

      mid
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 0)
        .attr("ry", 0)
        .attr("width", 100)
        .attr("height", 60)
        .attr("fill", "transparent")
        .attr("stroke", "black")
        .attr("stroke-width", "1")
        .attr("id", "reglineTx2")
        .attr("dx", 0)
        .attr("dy", 0);
      data_mid.forEach((d, i) => {
        mid
          .append("text")
          .attr("x", 5)
          .attr("y", 10 * (i + 1))
          .attr("font-size", "8px")
          .attr("font-weight", "100")
          .attr("fill", "#545454")
          .text(d);
        mid
          .append("rect")
          .attr("x", 50)
          .attr("y", 3 + i * 10)
          .attr("width", 45)
          .attr("height", 8)
          .attr("fill", colorTop[0])
          .attr("stroke", "black")
          .attr("stroke-width", "1");
      });

      // 最下面的
      var bottom = block
        .append("g")
        .attr("transform", "translate(" + 60 + "," + 140 + ")")
        .attr("stroke", "black")
        .attr("stroke-width", "1");
      bottom
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 0)
        .attr("ry", 0)
        .attr("width", 100)
        .attr("height", 500)
        .attr("fill", "transparent")
        .attr("stroke", "black")
        .attr("stroke-width", "1")
        .attr("id", "reglineTx2")
        .attr("dx", 0)
        .attr("dy", 0);

      data_bottom.forEach((i, index) => {
        bottom
          .append("text")
          .attr("dx", 0)
          .attr("dy", 0)
          .attr("x", 5)
          .attr("y", 10 * (index + 1))
          .attr("font-size", "8px")
          .attr("font-weight", "100")
          .attr("fill", "#545454")
          .text(i);
        bottom
          .append("rect")
          .attr("x", 50)
          .attr("y", 3 + 10 * index)
          .attr("width", 45)
          .attr("height", 8)
          .attr("fill", colorTop[0])
          .attr("stroke", "black")
          .attr("stroke-width", "1");
      });

      // PRM
      var prm = block
        .append("g")
        .attr("transform", "translate(" + 60 + "," + 650 + ")")
        .attr("stroke", "black")
        .attr("stroke-width", "1");
      prm
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 0)
        .attr("ry", 0)
        .attr("width", 100)
        .attr("height", 20)
        .attr("fill", "transparent")
        .attr("stroke", "black")
        .attr("stroke-width", "1")
        .attr("id", "reglineTx2")
        .attr("dx", 0)
        .attr("dy", 0);

      prm
        .append("text")
        .attr("dx", 0)
        .attr("dy", 0)
        .attr("x", 10)
        .attr("y", 15)
        .attr("font-size", "13px")
        .attr("font-weight", "100")
        .attr("fill", "#545454")
        .text(prm_text);

      // MZA
      bottom
        .append("g")
        .append("text")
        .attr("x", 60)
        .attr("y", 310)
        .attr("font-size", "14px")
        .attr("font-weight", "200")
        .attr("fill", "#545454")
        .attr("z-index", 999)
        .text(mza);

      // MZA 要覆盖前面的字 所以放后面
      var MZA = svg
        .append("g")
        .attr("transform", "translate(" + 20 + "," + 450 + ")");

      MZA.append("rect")
        .attr("width", 70)
        .attr("height", 30)
        .attr("fill", "#fff")
        .attr("stroke", "black")
        .attr("stroke-width", "0")
        .attr("id", "reglineTx2")
        .attr("dx", 0)
        .attr("dy", 0);

      MZA.append("text")
        .attr("x", 0)
        .attr("y", 20)
        .attr("font-size", "14px")
        .attr("font-weight", "400")
        .attr("fill", "#545454")
        .text("MZA3353");

      var MZA1 = svg
        .append("g")
        .attr("transform", "translate(" + 770 + "," + 450 + ")");
      MZA1.append("rect")
        .attr("width", 70)
        .attr("height", 60)
        .attr("fill", "#fff")
        .attr("stroke", "black")
        .attr("stroke-width", "0")
        .attr("id", "reglineTx2")
        .attr("dx", 0)
        .attr("dy", 0);

      MZA1.append("text")
        .attr("x", 0)
        .attr("y", 20)
        .attr("font-size", "14px")
        .attr("font-weight", "400")
        .attr("fill", "#545454")
        .text("ASI_FS");
      MZA1.append("text")
        .attr("x", 0)
        .attr("y", 40)
        .attr("font-size", "14px")
        .attr("font-weight", "400")
        .attr("fill", "#545454")
        .text("ASI_GFS");
    },
    createChart() {
      const svg = d3
        .select("#mire")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1000);

      svg
        .append("text")
        .attr("x", 20)
        .attr("y", 50)
        .attr("font-size", "10px")
        .attr("font-weight", "600")
        .attr("fill", "#545454")
        .text("HaploType");
      //Pedlgree
      svg
        .append("text")
        .attr("x", 20)
        .attr("y", 120)
        .attr("font-size", "10px")
        .attr("font-weight", "600")
        .attr("fill", "#545454")
        .text("Pecllgree");

      // Inbreds
      svg
        .append("text")
        .attr("x", 20)
        .attr("y", 400)
        .attr("font-size", "10px")
        .attr("font-weight", "600")
        .attr("fill", "#545454")
        .text("Inbreds");

      // PRM
      svg
        .append("text")
        .attr("x", 20)
        .attr("y", 685)
        .attr("font-size", "13px")
        .attr("font-weight", "600")
        .attr("fill", "#545454")
        .text("PRM");

      this.generateBlock({
        title: "Hap_1",
        x: 20,
        colorTop: ["#FE00FD", "#FADD05"],
      });
      this.generateBlock({
        title: "Hap_2",
        x: 140,
        colorTop: ["#00007E", "#FADD05"],
        data_mid: Array.from(Array(1), (i, index) => `HC${index}${index + 1}`),
        data_bottom: Array.from(
          Array(40),
          (i, index) => `HC${index}${index + 1}`
        ),
        mza: 1,
      });
      this.generateBlock({
        title: "Hap_3",
        x: 260,
        colorTop: ["#00FE00", "#FADD05"],
        data_mid: Array.from(Array(4), (i, index) => `HC${index}${index + 1}`),
        data_bottom: Array.from(
          Array(20),
          (i, index) => `HC${index}${index + 1}`
        ),
        mza: 2,
      });
      this.generateBlock({
        title: "Hap_4",
        x: 380,
        colorTop: ["#00FE00", "#00FFFF"],
        data_mid: Array.from(Array(5), (i, index) => `HC${index}${index + 1}`),
        data_bottom: Array.from(
          Array(10),
          (i, index) => `HC${index}${index + 1}`
        ),
        mza: 2,
      });
      this.generateBlock({
        title: "Hap_5",
        x: 500,
        colorTop: ["#818101", "#FADD05"],
        data_mid: Array.from(Array(1), (i, index) => `HC${index}${index + 1}`),
        data_bottom: Array.from(
          Array(7),
          (i, index) => `HC${index}${index + 1}`
        ),
        mza: 3,
      });
      this.generateBlock({
        title: "Hap_6",
        x: 620,
        colorTop: ["#FF0001", "#00FFFF"],
        data_mid: Array.from(Array(5), (i, index) => `HC${index}${index + 1}`),
        data_bottom: Array.from(
          Array(4),
          (i, index) => `HC${index}${index + 1}`
        ),
        mza: 2,
      });
      this.generateBlock({
        title: "Misc",
        x: 740,
        colorTop: ["#FF0001", "#00FFFF"],
        data_mid: Array.from(Array(0), (i, index) => `HC${index}${index + 1}`),
        data_bottom: Array.from(
          Array(4),
          (i, index) => `HC${index}${index + 1}`
        ),
        top_display: false,
      });
    },
  },
};
</script>

<style scoped>
#mire {
  width: 1000px;
  height: 1000px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
