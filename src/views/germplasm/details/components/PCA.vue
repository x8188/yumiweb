<template>
  <div class="pca_content">
    <Title>PCA</Title>
    <p>IIIustration of population structures based on Principal component analysis(PCA), chose the proper principal components(PCa)for X and Y axes to load a scatter plot. Each point represents an individual in the population, which is colored according to priori-knowledge-based classification. See Tutorial for more details.</p>
    <div>
      <el-row :gutter="15">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
          <el-col :span="6">
            <el-form-item label="PCA" prop="field101">
              <el-select v-model="formData.field101" :style="{width: '100%'}">
                <el-option v-for="(item, index) in field101Options" :key="index" :label="item.label"
                           :value="item.value" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="1px" label="" prop="field102">
              <el-select v-model="formData.field102" :style="{width: '60%'}">
                <el-option v-for="(item, index) in field102Options" :key="index" :label="item.label"
                           :value="item.value" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </div>
    <div id="main" class="point" style="width: 100%;height: 450px"></div>
  </div>
</template>

<script>
import Title from "@/components/CommonComponents/Title";
import * as echarts from 'echarts';
import {listPCA} from "@/api/germplasm/details/pca";

export default {
  name: "PCA",
  components: {
    Title,
  },
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
        "value": 1
      }, {
        "label": "PC2",
        "value": 2
      }, {
        "label": "PC3",
        "value": 3
      }],
      field102Options: [{
        "label": "PC1",
        "value": 1
      }, {
        "label": "PC2",
        "value": 2
      }, {
        "label": "PC3",
        "value": 3
      }],
      pcalist:[

      ],
    }
  },
  mounted() {
   this.getMyCharts();
  },
  created() {
    this.getPCA()
  },
  methods: {
    getPCA() {
      listPCA().then(res=>{
        this.pcalist=res.data;
        console.log(res.data)
      })
    },
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    getMyCharts(){
      let myChart = echarts.init(document.getElementById('main'));
      // 指定图表的配置项和数据
      let option = {
        /*dataset: {
          source: [
            ['sample','PC1','PC2','PC3','POP'],
            ['CIMBL32',-0.057,-0.0153,-0.153,'TST'],
            ['CIMBL89',-0.0421,-0.0041,-0.0468,'TST'],
            ['CIMBL7',-0.0526,-0.0031,-0.0475,'TST'],
            ['CIMBL45X',0.014,-0.0183,0.015,'Mixed'],
            ['ZHENG58',0.0523,-0.0193,0.0046,'NSS'],
            ['CML415',-0.0326,0.0063,0.0018, 'TST'],
            ['CIMBL46',-0.0529,0.0071,0.005,'TST'],
            ['CIMBL70',-0.0639,0.0038,0.0468,'TST'],
            ['CIMBL124',-0.066,0.0081,0.0708,'TST'],
            ['CIMBL68',-0.0601,0.0025,0.0313,'TST'],
            ['CIMBL77',-0.0383,-0.0098,-0.0688,'TST'],
            ['CML324',-0.0164,0.0111,0.0354, 'TST']
          ]
        },*/
        xAxis: {
        },
        yAxis: {
        },
        tooltip: {// 提示框组件。// trigger:'item' 默认的鼠标移动到色块上触发
          trigger: 'item',
          formatter:function (args) {
            let message = 'Pop info:'+args.data[4]+'-DSB';
            return message
          }
        },
        series: [
          {
            symbolSize: 10,
            encode: {
              x: function (formdata){
                if(formdata.field101==1){return 'PC1'}
                else if(formdata.field101==2){return 'PC2'}
                else {return 'PC3'}
              },
              y: function (formdata){
              if(formdata.field102==1){return 'PC1'}
              else if(formdata.field102==2){return 'PC2'}
              else {return 'PC3'}
              },
            },
            type: 'scatter',
            itemStyle: {
              color: function (arg) {
                let itemPOP = arg.data[4];
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




