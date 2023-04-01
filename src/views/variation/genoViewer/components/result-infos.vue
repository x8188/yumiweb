<template>
    <div class="page">
      <div class="content_page">
          <div class="left">
              <div class="navigation_bar">
                  <h2>Catalog</h2>
                  <el-tabs tab-position="left" style="height: 220px;" @tab-click="handleClick">
                  <el-tab-pane v-for="title in titles" :key="title">
                      <span slot="label" class="fontClass">{{title}}</span>
                  </el-tab-pane>
              </el-tabs>
              </div>
          </div> 
          <div class="right">
              <div class="info_box">
                    <el-card class="box-card" v-for="(title) in titles" :key="title" :id="title">
                      <div slot="header" class="clearfix">
                          <h3>{{title}}</h3>
                      </div>
                      <el-table
                      :data="tableData"
                      style="width: 100%"
                      :show-header="false"
                      border>
                      <el-table-column                        
                          prop="date"
                          label="key"
                          width="250">
                      </el-table-column>
                      <!-- <el-table-column
                          prop="name"
                          label="姓名"
                          width="180">
                      </el-table-column> -->
                      <el-table-column
                          prop="address"
                          label="value">
                      </el-table-column>
                    </el-table>
                      </el-card>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'details',
      data() {
          return {
              name:'details',
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }],
            variantinfo:[
              {"Summary": {"Region": "chr1:1740-1741", "RefAllele": "C", "RefGenome": "B73", "VariantID": "ZMPV01aSNPC01P000001741", "AltAlleles": "T", "RefVersion": "v4.43", "VariantType": "SNP"}},
              {"PiePlots": {"Genotype Rate": {"ZA02aVAR000001": {"Geno": 0.8427, "Miss": 0.1573}}, "Allele Freqency": {"ZA02aVAR000001": {"ALT-T": 0.0016, "REF-C": 0.9984}}}},
              {"Information": null},
              {"Annotation": [{"Exon": null, "Gene": null, "Pick": "1", "Allele": "T", "Codons": null, "Impact": "MODIFIER", "Intron": null, "Strand": null, "Symbol": null, "BioType": null, "Feature": null, "Distance": null, "Amino_acids": null, "Consequence": "intergenic_variant", "CDS_position": null, "Feature_type": null, "cDNA_position": null, "Protein_position": null}]}
            ],
            titles:['Summary','Infomation','Annotation','Pupulation Diversity'],
            show_key:[],
            show_value:[]
          }
      },
      methods: {
          handleClick(tab){
              document.getElementById(this.titles[tab.index]).scrollIntoView({behavior:'smooth'})
          }
      },
      created() {
          
      },
  }
  </script>
  
  <style>
  .page{
      background-color: rgb(245,246,245);
      padding: 2% 5% 0 5%;
  }
  .content_page{
      display: flex;
      justify-content: space-between;
  }
  .left{
      width: 28%;
  }
  .right{
      width: 70%;
      background-color: white;
  }
  .navigation_bar{
      text-align: left;
      background-color:white;
      width: 100%;
      padding-top: 1%;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  .el-tabs{
      display: flex;  /* 序列横向撑满 */
      flex-direction: column;
      
  }
  .fontClass{
      display: flex; /* 让字体向左靠齐 */
      font-size: 17px;
  }
  h3{
      font-size: 30px;
      padding-left: 1%;
      border-left: 5px solid rgb(64,158,255);
  }
  h2{
      
      margin-left: 5%;
      padding-left: 2%;
      border-left: 5px solid rgb(64,158,255);
  }
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .box-card{
     margin-bottom: 3%;
     font-size: 20px;
  }
  </style>