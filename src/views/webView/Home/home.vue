<template>
    <div class="home_page">

        <div class="tag_title">
            <el-col :span ='16' :offset="4">
                <el-row>
                    <div class="tag_title_div">
                        <p class="jishu_title"><span class="el-icon-milk-tea"></span>技术栈</p>
                        <div  class="button_div">
                            <el-button type="primary" v-for="item in  buttonList" @click="articleBtnClick(item.ArticleId)">{{item.ArticleName}}</el-button>
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div class="tag_infor_div">
                         <div class="tag_item_div" v-for="x in articleList" @click="articleDetail(x)">
                             <div class="item_img_div">
                                 <!--<div class="title_div">{{x.Title}}</div>-->
                                 <div class="bigtitle_div">{{x.Bigtitle}}</div>
                                 <!-- <img src="http://yydn.top/assets/img/v2-2a5cf44ab9a1346d39b8ee2c23a7990a_hd.jpg" alt=""> -->
                             </div>
                             <div class="item_text_div">
                                 <div class="background_text">{{x.BackgroundText}}</div>
                                 <div class="time_div"><span class="el-icon-time"> {{x.CreateDate | formDate}}</span> <span class="el-icon-s-flag"> 前端知识</span></div>


                             </div>
                             <div class="line_div"></div>
                             <div class="tag_btn_div">
                                 <el-button type="primary" class="btn_tag" round>Web开发</el-button>
                                 <el-button type="primary" class="btn_tag" round>JavaScript</el-button>
                             </div>

                             <!--<el-image :srcc="x.ImgSrc" ></el-image>-->
                             <!--<img :src=" x.ImgSrc " alt="">-->
                             <!--<img src="/server/uploads/v2-2a5cf44ab9a1346d39b8ee2c23a7990a_hd.jpg" alt="">-->
                             <!--<div v-html="x.Article"></div>-->
                         </div>

                    </div>

                </el-row>

            </el-col>
        </div>
    </div>

</template>
<style scope>
    /*.home_page{*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*background: #F7F7F7;*/
    /*}*/

  
    .jishu_title{
        font-size: 2.5rem;
        font-weight: bold;
        padding-top: 3rem;
        color: #000;
        margin-bottom: 2rem;
    }
    .button_div{
        text-align: center;
        padding-left: 6rem;
    }
    .button_div .el-button+ .el-button,.button_div .el-button{
        margin-right: 3.5rem;
        margin-left: 0;
        margin-bottom: 3rem;
        width: 10rem;
    }
    .tag_infor_div{
        width: 100%;
    }
    .tag_item_div{
        width: 30%;
        margin-left: 3%;
        height: 40rem;
        background: #F7F7F7;
        float: left;
        margin-bottom: 2.5rem;
        border-radius: 2%;
    }
    .tag_item_div:hover{
        box-shadow: 0 0 5px 1px rgba(0,0,0,.2) inset;
    }
    .item_img_div{
        width: 100%;
        height: 25rem;
        border-top-left-radius: 2%;
        border-top-right-radius: 2%;
        background-image: url("../../../assets/img/v2-2a5cf44ab9a1346d39b8ee2c23a7990a_hd.jpg");
        background-size: 100% 100%;
    }
    .item_text_div{
        width: 100%;
        height: 10rem;
        padding: 2rem;
    }
    .line_div{
        width: 100%;
        height: 0.1rem;
        background-color: #ECECEC;
    }
    .bigtitle_div{
       padding-top: 20rem;
        font-size: 2.2rem;
        color: #fff;
        font-weight: bold;
    }
    .background_text{
        text-align: left;
        font-size: 1.6rem;

    }
    .time_div{
        text-align: left;
        font-size: 1.6rem;
        margin-top: 2rem;
    }
    .el-icon-time{
        text-indent: 0.5rem;
    }
    .el-icon-s-flag{
        text-indent: 0.5rem;
        display: inline-block;
        float: right;
        right: 1rem;
    }
    .tag_btn_div{
        text-align: left;
       padding: 1.5rem;

    }
    .tag_btn_div .el-button{
        padding: 0;
    }
   .tag_btn_div .el-button.is-round{
        padding: 0;
    }
    .btn_tag{
        width: 8rem;
        height: 2rem;
        font-size: 1.2rem;
    padding: 0;
    }
</style>
<script>
    import {getTagList, getArticleList} from '../../../components/request'
export default  {
     data() {
         return {
             buttonList: [],
             articleList:[]
         }
     },
    created() {
         this.getButtonList()
         this.articleBtnClick()
    },
    methods: {
        // 页面获取标签list
         getButtonList() {
             getTagList().then( (res) => {
                 if(res.data.isSuccess){
                     this.buttonList = res.data.data
                 }else{
                     this.$message.error(res.data.errorMessage)
                 }
             })
         },
        //  点击标签事件
        articleBtnClick(Id) {
           
             getArticleList({ SelectThree: Id   }).then( (res) => {
                 if(res.data.isSuccess){
                     this.articleList = res.data.data
                 }else{
                     this.$message.error(res.data.errorMessage)
                 }
             })

        },
             // 查看文章详情
        articleDetail(data) {
          this.$router.push({
              name: 'Detail',
              query: {
                  article: data.Article,
                  img: data.ImgSrc,
                  creatDate: data.CreateDate
              }

          })
        }
    }


}

</script>