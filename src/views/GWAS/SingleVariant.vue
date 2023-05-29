<template>
    <div class="container">
        <el-card class="box-card">
            <Title id="Summary">GWAS Single-Variant</Title>
            <div class="p">
                Browse all GWAS signals related to the given variant, scatters were colored by trait category. The whole
                genome position and detailed position of the given variant were indicated by the yellowand red vertical line
                in the chromesome track and the gene track, respectively.
            </div>
            <div class="search-input">
                <span>Search</span>
                <el-select v-model="value" multiple filterable allow-create default-first-option
                    placeholder="Please select VraiantID">
                    <el-option v-for="item in optionsData" :value="item">
                    </el-option>
                </el-select>
            </div>
        </el-card>
        <el-card class="echarts-box">
            <Title>Result</Title>
            <div id="scatter-plot">

            </div>
        </el-card>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            value: [],
            optionsData: [

            ],
            charts: ""
        }
    },
    created() {
        this.$nextTick(() => {
            this.draw()
        })
    },
    methods: {
        draw() {
            this.charts = echarts.init(document.getElementById("scatter-plot"))
            console.log(111)
            console.log(this.charts)
            this.charts.setOption({
                // title:"Variant:ZMPA1200999",
                xAxis: {
                    splitLine:{
                        show:false
                    }
                },
                yAxis: {
                    splitLine:{
                        show:false
                    }
                },
                gird:{
                    show:false
                },
                series: [
                    {
                        type: 'scatter',
                        data: ['12','12','12','12','12','12',]
                    }
                ]
            })
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    // background-color: #F5F5F5;
    padding: 10px;
}

.container {
    display: flex;
    // width: 1vw;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
}

.box-card {
    background-color: #fff;

    .p {
        font-size: 16px;
    }

    .search-input {
        width: 100%;
        background-color: #F1F7F7;
    }
}

.echarts-box {
    margin-top: 12px;
    #scatter-plot{
        height: 300px;
        // width: ;
    }
}
</style>