<template>
  <div id="content4">
       <ul class="orderBox shopped">
            <li v-for="(ns,index) in this.ns" :key="index">
                <table>
                    <thead>
                      <tr>
                        <th>序号</th>
                        <th>菜品名称</th>
                        <th>价格/数量</th>
                        <th>状态</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(food,index2) in ns.foods" :key="index2">
                            <td>{{index2+1}}</td>
                            <td>
                              <img :src="getImgUrl(food.n)" alt="">
                              <span>{{food.ve}}</span>
                            </td>
                            <td>￥{{food.price}} × {{food.num}}</td>
                            <td>待上菜</td>
                        </tr>
                    </tbody>
                </table>
                <div class="foot">
                    <div>
                        <span>桌号：<strong>{{ns.n}}</strong>号桌</span>
                        <span>人数; {{ns.people}}</span>
                        <span>订单号：{{ns.id}}</span>
                        <span>下单时间: {{ns.time}}</span>
                    </div>
                    <div>
                        <span>总消费： ￥<strong>{{ns.totel}}</strong></span>
                    </div>
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
    export default {
        name:'Shopped',
        data(){
          return{
            ns:[],
            time:''
          }
        },
        methods:{
          getImgUrl(img){
            return require("../../public/images/" + img);
          }
        },
        beforeCreate(){
          // this.$bus.$on('or',(ns,i)=>{
          //   this.ns.push(ns)
          // })
          this.$axios.get('http://localhost:8081/gl/server').then(
            response=>{
              this.ns = response.data.ordered
              console.log(this.ns)
            }
          )
          
        }
    }
</script>

<style scoped>
  #content4{
    position: fixed;
    top: 80px;
    right: 20px;
    bottom: 20px;
    left: 250px;
    background: rgba(255,255,255,.2);
    box-sizing: border-box;
    padding: 10px;
    overflow-y: auto;
   }
   button{
    background: none;
    border:none;
   }
   ul{
    list-style: none;
   }
   .orderBox{
    width: 95%;
    margin: 0 auto;
    padding-top: 20px;

   }
   .orderBox li{
    background: rgba(255, 255, 255, .1);
    box-shadow: 0 3px 3px rgba(0, 0, 0, .2);
    margin-bottom: 40px;
    padding: 20px;
   }
   .orderBox img{
    width: 80px;
    height: 80px;
   }
   .orderBox table{
    width: 100%;
    border-collapse: collapse;
   }
   .orderBox tr{
    border-bottom:1px solid rgba(255, 255, 255, .5)
   }
   .orderBox td{
        padding:10px 0;
        text-align: center;
        color:#fff;
   }
   .orderBox td:nth-child(1){
    width: 5%;
   }
   .orderBox td:nth-child(6){
    width: 100px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 auto;
    line-height: 100px;
   }
   .orderBox button{
    /* width: 30px;
    height: 30px; */
    color:#fff;
    border:1px solid rgba(255, 255, 255, .5);
    padding:0;
    vertical-align: middle
   }
   .orderBox button span{
    font-size: 12px;
   }
   .orderBox button.select span{
    font-size: 20px;
   }
   .orderBox .num{
    width: 60px;
    height: 18px;
    display: inline-block;
    line-height: 18px;
    box-sizing: border-box;
    border-top: 1px solid rgba(255, 255, 255, .5);
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    font-size: 12px;
    vertical-align: middle;
   }
   .orderBox td:nth-child(4){
    font-size: 0;
   }
   .orderBox .foot{
    display: flex;
    justify-content: space-between;
    padding: 15px 10px 0 10px;
    color: #fff;
   }
   .orderBox .foot span{
    margin-right: 40px;
   }
   .orderBox .foot strong{
    color: #ffcb4e;
    font-size: 20px;
   }
   .orderBox .foot .addDishes{
    width: 50px;
    height: 25px;
    background: #a65335;
    border-radius: 5px;
    border: none;
   }
   .orderBox .pay{
    width: 80px;
    height: 35px;
    background: #ff8400;
    font-size: 18px;
    border: none;
    border-radius: 5px;
   }
   .shopped li{
    padding: 0;
   }
   .shopped th{
    height: 60px;
    background: rgba(255, 255, 255, .25);
    color:#fff;
    text-align: center;
    font-weight: none;
   }
   .shopped td:nth-child(2){
    width: 30%;
    text-align: left;
    padding-left:60px
   }
   .shopped img{
    margin-right: 10px;
    vertical-align: middle;
   }
   .shopped td:nth-child(4){
    font-size: 16px;
   }
   .shopped .foot{
    padding: 15px 20px;
   }
</style>