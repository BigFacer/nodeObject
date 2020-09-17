<template>
    <div class="tag_main_div">
       <div  class="tag_title">
           <el-col :span ='20' :offset="2">
               <el-row>
                   <div class="tag_title_div">
                       <p class="jishu_title"><span class="el-icon-paperclip"></span>文章标签</p>
                       <div  class="button_div_tag">
                           <el-button type="danger" v-for="item in  buttonList" :style="randomRgb(item)" @click="clickTag(item.ArticleId)">{{item.ArticleName}}</el-button>
                       </div>
                   </div>
               </el-row>
               <el-row>
                  <el-row class="little_tag" v-show="tagShow">
                      <div>
                          <span v-for="item in  buttonList" :style="changeText(item)"> {{item.ArticleName}}</span>
                          <!--<span v-for="item in  buttonList" :style="changeText(item)"> {{item.ArticleName}}</span>-->
                      </div>

                  </el-row>
                   <el-row class="little_tag_div" v-show="!tagShow">
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
                           </div>
                       </div>
                   </el-row>
               </el-row>
            </el-col>
       </div>
    </div>

</template>
<script>
    import {getClassTagList, getArticleList} from '../../../components/request'
    export default {
       data() {
           return {
               buttonList: [],
               articleList:[],
               tagShow: true
           }
       },
        created(){
           this.getButtonList();
            this.clickTag()
        },
        methods: {
            //获取上部分标签
            getButtonList() {
                getClassTagList().then( (res) => {
                    if(res.data.isSuccess){
                        this.buttonList = res.data.data
                    }else{
                        this.$message.error(res.data.errorMessage)
                    }
                })
            },
//            给标签按钮添加随机样式
            randomRgb(item) {
                let R = Math.floor(Math.random() * 130+110);
                let G = Math.floor(Math.random() * 130+110);
                let B = Math.floor(Math.random() * 130+110);
                return {
                    background: 'rgb(' + R + ',' + G + ',' + B + ')'
                };
            },
//            给下部分标签字体添加随机样式
            changeText(item) {
                let fontSizt = Math.floor(Math.random()*30+12);
                let R = Math.floor(Math.random() * 130+110);
                let G = Math.floor(Math.random() * 130+110);
                let B = Math.floor(Math.random() * 130+110);
                return {
                    color: 'rgb(' + R + ',' + G + ',' + B + ')',
                    fontSize: fontSizt + 'px'
                }
            },
            clickTag(data){
                this.tagShow = false
                getArticleList({SelectThree: data}).then( (res)=> {
                    if(res.data.isSuccess){
                        this.articleList = res.data.data
                    }else{
                        this.$message.error(res.data.errorMessage)
                    }
                })
            },
//            获取标签对应列表
            // getArticle() {
            //     console.log(this.tagShow)
            //     getArticleList().then( (res) => {
            //         if(res.data.isSuccess){
            //             this.articleList = res.data.data
            //             console.log(res.data.data)
            //         }else{
            //             this.$message.error(res.data.errorMessage)
            //         }
            //     })
            // }
        }
    }
</script>