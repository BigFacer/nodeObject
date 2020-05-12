<template>
    <div id="login-div">
        <div class="login">
            <div class="title-div"><span class="title">welcome</span></div>
            <el-row class="name-div">
                <el-row class=" name">
                    <el-col :span="2">
                        <i class="el-icon-user-solid el-icon"></i>
                    </el-col>
                    <el-col :span="22">
                        <input class="name-input" type="text" v-model="username" >
                    </el-col>
                </el-row>
                <p class="bottom-line"></p>
                <el-row class=" name">
                    <el-col :span="2">
                        <i class="el-icon-key el-icon"></i>
                    </el-col>
                    <el-col :span="22">
                        <input class="name-input" type="password" v-model="password">
                    </el-col>
                </el-row>
                <p class="bottom-fline "></p>
            </el-row>
            <div class="login-btn-div" @click="Login">
                <span>  <i class="el-icon-right"></i> </span>
            </div>
        </div>
    </div>
</template>
<style>
    @import "../../assets/style/login.css";
</style>
<script>
    const  Base64 = require('js-base64').Base64
    export default {
        name: 'Login',
        data () {
            return {
                username: '',
                password: '',
                encrydate: '',
            }
        },
        created() {
          this.getencryDate()
        },
        methods: {
            error(data) {
                this.$message.error(data);
            },
            getencryDate () {
                this.$http({
                    url: '/api/getencryDate',
                    method: 'GET',
                }).then( (res) => {
                    this.encrydate = res.data
                })
            },
            Login () {
             if(this.username ===''|| this.password === ''){
                     this.error('请填写用户名和密码')
             }else{
                 let password =   Base64.encode(this.password)
                 this.$http({
                     url:'/api/login',
                     method:'GET',
                     params:{
                         PersonName: this.username,
                         PersonPassword: password
                     }
                 }).then( (res) => {
                     if(res.data.isSuccess){
                         this.$router.push('/Admin');
                         sessionStorage.setItem('access_token', res.data.data[0].Token)
                         this.$store.commit('setToken',res.data.data[0].Token);
                         this.$store.commit('setValue',res.data.data[0]);
                     }else {
                         this.error(res.data.errorMessage)
                     }
                 });
             }


            }
        }

    }
</script>
