<template>
  <ZeamapCard>
    <template slot="header">
      <Title>第九个图</Title> 
    </template>
    <div id="mynetwork"></div>
  </ZeamapCard>
</template>

<script>
import { DataSet, Network } from "vis-network/standalone/esm/vis-network";

export default {
  mounted() {
    // create an array with nodes
    let nodeArr = [
      { id: 1, label: "Node 1", color: "#EE0001" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" },
      { id: 6, label: "Node 6" },
      { id: 7, label: "Node 7" },
      { id: 8, label: "Node 8" },
      { id: 9, label: "Node 9" },
      { id: 10, label: "Node 10" },
    ];
    nodeArr.map((i) => {
      i.shape = "box";
      if (i.id != 1) {
        i.color = "#FEBF5A";
      }
    });
    nodeArr.filter((i) => {
      i.id < 8 && i.id > 1 && (i.color = "#83EC86");
    });

    var nodes = new DataSet(nodeArr);

    var edges = new DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 7 },
      { from: 2, to: 5 },
      { from: 3, to: 5 },
      { from: 3, to: 6 },
      { from: 6, to: 7 },
      { from: 6, to: 8 },
      { from: 6, to: 9 },
      { from: 9, to: 10 },
    ]);

    // create a network
    var container = document.getElementById("mynetwork");

    // provide the data in the vis format
    var data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {
      physics: {
        enabled: false,
      },
      layout: {
        hierarchical: {
          parentCentralization: false,
          direction: "DU",
          sortMethod: "directed",
          levelSeparation: 50,
        },
      },
    };

    // initialize your network!
    var network = new Network(container, data, options);
  },
};
</script>

<style scoped>
#mynetwork {
  width: 90%;
  height: 400px;
}
</style>
