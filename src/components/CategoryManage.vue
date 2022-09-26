<template>
    <div id="admin">
        <div class="left">
            <img src="../../public/images/order.jpeg" alt="">
            <ul>
                <li @click="home" :class="{active:change==0}"><span class="iconfont">&#xe632;</span>首页</li>
                <li @click="classify" :class="{active:change==1}"><span class="iconfont">&#xe60d;</span>分类</li>
                <li @click="food" :class="{active:change==2}"><span class="iconfont">&#xf08e;</span>菜品</li>
                <li @click="tables" :class="{active:change==3}"><span class="iconfont">&#xe814;</span>餐桌</li>
            </ul>
        </div>
        <div class="right">
            <keep-alive>
                <router-view :key="$route.fullPath"></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CategoryManage',
        data(){
            return{
                change: 1,
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
                cla:[]
            }
        },
        methods:{
            home(){
                this.change = 0
                this.$router.push({
                    name:'Productor',
                    query:this.cla
                })
            },
            classify(){
                this.change = 1
                this.$router.push({
                    name:'classify',
                })
            },
            food(){
                this.$axios.get('http://localhost:8081/gl/server').then(
					response=>{
                        this.cla = response.data.cla
                        // this.cla = response.data.cla
						console.log('请求成功',response.data)
					},
					error=>{
						console.log('请求失败了',error.message)
					}
				)
                this.change = 2
                this.$router.push({
                    name:"food",
                    query:this.cla
                })
            },
            tables(){
                this.change = 3
                this.$router.push({
                    name:'tables'
                })
            }
        },
        mounted(){
            this.$bus.$emit('cla2',this.cla)
        },
        beforeCreate(){
            this.$bus.$on('cla',(cla)=>{
                this.cla = cla
            })
        },
        beforeDestroy(){
            this.$bus.$emit('back',this.cla)
        }
    }
</script>

<style scoped>
    .left{
        width: 200px;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background: #3f3f3f
    }
    .left img{
        width: 80%;
        display: block;
        margin: 50px auto;
    }
    .left li{
        font-size: 16px;
        color:#fff;
        line-height: 60px;
        padding-left: 30px;
        border-bottom: 1px solid #2b2b2b;
        cursor:pointer
    }
    .left li span{
        margin-right: 20px;
    }
    .left li.active,.left li:hover{
        background: #2b2b2b;
    }
    .right{
        min-height: 100vh;
        background: #e0e3e8;
        box-sizing: border-box;
        padding:40px 20px;
        margin-left: 200px;
    }
</style>