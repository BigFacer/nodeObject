<template>
       <div class="index_div">
           <hand-nav class="web_hand_nav">

           </hand-nav>
           <div class="home_div">
               <p class="home_title">一个不断学习,不断积累</p>
               <p class="home_title2">头发茂密的90后程序员</p>
           </div>
          <router-view></router-view>
           <foot-nav>

           </foot-nav>

               <el-button v-show="isTop" class="top_button" @click="goTop"><span class="el-icon-arrow-up"></span></el-button>

       </div>
</template>
<style>
    .web_hand_nav{
        width: 100%;
        height: 6.5rem;
        position: fixed;
        z-index: 999;
        top: 0;
        background: #1DA7DA;
    }
   .index_div .top_button{
       position: fixed;
       right: 1.5rem;
       bottom: 10rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background: #1DA7DA ;
        color: #fff;

    }
    .el-icon-arrow-up{
        font-size: 3rem;
        margin-left: -1rem;
        margin-top: -0.5rem;
    }
    .home_div {
        /*height: 30rem;*/
        padding-top: 6.5rem;
        width: 100%;
        height: 40rem;
        background: #1DA7DA;

    }

    .home_title{
        padding-top: 6rem;
        font-size: 4rem;
        color: #fff;
        text-align: center;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    .home_title2{
        font-size: 4rem;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }

</style>
<script>
    import  handNav from '../components/HandNav/handNav.vue'
    import footNav from  '../components/FootNav/footNav.vue'
    export default {
        components: {
            'hand-nav': handNav,
            'foot-nav': footNav
        },
        data() {
            return {
                isTop: false
            }
        },
        mounted() {
          window.addEventListener("scroll", this.handleScroll);
        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset;
                if (scrollTop != undefined && scrollTop > 100) {
                    this.isTop = true
                } else {
                    this.isTop = false
                }
            },
            goTop() {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            },
            goTop() { // 动画

               let timer = setInterval(function () {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop
                    let ispeed = Math.floor(-osTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
                    this.isTop = true
                    if (osTop === 0) {
                        clearInterval(timer)
                    }
                }, 30)
            }
        }

    }
</script>