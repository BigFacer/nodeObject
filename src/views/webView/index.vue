<template>
       <div>
           <hand-nav class="hand_nav">
           </hand-nav>
          <router-view></router-view>
       </div>
</template>
<style>
    .hand_nav{
        width: 100%;
        height: 6.5rem;
        position: fixed;
        z-index: 999;
        top: 0;
        background: #1DA7DA;
    }

</style>
<script>
    import  handNav from '../components/HandNav/handNav.vue'
    export default {
        components: {
            'hand-nav': handNav
        },
        data() {
            return {

            }
        },
        mounted() {
          window.addEventListener("scroll", this.handleScroll);
        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset || document.document.scrollTop || document.body.scrollTop
//                console.log(scrollTop)
               if(scrollTop!= undefined &&scrollTop > 100){

               }
            }
        }

    }
</script>