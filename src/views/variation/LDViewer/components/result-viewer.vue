<template>
  <ZeamapCard>
    <template v-slot:header>
      <Title>Result</Title>
    </template>
    <div class="" style="min-width: 1100px">
    <div id="ldCanvas" style="position: relative; top: 50px; left: 80px;height: 900px;" @mousemove="mouseInit">
        <canvas ref='nameCanvas' @mousemove="mousemoveNames" id="geneNames" width="1000"  height="500" style="position: absolute; top: 0px; left: 0px;"></canvas>
        <canvas @mousemove="mousemoveGeneCanvas"  ref="geneCanvas" class="geneCanvas" id="geneCanvas" width="620" height="600" style="position: absolute; top: 420px; left: 0px;" ></canvas>
        <div class="color-side-bar" style="position: absolute;left: 0;top: 50%;">
            <img src="@/assets/images/color-sidebar.png" alt="">
        </div>
        <div class="gene-info" style="position: absolute;" :style="{left: screen.screenX+ 25 +'px',top: screen.screenY+'px'}" v-show="showInfo">
            {{ diamondInfo }}
        </div>
    </div>
 </div>
  </ZeamapCard>
</template>

<script>
export default {
  props: {
    formInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      screen: {
        screenX: 0,
        screenY: 0,
      },
      diamonds: [],
      diamondInfo: "",
      firstLineNum: 42,
      nameLines: [],
      highlightedLine: null,
      chartsData: [],
      strokeBorderColor: []
    };
  },
  computed: {
    showInfo() {
      return this.screen.screenY > 360 && this.screen.screenX < 700;
    },
  },
  created() {
    this.initstrokeBorderColor('#fff')
  },
  mounted() {
    this.demo()
    this.initGeneCanvas();
    this.initNames();
  },
  methods: {
    demo() {
      console.log('#########', this.formInfo)
    },
    // 初始化基因图的每个小菱形的颜色
    initColor() {
      const deep0= "#F7F7F";
      const deep1= "#DCDCDC";
      const deep2= "#C0C0C0";
      const deep3= "#A5A5A5";
      const deep4= "#898989";
      const deep5= "#6E6E6E";
      const deep7= "#373737";
      const deep8= "#1B1B1B";
      const deep9 = "#000000";
      const deep_none = '#fff'
      let firstLineNum = this.firstLineNum;
      let colorArr = new Array();
      for (let i = 0; i < firstLineNum; i++) {
        colorArr[i] = new Array(i);
        for (let j = 0; j < firstLineNum - i; j++) {
          colorArr[i][j] = deep4;
        }
      }
      return colorArr;
    },
    // 初始化每一个小菱形的边框颜色
    initstrokeBorderColor(color) {
      let firstLineNum = this.firstLineNum;
      let colorArr = new Array();
      for (let i = 0; i < firstLineNum; i++) {
        colorArr[i] = new Array(i);
        for (let j = 0; j < firstLineNum - i; j++) {
          colorArr[i][j] = color ;
        }
      }
      this.strokeBorderColor = colorArr;
    },
    // 初始化基因图的每一个小菱形
    initGeneCanvas() {
      let canvas = document.querySelector("#geneCanvas");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      let beginX = 10;
      let beginY = 10;
      let halfWidth = 6;
      let firstLineNum = this.firstLineNum;
      const colorArr = this.initColor();
      const strokeBorderColor = this.strokeBorderColor;
      for (let i = 0; i < firstLineNum; i++) {
        // 21列
        for (let j = 0; j < firstLineNum - i; j++) {
          // 每行的格子数
          ctx.strokeStyle = strokeBorderColor[i][j]; // 边框的颜色
          ctx.fillStyle = colorArr[i][j]; // 里面每一个小菱形的颜色

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
            absX: i, 
            absY: j,
            xPosition: beginX - halfWidth, // 这个小菱形的x开始的位置
            yPosition: beginY - halfWidth, // 这个小菱形的y开始的位置
            width: halfWidth * 2, // 小菱形的宽
            height: halfWidth * 2, // 小菱形的高
            color: colorArr[i][j], // 小菱形的颜色
            strokeBorderColor: strokeBorderColor[i][j], // 小菱形填充的边框的颜色
            name1: '', // 第一个基因名字
            name2: '' // 第二个基因名字
          });

          ctx.fill();
          // 初始化 beginX beginY
          beginX += halfWidth + 2.2;
          beginY -= halfWidth;
        }
        beginX = 10 + halfWidth * (i + 1) + 1 * i;
        beginY = 10 + halfWidth * (i + 1) + 1 * i;
      }
      ctx.fill();
    },
    // 初始化名字
    initNames() {
      let canvas = document.querySelector("#geneNames");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;

      let firstLineNum = this.firstLineNum;

      let nameStart = 15;
      let nameWidth = 14.3;
      

      for (let i = 0; i < firstLineNum; i++) {
        this.nameLines.push({
          xPosition: nameStart + nameWidth * i,
          yPosition: 180,
          width: 2,
          height: 220,
          column: i,
          name: 'HELLLLO',
          isHighlightLine: false
        });
      }

      this.drawLines(ctx);
    },
    // 画名字的和线的函数，但是感觉好像还能解一下耦
    drawLines(ctx) {
      for (let i = 0; i < this.nameLines.length; i++) {
        let line = this.nameLines[i];

        ctx.strokeStyle = line === this.highlightedLine ? "red" : "#999";

        ctx.beginPath();
        ctx.moveTo(line.xPosition, line.yPosition);
        ctx.lineTo(line.xPosition, line.yPosition + line.height);
        ctx.closePath();
        ctx.stroke();

        ctx.save();
        ctx.translate(line.xPosition, 0);
        ctx.transform(0, 1, -1, 0, 0, 0);

        ctx.fillStyle = line === this.highlightedLine ? "red" : "#000";
        ctx.font = "12px Arial";
        ctx.fillText(line.name, 0, 0);
        ctx.restore();
        ctx.fill();
      }
    },
    // 鼠标移动到基因图来更换tooltips的内容
    mousemoveGeneCanvas(event) {
      let rect = this.$refs.geneCanvas.getBoundingClientRect();
      let x = event.clientX - rect.left + 5;
      let y = event.clientY - rect.top + 10;

      for (let i = 0; i < this.diamonds.length; i++) {
        let diamond = this.diamonds[i];

        if (
          x > diamond.xPosition &&
          x < diamond.xPosition + diamond.width &&
          y > diamond.yPosition &&
          y < diamond.yPosition + diamond.height
        ) {
          this.diamondInfo = `x: ${diamond.absX} y: ${diamond.absY}`;
          break;
        }
      }
    },
    // 鼠标移动到名字上的交互
    mousemoveNames(event) {
      let rect = this.$refs.nameCanvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      let lineFound = null;

      for (let i = 0; i < this.nameLines.length; i++) {
        let line = this.nameLines[i];
        if (
          x >= line.xPosition - 5 &&
          x <= line.xPosition + line.width + 5 &&
          y > line.yPosition &&
          y < line.yPosition + line.height
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
      this.initstrokeBorderColor('#fff')
      this.initGeneCanvas()
    },
    // 监听鼠标进入了基因图，需要把鼠标样式转换成菱形的图案
    mouseInit(e) {
    this.screen.screenX = e.clientX - 360;
    this.screen.screenY = e.clientY + window.pageYOffset - 1030;
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