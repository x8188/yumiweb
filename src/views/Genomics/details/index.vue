<template>
    <div class="page">
      <div class="content_page">
          <div class="left">
              <div class="navigation_bar">
                  <h2>Catalog</h2>
                  <el-tabs tab-position="left" style="height: 220px;" @tab-click="handleClick">
                  <el-tab-pane v-for="(title,index) in titles" :key="index">
                      <span slot="label" class="fontClass">{{title}}</span>
                  </el-tab-pane>
              </el-tabs>
              </div>
          </div> 
          <div class="right">
              <div class="info_box">
                    <el-card class="box-card" >
                      <div slot="header" class="clearfix">
                          <h3>Summary</h3>
                      </div>
                      <el-table
                      style="width: 100%"
                      :show-header="false"
                      :data="SummaryInfo"
                      border >
                        <el-table-column
                        prop="key"
                        width="250px">
                        </el-table-column>
                        <el-table-column
                        prop="value"
                        >
                        </el-table-column>
                      </el-table>
                    </el-card>
                    <el-card class="box-card"  >
                      <div slot="header" class="clearfix">
                          <h3>Function Annotation</h3>
                      </div>
                      <el-table
                      style="width: 100%"
                      :data="Genomicsinfo"
                      border >
                        <el-table-column
                        label="ID"
                        prop="id"
                        width="180"
                        >
                        </el-table-column>
                        <el-table-column
                        label="Ontology"
                        prop="ontology"
                        >
                        </el-table-column>
                        
                        <el-table-column
                        label="Sequences"
                        prop="sequences"
                        >
                        </el-table-column>
                        <el-table-column
                        label="Term"
                        prop="term"
                        >
                        </el-table-column>
                      </el-table>
                    </el-card>
                    <!-- <el-card class="box-card" >
                      <div slot="header" class="clearfix">
                          <h3>1111</h3>
                      </div>
                      <el-table
                      style="width: 100%"
                      :show-header="false"
                      :data="Genomicsinfo"
                      border>
                        <el-table-column                        
                            width="250"
                            label="sb1"
                            >
                        </el-table-column>
                      
                        <el-table-column
                            label="sb2"
                            prop=""
                            >
                        </el-table-column>
                    </el-table>
                    </el-card>
                    <el-card class="box-card" >
                      <div slot="header" class="clearfix">
                          <h3>1111</h3>
                      </div>
                      <el-table
                      style="width: 100%"
                      :show-header="false"
                      border>
                      <el-table-column                        
                          width="250">
                      </el-table-column>
                     
                      <el-table-column
                          label="value">
                      </el-table-column>
                    </el-table>
                    </el-card>
                    <el-card class="box-card" >
                      <div slot="header" class="clearfix">
                          <h3>1111</h3>
                      </div>
                      <el-table
                      style="width: 100%"
                      :show-header="false"
                      border>
                      <el-table-column                        
                          width="250">
                      </el-table-column>
                     
                      <el-table-column
                          label="value">
                      </el-table-column>
                    </el-table>
                    </el-card> -->
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
// import { title } from 'process';

import { Scope } from 'quill';

  export default {
      name:'details',
      data() {
          return {
              name:'details',
            Genomicsinfo:[
              
            ],
            SummaryInfo:[],
            AnnotationInfo:[],
            RelationInfo:[],
            SeqInfo:[],
            titles:['Summary','Function annotation','Relationships','Sequences'],
            show_key:[],
            show_value:[],
            
          }
      },
      methods: {
          handleClick(tab){
              document.getElementById(this.titles[tab.index]).scrollIntoView({behavior:'smooth'})
          },
          handleAccpet(){
            console.log(this.$route.query.data);
            this.Genomicsinfo = this.$route.query.data;
            console.log(this.Genomicsinfo)
            // Object.keys(this.Genomicsinfo[0]).forEach(item=>{
            //   var x = item
            // })
            // console.log(Object.values(this.variantinfo[0]))
            // this.tableData = Object.values(this.variantinfo)
            // console.log(this.tableData)
            // console.log(JSON.parse(Object.values(this.variantinfo[0])))
            this.editMsg();
          },
          editMsg(){
            const SumInfo = this.Genomicsinfo[0];
            //处理Summary数据
            for(let i =0 ;i<6;i++){
              let item = Object.keys(SumInfo)[i]
              let obj = {

              }
              obj.key = item;
              obj.value=SumInfo[item]
            //   Reflect.deleteProperty(SumInfo,item)
              this.SummaryInfo.push(obj)
            }
            //处理Function Annotation数据
            this.AnnotationInfo = SumInfo
            // for(let i = 6;i<Object.keys(SumInfo).length;i++)
            // {
            //     let item = Object.keys(SumInfo)[i];
            //     let obj = {}
                
                 
            // }
            // Object.keys(SumInfo).forEach(item=>{
            //   console.log(item)
            //   let obj = {

            //   }
            //   obj.key = item;
            //   obj.value=SumInfo[item]
            //   this.SummaryInfo.push(obj)
            // })
            console.log(this.SummaryInfo)
            console.log(SumInfo)
            // for(var item in this.variantinfo){
            //     console.log(item)
            //     const obj = Object.values(item)
            //     const obj_keys = Object.keys(obj)
            //     console.log(obj_keys)
            // }
            // this.variantinfo.forEach(item => {
            //     console.log(item)
            //     const obj = Object.values(item)
            //     console.log(obj)
            //     const obj_keys = Object.keys(obj)
            //     console.log(obj_keys)
            // });

          }
      },
      created() {
        // handleAccpet();
      },
      mounted(){
        this.$nextTick(this.handleAccpet())
        
      }
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