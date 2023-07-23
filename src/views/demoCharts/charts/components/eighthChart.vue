<template>
    <ZeamapCard>
        <template slot="header"><Title>第八个图</Title></template>
        <div id="eightChart" width="100%"></div>
    </ZeamapCard>
  </template>
  
  <script>
import * as d3 from "d3";
export default {
  name: "MyComponent",
  mounted() {
    var margin = { top: 100, right: 50, bottom: 100, left: 700 },
      margin2 = { top: 100, right: 10, bottom: 100, left: 50 },
      margin0 = { top: 100, right: 10, bottom: 100, left: 50 },
      width = 1100 - margin0.left - margin0.right,
      heightscreen = 700,
      height = heightscreen - margin.top - margin.bottom,
      height2 = heightscreen - margin2.top - margin2.bottom,
      width2 = 1560 - margin2.left - margin2.right;
    var y = d3.scale.linear().range([0, height]),
      y2 = d3.scale.linear().range([0, 500]),
      x = d3.scale.linear().range([0, width]),
      x2 = d3.scale.linear().range([0, 10]);

    var yAxis2 = d3.svg
      .axis()
      .scale(y2)
      .orient("right")
      .tickSize(2)
      .tickPadding(15);

    var svg = d3
      .select("#eightChart")
      .append("svg")
      .attr("width", width + margin0.left + margin0.right)
      .attr("height", height + margin0.top + margin0.bottom);
    var context = svg
      .append("g")
      .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");
    var block = svg
      .append("g")
      .attr("transform", "translate(" + 200 + "," + 100 + ")");
    var div = d3
      .select("#eightChart")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 1e-6);
    this.chr_select(
      1,
      "/data/data.csv",
      context,
      height,
      block,
      y,
      x,
      y2,
      x2,
      yAxis2
    );
  },
  methods: {
    chr_select(chr, datamarkers, context, height, block, y, x, y2, x2, yAxis2) {
      //划染色体矩形
      context
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 0)
        .attr("ry", 0)
        .attr("width", 15)
        .attr("height", height)
        .attr("fill", "#CDCBCE")
        .attr("stroke", "black")
        .attr("stroke-width", "2")
        .attr("id", "reglineTx2");

      d3.csv(datamarkers, function(data) {
        data.forEach(function(d) {
          d.GM = +d.GM;
        });

        var data = data.filter(function(d) {
          return d.CHR == chr;
        });

        // 方块数据
        var colors = [
          "#336401",
          "#4DBAFF",
          "#F8FB01",
          "#FEFEFE",
          "#FF00FE",
          "red",
        ];
        var map = new Map();
        data.forEach((d, i) => {
          d.color = "#326402";
        });
        var dataN = data.filter((d) => {
          return !map.has(Math.floor(d.GM)) && map.set(Math.floor(d.GM), 1);
        });
        console.log("🚀 ~ file: 1.html:89 ~ dataN ~ dataN:", dataN);

        y.domain(
          d3.extent(
            data.map(function(d) {
              return d.GM;
            })
          )
        );
        // console.log("🚀 ~ file: dmap.js:64 ~ y:",x, y)
        x.domain([
          0,
          d3.max(
            data.map(function(d) {
              return d.GM;
            })
          ),
        ]);
        y2.domain(y.domain());
        x2.domain(x.domain());

        const valuemax = d3.max(data, function(d) {
          return d.GM;
        });
        //刻度线（|）

        context
          .selectAll("line.horizontal")
          .attr("x1", -40)
          .attr("y1", function(d) {
            return y(d.GM);
          })
          .attr("x2", -30)
          .attr("y2", function(d) {
            return y(d.GM);
          })
          .style("stroke", "black")
          .style("stroke-width", 1);

        // 刻度数字
        context
          .append("g")
          .attr("transform", "translate(-40,0)")
          .call(yAxis2);

        context
          .selectAll("adsa")
          .data(Array(11).fill(0))
          .enter()
          .append("svg:line")
          .attr("x1", -40)
          .attr("y1", function(d, i) {
            return i * 50;
          })
          .attr("x2", -30)
          .attr("y2", function(d, i) {
            return i * 50;
          })
          .style("stroke", "black");
        console.log(1);
        // 刻度线(——)
        console.log(
          "🚀 ~ file: 9这个图用vscode开启live server打开.html:78 ~ data:",
          data
        );
        context
          .selectAll("line.horizontal")
          .data(dataN)
          .enter()
          .append("svg:line")
          .attr("x1", 0)
          .attr("y1", function(d) {
            return y(d.GM);
          })
          .attr("x2", 30)
          .attr("y2", function(d) {
            return y(d.GM);
          })
          .style("stroke", "red")
          .style("cursor", "pointer")
          .style("stroke-width", 2)
          .on("click", clickLine);
        function clickLine(d, i, context) {
          console.log(block.selectAll(`.row${i}`)[0].length);
          if (block.selectAll(`.row${i}`)[0].length) {
            // block.selectAll(`.row${i}`).attr("visibility", "hidden");
            block.selectAll(`.row${i}`).remove();
          } else {
            var row = block.append("g").attr("class", `row${i}`);
            for (let i = 0; i < 20; i++) {
              row
                .selectAll("text1")
                .data([d])
                .enter()
                .append("rect")
                .attr("x", i * 20)
                .attr("y", function(d) {
                  return y(d.GM) - 15;
                })
                .attr("rx", 0)
                .attr("ry", 0)
                .attr("width", 15)
                .attr("height", 15)
                .attr("class", "rec")
                .attr("fill", function(d) {
                  return d.color;
                })
                .attr("stroke", "black")
                .attr("stroke-width", "1")
                .attr("id", "reglineTx2")
                .attr("dx", function(d, i) {
                  if (1) {
                    a = d.GM;
                    b = 0;
                    return 35;
                  } else {
                    b += 1;
                    return 75 + b * 5;
                  }
                })
                .attr("dy", function(d) {
                  if (1) {
                    a = d.GM;
                    b = 0;
                    return y(d.GM);
                  } else {
                    b += 1;
                    return y(d.GM) + b * 8;
                  }
                })
                .text(function(d) {
                  return d.name;
                });
            }
          }
        }
        // value
        var a = 0,
          b = 0;
        context
          .selectAll("text1")
          .data(dataN)
          .enter()
          .append("text")
          .attr("dx", function(d, i) {
            if (1) {
              a = d.GM;
              b = 0;
              return 35;
            } else {
              b += 1;
              return 75 + b * 5;
            }
          })
          .attr("dy", function(d) {
            if (1) {
              a = d.GM;
              b = 0;
              return y(d.GM);
            } else {
              b += 1;
              return y(d.GM) + b * 8;
            }
          })
          .text(function(d) {
            return d.name;
          })
          .style("cursor", "pointer")
          .on("click", clickLine);
        // 方块部分

        for (let i = 0; i < 20; i++) {
          dataN.forEach((d, i) => {
            var random = Math.floor(Math.random() * 6);
            if (random == i) d.color = colors[random];
          });

          block
            .append("text")
            .attr("dx", 0)
            .attr("dy", 0)

            .attr("transform", `translate(${12 + i * 20},-20) rotate(-90,0,0)`)
            .text("ED3DK");
        }
      });
    },
  },
};
</script>
  
  <style scoped>
#eightChart {
  width: 1000px;
  margin: 0 auto;
}
</style>
  