<template>
  <div class="wrap">
    <router-view></router-view>
    <div class="subBar">
        <a href="#">
            <img src="../../public/images/order.jpeg" alt="">
        </a>
        <div class="message">
            <p>欢迎您:{{User}}</p>
            <p>空闲桌位:{{lis}}桌</p>
            <p>正在点餐:{{ordering}}桌</p>
            <p>正在用餐:{{eating}}桌</p>
            <p v-show="n==0">未选桌子</p>
            <p v-show="n!=0">当前桌子：{{n}}号桌</p>
        </div>
        <ul class="action">
            <li @click="order(1)" :class="{ac:change == 1}">
                <i>0</i>
                <span class="iconfont">&#xe60a;</span>
                已点
            </li>
            <li @click="order(2)" :class="{ac:change == 2}">
                <span class="iconfont">&#xe614;</span>
                座位
            </li>
            <li @click="order(3)" :class="{ac:change == 3}">
                <span class="iconfont">&#xe657;</span>
                后台
            </li>
            <li @click="order(4)" :class="{ac:change == 4}">
                <span class="iconfont">&#xe613;</span>
                退出
            </li>
        </ul>
    </div>
    <div class="navBar" v-show="nav1">
        <ul class="navWrap">
            <li @click="order2(1)" :class="{active:change2 == 1}">
                <span class="iconfont">&#xf08e;</span>
                <span>推荐</span>
                <div id="content" v-if="change2 == 1">
                    <ul class="foodList">
                        <li v-for="(re,index) in recommend" :key="index">
                            <img :src="getImgUrl(re.n)" alt="">  
                            <span class="iconfont recommend">&#xe63f;</span>
                            <div class="bar">
                                <h3>{{re.ve}}</h3>
                                <p>
                                    <span class="rmb">RMB</span>
                                    <span class="price">{{re.price}}/一份</span>
                                    <button @click="recom(index)"><span class="iconfont">&#xe622;</span></button>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li v-for="(c,index) in cla" :key="index" @click="order2(index+2)" :class="{active:change2 == index+2}">
                <span class="iconfont">{{String.fromCharCode(parseInt(c.icon,16))}}</span>
                <span>{{c.name}}</span>
                
                 <div id="content" v-if="change2==index+2" >
                    <ul class="foodList">
                        <li v-for="(food,index) in c.foods" :key="index">
                            <img :src="getImgUrl(food.n)" alt="">  
                            <div class="bar">
                                <h3>{{food.ve}}</h3>
                                <p>
                                    <span class="rmb">RMB</span>
                                    <span class="price">{{food.price}}/一份</span>
                                    <button @click="dialogVisible(index)"><span class="iconfont">&#xe622;</span></button>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <!-- <li @click="order2(2)" :class="{active:change2 == 2}">
                <span class="iconfont">&#xf08d;</span>
                <span>热菜</span>
            </li>
            <li @click="order2(3)" :class="{active:change2 == 3}">
                <span class="iconfont">&#xf08e;</span>
                <span>凉菜</span>
            </li> -->
        </ul>
        <div class="serach">
            <input type="text">
            <button>
                <span class="iconfont">&#xe60c;</span>
            </button>
            
        </div>
        
    </div>
     <div class="navBar" v-show="nav2">
        <ul class="navWrap">
            <li @click="order3(1)" :class="{active:change3 == 1}">
                <span class="iconfont">&#xe620;</span>
                <span>已点</span>
            </li>
            <li @click="order3(2)" :class="{active:change3 == 2}">
                <span class="iconfont">&#xe642;</span>
                <span>已下单</span>
            </li>
        </ul>
        
    </div>
    <!-- <Recommend v-show="recommend"></Recommend> -->
    <div id="content2" v-show="add">
        <div class="pop">
            <p>{{adds.ve}}</p>
            <div class="secend">
                <p>￥{{adds.price}}</p>
                <p>
                    <button @click="jian"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{num}}</span>
                    <button @click="jia"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu"></textarea>
            <div class="footer">
                    <button @click="cancel">取消</button>
                    <button @click="enter">确定</button>
            </div>
        </div>
    </div>
    

          <Table v-if="table"></Table>
          <Ordered v-if="ordered"></Ordered>
          <Shopped v-if="shopped"></Shopped>
  </div>
</template>

<script>
import Recommend from './Recommend.vue'
import Hot from './Hot.vue'
import Cold from './Cold.vue'
import Table from './Table.vue'
import Ordered from './Ordered.vue'
import Shopped from './Shopped.vue'
    export default {
        name:'Productor',
        data(){
            return{
                change:0,
                change2:1,
                change3:1,
                recommend:[],
                hot:false,
                cold:false,
                table:false,
                ordered:false,
                nav1:true,
                nav2:false,
                n: 0,
                cla:[],
                fooding:[],
                f:[],
                len:[],
                indexs:0,
                add:'',
                adds:{},
                num:1,
                foods:[],
                ns:[],
                t:false,
                a:false,
                b:false,
                shopped:false,
                totel:0,
                beizhu:'',
                m:false,
                lis:0,
                ordering:0,
                eating:0,
                isHot:true,
                v:true
                // cla:[
                //     {   
                //         name:'热菜',
                //         icon:'f08d;'
                //     },
                //     {
                //         name:'凉菜',
                //         icon:'f08e;'
                //     },
                //     {
                //         name:'荤菜',
                //         icon:'f08e;'
                //     }
                // ],
            }
        },
        components:{
            Recommend,
            Hot,
            Cold,
            Table,
            Ordered,
            Shopped
        },
        methods:{
            getImgUrl (img) {
                return require("../../public/images/" + img);
            },
            dialogVisible(i){
               
                this.add = true
                this.adds = this.cla[this.change2-2].foods[i]
                console.log(this.adds)
                 this.$axios.get('http://localhost:8081/gl/server').then(
                    response=>{
                        var ns = response.data.ns
                        console.log(this.n)
                        for(var j in ns){
                            if(ns[j].n == this.n){
                                for(var z in ns[j].foods){
                                    if(ns[j].foods[z].ve == this.cla[this.change2-2].foods[i].ve){
                                        this.num = ns[j].foods[z].num
                                        this.beizhu = ns[j].foods[z].beizhu
                                    }
                                }
                                
                            }
                        }
                    }
                )
                // console.log(i)
                // this.adds = this.cla[i].foods
            },
            recom(i){
                this.indexs = i
                this.add = true
                console.log(this.recommend[i])
                this.adds = this.recommend[i]
                this.$axios.get('http://localhost:8081/gl/server').then(
                    response=>{
                        var ns = response.data.ns
                        console.log(this.n)
                        for(var j in ns){
                            if(ns[j].n == this.n){
                                for(var z in ns[j].foods){
                                    if(ns[j].foods[z].ve == this.recommend[i].ve){
                                        this.num = ns[j].foods[z].num
                                        this.beizhu = ns[j].foods[z].beizhu
                                    }
                                }
                                
                            }
                        }
                    }
                )
            },
            cancel(){
                this.add = false
                this.adds = {}
                this.num = 1
            },
            enter(){
                this.t = true
                this.add = false
                var beizhu = this.beizhu
                var adds = this.adds
                var num = this.num
                console.log(num)
                // console.log(this.ns)
                this.$axios.get('http://localhost:8081/gl/server').then(
                    response=>{
                        this.ns = response.data.ns
                        var tables = response.data.Table
                        this.totel = 0
                            for(var i in this.ns){
                               
                                if(this.n == this.ns[i].n){
                                    
                                    console.log(tables[i])
                                    if(this.ns[i].foods.length == 0){
                                        if(tables[i].state != 'eating'){
                                            this.ns[i].foods.push({
                                                ve:adds.ve,
                                                price:adds.price,
                                                n:adds.n,
                                                num:num,
                                                beizhu:beizhu
                                            })
                                            
                                        }
                                    }else{
                                        for(var j in this.ns[i].foods){
                                            // console.log(this.recommend[this.indexs].ve)
                                            if(this.ns[i].foods[j].ve == adds.ve){
                                                if(tables[i].state != 'eating'){
                                                    this.v = false
                                                }
                                            }
                                            
                                        }
                                        if(this.v){
                                            this.ns[i].foods.push({
                                                ve:adds.ve,
                                                price:adds.price,
                                                n:adds.n,
                                                num:num,
                                                beizhu:beizhu
                                            })
                                        }
                                        this.v = true
                                    }
                                    for(var j in this.ns[i].foods){
                                    console.log(this.ns[i].foods[j],'+',adds)
                                    if(this.ns[i].foods[j].ve == adds.ve){
                                        this.ns[i].foods[j].num = num
                                        this.ns[i].foods[j].beihu = beizhu
                                    }
                                }
                                    // this.a = false
                                    // this.b = false
                                    console.log(this.ns)
                                }
                                
                            }
                        // if(this.b){
                        //     for(var i in this.ns){
                        //         // console.log(this.ns[i].n)
                        //         if(this.n == this.ns[i].n){
                        //              if(this.ns[i].foods.length == 0){
                        //                 this.ns[i].foods.push({
                        //                     ve:this.recommend[this.indexs].ve,
                        //                     price:this.recommend[this.indexs].price,
                        //                     n:this.recommend[this.indexs].n,
                        //                     num:num,
                        //                     beizhu:this.beizhu
                        //                 })

                        //             }else{
                        //                 for(var j in this.ns[i].foods){
                        //                     if(this.ns[i].foods[j].ve != adds.ve){
                        //                         this.ns[i].foods.push({
                        //                             ve:this.recommend[this.indexs].ve,
                        //                             price:this.recommend[this.indexs].price,
                        //                             n:this.recommend[this.indexs].n,
                        //                             num:num,
                        //                             beizhu:this.beizhu
                        //                         })
                        //                     }
                        //                 }
                        //             }
                        //             // this.ns[i].foods.push({
                        //             //     ve:this.recommend[this.indexs].ve,
                        //             //     price:this.recommend[this.indexs].price,
                        //             //     n:this.recommend[this.indexs].n,
                        //             //     num:num,
                        //             //     beizhu:this.beizhu
                        //             // })
                        //             this.b = false
                        //         }
                                
                        //     }
                        // }
                        console.log(num)
                        for(var i in this.ns){
                            // console.log(this.ns[i])
                            for(var j in this.ns[i].foods){
                                this.totel = this.totel + this.ns[i].foods[j].price*this.ns[i].foods[j].num
                            }
                            this.ns[i]['totel'] = this.totel
                            this.totel = 0
                        }
                        const xhr = new XMLHttpRequest()
                        xhr.open('post','http://localhost:8081/gl/server3')
                        xhr.setRequestHeader('content-type', 'application/json')
                        xhr.send(JSON.stringify(this.ns))
                    }
                )
                // const xhr = new XMLHttpRequest()
                // xhr.open('post','http://localhost:8081/gl/server3')
                // xhr.setRequestHeader('content-type', 'application/json')
                // xhr.send(JSON.stringify(this.ns))
                console.log(this.ns)
                // this.foods.push({
                //     id:this.ns
                // })
                
                // console.log(this.foods)
                this.adds = {}
                this.num = 1
                this.beizhu = ''
            },
            jia(){
                this.num++;
            },
            jian(){
                this.num--;
                if(this.num<=1){
                    this.num=1
                }
            },
            order(i){
                this.change = i
                if(this.change==1){
                    this.change2 = 0
                    this.change3 = 1
                    this.table = false
                    this.nav1 = false
                    this.nav2 = true
                    this.ordered = true
                    if(this.shopped){
                        this.ordered = false
                    }
                    if(this.ordered){
                        this.shopped = false
                    }
                }
                if(this.change==2){
                    this.change2 = 0
                    this.table = true
                    this.nav1 = false
                    this.nav2 = false
                    this.ordered = false
                    this.shopped = false
                }
                if(this.change==3){
                    this.$router.push({
                        name:'categoryManage'
                    })
                    // console.log(this.cla)
                    this.change2 = 0
                    this.table = false
                    this.nav1 = false
                    this.nav2 = false
                    this.ordered = false
                }
                if(this.change==4){
                    this.$router.push({
                        name:'Login'
                    })
                    this.change2 = 0
                    this.table = false
                    this.ordered = false
                    this.nav1 = true
                    this.nav2 = false
                }
            },
            order2(i){
                this.change2 = i
                if(this.change2==1){
                    this.table = false
                }
                if(this.change2==2){
                    this.table = false
                }
                if(this.change2==3){
                    this.table = false
                }
            },
            order3(i){
                this.change3 = i
                if(this.change3 == 1){
                    this.ordered = true
                    this.shopped = false
                }
                if(this.change3 == 2){
                    this.ordered = false
                    this.shopped = true
                    
                }
            }
        },
        computed:{
            User(){
                return this.$router.currentRoute.query.User
            },
        },
        beforeCreate(){
            // this.$bus.$on('clas',(clas)=>{
            //     this.cla = clas
            // })
            // this.$bus.$on('cla',(cla)=>{
            //     this.cla = cla
            // })
            
            this.$bus.$on('message',(message)=>{
                this.lis = message.lis
                this.ordering = message.orderings
                this.eating = message.eating
            })
            this.$axios.get('http://localhost:8081/gl/server').then(
					response=>{
                        this.cla = response.data.cla
                         var table = response.data.Table
                         this.lis = response.data.message.lis
                         this.ordering = response.data.message.orderings
                         this.eating = response.data.message.eating
                        // this.lis = response.data.message.lis
                        // this.ordering = response.data.message.ordering
                        // this.eating = response.data.message.eating
                        console.log(this.lis,this.ordering,this.eating)
                       
                        // this.lis = response.data.message.lis
                        // this.ordering = response.data.message.ordering
                        // this.eating = response.data.message.eating
                        console.log(table)
                        for(var i in this.cla){
                            for(var j in this.cla[i].foods){
                                console.log(this.cla[i].foods[j])
                                if(this.cla[i].foods[j].recommend){
                                    this.recommend.push(this.cla[i].foods[j])
                                }
                            }
                        }
                        console.log(this.recommend)
						// console.log('请求成功',response.data)
					},
					error=>{
						console.log('请求失败了',error.message)
					}
				)
            // this.$bus.$on('seat',(ordering,eating,lis)=>{
            //     this.ordering = ordering
            //     this.eating = eating
            //     this.lis = lis
            //     console.log(ordering,eating,lis)
            // })
            this.$bus.$on('people',(people,n,x)=>{
                console.log(this.ns)
                this.n = n
                if(this.n!=0){
                    this.table = false
                    this.nav1 = true
                    this.change = x
                    this.change2 = 1
                }
            })
            this.$bus.$on('adddishes',(nav1,x)=>{
                if(nav1){
                    this.nav1 = true
                    this.change2 = true
                    this.nav2 = false
                    this.ordered = false
                    this.n = x
                    this.change = 0
                }
                
                
                
            })
            this.$bus.$on('ordering',(w,n)=>{
                if(w){
                    this.nav1 = true
                    this.change2 = 1
                    this.table = false
                    this.change = 0
                    this.n = n
                }
            })
        }
    }
</script>

<style scoped>
    .subBar img{
        width: 50%;
        display: block;
       margin: 20px auto;
    }
    .wrap{
        height: 100vh;
        background: url('../../public/images/bg.jpeg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    li{
        list-style: none;
    }
    ul{
        margin:0 ;
        padding:0;;
    }
    .action{
        display: flex;
        height: 200px;
        flex-wrap: wrap;
        position: relative;
    }
    .action li{
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        color: #fff;
        font-size: 10px;
        cursor:pointer;

    }
    .action span{
        font-size: 30px;
        margin-bottom: 10px;
    }
    .action i{
        width: 15px;
        height: 15px;
        position: absolute;
        background: #ff8400;
        border-radius: 50%;
        font-size: 14px;
        text-align: center;
        line-height: 20px;
        font-style: normal;
        top:14px;
        left: 60px;
    }
    .action li.ac,.action li:hover{
        color: #f9d163;
    }
    .action::before{
        top:50%
    }
    .action::after{
        top:50%;
        transform: rotate(90deg);
    }
    .subBar{
        width: 250px;
        height: 100vh;
        position: fixed;
        /* border:1px solid #fff */
    }
    .message{
        width: 200px;;
        margin: 50px auto;
        margin-bottom: 20px;
        padding: 10px 0;
        color: #fff;
        line-height: 30px;
        text-align: center;
        /* box-sizing: border-box; */
        /* border:1px solid #fff; */
        position: relative;
    }
    .message::before,.message::after
    ,.action::before,.action::after{
        content:'';
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        background: linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);
    }
    .message::before{
        top:0;
    }
    .message::after{
        bottom:0;
    }
    .navBar{
        position: fixed;
        left: 250px;
        right: 0;
        /* border: 1px solid #fff; */
        height: 80px;
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff
    }
    .navWrap{
        display: flex;
        flex-direction: row;
    }
    .navWrap>li{
        font-size: 24px;
        margin-right: 40px;
        cursor: pointer;
    }
    .navWrap>li.active,.navWrap>li:hover{
        color:#f9d163
    }
    .navWrap>li span.iconfont{
        font-size: 26px;
        margin-right: 5px;
    }
    .serach{
        width: 300px;
        height: 30px;
        box-sizing: border-box;
        display: flex;
        border:1px solid #fff;
        border-radius: 50px;
    }
    .serach input{
        background: none;
        border: none;
        width: 270px;
        font-size: 16px;
        color: #fff;
        padding: 0 0 0 15px;
        outline: none;
    }
    .serach button{
        width: 30px;
        color: #fff;
        padding: 0;
        outline: none;
        border: none;
        background: none;
        display: flex;
        justify-content:center;
        align-items:center
    }
   #content{
    position: fixed;
    top: 80px;
    right: 20px;
    bottom: 20px;
    left: 250px;
    background: rgba(255,255,255,.2);
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
   }
   #content2{
    background: rgba(0, 0, 0, .2);
        position: fixed;
        left:0;
        top:0;
        width: 100vw;
        height: 100vh;
   }
   .foodList li{
    display: inline-block;
    position: relative;
    margin: 10px;

   }
   .foodList li button{
    background: #ff8400;
    border: none;
    width: 20px;
    height: 20px;
    line-height: 20px;
    padding: 0;
    border-radius: 50%;
    color:#fff;
    font-size: 14px;
   }
   .foodList img{
        cursor:pointer
   }
   .recommend{
    position: absolute;
    top: 5px;
    left:5px;
    font-size: 30px;
    color: #ff8400
   }
   .foodList .bar{
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, .6);
    position:absolute;
    bottom: 0;
    font-size: 16px;
    line-height: 40px;
    color:#fff;
    padding:0 10px;
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
   }
   .bar h3,.bar p{
    margin: 0;
   }
   .foodList .bar p{
     display: flex;
     align-items:center;

   }
   .foodList .rmb{
     font-size: 14px;
   }
   .foodList .price{
        color: #f0e184;
        margin:0 10px
   }
   .pop {
  background-color: #fff;
 padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  margin:auto;
  width: 500px;
  height:260px;
  z-index: 2;
  border-radius: 5px
}
.pop textarea{
    margin:20px 0
}
   /* .foodList{
    font-size: 0;
   } */
   .pop .secend{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
   }
   .pop .secend input{
    display: block;
    width: 100%;
    height: 200px;
   }
   .pop .secend p:nth-child(1){
    color: #ff8400;
    font-size: 20px;
   }
   .pop .secend button{
    border:1px solid #ff8400;
    background: #ff8400;
    color:#fff;
    padding:0;
    vertical-align: middle;
   }
   .pop .secend .num{
    padding: 0 5px;
    border-top: 1px solid #ff8400;
    border-bottom: 1px solid #ff8400;
    vertical-align: middle;
    font-size: 14px;
   }
   .pop .footer{
    display: flex;
    justify-content: flex-end;
   }
   .pop .footer button:nth-child(2){
    background: #ff8400;
    color:#fff
   }
   .pop .footer button:nth-child(1){
    color:rgb(43, 41, 41)
   }
   .pop .secend p{
    margin: 0;
   }
   .pop p{
    margin: 0;
   }
</style>