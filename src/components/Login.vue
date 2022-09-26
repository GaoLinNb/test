<template>
    <div>
        <div>
            <div class="wrap" v-show="log">
                <p>
                    <label for="userName">账户</label>
                    <input type="text" placeholder="请输入用户名" v-model="userName" @blur="name">
                    <span v-show="username" class="tips">请输入正确的用户名</span>
                </p>
                <p>
                    <label for="userpassword">密码</label>
                    <input type="password" placeholder="请输入密码" v-model="userPassword" @blur="password">
                    <span v-show="userpassword" class="tips">请输入正确的密码</span>
                </p>
                <div>
                    <button @click="login">登录</button>
                    <button @click="reg">注册</button>
                </div>
            </div>
            <div class="wrap" v-show="!log">
                <p>
                    <label for="userName">新账户</label>
                    <input type="text" placeholder="请输入用户名" @click="enterUserName" v-model="makeUserName">
                        <span v-show="error1" class="iconfont error">&#xe65a;</span>
                        <span v-show="error11" class="tishi1 error">用户名已存在</span>
                        <span v-show="error12" class="tishi1 error">用户名错误</span>
                    
                    <span v-show="correct1" class="iconfont correct">&#xeaf1;</span>
                </p>
                <p>
                    <label for="userpassword">新密码</label>
                    <input type="password" placeholder="最少6位,只能是数字和字母" v-model="makeUserPassword" @click="enterUserPassword">
                    <span v-show="error2" class="iconfont error">&#xe65a;</span>
                    <span v-show="error21" class="tishi1 error">密码格式错误</span>
                    <span v-show="correct2" class="iconfont correct">&#xeaf1;</span>
                </p>
                <p>
                    <label for="userpassword">确认密码</label>
                    <input type="password" placeholder="请确认新密码" v-model="makeUserPasswordEnter" @click="enterUserPassword2">
                    <span v-show="userpassword" class="tips">请输入正确的密码</span>
                    <span v-show="error3" class="iconfont error">&#xe65a;</span>
                    <span v-show="error31" class="tishi1 error">密码不一致</span>
                    <span v-show="correct3" class="iconfont correct">&#xeaf1;</span>
                </p>
                <div>
                    <button @click="register">注册</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name:'Login',
        data(){
            return{
                username: false,
                userpassword: false,
                log:true,
                userName:'',
                userPassword:'',
                error1:false,
                correct1:false,
                error2:false,
                correct2:false,
                error3:false,
                correct3:false,
                makeUserName:'',
                makeUserPassword:'',
                makeUserPasswordEnter:'',

                error11:false,
                error12:false,
                error21:false,
                error31:false,
                l:false,
                index0:-1
            }
        },
        methods:{
            name(){
                let user = this.getUserInfo()
                for(var i=0;i<user.length;i++){
                    if(this.userName == user[i].userName){
                        this.l = true
                    }
                    if(this.userName === ''){
                        this.username = false
                    }
                }
                if(this.l){
                    this.username = false
                    this.l = false
                }else{
                    this.username = true
                }
                
            },
            password(){
                let user = this.getUserInfo()
                user.forEach((item,index)=>{
                    if(this.userName == item.userName){
                        this.index0 = index
                    }
                })
                if(this.index0 !=-1){
                    console.log(user[this.index0].userPassword.toString(),'+',this.userPassword)
                    if(user[this.index0].userPassword.toString() === this.userPassword){
                        this.userpassword = false
                    }else{
                        this.userpassword = true
                    }
                }else{
                    this.userpassword = true
                }
            },
            reg(){
                this.log = false
            },
            register(){
                this.log = true
                if(this.correct1&&this.correct2&&this.correct3){
                    let newUser = {
                        userName:this.makeUserName,
                        userPassword:this.makeUserPassword
                    }
                    let user = this.getUserInfo()
                    user.push(newUser)
                    console.log(user)

                    localStorage.setItem('User',JSON.stringify(user))
                    this.makeUserName = ''
                    this.makeUserPassword = ''
                    this.makeUserPasswordEnter = ''
                }
            },
            login(){
                this.getUserInfo().forEach((item,index) => {
                    if(this.userName == item.userName&&this.userPassword == item.userPassword){
                        // console.log('登录成功')
                        this.$router.push({
                            name:'Productor',
                            query:{
                                User:this.userName,
                            }
                        })
                    }
                });
                
                // console.log(this.$router)
            },
            enterUserName(){
                let user = this.getUserInfo()
                let userNameReg = /^[a-zA-Z0-9_-]{4,16}$/;
                
                user.forEach((item,index)=>{
                    // 新建用户名
                    
                    setInterval(()=>{
                        if(item.userName == this.makeUserName){
                            this.error1 = true
                            this.correct1 = false
                            this.error11 = true
                            this.error12 = false
                        }
                        if(userNameReg.test(this.makeUserName)&&item.userName != this.makeUserName){
                            this.correct1 = true
                            this.error1 = false
                            this.error11 = false
                            this.error12 = false
                        }
                        if(!userNameReg.test(this.makeUserName)){
                            this.correct1 = false
                            this.error1 = true
                            this.error11 = false
                            this.error12 = true
                        }
                        if(this.makeUserName === ''){
                            this.correct1 = false
                            this.error1 = false
                            this.error11 = false
                            this.error12 = false
                        }
                    },2000)
                    
                })
            },
            enterUserPassword(){
                //添加新密码
                let userPasswordReg = /^[a-zA-Z0-9]{6,}$/
                setInterval(()=>{
                    if(userPasswordReg.test(this.makeUserPassword)){
                        this.correct2 = true
                        this.error2 = false
                        this.error21 = false
                    }
                    if(!userPasswordReg.test(this.makeUserPassword)){
                        this.correct2 = false
                        this.error2 = true
                        this.error21 = true
                    }
                    if(this.makeUserPassword === ''){
                        this.correct2 = false
                        this.error2 = false
                        this.error21 = false
                    }
                },2000)
                
            },
            enterUserPassword2(){
                setInterval(()=>{
                    if(this.makeUserPassword == this.makeUserPasswordEnter){
                        this.correct3 = true
                        this.error3 = false
                        this.error31 = false
                    }else{
                        this.correct3 = false
                        this.error3 = true
                        this.error31 = true
                    }
                    
                },2000)
                if(this.makeUserPasswordEnter = ''){
                        this.correct3 = false
                        this.error31 = false
                        this.error3 = false
                    }
            },
            getUserInfo(){
                let user = JSON.parse(localStorage.getItem('User'))
                return user
            }
        },
        mounted(){
            let user = JSON.parse(localStorage.getItem('User'))
            if(!user){
                var users = [{
                    userName:'GL123',
                    userPassword:123
                }]
                localStorage.setItem('User',JSON.stringify(users))
            }
            
            
        }
    }
</script>

<style scoped>
    html body{
        margin: 0;
        padding: 0;
    }
    .wrap{
        background: url('../../public/images/login.jpeg') no-repeat center;
        height: 100vh;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }
    .wrap p{
        width: 550px;
        display: flex;
        background: #fff;
        font-size: 24px;
        border-radius: 30px;
        line-height: 65px;
        position: relative;
        margin-bottom: 20px;
    }
    .wrap input{
        width: 100%;
        border:none;
        font-size: 20px;
        color: #b2b2b2;
        padding-left: 10px;
        border-radius: 0 30px 30px 0;
    }
    .wrap label{
        width: 130px;
        background: #ff8400;
        color: #fff;
        text-align: center;
        border-radius: 30px;
    }
    .wrap .tips{
        position: absolute;
        top: 0;
        right: 20px;
        font-size: 16px;
        color: red;
    }
    input::placeholder{
        color: #ccc;
        font-size: 16px;
    }
    .wrap button{
        width: 120px;
        height: 65px;
        margin: 0 10px;
        background: #ff8400;
        font-size: 24px;
        color: #fff;
        border-radius: 30px;
        cursor: pointer;
    }
    .wrap button:nth-child(2){
        background: #cc2e2a;
    }
    .error{
        position: absolute;
        right: 20px;
        top:0;
        font-size: 16px;
        color: red;

    }
    .correct{
        position: absolute;
        right: 20px;
        top:0;
        font-size: 30px;
        color: rgb(0, 128, 51);
    }
    .tishi1{
        position: absolute;
        right:-220px;
        width: 200px;
        color: red;
    }
</style>