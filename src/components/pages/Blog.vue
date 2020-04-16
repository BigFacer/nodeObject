<template>
    <div>
        <el-button type="primary" @click="login">调用后台接口</el-button>
        <el-input v-model="inpContent"></el-input>
        <el-button type="primary" @click="getTableList">菜单</el-button>
    </div>
</template>
<script>
export default {
//    name: "Blog ",
    data () {
        return {
            inpContent: 'Blog',
            token: ''
        }
    },
    methods: {
            login() {
                this.$http({
                    method: 'GET',
                    url: '/api/login',
                    params: {
                        PersonName: this.inpContent
                    }
                }).then( (res) => {
//                    this.$store.state.commit('token', res.data.data[0].token)
                    console.log('res', res)
                    this.token = res.data.data[0].token
                })
            },
        getTableList() {
            this.$http({
                method: 'GET',
                url: '/api/getTableList',
                params: {
                    token:  this.token
                }
            }).then( (res) => {
                console.log('res', res)
            })
        }
    }
}

</script>