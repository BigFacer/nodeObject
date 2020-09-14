<template>
    <div class="detail_article">

          <div class="html_div">
              <div class="hand_div">
                  创建时间:  {{creatTime | formDate}}
              </div>
              <div  v-html="stringHtml">
                  {{stringHtml}}
              </div>
              <div class="img_div">
                  <img src="http://www.yydn.top/nodeObject/server/uploads/495599193831307942.jpg" alt="">
              </div>
          </div>

    </div>
</template>
<script>
export default {
    data() {
      return {
           stringHtml: '',
          img: '',
          creatTime: ''
      }
    },
    created(){
          this.getArticle()
    },
    methods: {
        getArticle() {
            this.stringHtml = this.$route.query.article;
            this.img = this.$route.query.img;
            this.creatTime = this.$route.query.creatDate

        }
    }
}

</script>
<style>
  .detail_article{
      width: 100%;
      height: 100%;
  }
  .detail_article .hand_div{
      text-align: left;
      border-bottom: 1px solid #000;
  }
    .detail_article .html_div{
        width: 80%;
        margin-left: 10%;
        height: 100%;
        background-color: #F7F7F7;
        padding: 5rem 5rem;
        text-align: left;
        margin-top: -5rem;

    }
    .html_div div{
        margin-top: 2rem;
    }
</style>