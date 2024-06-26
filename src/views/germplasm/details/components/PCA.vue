<template>
  <div class="pca_content">
    <Title>PCA</Title>
    <p class="populationDetailP">{{$t('PCADe')}}</p>
    <div>
      <el-row :gutter="15">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="80px">
            <el-form-item label="PCA" prop="field101" style="float: left;width: 200px">
              <el-select v-model="formData.field101"  @change="pcaChange(formData)">
                <el-option v-for="(item, index) in field101Options" :key="index" :label="item.label"
                           :value="item.value" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label-width="1px" label="" prop="field102" style="float: left;width: 120px;margin-left:5px">
              <el-select v-model="formData.field102" @change="pcaChange(formData)">
                <el-option v-for="(item, index) in field102Options" :key="index" :label="item.label"
                           :value="item.value" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
        </el-form>
      </el-row>
    </div>
    <div id="main" class="point" style="width: 100%;height: 450px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {listPCA} from "@/api/germplasm/details/pca";

export default {
  name: "PCA",
  inheritAttrs: false,
  data() {
    return {
      formData: {
        field101: 1,
        field102: 2,
      },
      rules: {
        field101: [],
        field102: [],
      },
      field101Options: [{
        "label": "PC1",
        "value": 1 ,
        disabled: false ,
      }, {
        "label": "PC2",
        "value": 2 ,
        disabled: true,
      }, {
        "label": "PC3",
        "value": 3,
        disabled: false,
      }],
      field102Options: [{
        "label": "PC1",
        "value": 1 ,
        disabled: true
      }, {
        "label": "PC2",
        "value": 2,
        disabled: false
      }, {
        "label": "PC3",
        "value": 3,
        disabled: false
      }],
      pcalist:[],
    }
  },
  mounted() {
   //this.getMyCharts();
    this.getPCA()
  },
  created() {
    //this.getPCA()
  },
  methods: {
    pcaChange(data){
      if (data.field101==1&&data.field102==2){
        this.field101Options[0].disabled=false;
        this.field101Options[1].disabled=true;
        this.field101Options[2].disabled=false;
        this.field102Options[0].disabled=true;
        this.field102Options[1].disabled=false;
        this.field102Options[2].disabled=false;
      } else if(data.field101==1&&data.field102==3){
        this.field101Options[0].disabled=false;
        this.field101Options[1].disabled=false;
        this.field101Options[2].disabled=true;
        this.field102Options[0].disabled=true;
        this.field102Options[1].disabled=false;
        this.field102Options[2].disabled=false;
      } else if(data.field101==2&&data.field102==1){
        this.field101Options[0].disabled=true;
        this.field101Options[1].disabled=false;
        this.field101Options[2].disabled=true;
        this.field102Options[0].disabled=false;
        this.field102Options[1].disabled=true;
        this.field102Options[2].disabled=false;
      } else if(data.field101==2&&data.field102==3){
        this.field101Options[0].disabled=false;
        this.field101Options[1].disabled=false;
        this.field101Options[2].disabled=true;
        this.field102Options[0].disabled=false;
        this.field102Options[1].disabled=true;
        this.field102Options[2].disabled=false;
      } else if(data.field101==3&&data.field102==1){
        this.field101Options[0].disabled=true;
        this.field101Options[1].disabled=false;
        this.field101Options[2].disabled=false;
        this.field102Options[0].disabled=false;
        this.field102Options[1].disabled=false;
        this.field102Options[2].disabled=true;
      } else if(data.field101==3&&data.field102==2){
        this.field101Options[0].disabled=false;
        this.field101Options[1].disabled=true;
        this.field101Options[2].disabled=false;
        this.field102Options[0].disabled=false;
        this.field102Options[1].disabled=false;
        this.field102Options[2].disabled=true;
      }
      this.getPCA();
    },
    getPCA() {
      listPCA().then(res=> {
        if (this.formData.field101 == 1 && this.formData.field102 == 2) {
          this.pcalist = res.rows.map(function (item) {
            return [
              item.pc1,
              item.pc2,
              item.sample,
              item.pop
            ]
          });
        } else if (this.formData.field101 == 1 && this.formData.field102 == 3) {
          this.pcalist = res.rows.map(function (item) {
            return [
              item.pc1,
              item.pc3,
              item.sample,
              item.pop
            ]
          });
        } else if (this.formData.field101 == 2 && this.formData.field102 == 1) {
          this.pcalist = res.rows.map(function (item) {
            return [
              item.pc2,
              item.pc1,
              item.sample,
              item.pop
            ]
          });
        } else if (this.formData.field101 == 2 && this.formData.field102 == 3) {
          this.pcalist = res.rows.map(function (item) {
            return [
              item.pc2,
              item.pc3,
              item.sample,
              item.pop
            ]
          });
        } else if (this.formData.field101 == 3 && this.formData.field102 == 2) {
          this.pcalist = res.rows.map(function (item) {
            return [
              item.pc3,
              item.pc2,
              item.sample,
              item.pop
            ]
          });
        } else {
          this.pcalist = res.rows.map(function (item) {
            return [
              item.pc3,
              item.pc1,
              item.sample,
              item.pop
            ]
          });
        }
        console.log(this.pcalist);
        res.rows=this.pcalist;
        this.getMyCharts(res.rows);
      })
    },
    getMyCharts (data){
      let myChart = echarts.init(document.getElementById('main'));
      console.log(data);
      // 指定图表的配置项和数据
      let option = {
        legend: {
          show: 'true',
        },
        xAxis: {
          type: "value",
          data: function (params){
            let x = params.data[0];
            return x;
          }
        },
        yAxis: {
          type: "value",
          data: function (params){
            let x = params.data[1];
            return x;
          }
        },
        tooltip: {// 提示框组件。// trigger:'item' 默认的鼠标移动到色块上触发
          trigger: 'item',
          formatter:function (args) {
            let message = 'Pop info:'+args.data[3] +'-DSB';
            return message
          }
        },
        series: [
          {
            symbolSize: 10,
            data: data,
            type: 'scatter',
            itemStyle: {
              color: function (arg) {
                let itemPOP = arg.data[3];
                if (itemPOP == 'TST') {
                  return '#e6a6e1'
                } else if (itemPOP == 'Mixed') {
                  return '#365475'
                } else {
                  return '#D48265'
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.pca_content {
  width: 100%
}
</style>




