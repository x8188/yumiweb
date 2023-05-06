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
                      :data="AnnotationInfo"
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
            Genomicsinfo:[],
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
            this.editMsg();
          },
          editMsg(){
            let obj = {...this.Genomicsinfo}
            console.log(obj)
            delete obj.functionAnnotations
            console.log(obj)
            for(let i=0;i<7;i++){
              let item = Object.keys(obj)[i]
              let oo = {}
              oo.key = item
              oo.value = obj[item]
              this.SummaryInfo.push(oo)
              console.log(this.SummaryInfo)
            }
            let fucAnn = this.Genomicsinfo['functionAnnotations']
            console.log(fucAnn)
            this.AnnotationInfo = fucAnn
            console.log(this.AnnotationInfo)
          }
      },
      created() {
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