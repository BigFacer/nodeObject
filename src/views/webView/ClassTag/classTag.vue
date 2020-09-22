<template>
    
<div class="class_tag_div">
  <el-col :span ='16' :offset="4">
                <el-row>
                    <div class="tag_title_div">
                        <p class="jishu_title"><span class="el-icon-collection-tag"></span>文章分类</p>
                        <div  class="button_div">
                            <el-radio-group v-model="articleId">
                             <el-radio-button size ="medium" v-for="item in  navList" :label="item.ArticleId" >{{item.ArticleName}}</el-radio-button>
                                                
                            </el-radio-group>
                           
                        </div>
                    </div>
                </el-row>
                <!-- <el-row>
                    <div class="tag_infor_div">
                         <div class="tag_item_div" v-for="x in articleList" @click="articleDetail(x)">
                             <div class="item_img_div"> -->
                                 <!--<div class="title_div">{{x.Title}}</div>-->
                                 <!-- <div class="bigtitle_div">{{x.Bigtitle}}</div>
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

                    </div> -->

                <!-- </el-row> -->

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
.el-radio-group .el-radio-button__inner{
  border-radius:0.5rem ;
  color: red;
}

</style> 
<script>
 import {getTagList} from '../../../components/request'
export default {
  data() {
      return {
          navList: this.$store.state.navList,
          articleId:''
        
      }
  },
  methods: {
     articleBtnClick(Id) {
           
             getArticleList({ SelectThree: Id   }).then( (res) => {
                 if(res.data.isSuccess){
                     this.articleList = res.data.data
                 }else{
                     this.$message.error(res.data.errorMessage)
                 }
             })

        },
        
  }
}

</script>