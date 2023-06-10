<template>
 <div class="">
    <div id="ldCanvas" style="position: relative; top: 50px; left: 80px;height: 900px;" @mousemove="mouseInit">
        <canvas ref='nameCanvas' @mousemove="mousemoveNames" id="geneNames" width="1220" height="500" style="position: absolute; top: 0px; left: 0px;"></canvas>
        <canvas @mousemove="mousemoveCanvas"  ref="geneCanvas" class="geneCanvas" id="geneCanvas" width="1220" height="600" style="position: absolute; top: 420px; left: 0px;" ></canvas>
        <div class="color-side-bar" style="position: absolute;left: 0;top: 50%;">
            <img src="@/assets/images/color-sidebar.png" alt="">
        </div>
        <div class="gene-info" style="position: absolute;" :style="{left: screen.screenX+ 25 +'px',top: screen.screenY+'px'}" v-show="showInfo">
            {{ diamondInfo }}
        </div>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      screen: {
        screenX: 0,
        screenY: 0,
      },
      diamonds: [],
      diamondInfo: "",
      firstLineNum: 42,
      lines: [],
      highlightedLine: null,
      chartsData: [],
      topToolNames: [],
      diamondsData: []
    };
  },
  computed: {
    showInfo() {
      return this.screen.screenY > 360 && this.screen.screenX < 700;
    },
  },
  created() {
    this.$store.watch(
      (state) => state.ldViewer.result, 
      (newData, oldData) => {
        this.chartsData = newData
        this.chartsData.map(item => {
          let infos = item.split(" ")
          if(!this.topToolNames.includes(infos[0])) {
            this.topToolNames.push(infos[0])
          }

          if(!this.topToolNames.includes(infos[1])) {
            this.topToolNames.push(infos[1])
          }
        })
        this.topToolNames = this.topToolNames.map((item,index) => ({
            'index': index,
            'name': item
        }))
        this.chartsData.map((item,index) => {
          let infos = item.split(" ")
          let firstCoord = 0
          let secondCoord = 0
          this.topToolNames.map(item => {
            if(infos[0]=== item.name) {
              firstCoord = item.index
            }
          })
          this.topToolNames.map(item => {
            if(infos[1]=== item.name) {
              secondCoord = item.index
            }
          })
          if(firstCoord>secondCoord) {
            let temp = firstCoord
            firstCoord = secondCoord
            secondCoord = temp
          }
          let absX = secondCoord - firstCoord
          let absY = firstCoord
          this.diamondsData.push({
            'index': index,
            'firstCoord': firstCoord,
            'secondCoord': secondCoord,
            'colorVal': infos[2],
            'firstName': this.topToolNames[firstCoord].name,
            'secondName': this.topToolNames[secondCoord].name,
            'absX': absX,
            'absY': absY
          })
        })
        console.log("56666666666",this.diamondsData)
        function findN(x) {
          let n = Math.floor(Math.sqrt(2 * x + 0.25) - 0.5); // 向下取整
          return n;
        }

        this.firstLineNum = findN(newData.length);
        if (newData.length === 0) this.firstLineNum = 42;
        this.redraw();
      }
    );
  },
  mounted() {
    this.initCanvas();
    this.initNames();
  },
  methods: {
    redraw() {
      // 清空现有数据
      this.diamonds = [];
      this.lines = [];

      // 重新绘制
      this.initCanvas();
      this.initNames();
    },
    initColor() {
      const deep1 = "#000";
      const deep2 = "#262626";
      const deep3 = "#565656";
      const deep4 = "#CECECE";
      const deep5 = "#FFFFFF";
      let firstLineNum = this.topToolNames.length
      let colorArr = new Array();
      for (let i = 0; i < firstLineNum; i++) {
        colorArr[i] = new Array(i);
        for (let j = 0; j < firstLineNum - i; j++) {
          colorArr[i][j] = "#A5A5A5";
        }
      }
      return colorArr;
    },
    initCanvas() {
      let canvas = document.querySelector("#geneCanvas");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      let beginX = 10;
      let beginY = 10;
      let halfWidth = 6;
      let firstLineNum = this.topToolNames.length
      let chartsData = this.chartsData
      console.log("%%%%%%", chartsData)
      const colorArr = this.initColor();
      for (let i = 0; i < firstLineNum; i++) {
        // 21列
        for (let j = 0; j < firstLineNum - i; j++) {
          // 每行的格子数
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = colorArr[i][j];
          ctx.beginPath();
          ctx.moveTo(beginX, beginY);
          beginX += halfWidth;
          beginY -= halfWidth;
          ctx.lineTo(beginX, beginY);
          beginX += halfWidth;
          beginY += halfWidth;
          ctx.lineTo(beginX, beginY);
          beginX -= halfWidth;
          beginY += halfWidth;
          ctx.lineTo(beginX, beginY);
          ctx.closePath();
          ctx.stroke();
          this.diamonds.push({
            x: beginX - halfWidth,
            y: beginY - halfWidth,
            width: halfWidth * 2,
            height: halfWidth * 2,
            color: colorArr[i][j],
            nameX: i,
            nameY: j,
            borderColor: "#fff",
            firstInfo: '',
            secondInfo: ''
          });
          ctx.fill();
          // 初始化 beginX beginY
          beginX += halfWidth + 2.2;
          beginY -= halfWidth;
        }
        beginX = 10 + halfWidth * (i + 1) + 1 * i;
        beginY = 10 + halfWidth * (i + 1) + 1 * i;
      }
      this.diamonds.data.map(item1 => {
        
      })
      ctx.fill();
    },
    mouseInit(e) {
      this.screen.screenX = e.clientX - 360;
      this.screen.screenY = e.clientY + window.pageYOffset - 1030;
    },
    mousemoveCanvas(event) {
      let rect = this.$refs.geneCanvas.getBoundingClientRect();
      let x = event.clientX - rect.left + 5;
      let y = event.clientY - rect.top + 10;

      for (let i = 0; i < this.diamonds.length; i++) {
        let diamond = this.diamonds[i];

        if (
          x > diamond.x &&
          x < diamond.x + diamond.width &&
          y > diamond.y &&
          y < diamond.y + diamond.height
        ) {
          this.diamondInfo = `x: ${diamond.nameX}  y:${diamond.nameY} ${diamond.firstInfo}-${diamond.secondInfo}`;
          break;
        }
      }
    },

    initNames() {
      let canvas = document.querySelector("#geneNames");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;

      let topToolNames = this.topToolNames;

      let nameStart = 15;
      let nameWidth = 14.3;
      

      for (let i = 0; i < topToolNames.length; i++) {
        this.lines.push({
          x: nameStart + nameWidth * i,
          y: 280,
          width: 2,
          height: 120,
          column: i,
        });
      }

      this.drawLines(ctx);
    },
    mousemoveNames(event) {
      let rect = this.$refs.nameCanvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      let lineFound = null;

      for (let i = 0; i < this.lines.length; i++) {
        let line = this.lines[i];
        if (
          x > line.x - 5 &&
          x < line.x + line.width + 5 &&
          y > line.y &&
          y < line.y + line.height
        ) {
          lineFound = line;
          break;
        }
      }

      this.highlightedLine = lineFound;

      let ctx = this.$refs.nameCanvas.getContext("2d");
      ctx.clearRect(
        0,
        0,
        this.$refs.nameCanvas.width,
        this.$refs.nameCanvas.height
      );
      this.drawLines(ctx);
    },
    drawLines(ctx) {
      let topToolNames = this.topToolNames;
      for (let i = 0; i < topToolNames.length; i++) {
        let line = this.lines[i];

        ctx.strokeStyle = line === this.highlightedLine ? "red" : "#999";

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.height);
        ctx.closePath();
        ctx.stroke();

        ctx.save();
        ctx.translate(line.x, 0);
        ctx.transform(0, 1, -1, 0, 0, 0);

        ctx.fillStyle = line === this.highlightedLine ? "red" : "#000";
        ctx.font = "12px Arial";
        ctx.fillText(topToolNames[i].name, 0, 0);
        ctx.restore();
        ctx.fill();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.color-side-bar {
  img {
    position: absolute;
    left: -28px;
    top: 108px;
    width: 80px;
  }
}
.geneCanvas {
  cursor: url("~@/assets/images/cur.png"), auto;
}
.gene-info {
  min-width: 100px;
  // display: none;
  background-color: rgba(11, 3, 4, 0.5);
  padding: 10px;
  text-align: left;
  color: #ffffff;
  // position: absolute;
  font-family: arial;
  font-size: 16px;
  z-index: 4000;
  border-radius: 5px;
}
</style>