<template>
    <div class="home_page">

        <div class="tag_title">
            <el-col :span ='20' :offset="2">
                <el-row>
                    <div class="tag_title_div">
                        <p class="jishu_title"><span class="el-icon-milk-tea"></span>技术栈</p>
                        <div  class="button_div">
                            <el-button type="primary" v-for="item in  buttonList">{{item.ArticleName}}</el-button>
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div class="tag_infor_div">
                         <div class="tag_item_div" v-for="x in articleList">
                             <div class="item_img_div">
                                 <!--<div class="title_div">{{x.Title}}</div>-->
                                 <div class="bigtitle_div">{{x.Bigtitle}}</div>
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

    .tag_title_div{
        width: 100%;
        height: 25rem;
        margin-top: -5rem;
        background: #F7F7F7;
        margin-bottom: 2.5rem;
        box-shadow: 0 0 7px #4444 ;
        /*box-shadow: 2px 2px 5px #DFDFE2 ;*/
    }
    .jishu_title{
        font-size: 2.5rem;
        font-weight: bold;
        padding-top: 3rem;
        color: #000;
        margin-bottom: 2rem;
    }
    .button_div{
        text-align: left;
        padding-left: 6rem;
    }
    .button_div .el-button+ .el-button,.button_div .el-button{
        margin-right: 5rem;
        margin-left: 0;
        margin-bottom: 3rem;
        width: 10rem;
    }
    .tag_infor_div{
        width: 100%;
    }
    .tag_item_div{
        width: 32%;
        margin-left: 1%;
        height: 40rem;
        background: #F7F7F7;
        float: left;
        margin-bottom: 2.5rem;
    }
    .item_img_div{
        width: 100%;
        height: 25rem;
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
         this.getArticle()
    },
    methods: {
         getButtonList() {
             getTagList().then( (res) => {
                 if(res.data.isSuccess){
                     this.buttonList = res.data.data
                 }else{
                     this.$message.error(res.data.errorMessage)
                 }
             })
         },
        getArticle() {
            getArticleList().then( (res) => {
                if(res.data.isSuccess){
                    this.articleList = res.data.data
                    console.log(res.data.data)
                }else{
                    this.$message.error(res.data.errorMessage)
                }
            })
        }
    }


}

</script>