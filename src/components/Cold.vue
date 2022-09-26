<template>
  <div id="content">
        <div v-show="dialogVisible11" class="pop">
            <p>豇豆</p>
            <div class="secend">
                <p>￥12</p>
                <p>
                    <button @click="jian(1)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(1)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu11"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible12" class="pop">
            <p>拉皮黄瓜</p>
            <div class="secend">
                <p>￥16</p>
                <p>
                    <button @click="jian(2)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(2)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu12"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible13" class="pop">
            <p>甜甜圈</p>
            <div class="secend">
                <p>￥22</p>
                <p>
                    <button @click="jian(3)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n3}}</span>
                    <button @click="jia(3)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu13"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible21" class="pop">
            <p>豇豆</p>
            <div class="secend">
                <p>￥12</p>
                <p>
                    <button @click="jian(1)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(1)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu21"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible22" class="pop">
            <p>拉皮黄瓜</p>
            <div class="secend">
                <p>￥16</p>
                <p>
                    <button @click="jian(2)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(2)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu22"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible23" class="pop">
            <p>甜甜圈</p>
            <div class="secend">
                <p>￥22</p>
                <p>
                    <button @click="jian(3)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n3}}</span>
                    <button @click="jia(3)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu23"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible31" class="pop">
            <p>豇豆</p>
            <div class="secend">
                <p>￥12</p>
                <p>
                    <button @click="jian(1)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(1)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu31"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible32" class="pop">
            <p>拉皮黄瓜</p>
            <div class="secend">
                <p>￥16</p>
                <p>
                    <button @click="jian(2)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(2)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu32"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible33" class="pop">
            <p>甜甜圈</p>
            <div class="secend">
                <p>￥22</p>
                <p>
                    <button @click="jian(3)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n3}}</span>
                    <button @click="jia(3)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu33"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible41" class="pop">
            <p>豇豆</p>
            <div class="secend">
                <p>￥12</p>
                <p>
                    <button @click="jian(1)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(1)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu41"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible42" class="pop">
            <p>拉皮黄瓜</p>
            <div class="secend">
                <p>￥16</p>
                <p>
                    <button @click="jian(2)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(2)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu42"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible43" class="pop">
            <p>甜甜圈</p>
            <div class="secend">
                <p>￥22</p>
                <p>
                    <button @click="jian(3)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n3}}</span>
                    <button @click="jia(3)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu43"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible51" class="pop">
            <p>拉皮黄瓜</p>
            <div class="secend">
                <p>￥16</p>
                <p>
                    <button @click="jian(1)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(1)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu51"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible52" class="pop">
            <p>拉皮黄瓜</p>
            <div class="secend">
                <p>￥16</p>
                <p>
                    <button @click="jian(2)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(2)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu52"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible53" class="pop">
            <p>甜甜圈</p>
            <div class="secend">
                <p>￥22</p>
                <p>
                    <button @click="jian(3)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n3}}</span>
                    <button @click="jia(3)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu53"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible61" class="pop">
            <p>豇豆</p>
            <div class="secend">
                <p>￥12</p>
                <p>
                    <button @click="jian(1)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(1)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu61"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible62" class="pop">
            <p>拉皮黄瓜</p>
            <div class="secend">
                <p>￥16</p>
                <p>
                    <button @click="jian(2)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n}}</span>
                    <button @click="jia(2)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu62"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible63" class="pop">
            <p>甜甜圈</p>
            <div class="secend">
                <p>￥22</p>
                <p>
                    <button @click="jian(3)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n3}}</span>
                    <button @click="jia(3)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu63"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <ul class="foodList">
            <li>
                <img src="../../public/images/img06.jpeg" alt="">  
                <div class="bar">
                    <h3>豇豆</h3>
                    <p>
                        <span class="rmb">RMB</span>
                        <span class="price">12/一份</span>
                        <button @click="dialogVisible(1)"><span class="iconfont">&#xe622;</span></button>
                    </p>
                </div>
            </li>
            <li>
                <img src="../../public/images/img07.jpeg" alt="">  
                <div class="bar">
                    <h3>拉皮黄瓜</h3>
                    <p>
                        <span class="rmb">RMB</span>
                        <span class="price">16/一份</span>
                        <button @click="dialogVisible(2)"><span class="iconfont">&#xe622;</span></button>
                    </p>
                </div>
            </li>
            <li>
                <img src="../../public/images/img02.jpeg" alt="">  
                <div class="bar">
                    <h3>甜甜圈</h3>
                    <p>
                        <span class="rmb">RMB</span>
                        <span class="price">22/一份</span>
                        <button @click="dialogVisible(3)"><span class="iconfont">&#xe622;</span></button>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Cold',
        data(){
            return{
                dialogVisible11: false,
                dialogVisible12: false,
                dialogVisible13: false,
                dialogVisible21: false,
                dialogVisible22: false,
                dialogVisible23: false,
                dialogVisible31: false,
                dialogVisible32: false,
                dialogVisible33: false,
                dialogVisible41: false,
                dialogVisible42: false,
                dialogVisible43: false,
                dialogVisible51: false,
                dialogVisible52: false,
                dialogVisible53: false,
                dialogVisible61: false,
                dialogVisible62: false,
                dialogVisible63: false,
                title:'',
                price:'',
                n: 1,
                beizhu:'',
                people:'',
                x:'',
                img:'',
                g:'',
                beizhu11:'',
                beizhu12:'',
                beizhu13:'',
                beizhu21:'',
                beizhu22:'',
                beizhu23:'',
                beizhu31:'',
                beizhu32:'',
                beizhu33:'',
                beizhu41:'',
                beizhu42:'',
                beizhu43:'',
                beizhu51:'',
                beizhu52:'',
                beizhu53:'',
                beizhu61:'',
                beizhu62:'',
                beizhu63:'',
                n1:1,
                n2:1,
                n3:1,
                w:false,
            }
        },
        methods:{
            dialogVisible(i){
                if(this.x!=0){
                    this.dialogVisible1 = true
                    this.g = i
                    if(this.n0 == 1){
                         if(i==1){
                            this.dialogVisible11 = true
                            this.title = '豇豆'
                            this.price = 12
                            this.img = 'img06'
                        }
                        if(i==2){
                            this.dialogVisible12 = true
                            this.title = '拉皮黄瓜'
                            this.price = 16
                            this.img = 'img07'
                        }
                        if(i==3){
                            this.dialogVisible13 = true
                            this.title = '甜甜圈'
                            this.price = 22
                            this.img = 'img02'
                        }
                    }
                   if(this.n0 == 2){
                         if(i==1){
                            this.dialogVisible21 = true
                            this.title = '豇豆'
                            this.price = 12
                            this.img = 'img06'
                        }
                        if(i==2){
                            this.dialogVisible22 = true
                            this.title = '拉皮黄瓜'
                            this.price = 16
                            this.img = 'img07'
                        }
                        if(i==3){
                            this.dialogVisible23 = true
                            this.title = '甜甜圈'
                            this.price = 22
                            this.img = 'img02'
                        }
                    }
                    if(this.n0 == 3){
                         if(i==1){
                            this.dialogVisible31 = true
                            this.title = '豇豆'
                            this.price = 12
                            this.img = 'img06'
                        }
                        if(i==2){
                            this.dialogVisible32 = true
                            this.title = '拉皮黄瓜'
                            this.price = 16
                            this.img = 'img07'
                        }
                        if(i==3){
                            this.dialogVisible33 = true
                            this.title = '甜甜圈'
                            this.price = 22
                            this.img = 'img02'
                        }
                    }
                    if(this.n0 == 4){
                         if(i==1){
                            this.dialogVisible41 = true
                            this.title = '豇豆'
                            this.price = 12
                            this.img = 'img06'
                        }
                        if(i==2){
                            this.dialogVisible42 = true
                            this.title = '拉皮黄瓜'
                            this.price = 16
                            this.img = 'img07'
                        }
                        if(i==3){
                            this.dialogVisible43 = true
                            this.title = '甜甜圈'
                            this.price = 22
                            this.img = 'img02'
                        }
                    }
                    if(this.n0 == 5){
                         if(i==1){
                            this.dialogVisible51 = true
                            this.title = '豇豆'
                            this.price = 12
                            this.img = 'img06'
                        }
                        if(i==2){
                            this.dialogVisible52 = true
                            this.title = '拉皮黄瓜'
                            this.price = 16
                            this.img = 'img07'
                        }
                        if(i==3){
                            this.dialogVisible53 = true
                            this.title = '甜甜圈'
                            this.price = 22
                            this.img = 'img02'
                        }
                    }
                    if(this.n0 == 6){
                         if(i==1){
                            this.dialogVisible61 = true
                            this.title = '豇豆'
                            this.price = 12
                            this.img = 'img06'
                        }
                        if(i==2){
                            this.dialogVisible62 = true
                            this.title = '拉皮黄瓜'
                            this.price = 16
                            this.img = 'img07'
                        }
                        if(i==3){
                            this.dialogVisible63 = true
                            this.title = '甜甜圈'
                            this.price = 22
                            this.img = 'img02'
                        }
                    }
                }
                
            },
            enter(){
                this.dialogVisible11 = false
                this.dialogVisible12 = false
                this.dialogVisible13 = false
                this.dialogVisible21 = false
                this.dialogVisible22 = false
                this.dialogVisible23 = false
                this.dialogVisible31 = false
                this.dialogVisible32 = false
                this.dialogVisible33 = false
                this.dialogVisible41 = false
                this.dialogVisible42 = false
                this.dialogVisible43 = false
                this.dialogVisible51 = false
                this.dialogVisible52 = false
                this.dialogVisible53 = false
                this.dialogVisible61 = false
                this.dialogVisible62 = false
                this.dialogVisible63 = false
                this.$bus.$emit('xiangtong12',this.beizhu13,this.beizhu23,this.beizhu33,this.beizhu43,this.beizhu53,this.beizhu63)
                this.u = true
                if(this.g == 1){
                    if(this.n0 == 1){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu11,this.u)
                        this.u = false
                    }
                    if(this.n0 == 2){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu21,this.u)
                        this.u = false
                    }
                    if(this.n0 == 3){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu31,this.u)
                        this.u = false
                    }
                    if(this.n0 == 4){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu41,this.u)
                        this.u = false
                    }
                    if(this.n0 == 5){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu51,this.u)
                        this.u = false
                    }
                    if(this.n0 == 6){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu61,this.u)
                        this.u = false
                    }

                }
                if(this.g == 2){
                    if(this.n0 == 1){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu12,this.u)
                        this.u = false
                    }
                    if(this.n0 == 2){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu22,this.u)
                        this.u = false
                    }
                    if(this.n0 == 3){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu32,this.u)
                        this.u = false
                    }
                    if(this.n0 == 4){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu42,this.u)
                        this.u = false
                    }
                    if(this.n0 == 5){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu52,this.u)
                        this.u = false
                    }
                    if(this.n0 == 6){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu62,this.u)
                        this.u = false
                    }
                }
                if(this.g == 3){
                    if(this.n0 == 1){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu13,this.u)
                        this.u = false
                    }
                    if(this.n0 == 2){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu23,this.u)
                        this.u = false
                    }
                    if(this.n0 == 3){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu33,this.u)
                        this.u = false
                    }
                    if(this.n0 == 4){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu43,this.u)
                        this.u = false
                    }
                    if(this.n0 == 5){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu53,this.u)
                        this.u = false
                    }
                    if(this.n0 == 6){
                        this.$bus.$emit('s3',this.price,this.n,this.title,this.img,this.beizhu63,this.u)
                        this.u = false
                    }
                }    
            },
            cancel(){
                this.dialogVisible11 = false
                this.dialogVisible12 = false
                this.dialogVisible13 = false
                this.dialogVisible21 = false
                this.dialogVisible22 = false
                this.dialogVisible23 = false
                this.dialogVisible31 = false
                this.dialogVisible32 = false
                this.dialogVisible33 = false
                this.dialogVisible41 = false
                this.dialogVisible42 = false
                this.dialogVisible43 = false
                this.dialogVisible51 = false
                this.dialogVisible52 = false
                this.dialogVisible53 = false
                this.dialogVisible61 = false
                this.dialogVisible62 = false
                this.dialogVisible63 = false
                this.n = 1
            },
            jia(){
                this.n++;
            },
            jian(){
                this.n--;
                if(this.n<=1){
                    this.n=1
                }
            }
        },
        beforeCreate(){
            this.$bus.$on('people',(people,x)=>{
                this.people = people
                this.x = x
            })
            this.$bus.$on('ordering',(w,n,b,beizhu1,beizhu2,beizhu3)=>{
                this.n0 = n
                this.w = w
            })
            this.$bus.$on('xiangtong1',(beizhu12,beizhu22,beizhu32,beizhu42,beizhu52,beizhu62)=>{
                this.beizhu13 = beizhu12
                this.beizhu23 = beizhu22
                this.beizhu33 = beizhu32
                this.beizhu43 = beizhu42
                this.beizhu53 = beizhu52
                this.beizhu63 = beizhu62
            })
        }
    }
</script>

<style scoped>
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
   h3,p{
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
   .secend{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
   }
   .secend input{
    display: block;
    width: 100%;
    height: 200px;
   }
   .secend p:nth-child(1){
    color: #ff8400;
    font-size: 20px;
   }
   .secend button{
    border:1px solid #ff8400;
    background: #ff8400;
    color:#fff;
    padding:0;
    vertical-align: middle;
   }
   .secend .num{
    padding: 0 5px;
    border-top: 1px solid #ff8400;
    border-bottom: 1px solid #ff8400;
    vertical-align: middle;
    font-size: 14px;
   }
   .footer{
    display: flex;
    justify-content: flex-end;
   }
   .footer button:nth-child(2){
    background: #ff8400;
    color:#fff
   }
   .footer button:nth-child(1){
    color:rgb(43, 41, 41)
   }
</style>