<template>
  <div class="publish-articles-div">
    <el-row class="el-row-div">
           <el-col :span="6" class="el-col-div">
             <el-col :span="6" class="el-col-text">一级标签</el-col>
             <el-col :span="3"> &nbsp;&nbsp; </el-col>
             <el-col :span="15">
               <el-select v-model="ArticlesArray.selectOne">
                 <el-option
                   v-for="item in selectOne"
                   :key="item.ArticlId"
                   :label="item.ArticlName"
                   :value="item.ArticlId"
                   class="el-input-div">
                 </el-option>
               </el-select>
             </el-col>
           </el-col>
           <el-col :span="6" class="el-col-div">
             <el-col :span="6" class="el-col-text">二级标签</el-col>
             <el-col :span="3"> &nbsp;&nbsp; </el-col>
             <el-col :span="15">
               <el-select v-model="ArticlesArray.selectTwo">
                 <el-option
                   v-for="item in selectTwo"
                   :key="item.ArticlId"
                   :label="item.ArticlName"
                   :value="item.ArticlId"
                   class="el-input-div">
                 </el-option>
               </el-select>
             </el-col>
           </el-col>
           <el-col :span="6" class="el-col-div">
             <el-col :span="6" class="el-col-text">三级标签</el-col>
             <el-col :span="3"> &nbsp;&nbsp; </el-col>
             <el-col :span="15">
               <el-select v-model="ArticlesArray.selectThree">
                 <el-option
                   v-for="item in selectThree"
                   :key="item.ArticlId"
                   :label="item.ArticlName"
                   :value="item.ArticlId"
                   class="el-input-div">
                 </el-option>
               </el-select>
             </el-col>
           </el-col>
    </el-row>
    <el-row class="el-row-div">
      <el-col :span="6" class="el-col-div">
         <el-col :span="6" class="el-col-text">标题</el-col>
         <el-col :span="15"><el-input v-model="ArticlesArray.bigTitle"></el-input></el-col>
      </el-col>
      <el-col :span="6" class="el-col-div">
        <el-col :span="6" class="el-col-text">背景描述</el-col>
        <el-col :span="15"><el-input v-model="ArticlesArray.backgroundText"></el-input></el-col>
      </el-col>
      <el-col :span="6" class="el-col-div">
        <el-col :span="6" class="el-col-text">文章标题</el-col>
        <el-col :span="15"><el-input v-model="ArticlesArray.title"></el-input></el-col>
      </el-col>
    </el-row>
    <el-row class="el-row-div">
          <el-col :span="6" class="el-col-div">
           <el-col :span="8" class="el-col-text">文章内容:</el-col>
          </el-col>
          <el-col :span="6" class="el-col-div submit ">
            <el-col :span="8" class="el-col-text"><el-button type="primary" round><i class="el-icon-check"></i>提交</el-button></el-col>
          </el-col>
    </el-row>
    <el-row>
       <el-col :span="21" class="el-col-textarea">
          <el-input type="textarea" placeholder="请输入内容" v-model="ArticlesArray.articles"></el-input>
       </el-col>
    </el-row>
  </div>

</template>
<style type="text/css">
  .publish-articles-div{
    /*color: #ffffff;*/
    padding-left: 6rem;
    font-size: 1.3rem;
  }
  .el-row-div{
    height: 5rem;
    line-height: 5rem;
    margin-bottom: 2rem;
  }
  .el-col-div{
    margin-right: 7rem;
    margin-bottom: 2rem;
  }
 .el-row-div .submit{
   float: right;
   right: 0;
   padding-right: 4rem;
   text-align: right;
   cursor: pointer;
   font-size: 1.3rem;
  }
  .submit div{
    float: right;

  }
  .el-col-text{
      margin-right: 3rem;
  }
  .el-col-textarea textarea{
    margin-left: 1rem;
    height: 30rem;
    background-color: #e6e6e6;
  }
</style>
<script>
    import {getArticlTitle}  from '../../../components/request'
export default {
  name: 'Articles',
  created(){
      getArticlTitle({ParentID : this.$store.state.userinfor.PersonID}).then( (res)=> {

          this.selectOne = res.data.data
//          console.log(this.selectOne)
//          console.log(res.data.data)
      })
  },
  data () {
    return {
      ArticlesArray: {
          selectOne:'',
          selectTwo:'',
          selectThree:'',

      },
      selectOne: [],
      selectTwo: [],
      selectThree: []
    }
  },
    methods: {},
    watch: {
         'ArticlesArray.selectOne' (val, oldVal) {
             if(val !=oldVal) {
                 getArticlTitle({ParentID : val}).then((res) => {
                    this.selectTwo = res.data.data;
                    this.ArticlesArray.selectTwo = '';
                    this.ArticlesArray.selectThree = '';
                    this.selectThree = []

                 })
             }
         },
        'ArticlesArray.selectTwo' (val, oldVal) {
            if(val !=oldVal) {
                getArticlTitle({ParentID : val}).then((res) => {
                    this.selectThree = res.data.data;
                    this.ArticlesArray.selectThree = ''
                })
            }
        }
    }
}
</script>
