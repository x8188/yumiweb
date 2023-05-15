<template>
 <div class="">
    <div id="ldCanvas" style="position: relative; top: 50px; left: 80px;height: 900px;" @mousemove="mouseInit">
        <canvas id="geneNames" width="620" height="500" style="position: absolute; top: 0px; left: 0px;"></canvas>
        <canvas class="geneCanvas" id="geneCanvas" width="620" height="600" style="position: absolute; top: 420px; left: 0px;"></canvas>
        <div class="color-side-bar" style="position: absolute;left: 0;top: 50%;">
            <img src="@/assets/images/color-sidebar.png" alt="">
        </div>
        <div class="gene-info" style="position: absolute;" :style="{left: screen.screenX+'px',top: screen.screenY+'px'}" v-show="showInfo">
            4523458234532
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
                screenY : 0
            }
        }
    },
    computed: {
        showInfo() {
            return this.screen.screenY > 450 && this.screen.screenX < 600
        }
    },
    mounted() {
        this.initCanvas()
        this.initNames()
    },
    methods: {
        initColor() {
            const deep1 = '#000'
            const deep2 = '#262626'
            const deep3 = '#565656'
            const deep4 = '#CECECE'
            const deep5 = '#FFFFFF'
            let firstLineNum = 42
            let colorArr = new Array()
            for(let i=0;i< firstLineNum; i++) {
                colorArr[i] = new Array(i)
                for(let j=0;j < firstLineNum-i;j++) {
                    colorArr[i][j] = '#A5A5A5'
                }
            }
            return colorArr
        },
        initCanvas() {
            let canvas = document.querySelector('#geneCanvas')
            let ctx = canvas.getContext('2d')
            ctx.lineWidth = 2
            let beginX = 10
            let beginY = 10
            let halfWidth = 6
            let firstLineNum = 42
            const colorArr = this.initColor()
            for(let i= 0; i < firstLineNum; i++) {
                // 21列
                for(let j=0; j < firstLineNum -i;j++) {
                    // 每行的格子数
                    ctx.strokeStyle = '#fff'
                    ctx.fillStyle = colorArr[i][j]
                    ctx.beginPath()
                    ctx.moveTo(beginX, beginY)
                    beginX += halfWidth
                    beginY -= halfWidth
                    ctx.lineTo(beginX, beginY)
                    beginX += halfWidth
                    beginY += halfWidth
                    ctx.lineTo(beginX, beginY)
                    beginX -= halfWidth
                    beginY += halfWidth
                    ctx.lineTo(beginX, beginY)
                    ctx.closePath()
                    ctx.stroke()
                    ctx.fill()
                    // 初始化 beginX beginY
                    beginX += halfWidth + 2.2
                    beginY -= halfWidth
                }
                beginX = 10 + halfWidth*(i+1) + 1*i 
                beginY = 10 + halfWidth*(i+1)  + 1*i
            }
            ctx.fill()
        },
        initNames(){
            let canvas = document.querySelector('#geneNames')
            let ctx = canvas.getContext('2d')
            ctx.lineWidth = 2
            let firstLineNum = 42

            let nameStart = 15
            let nameWidth = 14.3

            for(let i= 0; i < firstLineNum; i++) {
                // 每行的格子数
                ctx.strokeStyle = '#999'
                ctx.beginPath()
                ctx.moveTo(nameStart+nameWidth*i, 180)
                ctx.lineTo(nameStart+nameWidth*i, 400)
                ctx.closePath()
                ctx.stroke()

                // 添加旋转后的文字
                ctx.save(); // 保存当前绘图环境的状态
                ctx.translate(nameStart+nameWidth*i, 0); // 平移绘图环境，将旋转的中心点设置为文字的起始位置
                ctx.transform(0, 1, -1, 0, 0, 0); // 旋转-90度，字形变换
                ctx.font = '12px Arial';
                ctx.fillText('Hello', 0, 0); // 旋转后的位置为 (0, 0)
                ctx.restore(); // 恢复之前保存的绘图环境的状态

                ctx.fill()
            }
        },
        mouseInit(e) {
           this.screen.screenX = e.clientX - 360
           this.screen.screenY = e.clientY + window.pageYOffset - 1030
           console.log(this.screen);
        },
        
    }
}
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
    cursor: url('~@/assets/images/cur.png'), auto;
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