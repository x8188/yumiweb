<template>
  <div class="body">
    <Title>Population Structure</Title>
    <p>IIIustration of population structure based on the estimation of ancestral populations.Chose a proper number of ancestral populations(K) to load a stack histogram for the population.The X-axis represents individuals in the population,with stack bars colored according to the composition of each ancestral populations.See Tutorial for more details.</p>
    <div id="master" style="height: 450px;width: 100%"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "populationStructure",
  components: {},
  props: [],
  mounted() {
    this.getPillar();
  },
  methods: {
    getPillar() {
      let Pillar = echarts.init(document.getElementById('master'));
      let pillarData = [
       /* ['Group','Sample','K1','K2','K3'],
        ['TST','D047',0.6289,0,0.3711],
        ['TST','DSB',0.6436,0,0.3564],
        ['TST','CML171',0.9911,0,0.0089],
        ['TST','CML172',0.986,0,0.014],
        ['TST','D047',0.6289,0,0.3711],
        ['TST','DSB',0.6436,0,0.3564],
        ['TST','CML171',0.9911,0,0.0089],
        ['TST','CML172',0.986,0,0.014],
        ['TST','D047',0.6289,0,0.3711],
        ['TST','DSB',0.6436,0,0.3564],
        ['TST','CML171',0.9911,0,0.0089],
        ['TST','CML172',0.986,0,0.014]*/
      ];
      let bbb = function (arg){

      };
      let ccc = pillarData[2];
      let ddd = pillarData[3];
      let eee = pillarData[4];

        // 指定图表的配置项和数据
        let option2 = {
          color: ['rgb(143,29,19)', 'rgb(4,87,117)', 'rgb(217,18,160)'],
          /*dataset: {
          source: [
            ['Group','Sample','K1','K2','K3'],
            ['TST','D047',0.6289,0,0.3711],
            ['TST','DSB',0.6436,0,0.3564],
            ['TST','CML171',0.9911,0,0.0089],
            ['TST','CML172',0.986,0,0.014],
            ['TST','D047',0.6289,0,0.3711],
            ['TST','DSB',0.6436,0,0.3564],
            ['TST','CML171',0.9911,0,0.0089],
            ['TST','CML172',0.986,0,0.014],
            ['TST','D047',0.6289,0,0.3711],
            ['TST','DSB',0.6436,0,0.3564],
            ['TST','CML171',0.9911,0,0.0089],
            ['TST','CML172',0.986,0,0.014]
          ]
        },*/
          xAxis: {
            type: 'category',
            data: bbb
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'K1',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: ccc
            },
            {
              name: 'K2',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: ddd
            },
            {
              name: 'K3',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: eee
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


