<template>
  <div>
    <div class="app">
      <el-card class="content">
      <div class="top">
        <Title>{{$t('Populations')}}</Title>
      </div>
      <div class="container" v-for="item in populations" :key="item.name">
        <div class="box">
            <div class="box_left"  @click="handle(item.name)">
              <!-- <el-image :src="`http://43.143.200.52:10385/${item.image}`" style="height: 180px;width: 90%"></el-image> -->
              <img class="hvr-grow-shadow" :src="`http://43.143.200.52:10385/image/${item.image}`" style="height: 180px;width: 90%;  border-radius: 15%;">
            </div>
            <div class="box_right">
              <span class="box_right_Detail">{{item.name}}</span>
              <div>
                <el-link type="primary" :underline="false" class="box_right_a" @click="handle(item.name)">{{item.name}}</el-link>
              </div>
              <div>
                <p>
                  <span class="box_right_title">{{$t('Alias')}}: </span>
                  <span class="box_right_content">{{item.alias}}</span>
                </p>
                <p>
                  <span class="box_right_title">{{$t('Description')}}: </span>
                  <span class="box_right_content"> Collection of more than 500 inbreds for association mapping pannel {AMP} with different populations including non-stiff-stock {NSS};Stiff-stock(SS);Tropical and Semi-tropical(TST).</span>
                </p>
              </div>
            </div>
        </div>
      </div>
      </el-card>

    </div>
  </div>
</template>

<script>
import {listPopulation} from "@/api/germplasm/populations";
import {details} from "@/api/germplasm/details/details";

export default {
  name: "populations",
  components: {},

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
        this.$router.push({path:'/germplasm/germplasm/details',query:{name}});
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
  /* margin: 0 auto; */
  border-radius: 5px;
  height: 100%;
  /* padding: 20px 60px; */

}
.content{
  width: 90%;
  /* min-width: 900px; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top:30px
}
.top{
  background: #fff;
  height: 90px;
  padding: 15px 30px;
  overflow: hidden;
  font-weight: bold;

}
.box{
  background: #fff;
  margin: 0 auto;
  border-bottom: #ebebeb solid 1px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  align-items: center;
}
.box_left{
  float: left;
  width: 25%;
  height: 200px;
  padding: 0 20px;

  cursor: pointer;
}
.box_right{
  float: left;
  width: 75%;

  /* padding-top: 12%; */
  background: linear-gradient(to left, #04afaf, #04afaf) left top no-repeat,
  linear-gradient(to bottom, #04afaf, #04afaf) left top no-repeat,
  linear-gradient(to left, #04afaf, #04afaf) right top no-repeat,
  linear-gradient(to bottom, #04afaf, #04afaf) right top no-repeat,
  linear-gradient(to left, #04afaf, #04afaf) left bottom no-repeat,
  linear-gradient(to bottom, #04afaf, #04afaf) left bottom no-repeat,
  linear-gradient(to left, #04afaf, #04afaf) right bottom no-repeat,
  linear-gradient(to left, #04afaf, #04afaf) right bottom no-repeat;
  background-size: 4px 20px, 20px 4px, 4px 20px, 20px 4px;
  border: 1px solid #037a7a;
  position: relative;

  padding:10px;
}

.box_right_Detail {
  display: inline-block;
  width: 25%;
  background:#037a7a;
  /* height: 30px; */
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 37%;
  padding: 4px 0px;
  color: #ffffff;
  border-radius: 0 0 10px 10px;

  text-align: center;
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

.hvr-grow-shadow {
  
	display: inline-block;
	vertical-align: middle;
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;
	-webkit-transition-property: box-shadow, transform;
	transition-property: box-shadow, transform;
  }
  .hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
	
	box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
  }
</style>
