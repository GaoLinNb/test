<template>
    <div>
        <ul class="dies">
            <li class="hot" v-for="(cla,index) in cla" :key="index">
                <table>
                    <tbody>
                        <thead class="title"><span>{{cla.name}}</span></thead>
                        <tr>
                            <td v-for="(f,index2) in cla.foods" :key="index2">
                                <div class="icon">
                                    <img :src="getImgUrl(f.n)" alt="">
                                    <div>
                                        <span>{{f.ve}}</span>
                                        <span>￥<strong>{{f.price}}</strong>/份</span>
                                    </div>
                                </div>
                                <div class="edit">
                                    <span @click="del(index,index2)" class="iconfont">&#xe606;</span>
                                    <span @click="fix(index,index2)" class="iconfont">&#xe8cf;</span>
                                </div>
                            </td>
                            <!-- <td>
                                <div class="icon">
                                    <img src="../assets/images/img01.jpeg" alt="">
                                    <div>
                                        <span>豆腐干</span>
                                        <span>￥<strong>26</strong>/份</span>
                                    </div>
                                </div>
                                <div class="edit">
                                    <span class="iconfont">&#xe606;</span>
                                    <span class="iconfont">&#xe8cf;</span>
                                </div>
                            </td> -->
                            <td class="add"><span @click="addfoods(index)" class="iconfont">&#xe62f;</span></td>
                        </tr>
                    </tbody>
                </table>
            </li>
        </ul>
        <div class="outer" v-show="dels">
            <div class="del">
                <div class="first">
                    <span @click="backdel" class="iconfont">&#xe65a;</span>
                </div>
                <div class="second">
                        <span>确认删除</span>
                </div>
                <div class="fal">
                    <button @click="cels" class="cel">取消</button>
                    <button @click="en">确定</button>
                </div>
            </div>
        </div>
        <div class="outer" v-show="addfood">
            <div class="tianjia">
                <div class="first">
                    <span>菜品信息</span>
                    <span @click="back" class="iconfont">&#xe65a;</span>
                </div>
                <div class="second">
                    <div>
                        <label for="name">菜名</label>
                        <input type="text" v-model="ve">
                    </div>
                    <div>
                        <label for="name">价格</label>
                        <input type="text" v-model="price">
                    </div>
                    <div>
                        <label for="name">简介</label>
                        <textarea name="" id="" cols="54" rows="2" v-model="jieshao"></textarea>
                    </div>
                </div>
                <div class="recommend">
                    <label for="">推荐指数</label>
                    <span class="iconfont" v-for="(star,index) in star" :key="index">&#xe618;</span>
                </div>
                <div class="com">
                    <label for="">是否推荐</label>
                    <input type="checkbox" v-model="done">
                </div>
                <div class="img">
                    <label for="">图片</label>
                    
                    <input type="file" id="files" ref="refFile" style="display: none" v-on:change="fileLoad">
                    <div>
                        <input type="button" value="导入" id="fileImport" v-on:click="clickLoad" style="height: 200px; width: 200px;">
                        <img v-show="!i" :src="getImgUrl(h)" alt="" style="height: 200px; width: 200px;" v-on:click="clickLoad">
                    </div>
                    
                </div>
                <div class="fal">
                    <button @click="cal" class="cel">取消</button>
                    <button @click="enter">确定</button>
                </div>
            </div>
        </div>  
        <div class="outer" v-show="addfoodgai">
            <div class="tianjia">
                <div class="first">
                    <span>修改信息</span>
                    <span @click="backgai" class="iconfont">&#xe65a;</span>
                </div>
                <div class="second">
                    <div>
                        <label for="name">菜名</label>
                        <input type="text" v-model="ve2">
                    </div>
                    <div>
                        <label for="name">价格</label>
                        <input type="text" v-model="price2">
                    </div>
                    <div>
                        <label for="name">简介</label>
                        <textarea name="" id="" cols="54" rows="2" v-model="jieshao2"></textarea>
                    </div>
                </div>
                <div class="recommend">
                    <label for="">推荐指数</label>
                    <span class="iconfont" v-for="(star,index) in star" :key="index">&#xe618;</span>
                </div>
                <div class="com">
                    <label for="">是否推荐</label>
                    <input type="checkbox" v-model="done2">
                </div>
                <div class="img">
                    <label for="">图片</label>
                    
                    <input type="file" id="files2" ref="refFile2" style="display: none" v-on:change="fileLoad2">
                    <div>
                        <input type="button" value="导入" id="fileImport2" v-on:click="clickLoad2" style="height: 200px; width: 200px;">
                        <img v-show="!i2" :src="getImgUrl(h2)" alt="" style="height: 200px; width: 200px;" v-on:click="clickLoad">
                    </div>
                    
                </div>
                <div class="fal">
                    <button @click="calgai" class="cel">取消</button>
                    <button @click="entergai">确定</button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        name:'Food',
        data(){
            return{
                cla:[],
                foods:[],
                fo:[],
                addfood:false,
                star:[1,2,3,4,5],
                i:true,
                h:'',
                tian:{},
                ve:'',
                price:'',
                jieshao:'',
                n:'',
                index:'',
                done:false,
                addfoodgai:false,
                dels:false,
                index1:'',
                index2:'',
                ve2:'',
                price2:'',
                jieshao2:'',
                done2:false,
                h2:'',
                index11:'',
                index22:'',
                i2:true
            }
        },
        methods:{
            getImgUrl (img) {
                if(img!=''){
                    return require("../../public/images/" + img);
                }
            },
            addfoods(i){
                this.index = i
                this.addfood = true
                this.i2 = true
                this.i1 = true
                console.log(this.h)
            },
            clickLoad(){
                this.$refs.refFile.dispatchEvent(new MouseEvent('click'))
                this.i = false
            },
            fileLoad(){
                const selectedFile = this.$refs.refFile.files[0];
                this.h = selectedFile.name
                console.log(this.h)
                // this.n = '../../public/images/'+this.h ; //选中文件的文件名
                var size = selectedFile.size; //选中文件的大小
                this.i = false
                // console.log("文件名:" + name + "大小:" + size);
            },
            clickLoad2(){
                this.$refs.refFile2.dispatchEvent(new MouseEvent('click'))
                this.i2 = false
            },
            fileLoad2(){
                const selectedFile = this.$refs.refFile.files[0];
                this.h2 = selectedFile.name
                console.log(this.h2)
                // this.n = '../../public/images/'+this.h ; //选中文件的文件名
                var size = selectedFile.size; //选中文件的大小
                this.i2 = false
            },
            cal(){
                this.addfood = false
                this.i = true
            },
            back(){
                this.addfood = false
                this.i = true
            },
            enter(){
                for(var i in this.cla){
                    if(this.index == i){
                        this.tian={
                            ve:this.ve,
                            price:this.price,
                            jieshao:this.jieshao,
                            n:this.h,
                            recommend:this.done
                        }
                        this.cla[i].foods.push(this.tian)
                        console.log(this.cla)
                    }
                }
                    const xhr = new XMLHttpRequest();
                    xhr.open('post', 'http://localhost:8081/gl/server');
                    xhr.setRequestHeader('content-type', 'application/json');
                    xhr.send(JSON.stringify(this.cla));
                    this.addfood = false
                    this.ve = ''
                    this.price=''
                    this.h = ''
                    this.jieshao=''
                    this.i = true
            },
            fix(i1,i2){
                this.addfoodgai = true
                this.index11 = i1
                this.index22 = i2
                console.log(i1,i2)
                // console.log(this.cla[i1].foods[i2])
                this.ve2 = this.cla[i1].foods[i2].ve
                this.price2 = this.cla[i1].foods[i2].price
                this.jieshao2 = this.cla[i1].foods[i2].jieshao
                this.h2 = this.cla[i1].foods[i2].n
                this.done2 = this.cla[i1].foods[i2].recommend
                this.i2 = false
                // this.cla[i1].foods[i2]
            },
            del(i1,i2){ 
                this.dels = true
                console.log(i1,i2)
                this.index1 = i1
                this.index2 = i2
            },
            backgai(){
                this.addfoodgai = false
                this.i2 = true
            },
            calgai(){
                this.addfoodgai = false
                this.i2 = true
            },
            entergai(){
                this.addfoodgai = false
                this.cla[this.index11].foods[this.index22].ve = this.ve2
                this.cla[this.index11].foods[this.index22].price = this.price2
                this.cla[this.index11].foods[this.index22].jieshao = this.jieshao2
                this.cla[this.index11].foods[this.index22].n = this.h2
                this.cla[this.index11].foods[this.index22].recommend = this.done2
                console.log(this.h2)
                const xhr = new XMLHttpRequest()
                xhr.open('post','http://localhost:8081/gl/server')
                xhr.setRequestHeader('content-type','application/json')
                xhr.send(JSON.stringify(this.cla))

            },
            en(){
                console.log(this.index1,this.index2)
                this.cla[this.index1].foods.splice(this.index2,1)
                const xhr = new XMLHttpRequest()
                xhr.open('post','http://localhost:8081/gl/server')
                xhr.setRequestHeader('content-type', 'application/json');
                xhr.send(JSON.stringify(this.cla))
                console.log(this.cla)
                this.dels = false
                
            },
            cels(){
                this.dels = false
            },
            backdel(){
                this.dels = false
            }
        },
        mounted(){
            // console.log(this.$route.query)
            // for(var i in this.$route.query){
            //     this.name.push(this.$route.query[i].name)
            // }
            this.cla = this.$route.query
            // this.$bus.$on('clas',(cla)=>{
            //     this.name = []
            //     for(var i in cla){
            //         this.name.push(cla[i].name)
            //     }
            // })
            // console.log(this.name)
            // console.log(this.$route)
            // this.$bus.$on('name',(name)=>{
            //     console.log('1')
            //     this.name = name
            // })
        },
        beforeCreate (){
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
                this.$bus.$on('cla',(cla)=>{
                    this.cla = cla
                })
        }
    }
</script>

<style scoped>
    .dies .hot{
        background: #fff;
        margin: 0px auto;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    .hot table{
        padding: 10px;
    }
    .hot .title{
        font-size: 25px;
        font-weight: bold;
        display: block;
        margin-bottom: 10px;
    }
    .hot tr td{
        position:relative;
        width: 200px;
        height: 200px;
        float:left;
        margin: 0 10px 20px 0;
    }
    .hot tr td div{
        display: flex;
        border-radius: 5px;
    }
    .hot tr td .icon{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .hot .edit{
        position: absolute;
        left: 0;
        top: 0;
    }
    .hot .icon img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .hot .icon div{
        position: absolute;
        bottom:0px;
        left: 0;
        color: #fff;
        width: 100%;
        height: 40px;
        background: rgba(0, 0, 0, .6);
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 10px;
    }
    .hot .icon div strong{
        color: #ff8400;
        font-size: 20px;
    }

    .edit{
        /* display: flex; */
        justify-content: space-around;
        width: 100%;
        height: 100%;
        align-items: center;
        background: rgba(0, 0, 0, .9);
        opacity: 0;
    }
    .edit span{
        font-size: 80px;
        cursor: pointer;
        color: #dbdbdb;
    }
    .hot tr td:hover .edit{
        opacity: 1;
    }
    .hot .edit span:hover{
        color: #ff8400;
    }
    .add{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;
        border:1px solid rgb(152, 151, 151)
    }
    .add span{
        font-size: 120px;
        color:#ccc
    }
    .add:hover{
        background: #eee;
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
        width: 800px;
        height: 600px;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right:0;
        bottom:0;
        margin:auto;
    }
    .tianjia .first{
        display: flex;
        justify-content: space-between;
        margin: 10px 10px;
        font-weight: bold;
    }
    .tianjia .first span:nth-child(2){
        cursor: pointer;
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
    .img input{
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
    .second{
        display: flex;
        flex-direction: column;
        margin:0 20px;
    }
    .second div{
        margin-top: 20px;
        display: flex;
    }
    .second div input{
        margin-left: 10px;
        height: 30px;
        box-sizing: border-box;
        flex: 1;
        overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
    }
    textarea{
        margin-left: 10px;
        flex: 1;
        overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
    }
    .recommend{
        margin: 20px 10px;
    }
    .recommend span{
        cursor: pointer;
    }
    .com{
        margin:20px 10px;

    }
    .com input{
        cursor: pointer;
    }
    .img{
        margin:10px 10px;
        display: flex;
        align-items: center;
    }
    .img div{
        margin-left: 10px;
        position: relative;
    }
    .img div img{
        position: absolute;
        top:0;
        left:0;
        cursor: pointer;
    }
    .outer .del{
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
    .outer .del .first{
        margin: 10px 10px;
        display: flex;
        justify-content: flex-end;
        font-weight: bold;
    }
    .outer .del .first span{
        cursor: pointer;
    }
</style>