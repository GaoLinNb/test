<template>
    <div>
         <ul class="category">
            <li v-for="(c,index) in cla" :key="index">
                <div class="icon">
                    <span class="iconfont">{{String.fromCharCode(parseInt(c.icon,16))}}</span>
                    <span class="name">{{c.name}}</span>
                </div>
                <div class="edit">
                    <span class="iconfont" @click="del(index)">&#xe606;</span>
                    <span class="iconfont" @click="edit(index)">&#xe8cf;</span>
                </div>
            </li>
            <!-- <li>
                <div class="icon">
                    <span class="iconfont">&#xf08d;</span>
                    <span class="name">热菜</span>
                </div>
                <div class="edit">
                    <span class="iconfont">&#xe606;</span>
                    <span class="iconfont">&#xe8cf;</span>
                </div>
            </li> -->
            <li @click="add" class="add"><span class="iconfont">&#xe62f;</span></li>
        </ul>
        <div class="outer" v-show="addclassify">
            <div class="tianjia">
                <div class="first">
                     <span>新增分类</span>
                    <span @click="back" class="iconfont">&#xe65a;</span>
                </div>
                <div class="second">
                    <div>
                        <label for="name">名称</label>
                        <input type="text" v-model="clanew.name">
                    </div>
                    <div>
                        <label for="icon">icon</label>
                        <input type="text" v-model="clanew.icon">
                    </div>
                </div>
                <div class="fal">
                    <button @click="cel" class="cel">取消</button>
                    <button @click="enter">确定</button>
                </div>
            </div>
        </div>
        <div class="outer" v-show="edits">
            <div class="tianjia">
                <div class="first">
                     <span>修改</span>
                    <span @click="backgai" class="iconfont">&#xe65a;</span>
                </div>
                <div class="second">
                    <div>
                        <label for="name">名称</label>
                        <input type="text" v-model="nameedit">
                    </div>
                    <div>
                        <label for="icon">icon</label>
                        <input type="text" v-model="iconedit">
                    </div>
                </div>
                <div class="fal">
                    <button @click="celgai" class="cel">取消</button>
                    <button @click="entergai">确定</button>
                </div>
            </div>
        </div>
        <div class="outer" v-show="dels">
            <div class="del">
                <div class="first">
                    <span @click="backdel" class="iconfont">&#xe65a;</span>
                </div>
                <div class="second">
                        <span>确认删除{{name}}</span>
                </div>
                <div class="fal">
                    <button @click="cels" class="cel">取消</button>
                    <button @click="en">确定</button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>

    export default {
        name:'Classify',
        props:['f'],
        data(){
            return {
                addclassify:false,
                // cla:[
                //     {   
                //         name:'热菜',
                //         icon:'f08d;'
                //     },
                //     {
                //         name:'凉菜',
                //         icon:'f08e;'
                //     }
                // ],
                cla:[],
                clanew:{
                    name:'',
                    icon:'',
                    foods:[]
                },
                dels:false,
                index:0,
                enters:false,
                name:'',
                m:[1,2,3],
                edits:false,
                nameedit:'',
                iconedit:'',
                indexedit:''
            }
        },
        methods:{
            add(){
                this.addclassify = true
                // console.log(this.cla[1].icon)
            },
            cel(){
                this.addclassify = false
            },
            celgai(){
                this.edits = false
            },
            entergai(){
                this.edits = false
                this.cla[this.indexedit].name = this.nameedit
                this.cla[this.indexedit].icon = this.iconedit
                const xhr = new XMLHttpRequest();
                    xhr.open('post', 'http://localhost:8081/gl/server');
                    xhr.setRequestHeader('content-type', 'application/json');
                    xhr.send(JSON.stringify(this.cla));
                    console.log(this.cla)
            },
            backgai(){
                this.edits = false
            },
            enter(){
                this.cla.push(this.clanew)
                // console.log(this.cla)
                this.$bus.$emit('clas',this.cla)
                // for(var i in this.cla){
                //     this.m={
                //         name:this.cla[i].name,
                //         icon:this.cla[i].icon
                //     }
                // }
                console.log(this.cla)
                 const xhr = new XMLHttpRequest();
                    xhr.open('post', 'http://localhost:8081/gl/server');
                    xhr.setRequestHeader('content-type', 'application/json');
                    xhr.send(JSON.stringify(this.cla));

                    // xhr.onreadystatechange = function () {
                    //     if (xhr.readyState === 4) {
                    //     if (xhr.status >= 200 && xhr.status < 300) {
                    //         console.log(xhr.response);
                    //         //之后要根据不同的response进行不同的操作
                    //     }
                    //     }
                    // }
                this.$axios.get('http://localhost:8081/gl/server').then(
					response=>{
                        // this.cla = response.data.cla
						console.log('请求成功',response.data)
					},
					error=>{
						console.log('请求失败了',error.message)
					}
				)
                // this.cla.push(this.clanew)
                // this.name.push(this.clanew.name)
                // this.$bus.$emit('name',this.name)
                this.clanew = {
                    name:'',
                    icon:''
                }
                // console.log(this.name)
                this.addclassify = false
            },
            del(index){
                this.index = index
                this.dels = true
                this.name = this.cla[index].name
                
                // this.cla.splice(index,1)
                
            },
            edit(i){
                this.indexedit = i
                this.edits = true
                this.nameedit = this.cla[i].name
                this.iconedit = this.cla[i].icon
            },
            en(){
                this.enters = true
                if(this.enters){
                    this.cla.splice(this.index,1)
                }
                const xhr = new XMLHttpRequest();
                    xhr.open('post', 'http://localhost:8081/gl/server');
                    xhr.setRequestHeader('content-type', 'application/json');
                    xhr.send(JSON.stringify(this.cla));
                this.$bus.$emit('clas',this.cla)
                this.enters = false
                this.dels = false
            },
            cels(){
                this.dels = false
            },
            backdel(){
                this.dels = false
            },
            back(){
                this.addclassify = false
            }
        },
        beforeCreate(){
            // this.$bus.$on('cla2',(cla)=>{
            //     this.cla = cla
            //     console.log(cla)
            // })
            this.$axios.get('http://localhost:8081/gl/server').then(
					response=>{
                        this.cla = response.data.cla
						console.log('请求成功',response.data)
					},
					error=>{
						console.log('请求失败了',error.message)
					}
				)
                this.$bus.$on('cla',(cla)=>{
                    this.cla = cla
                })
        },
    }
</script>

<style scoped>
    .category{
        overflow: hidden;   /*清除浮动*/
    }
    .category li{
        width: 200px;
        height: 200px;
        float: left;
        background: #fff;
        border: 1px solid #ccc;
        margin: 0 10px 20px 10px;
        border-radius: 5px;
        position: relative;
    }
    .category li div{
        width: 100%;
        height: 100%;
        position:absolute;
        display: flex;
        align-items: center;
    }
    .icon{
        justify-content: center;
        flex-direction: column;
    }
    .icon .iconfont{
        font-size: 100px;
        margin-bottom: 20px;
        color: #ff8400;
    }
    .icon .name{
        font-size: 30px;
        color: #aaa;
    }
    .edit{
        justify-content: space-around;/*分散居中对齐*/ 
        background: rgba(0, 0, 0, .9);
        opacity: 0
    }
    .edit span{
        color: #dbdbdb;
        font-size: 80px;
        cursor: pointer
    }
    .edit span:hover{
        color: #ff8400
    }
    .category li:hover .edit{
        opacity: 1;
        transition: .4s;
    }
    .add{
        display: flex;
        /* 水平居中 */
        justify-content: center;
        /* 垂直居中 */
        align-items: center;
        cursor:pointer;
    }
    .add span{
        font-size: 120px;
        color: #ccc;
    }
    .add:hover{
        background: #eee;
        transition: .3s;
    }
    .outer{
        background: rgba(0, 0, 0, .2);
        position: fixed;
        left:0;
        top:0;
        width: 100vw;
        height: 100vh;
    }
    .tianjia{
        width: 400px;
        height: 200px;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right:0;
        bottom:0;
        margin:auto;
    }
    .tianjia .first,.del .first{
        display: flex;
        justify-content: space-between;
        margin: 10px 10px;
        font-weight: bold;
    }
    .del .first{
        display: flex;
        justify-content: flex-end;
        font-weight: bold;
    }
    .tianjia .first span:nth-child(2),.del .first span{
        cursor: pointer;
    }
    .second{
        display: flex;
        flex-direction: column;
        margin: 10px 10px;
        box-sizing: border-box;
    }
    .second label{
        margin: 0 10px;
    }
    .second div:nth-child(1){
        margin: 20px 0;
    }
    .second input{
        width: 300px;
    }
    .fal{
        display: flex;
        justify-content: flex-end;
        margin: 20px 10px;
    }
    .fal button{
        border: 1px solid rgb(61, 60, 60);
        font-size: 13px;
        padding: 5px 10px;
        border-radius: 3px;
    }
    .fal button:nth-child(2){
        background: rgb(94, 94, 240);
        color: #fff;
        margin-left: 5px;
    }
    .del{
        width: 400px;
        height: 130px;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right:0;
        bottom:0;
        margin:auto;
    }
</style>