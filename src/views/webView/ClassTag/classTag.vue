<template>
    
<div class="class_tag_div">
  <el-col :span ='16' :offset="4">
                <el-row>
                    <div class="tag_title_div">
                        <p class="jishu_title"><span class="el-icon-collection-tag"></span>文章分类</p>
                        <div  class="button_div">
                            <el-radio-group v-model="articleId">
                             <el-radio-button size ="medium" v-for="item in  navList" :label="item.ArticleId"  @click.native.prevent="articleBtnClick(item.ArticleId)">{{item.ArticleName}}</el-radio-button>
                                                
                            </el-radio-group>
                           
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div class="tag_infor_div">
                         <div class="tag_item_div" v-for="x in articleList" @click="articleDetail(x)">
                             <div class="item_img_div">
                                 <div class="title_div">{{x.Title}}</div>
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

    </el-col>

</div>
</template>    

<style scoped>
.button_div .el-radio-button{
    margin-right: 3.5rem;
        margin-left: 0;
        margin-bottom: 3rem;
        width: 10rem;
        
}
 .button_div /deep/ .el-radio-button:first-child .el-radio-button__inner{
  border-radius: 0;
  
}
 .button_div /deep/.el-radio-button__inner{
  border-radius:0.5rem;
  border-left:1px solid #DCDFE6;
}
.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
    box-shadow: none;
}
.button_div /deep/ .el-radio-button:first-child .el-radio-button__inner,.button_div /deep/ .el-radio-button:last-child .el-radio-button__inner{
    border-radius:0.5rem;
}
</style> 
<script>
 import {getArticleList, getTagList} from '../../../components/request'
export default {
  data() {
      return {
          articleId: this.$route.query.id,
          articleList: [],
          navList: []
      }
  },
  created(){
      this.articleBtnClick(this.articleId),
      this.getNavList()
  },
  methods: {
     articleBtnClick(Id) {//获取文章
            this.articleId = Id
             getArticleList({ SelectOne: Id}).then( (res) => {
                 if(res.data.isSuccess){
                     this.articleList = res.data.data
                    //  console.log(this.articleList)
                 }else{
                     this.$message.error(res.data.errorMessage)
                 }
             })

    },
     getNavList() {//获取标签
                 getTagList({ParentID: '0'}).then( (res)=>{
                   if(res.data.isSuccess){
                       this.navList = res.data.data;
                       this.$store.commit('setNavList', res.data.data)
                   }else{
                       this.$message.error(res.data.errorMessage)
                   }
                })
     },            
    articleDetail(data) {// 查看文章详情
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