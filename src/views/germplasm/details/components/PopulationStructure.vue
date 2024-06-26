<template>
  <div class="body">
    <Title>{{$t('PopulationStructure')}}</Title>
    <p class="populationDetailP">{{$t('PopulationStructureDe')}}</p>
    <div id="master" style="height: 450px;width: 100%"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {listStructure} from "@/api/germplasm/details/populationstructure";

export default {
  name: "populationStructure",
  props: [],
  data() {
    return{
      structureList:[],
      k1:[],
      k2:[],
      k3:[],
      group:[],
      sample:[],
    }
  },
  mounted() {
    this.getStructure()
  },
  methods: {
    getStructure() {
      listStructure().then(res=>{
        console.log(res.rows)
        /*this.k1=res.rows.map(function(item){
          return item.k1
        })
        this.k2=res.rows.map(function(item){
          return item.k1
        })
        this.k3=res.rows.map(function(item){
          return item.k3
        })
        this.sample=res.rows.map(function(item){
          return item.sample
        })
        this.group=res.rows.map(function(item){
          return item.group
        })*/
        this.structureList=res.rows.map(function(item){
          return [item.k1,item.k2,item.k3,item.group,item.sample]
        })
        res.rows=this.structureList;
        this.getPillar(res.rows)
      })
    },
    getPillar(data) {
      let Pillar = echarts.init(document.getElementById('master'));
        // 指定图表的配置项和数据
        let option2 = {
          legend: {
            show: 'true',

          },
          color: ['#f89985', '#d48265', '#365475'],
          tooltip: {// 提示框组件。
            trigger: 'axis',
            axisPointer: {
              show: 'true'
            }
          },
          xAxis: {
            type: 'category',
            data: data.map(item=>{
              return item[4]
            })
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'TST',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: data.map(item=>{
                return item[0]
              })
            },
            {
              name: 'SS',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: data.map(item=>{
                return item[1]
              })
            },
            {
              name: 'NSS',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: data.map(item=>{
                return item[2]
              })
            }
          ]
        };
        Pillar.setOption(option2);
      }
  }
}
</script>

<style scoped>
.body{
  width: 100%;
}
</style>


