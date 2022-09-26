<template>
    <div id="content5">
        <div v-show="dialogVisible1" class="pop">
            <div class="first">
                <p>
                    请输入人数: 
                </p>
                <button @click="back"><span class="iconfont">&#xe65a;</span></button>
            </div>
            
            <input type="number" v-model="people" oninput="if(value<1)value=''">
            <div class="last">
                <button @click="cancel">取消</button>
                <button @click="enter">确认</button>
            </div>
                
        </div>
        <ul class="legend">
            <li>
                <div><span class="iconfont">&#xe76f;</span></div>
                <span>空闲</span>
            </li>
            <li>
                <div><span class="iconfont">&#xe76f;</span></div>
                <span>点餐中</span>
            </li>
            <li>
                <div><span class="iconfont">&#xe76f;</span></div>
                <span>用餐中</span>
            </li>
        </ul>
        <ul class="table">
            <li class="busy" v-for="(table,index) in tables" :key="index">
                <div @click="order(index)"><span class="iconfont">&#xe76f;</span></div>
                <span>{{table.n}}号桌</span>
            </li>
        </ul>
    </div>
</template>

<script>


    export default {
        name:'Table',
        data(){
            return{
                ordering:'',
                eating:'',
                lis:'',
                n:0,
                people:'',
                dialogVisible1:false,
                x:'',
                w:false,
                f:false,
                beizhu1:'',
                beizhu2:'',
                beizhu3:'',
                a:false,
                id:'',
                foods:[],
                tables:[],
                indexs:'',
                obj:'',
                ns:[],
                t:false
            }
        },
        methods:{
            order(i){
                console.log(i)
                this.n = i+1
                this.w = false  
                this.a = true
                // console.log(this.className)
                var table = document.getElementsByClassName('table')
                var lis = table[0].getElementsByTagName('li')
                let c = lis[i].className
                console.log(lis)
                // console.log(busy)
                if(c=='busy'){
                    this.dialogVisible1 = true
                    this.w = false
                    this.$bus.$emit('ordering',this.w,this.n,this.x,this.a)
                    this.a = false
                    //  this.$bus.$emit('order',this.n)
                }
                if(c=='ordering'){
                    this.w = true
                    this.$bus.$emit('ordering',this.w,this.n,this.x,this.a)
                    this.a = false
                }
               
                // console.log(this.beizhu1,this.beizhu2,this.beizhu3,this.beizhu4,this.beizhu5,this.beizhu5)
                // if(busy){
                //     this.dialogVisible1 = true
                //     this.$bus.$emit('order',this.n)
                // }
                // if(isActive1){
                //     this.dialogVisible1 = true
                // }
            },
            cancel(){
                this.dialogVisible1 = false
                this.people = ''
                
            },
            enter(){
                this.dialogVisible1 = false
                var date = new Date()
                this.id = date.getTime()
                 
                this.ns.push({
                    n:this.n,
                    people:this.people,
                    id:this.id,
                    foods:[]
                    })
                console.log(this.ns)
                const xhr2 = new XMLHttpRequest()
                xhr2.open('post','http://localhost:8081/gl/server3')
                xhr2.setRequestHeader('content-type', 'application/json')
                xhr2.send(JSON.stringify(this.ns))
                this.tables[this.n-1] = {
                    n:this.n,
                    str:'点餐中',
                    people:this.people,
                    state:'ordering'
                }
                const xhr = new XMLHttpRequest()
                xhr.open('post','http://localhost:8081/gl/server2')
                xhr.setRequestHeader('content-type', 'application/json')
                xhr.send(JSON.stringify(this.tables))
               var lis = 0
                var ordering = 0
                var eating = 0
                for(var i in this.tables){
                    if(this.tables[i].state == 'busy'){
                        lis++
                    }
                    if(this.tables[i].state == 'ordering'){
                        ordering++
                    }
                    if(this.tables[i].state == 'eating'){
                        eating++
                    }
                }
                var message = {
                    lis:lis,
                    orderings:ordering,
                    eating:eating
                }
                console.log(message)
                const xhr3 = new XMLHttpRequest()
                xhr3.open('post','http://localhost:8081/gl/server6')
                xhr3.setRequestHeader('content-type', 'application/json')
                xhr3.send(JSON.stringify(message))
                this.$bus.$emit('message',message)
                this.f = true
                // this.p = this.people
                var table = document.getElementsByClassName('table')
                var lis = table[0].getElementsByTagName('li')
                lis[this.n-1].className = 'ordering'
                this.$bus.$emit('people',this.people,this.n,this.x,this.ns)
                
                this.people = ''
                var ordering = document.getElementsByClassName('ordering')
                var eating = document.getElementsByClassName('eating')
                var table = document.getElementsByClassName('table')
                var lis = table[0].getElementsByTagName('li')
                console.log(table)

                this.ordering = ordering.length
                this.eating = eating.length
                this.lis = lis.length-ordering.length-eating.length
                
                this.$bus.$emit('seat',this.ordering,this.eating,this.lis,this.n,this.f)
                this.f = false
            },
            back(){
                this.dialogVisible1 = false
                this.people = ''
            }
        },
        updated(){
             var table = document.getElementsByClassName('table')
                            var lis = table[0].getElementsByTagName('li')
                            for(var i=0;i<this.tables.length;i++){
                                if(this.tables[i].state == 'ordering'){
                                    lis[i].className = 'ordering'
                                }
                                if(this.tables[i].state == 'eating'){
                                    lis[i].className = 'eating'
                                }
                                // console.log(lis)
                            }

        },
        beforeCreate(){
            this.$axios.get('http://localhost:8081/gl/server').then(
                response=>{
                    this.tables = response.data.Table
                    this.ns = response.data.ns
                    console.log(this.ns)
                }
            )
            // this.$bus.$on('beizhu1',(beizhu,x)=>{
            //      this.beizhu1 = beizhu
                
            //     // this.x = n
            //     console.log(beizhu,x)
            // })
            // this.$bus.$on('beizhu2',(beizhu,x)=>{
            //     this.beizhu2 = beizhu
                
            //     // this.x = n
            //     console.log(beizhu,x)
            // })
            // this.$bus.$on('beizhu3',(beizhu,x)=>{
            //    this.beizhu3 = beizhu
            //     // this.x = n
            //     console.log(beizhu,x)
            // })
        }
    }
</script>

<style scoped>
#content5{
    position: fixed;
    top: 80px;
    right: 20px;
    bottom: 20px;
    left: 250px;
    background: rgba(255,255,255,.2);
    box-sizing: border-box;
    padding: 10px;
    /* overflow: hidden; */
    overflow-y: auto;
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
  width: 300px;
  height:100px;
  z-index: 2;
  border-radius: 5px
}
   ul{
    list-style: none;
    margin: 0;
    padding:0
   }
   .legend{
    color:#fff;
    display: flex;
    justify-content: flex-end;
   }
   .legend li{
    display: flex;
    margin-right: 30px;
    align-items: center;
   }
   .legend li div{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
   }
   .legend li div span{
    font-size: 25px;
   }
   .legend li:nth-child(1) div,.table .busy div{
    background: #66a8a6;
   }
   .legend li:nth-child(2) div,.table .ordering div{
    background: #f79700;
   }
   .legend li:nth-child(3) div,.table .eating div{
    background: #e5553f;
   }
   .table{
    width: 90%;
    margin: 40px auto;
   }
   .table li{
    display: inline-block;
    text-align: center;
    margin: 0 37px 50px 37px;
    cursor: pointer;
    color: #fff;
   }
   .table li div{
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
   }
   .table li div span{
    font-size: 80px;
   }
   .first{
    display:flex;
    justify-content:space-between
   }
   .last{
    display: flex;
    justify-content:flex-end
   }
   .last button:nth-child(1){
    border:1px solid rgb(31, 30, 30);
    margin-right: 5px;
   }
   .last button:nth-child(2){
    border:1px solid rgb(31, 30, 30);
    background: skyblue;
    color:#fff
   }
</style>