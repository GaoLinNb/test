<template>
    <div id="content">
         <div v-show="dialogVisible11" class="pop">
            <p>尖椒小炒肉</p>
            <div class="secend">
                <p>￥66</p>
                <p>
                    <button @click="jian(1)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n1}}</span>
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
            <p>猪心</p>
            <div class="secend">
                <p>￥50</p>
                <p>
                    <button @click="jian(2)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n2}}</span>
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
            <p>红烧肉</p>
            <div class="secend">
                <p>￥26</p>
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
            <p>尖椒小炒肉</p>
            <div class="secend">
                <p>￥66</p>
                <p>
                    <button @click="jian(4)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n4}}</span>
                    <button @click="jia(4)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu21"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible22" class="pop">
            <p>猪心</p>
            <div class="secend">
                <p>￥50</p>
                <p>
                    <button @click="jian(5)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n5}}</span>
                    <button @click="jia(5)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu22"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible23" class="pop">
            <p>红烧肉</p>
            <div class="secend">
                <p>￥26</p>
                <p>
                    <button @click="jian(6)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n6}}</span>
                    <button @click="jia(6)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu23"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible31" class="pop">
            <p>尖椒小炒肉</p>
            <div class="secend">
                <p>￥66</p>
                <p>
                    <button @click="jian(7)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n7}}</span>
                    <button @click="jia(7)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu31"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible32" class="pop">
            <p>猪心</p>
            <div class="secend">
                <p>￥50</p>
                <p>
                    <button @click="jian(8)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n8}}</span>
                    <button @click="jia(8)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu32"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible33" class="pop">
            <p>红烧肉</p>
            <div class="secend">
                <p>￥26</p>
                <p>
                    <button @click="jian(9)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n9}}</span>
                    <button @click="jia(9)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu33"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible41" class="pop">
            <p>尖椒小炒肉</p>
            <div class="secend">
                <p>￥66</p>
                <p>
                    <button @click="jian(10)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n10}}</span>
                    <button @click="jia(10)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu41"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible42" class="pop">
            <p>猪心</p>
            <div class="secend">
                <p>￥50</p>
                <p>
                    <button @click="jian(11)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n11}}</span>
                    <button @click="jia(11)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu42"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible43" class="pop">
            <p>红烧肉</p>
            <div class="secend">
                <p>￥26</p>
                <p>
                    <button @click="jian(12)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n12}}</span>
                    <button @click="jia(12)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu43"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible51" class="pop">
            <p>尖椒小炒肉</p>
            <div class="secend">
                <p>￥66</p>
                <p>
                    <button @click="jian(13)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n13}}</span>
                    <button @click="jia(13)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu51"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible52" class="pop">
            <p>猪心</p>
            <div class="secend">
                <p>￥50</p>
                <p>
                    <button @click="jian(14)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n14}}</span>
                    <button @click="jia(14)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu52"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible53" class="pop">
            <p>红烧肉</p>
            <div class="secend">
                <p>￥26</p>
                <p>
                    <button @click="jian(15)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n15}}</span>
                    <button @click="jia(15)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu53"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible61" class="pop">
            <p>尖椒小炒肉</p>
            <div class="secend">
                <p>￥66</p>
                <p>
                    <button @click="jian(16)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n16}}</span>
                    <button @click="jia(16)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu61"></textarea>
            <div class="footer">
                <button @click="cancel(1)">取消</button>
                <button @click="enter(1)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible62" class="pop">
            <p>猪心</p>
            <div class="secend">
                <p>￥50</p>
                <p>
                    <button @click="jian(17)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n17}}</span>
                    <button @click="jia(17)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu62"></textarea>
            <div class="footer">
                <button @click="cancel(2)">取消</button>
                <button @click="enter(2)">确定</button>
            </div>
        </div>
        <div v-show="dialogVisible63" class="pop">
            <p>红烧肉</p>
            <div class="secend">
                <p>￥26</p>
                <p>
                    <button @click="jian(18)"><span class="iconfont">&#xe624;</span></button>
                    <span class="num">{{n18}}</span>
                    <button @click="jia(18)"><span class="iconfont">&#xeb78;</span></button>
                </p>
            </div>
            <textarea placeholder="请输入备注" name="" id="" cols="65" rows="10" v-model="beizhu63"></textarea>
            <div class="footer">
                <button @click="cancel(3)">取消</button>
                <button @click="enter(3)">确定</button>
            </div>
        </div>
        <ul class="foodList">
            <li v-for="(food,index) in foods" :key="index">
                <img :src="getImgUrl(food.n)" alt="">  
                <div class="bar">
                    <h3>{{food.ve}}</h3>
                    <p>
                        <span class="rmb">RMB</span>
                        <span class="price">{{food.peice}}/一份</span>
                        <button @click="dialogVisible(1)"><span class="iconfont">&#xe622;</span></button>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Hot',
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
                n4:1,
                n5:1,
                n6:1,
                n7:1,
                n8:1,
                n9:1,
                n10:1,
                n11:1,
                n12:1,
                n13:1,
                n14:1,
                n15:1,
                n16:1,
                n17:1,
                n18:1,
                w:false,
                n0:0,
                u:false,
                foods:[]
            }
        },
        methods:{
            getImgUrl (img) {
                return require("../../public/images/" + img);
            },
            dialogVisible(i){
                if(this.x != 0){
                    this.g = i
                    if(this.n0 == 1){
                        if(i==1){
                            this.dialogVisible11 = true
                            this.title = '尖椒小炒肉'
                            this.price = 66
                            this.img = 'img04'
                        }
                        if(i==2){
                            this.dialogVisible12 = true
                            this.title = '猪心'
                            this.price = 50
                            this.img = 'img05'
                        }
                        if(i==3){
                            this.dialogVisible13 = true
                            this.title = '红烧肉'
                            this.price = 26
                            this.img = 'img03'
                        }
                    }
                     if(this.n0 == 2){
                        if(i==1){
                            this.dialogVisible21 = true
                            this.title = '尖椒小炒肉'
                            this.price = 66
                            this.img = 'img04'
                        }
                        if(i==2){
                            this.dialogVisible22 = true
                            this.title = '猪心'
                            this.price = 50
                            this.img = 'img05'
                        }
                        if(i==3){
                            this.dialogVisible23 = true
                            this.title = '红烧肉'
                            this.price = 26
                            this.img = 'img03'
                        }
                    }
                     if(this.n0 == 3){
                        if(i==1){
                            this.dialogVisible31 = true
                            this.title = '尖椒小炒肉'
                            this.price = 66
                            this.img = 'img04'
                        }
                        if(i==2){
                            this.dialogVisible32 = true
                            this.title = '猪心'
                            this.price = 50
                            this.img = 'img05'
                        }
                        if(i==3){
                            this.dialogVisible33 = true
                            this.title = '红烧肉'
                            this.price = 26
                            this.img = 'img03'
                        }
                    }
                     if(this.n0 == 4){
                        if(i==1){
                            this.dialogVisible41 = true
                            this.title = '尖椒小炒肉'
                            this.price = 66
                            this.img = 'img04'
                        }
                        if(i==2){
                            this.dialogVisible42 = true
                            this.title = '猪心'
                            this.price = 50
                            this.img = 'img05'
                        }
                        if(i==3){
                            this.dialogVisible43 = true
                            this.title = '红烧肉'
                            this.price = 26
                            this.img = 'img03'
                        }
                    }
                     if(this.n0 == 5){
                        if(i==1){
                            this.dialogVisible51 = true
                            this.title = '尖椒小炒肉'
                            this.price = 66
                            this.img = 'img04'
                        }
                        if(i==2){
                            this.dialogVisible52 = true
                            this.title = '猪心'
                            this.price = 50
                            this.img = 'img05'
                        }
                        if(i==3){
                            this.dialogVisible53 = true
                            this.title = '红烧肉'
                            this.price = 26
                            this.img = 'img03'
                        }
                    }
                    if(this.n0 == 6){
                        if(i==1){
                            this.dialogVisible61 = true
                            this.title = '尖椒小炒肉'
                            this.price = 66
                            this.img = 'img04'
                        }
                        if(i==2){
                            this.dialogVisible62 = true
                            this.title = '猪心'
                            this.price = 50
                            this.img = 'img05'
                        }
                        if(i==3){
                            this.dialogVisible63 = true
                            this.title = '红烧肉'
                            this.price = 26
                            this.img = 'img03'
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
                this.$bus.$emit('xiangtong22',this.beizhu13,this.beizhu23,this.beizhu33,this.beizhu43,this.beizhu53,this.beizhu63)
                // console.log(this.beizhu)
                
                // 
              this.u = true
                if(this.g == 1){
                    if(this.n0 == 1){
                        this.$bus.$emit('s2',this.price,this.n1,this.title,this.img,this.beizhu11,this.u)
                        this.u = false
                    }
                    if(this.n0 == 2){
                        this.$bus.$emit('s2',this.price,this.n4,this.title,this.img,this.beizhu21,this.u)
                        this.u = false
                    }
                    if(this.n0 == 3){
                        this.$bus.$emit('s2',this.price,this.n7,this.title,this.img,this.beizhu31,this.u)
                        this.u = false
                    }
                    if(this.n0 == 4){
                        this.$bus.$emit('s2',this.price,this.n10,this.title,this.img,this.beizhu41,this.u)
                        this.u = false
                    }
                    if(this.n0 == 5){
                        this.$bus.$emit('s2',this.price,this.n13,this.title,this.img,this.beizhu51,this.u)
                        this.u = false
                    }
                    if(this.n0 == 6){
                        this.$bus.$emit('s2',this.price,this.n16,this.title,this.img,this.beizhu61,this.u)
                        this.u = false
                    }

                }
                if(this.g == 2){
                    if(this.n0 == 1){
                        this.$bus.$emit('s2',this.price,this.n2,this.title,this.img,this.beizhu12,this.u)
                        this.u = false
                    }
                    if(this.n0 == 2){
                        this.$bus.$emit('s2',this.price,this.n5,this.title,this.img,this.beizhu22,this.u)
                        this.u = false
                    }
                    if(this.n0 == 3){
                        this.$bus.$emit('s2',this.price,this.n8,this.title,this.img,this.beizhu32,this.u)
                        this.u = false
                    }
                    if(this.n0 == 4){
                        this.$bus.$emit('s2',this.price,this.n11,this.title,this.img,this.beizhu42,this.u)
                        this.u = false
                    }
                    if(this.n0 == 5){
                        this.$bus.$emit('s2',this.price,this.n14,this.title,this.img,this.beizhu52,this.u)
                        this.u = false
                    }
                    if(this.n0 == 6){
                        this.$bus.$emit('s2',this.price,this.n17,this.title,this.img,this.beizhu62,this.u)
                        this.u = false
                    }
                }
                if(this.g == 3){
                    if(this.n0 == 1){
                        this.$bus.$emit('s2',this.price,this.n3,this.title,this.img,this.beizhu13,this.u)
                        this.u = false
                    }
                    if(this.n0 == 2){
                        this.$bus.$emit('s2',this.price,this.n6,this.title,this.img,this.beizhu23,this.u)
                        this.u = false
                    }
                    if(this.n0 == 3){
                        this.$bus.$emit('s2',this.price,this.n9,this.title,this.img,this.beizhu33,this.u)
                        this.u = false
                    }
                    if(this.n0 == 4){
                        this.$bus.$emit('s2',this.price,this.n12,this.title,this.img,this.beizhu43,this.u)
                        this.u = false
                    }
                    if(this.n0 == 5){
                        this.$bus.$emit('s2',this.price,this.n15,this.title,this.img,this.beizhu53,this.u)
                        this.u = false
                    }
                    if(this.n0 == 6){
                        this.$bus.$emit('s2',this.price,this.n18,this.title,this.img,this.beizhu63,this.u)
                        this.u = false
                    }
                }                  
                this.n = 1
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
            jia(i){
                 if(i == 1){
                    this.n1++
                }
                if(i == 2){
                    this.n2++
                }
                if(i == 3){
                    this.n3++
                }
                if(i == 4){
                    this.n4++
                }
                if(i == 5){
                    this.n5++
                }
                if(i == 6){
                    this.n6++
                }
                if(i == 7){
                    this.n7++
                }
                if(i == 8){
                    this.n8++
                }
                if(i == 9){
                    this.n9++
                }
                if(i == 10){
                    this.n10++
                }
                if(i == 11){
                    this.n11++
                }
                if(i == 12){
                    this.n12++
                }
                if(i == 13){
                    this.n13++
                }
                if(i == 14){
                    this.n14++
                }
                if(i == 15){
                    this.n15++
                }
                if(i == 16){
                    this.n16++
                }
                if(i == 17){
                    this.n17++
                }
                if(i == 18){
                    this.n18++
                }
            },
            jian(i){
                if(i == 1){
                    this.n1--
                    if(this.n1<=1){
                        this.n1=1
                    }
                }
                if(i == 2){
                    this.n2--
                    if(this.n2<=1){
                        this.n2=1
                    }
                }
                if(i == 3){
                    this.n3--
                    if(this.n3<=1){
                        this.n3=1
                    }
                }
                if(i == 4){
                    this.n4--
                    if(this.n4<=1){
                        this.n4=1
                    }
                }
                if(i == 5){
                    this.n5--
                    if(this.n5<=1){
                        this.n5=1
                    }
                }
                if(i == 6){
                    this.n6--
                    if(this.n6<=1){
                        this.n6=1
                    }
                }
                if(i == 7){
                    this.n7--
                    if(this.n7<=1){
                        this.n7=1
                    }
                }
                if(i == 8){
                    this.n8--
                    if(this.n8<=1){
                        this.n8=1
                    }
                }
                if(i == 9){
                    this.n9--
                    if(this.n9<=1){
                        this.n9=1
                    }
                }
                if(i == 10){
                    this.n10--
                    if(this.n10<=1){
                        this.n10=1
                    }
                }
                if(i == 11){
                    this.n11--
                    if(this.n11<=1){
                        this.n11=1
                    }
                }
                if(i == 12){
                    this.n12--
                    if(this.n12<=1){
                        this.n12=1
                    }
                }
                if(i == 13){
                    this.n13--
                    if(this.n13<=1){
                        this.n13=1
                    }
                }
                if(i == 14){
                    this.n14--
                    if(this.n14<=1){
                        this.n14=1
                    }
                }
                if(i == 15){
                    this.n15--
                    if(this.n15<=1){
                        this.n15=1
                    }
                }
                if(i == 16){
                    this.n16--
                    if(this.n16<=1){
                        this.n16=1
                    }
                }
                if(i == 17){
                    this.n17--
                    if(this.n17<=1){
                        this.n17=1
                    }
                }
                if(i == 18){
                    this.n18--
                    if(this.n18<=1){
                        this.n18=1
                    }
                }
            }
        },
        beforeCreate(){
            this.$axios.get('http://localhost:8081/gl/server').then(
					response=>{
                        for(var i in response.data.cla){
                            for(var j in response.data.cla[i].foods){
                                this.foods.push(response.data.cla[i].foods[j])
                            }
                        }
                        console.log(this.foods)
                        this.cla = response.data.cla
						console.log('请求成功',response.data)
					},
					error=>{
						console.log('请求失败了',error.message)
					}
				)
           this.$bus.$on('people',(people,x)=>{
                this.people = people
                this.x = x
            })
            this.$bus.$on('ordering',(w,n,b,beizhu1,beizhu2,beizhu3)=>{
                this.n0 = n
                this.w = w
            })
            this.$bus.$on('xiangtong2',(beizhu13,beizhu23,beizhu33,beizhu43,beizhu53,beizhu63)=>{
                this.beizhu13 = beizhu13
                this.beizhu23 = beizhu23
                this.beizhu33 = beizhu33
                this.beizhu43 = beizhu43
                this.beizhu53 = beizhu53
                this.beizhu63 = beizhu63
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
/* .pop textarea{
    margin:20px 0
} */
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