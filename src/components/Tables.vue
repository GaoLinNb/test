<template>
    <div>
        <div class="top">
            <span class="tableData">桌台数据</span>
            <ul>
                <li>
                    <strong>{{this.tables.length}}</strong>
                    <span>开桌数</span>
                </li>
                <li>
                    <strong>{{busy}}</strong>
                    <span>空闲数</span>
                </li>
                <li>
                    <strong>{{ordering}}</strong>
                    <span>点餐数</span>
                </li>
                <li>
                    <strong>{{shopped}}</strong>
                    <span>下单数</span>
                </li>
            </ul>
        </div>
        <div class="foot">
            <span class="mod">桌台模式</span>
            <ul class="table">
                <li class="busy" v-for="(table,index) in tables" :key="index">
                    <div class="bg">
                        <span class="iconfont">&#xf08e;</span>
                        <span>{{table.n}}号桌</span>
                    </div>
                    <div class="footer">
                        <span>{{table.str}}</span>
                        <span>{{table.people}}人</span>
                    </div>
                </li>
                <li class="addspan" @click="add">
                    <span class="iconfont">&#xe62f;</span>    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Tables',
        data(){
            return{
                totel:0,
                busy:0,
                ordering:0,
                tables:[],
                n:'',
                shopped:0
            }
        },
        methods:{
            add(){
                
                this.n++
                this.tables.push({
                    n:this.n,
                    str:'空闲中',
                    people:0,
                    state:'busy'
                })
                this.busy = 0;
                this.ordering = 0
                 var lis = 0
                 var ordering = 0
                 var eating = 0
                for(var i in this.tables){
                        if(this.tables[i].state == 'busy'){
                            this.busy++
                            lis = lis + 1
                        }
                        if(this.tables[i].state == 'ordering'){
                            this.ordering++
                            ordering = ordering + 1
                        }
                        if(this.tables[i].state == 'eating'){
                            eating = eating + 1
                        }
                    }
                    var message = {
                        lis:lis,
                        orderings:ordering,
                        eating:eating
                    }
                    const xhr2 = new XMLHttpRequest();
                    xhr2.open('post', 'http://localhost:8081/gl/server6');
                    xhr2.setRequestHeader('content-type', 'application/json');
                    xhr2.send(JSON.stringify(message));
                const xhr = new XMLHttpRequest();
                    xhr.open('post', 'http://localhost:8081/gl/server2');
                    xhr.setRequestHeader('content-type', 'application/json');
                    xhr.send(JSON.stringify(this.tables));
            }
        },
        updated(){
             var table = document.getElementsByClassName('table')
                            var lis = table[0].getElementsByTagName('li')
                            console.log(lis)
                            for(var i=0;i<this.tables.length;i++){
                                if(this.tables[i].state == 'ordering'){
                                    lis[i].className = 'ordering'
                                }
                                if(this.tables[i].state == 'eating'){
                                    lis[i].className = 'eating'
                                }
                                // console.log(lis)
                            }
                            
                    console.log(this.tables)
             
        },
        beforeCreate(){
           this.$axios.get('http://localhost:8081/gl/server').then(
                response=>{
                    this.tables = response.data.Table
                    this.totel = this.tables.length
                    this.shopped = response.data.ordering
                    var message = response.data.message
                    console.log(message)
                    this.n = this.tables[this.tables.length-1].n
                    console.log(this.n)
                    
                    for(var i in this.tables){
                        if(this.tables[i].state == 'busy'){
                            this.busy++
                        }
                        if(this.tables[i].state == 'ordering'){
                            this.ordering++
                        }
                        console.log(this.tables[i].state)
                        // if(this.tables[i].state == 'ordering'){
                        //     console.log('点餐中')
                        //     var table = document.getElementsByClassName('table')
                        //     var lis = table[0].getElementsByTagName('li')  
                        //     console.log(this.tables[i].n) 
                        //     console.log(lis)
                        //     // lis[i].className = 'ordering'
                        // }
                            
                    }
                   
                },
                error=>{
                    console.log('请求失败了',error.message)
                }
            )
            
            // this.totel = lis.length-1
        }
    }
</script>

<style scoped>
    .top{
        background: #fff;
        margin: 0 auto;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    .tableData{
        color: #ff8400;
        font-size: 18px;
        padding: 10px 0 10px 10px;
        box-sizing: border-box;
        display: block;
        border-bottom: 1px solid rgb(138, 136, 136)
    }
    .top ul{
        display: flex;
    }
    .top ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:20px 25px;
        position: relative;
    }
    .top ul li::after{
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        background: linear-gradient(90deg,transparent,rgba(128, 102, 102, 0.6),transparent);
    }
    .top ul li::after{
        transform: rotate(90deg);
        left:50%
    }
    .top ul li span{
        font-size: 14px;
    }
    .top ul li strong{
        font-size: 20px;
        color:#ff8400;
        margin-bottom: 7px;
    }
    .foot{
        width: 100%;
        background: #fff;
        border-radius: 5px;
    }
    .foot ul li{
        float: left;;
        margin: 0px 10px 10px 0;
        cursor: pointer;
    }
    .foot ul::after{
        content: '';
        display: block;
            clear: both;
    }
    .foot .mod{
        color: #ff8400;
        font-size: 18px;
        padding: 10px 0 10px 10px;
        box-sizing: border-box;
        display: block;
        border-bottom: 1px solid rgb(138, 136, 136)
    }
    .foot ul{
        margin: 20px 60px 20px 20px;
    }
    .foot ul li{
        width: 150px;
        height: 100px;
        border-radius: 5px;
        border: 1px solid rgb(129, 127, 127);

    }
    .foot ul li .bg{
        width: 100%;
        height: 75%;
        border-radius: 4px 4px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .foot ul li .bg span{
        font-size: 20px;
        color:#fff
    }
    .foot ul li .bg span:nth-child(1){
        margin-right: 10px
    }
    .foot ul li .footer{
        width: 100%;
        height: 25%;
        padding:0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }
    .foot ul .busy .bg{
        background: rgb(129, 127, 127);
    }
    .foot ul .eating .bg{
        background: #e5553f;
    }
    .foot ul .ordering .bg{
        background: #f79700;
    }
    .foot ul .busy .footer span{
        color: rgb(129, 127, 127);
        font-size: 13px;
    }
    .foot ul .eating .footer span{
        color: #e5553f;
        font-size: 13px;
    }
    .foot ul .ordering .footer span{
        color: #f79700;
        font-size: 13px;
    }
    .addspan{
        cursor:pointer;
        display: inline-block;
        margin-top: 10px;
        
    }
    .addspan span{
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 90px;
        color: #ccc;
        justify-content: center;
        /* 垂直居中 */
        align-items: center;
    }
    .addspan:hover{
        background: #eee;
        transition: .3s;
    }
    ul{
        font-size: 0;
    }
</style>