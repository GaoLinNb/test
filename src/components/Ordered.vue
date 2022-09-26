<template>
    <div id="contents">
        <ul class="orderBox">
            <li v-for="(table,index) in ns" :key="index">
                <table>
                    <tbody>
                        <tr v-for="(food,index2) in table.foods" :key="index2">'
                            <td>{{index2+1}}</td>
                            <td><img :src="getImgUrl(food.n)" alt=""></td>
                            <td>{{food.ve}}</td>
                            <td>
                                <button @click="jian(index,index2)"><span class="iconfont">&#xe624;</span></button>
                                <span class="num">{{food.num}}</span>
                                <button @click="jia(index,index2)"><span class="iconfont">&#xeb78;</span></button>
                            </td>
                            <td>￥{{food.price}} × {{food.num}}</td>
                            <td>{{food.beizhu}}</td>
                            <td>
                                <button class="select">
                                    <span class="iconfont">&#xeaf1;</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="foot">
                    <div>
                        <span>桌号：<strong>{{table.n}}</strong>号桌</span>
                        <span>人数; {{table.people}}</span>
                        <span>订单号：{{table.id}}</span>
                        <button @click="adddishes(1)" class="addDishes">添菜</button>
                    </div>
                    <div>
                        <span>总消费： ￥<strong>{{table.totel}}</strong></span>
                        <button @click="or(index)" class="pay">下单</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Ordered',
        data(){
            return{
                     n:'',
                     price: '',
                     num:'',
                     name:'',
                     x:'',
                     nav1:false,
                     y:'',
                     l:'',
                     t:false,
                table0:[],
                h:'',
                img:'',
                n1:'',
                n2:'',
                n3:'',
                w:false,
                q:false,
                ns:[],
                time:'',
                nss:[],
                ordering:0,
                f:false
            }
        },
        methods:{
            getImgUrl (img) {
                return require("../../public/images/" + img);
            },
            jian(i1,i2){
                this.ns[i1].foods[i2].num--
                if(this.ns[i1].foods[i2].num<=1){
                    this.ns[i1].foods[i2].num = 1
                }
                this.totel = 0
                for(var i in this.ns){
                    // console.log(this.ns[i])
                    for(var j in this.ns[i].foods){
                        this.totel = this.totel + this.ns[i].foods[j].price*this.ns[i].foods[j].num
                    }
                    this.ns[i].totel = this.totel
                    this.totel = 0
                }
            },
            jia(i1,i2){
                this.ns[i1].foods[i2].num++
                this.totel = 0
                for(var i in this.ns){
                    // console.log(this.ns[i])
                    for(var j in this.ns[i].foods){
                        this.totel = this.totel + this.ns[i].foods[j].price*this.ns[i].foods[j].num
                    }
                    this.ns[i].totel = this.totel
                    this.totel = 0
                }
                // this.cla[i1].foods[i2]
            },
            adddishes(i){
                this.nav1 = true
                this.x = i
                this.$bus.$emit('adddishes',this.nav1,this.x)
            },
            or(i){
                this.$axios.get('http://localhost:8081/gl/server').then(
                    response=>{
                        this.ordering = response.data.ordering
                        var table = response.data.Table
                        
                        var lis = 0
                        var ordering = 0
                        var eating = 0
                        for(var j in table){
                            console.log(this.ns[i].n,'+',table[j].n)
                            if(this.ns[i].n == table[j].n){
                                table[j].state = 'eating'
                                table[j].str = '就餐中'
                                table[j].shopped = 'shopped'
                            }
                           
                             if(table[j].state == 'busy'){
                                lis++
                            }
                            if(table[j].state == 'ordering'){
                                ordering++
                            }
                            if(table[j].state == 'eating'){
                                eating++
                            }
                        }
                        var message = {
                            lis:lis,
                            orderings:ordering,
                            eating:eating
                        }
                        const xhr4 = new XMLHttpRequest()
                        xhr4.open('post','http://localhost:8081/gl/server6')
                        xhr4.setRequestHeader('content-type', 'application/json')
                        xhr4.send(JSON.stringify(message))
                        console.log(message)
                        this.$bus.$emit('message',message)
                        const xhr3 = new XMLHttpRequest()
                        xhr3.open('post','http://localhost:8081/gl/server2')
                        xhr3.setRequestHeader('content-type', 'application/json')
                        xhr3.send(JSON.stringify(table))
                         console.log('shopped过去了')
                        this.ns = response.data.ns
                        this.nss = response.data.ordered
                        let year = new Date().getFullYear();
                        //月份是从0月开始获取的，所以要+1;
                        let month = new Date().getMonth() +1;
                        //日
                        let day = new Date().getDate();
                        //时
                        let hour = new Date().getHours();
                        //分
                        let minute = new Date().getMinutes();
                        //秒
                        let second = new Date().getSeconds();
                        this.time = year + '-' + month + '-' + day +' '+hour+':'+minute+':'+second
                        console.log(this.ns)
                        this.ns[i] = {
                            n: this.ns[i].n,
                            people: this.ns[i].people,
                            id: this.ns[i].id,
                            foods: this.ns[i].foods,
                            totel: this.ns[i].totel,
                            time:this.time
                        }
                        if(this.nss.length == 0){
                            this.f = false
                        }
                        if(this.nss.length!=0){
                            for(var j in this.nss){
                                console.log(this.nss[j].id,'+',this.ns[i].id)
                                if(this.nss[j].id==this.ns[i].id){
                                    this.f = true
                                }
                            }
                            
                        }
                        if(!this.f){
                                this.nss.push(this.ns[i])
                                this.ordering++
                                var obj = {
                                    ordering:this.ordering
                                }
                            }else{
                                var obj = {
                                    ordering:this.ordering
                                }
                            }
                        this.f = false
                        console.log(this.nss)
                        const xhr = new XMLHttpRequest()
                        xhr.open('post','http://localhost:8081/gl/server4')
                        xhr.setRequestHeader('content-type', 'application/json')
                        xhr.send(JSON.stringify(this.nss))
                       
                        
                        const xhr2 = new XMLHttpRequest()
                        xhr2.open('post','http://localhost:8081/gl/server5')
                        xhr2.setRequestHeader('content-type', 'application/json')
                        xhr2.send(JSON.stringify(obj))
                        var ns = response.data.ns
                        ns.splice(i,1)
                        const xhr5 = new XMLHttpRequest()
                        xhr5.open('post','http://localhost:8081/gl/server3')
                        xhr5.setRequestHeader('content-type', 'application/json')
                        xhr5.send(JSON.stringify(ns))
                    }
                )
                
                // console.log(this.ns)
                
                // this.$bus.$emit('or',this.ns[i],i,this.time)
            }
        },
        beforeCreate(){
            // this.$bus.$on('seat',(a,b,c,x)=>{
            //     this.x = x
            // })
            this.$axios.get('http://localhost:8081/gl/server').then(
                    response=>{
                        this.ns = response.data.ns
                        // console.log('2',this.ns)
                    }
                )
                // this.$bus.$on('ns',(ns)=>{
                //     this.ns = ns
                // })
                this.totel = 0
                for(var i in this.ns){
                    for(var j in this.ns[i].foods){
                        console.log(this.ns[i].foods[j].price,this.ns[i].foods[j].num)
                        this.totel = this.totel +  this.ns[i].foods[j].price * this.ns[i].foods[j].num
                    }
                    console.log(this.ns[i])
                }
            this.$bus.$on('ordering',(w,n)=>{
                this.x = n
                this.w = w
            })
           this.$bus.$on('people',(people,x,y)=>{
            this.x = x
                this.people = people
               
               
            })      
       },
        
       
        
    }
</script>

<style scoped>
#contents{
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
</style>