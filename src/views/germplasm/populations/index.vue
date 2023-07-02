<template>
  <div>
    <div class="app">
      <div class="top">
        <div class="top_left"></div>
        <span>Populations</span>
      </div>
      <div class="container" v-for="item in populations" :key="item.name">
        <div class="box">
          <a @click="handle(item.name)">
            <div class="box_left">
              <img src="@/assets/images/population.jpg" style="height: 180px;width: 90%">
            </div>
            <div class="box_right">
              <div>
                <el-link type="success" :underline="false" class="box_right_a" @click="handle(item.name)">{{item.name}}</el-link>
              </div>
              <div>
                <p>
                  <span class="box_right_title">Alias: </span>
                  <span class="box_right_content">{{item.alias}}</span>
                </p>
                <p>
                  <span class="box_right_title">Description: </span>
                  <span class="box_right_content"> Collection of more than 500 inbreds for association mapping pannel {AMP} with different populations including non-stiff-stock {NSS};Stiff-stock(SS);Tropical and Semi-tropical(TST).</span>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {listPopulation} from "@/api/germplasm/populations";
import {details} from "@/api/germplasm/details/details";

export default {
  name: "populations",
  data (){
    return {
      populations: [

      ],
    }
  },
  created() {
    this.getPopulations()
  },
  methods:{
    getPopulations(){
      listPopulation().then(res =>{
        this.populations = res.rows
      })
    },
    handle(name){
        this.$router.push({path:'/web/germplasm/germplasm/details',query:{name}});
        details(name).then(res =>{
          console.log(res)
        });
    }
  }
}
</script>

<style scoped>
.app{
  background: #f2f2f2;
  color: #222222;
  margin: 0 auto;
  border-radius: 5px;
  padding: 20px 60px;
}
.top{
  background: #fff;
  height: 50px;
  font-size: 20px;
  font-family: 微软雅黑;
  padding: 15px 30px;
  overflow: hidden;
  font-weight: bold;
}
.top_left{
  background: #13ce66;
  width: 3px;
  height: 27px;
  float: left;
  margin: 0 10px;
}
.box{
  background: #fff;
  margin: 0 auto;
  border-bottom: #ebebeb solid 1px;
  overflow: hidden;
  padding: 10px;
}
.box_left{
  float: left;
  width: 25%;
  height: 200px;
  padding: 0 20px;
}
.box_right{
  float: left;
  width: 75%;
  padding-top: 10px;
}
.box_right_a{
  font-size: 15px;
}
.box_right_title{
  font-size: 14px;
  font-family: 微软雅黑;
  font-weight: bold;
}
.box_right_content{
  font-size: 14px;
}
.box_right p{
  margin: 8px 0;
}
</style>
