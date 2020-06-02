<template>
  <div class="publish-articles-div">
      <el-form :model="ArticlesArray" :rules="rules" ref="ArticlesArray" class="demo-ruleForm">
        <el-row class="el-row-div">
               <el-col :span="6" class="el-col-div">
                 <el-col :span="6" class="el-col-text">
                     <el-form-item label="一级标签" prop="SelectOne"></el-form-item>
                 </el-col>
                 <el-col :span="3"> &nbsp;&nbsp; </el-col>
                 <el-col :span="15">
                   <el-select v-model="ArticlesArray.SelectOne">
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
                 <el-col :span="6" class="el-col-text">
                     <el-form-item label="二级标签" prop="SelectTwo"></el-form-item>
                 </el-col>
                 <el-col :span="3"> &nbsp;&nbsp; </el-col>
                 <el-col :span="15">
                   <el-select v-model="ArticlesArray.SelectTwo">
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
                 <el-col :span="6" class="el-col-text">
                     <el-form-item label="三级标签" prop="SelectThree"></el-form-item>
                 </el-col>
                 <el-col :span="3"> &nbsp;&nbsp; </el-col>
                 <el-col :span="15">
                   <el-select v-model="ArticlesArray.SelectThree">
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

             <el-col :span="6" class="el-col-text">
                 <el-form-item label="标题" prop="BigTitle"></el-form-item>
             </el-col>
             <el-col :span="15"><el-input v-model="ArticlesArray.BigTitle"></el-input></el-col>
          </el-col>
          <el-col :span="6" class="el-col-div">
              <el-col :span="6" class="el-col-text">
                  <el-form-item label="背景描述" prop="BackgroundText"></el-form-item>
              </el-col>
              <el-col :span="15"><el-input v-model="ArticlesArray.BackgroundText"></el-input></el-col>
            <!--<el-col :span="6" class="el-col-text">背景描述</el-col>-->
            <!--<el-col :span="15"><el-input v-model="ArticlesArray.BackgroundText"></el-input></el-col>-->
          </el-col>
          <el-col :span="6" class="el-col-div">
              <el-col :span="6" class="el-col-text">
                  <el-form-item label="文章标题" prop="Title"></el-form-item>
              </el-col>
              <el-col :span="15"><el-input v-model="ArticlesArray.Title"></el-input></el-col>
            <!--<el-col :span="6" class="el-col-text">文章标题</el-col>-->
            <!--<el-col :span="15"><el-input v-model="ArticlesArray.Title"></el-input></el-col>-->
          </el-col>
        </el-row>

        <el-row class="el-row-div">
              <el-col :span="6" class="el-col-div">
               <el-col :span="8" class="el-col-text"><el-form-item label="文章内容:" prop="Article"></el-form-item></el-col>
              </el-col>
              <el-col :span="6" class="el-col-div submit ">
                <el-col :span="8" class="el-col-text"><el-button type="primary" round  @click=" commit('ArticlesArray')"><i class="el-icon-check"></i>提交</el-button></el-col>
              </el-col>
        </el-row>
        <el-row>
           <el-col :span="21" class="el-col-textarea">
              <el-input type="textarea" placeholder="请输入内容" v-model="ArticlesArray.Article"></el-input>
           </el-col>
        </el-row>
          <el-row  class="el-col-div">
              <el-upload
                      action="#"
                      list-type="picture-card"
                      :on-change="handleChange"
                      :auto-upload="false"
                      ref="upload"
                      :file-list ='fileList'
              >
                  <i slot="default" class="el-icon-plus"></i>
                  <div slot="file" slot-scope="{file}">
                      <img
                              class="el-upload-list__item-thumbnail"
                              :src="file.url" alt=""
                      >
                      <span class="el-upload-list__item-actions">
                            <span
                                    class="el-upload-list__item-preview"
                                    @click="handlePictureCardPreview(file, fileList)">
                                 <i class="el-icon-zoom-in"></i>
                            </span>
                            <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleDownload(file)"
                            >
                               <i class="el-icon-download"></i>
                            </span>
                            <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleRemove(file,fileList)"
                            >
                               <i class="el-icon-delete"></i>
                           </span>
                      </span>
                  </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>

          </el-row>
      </el-form>
      <!--<div><input type="file" accept=".jpg, .png, .jpeg" @change="uploadAvatar"></div>-->
  </div>

</template>
<style type="text/css">
  .publish-articles-div{
    /*color: #ffffff;*/
    padding-left: 6rem;
    font-size: 1.3rem;
  }
  .publish-articles-div .el-form-item__label{
      padding: 0;
      line-height: 5rem;

  }
  .publish-articles-div .el-form-item {
      margin-bottom: 0;
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
    height: 18rem;
      margin-bottom: 1rem;
    background-color: #e6e6e6;
  }
</style>
<script>
    import {getArticlTitle, saveArticle,upload}  from '../../../components/request'
export default {
  name: 'Articles',
  created(){
      getArticlTitle({ParentID : this.$store.state.userinfor.PersonID}).then( (res)=> {
          this.selectOne = res.data.data;
          this.selectThree=[]
      })
  },
  data () {
    return {
      ArticlesArray: {
          SelectOne:'',
          SelectTwo:'',
          file:'',
          SelectThree:'',
          BigTitle: '',
          Title: '',
          BackgroundText: '',
      },
        image:[],
        fileList:[],
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        rules: {
            SelectOne: [
                {required : true, message: '请选择一级标签', trigger: 'blur'}
            ],
            SelectTwo: [
                {required : true, message: '请选择二级标签', trigger: 'blur'}
            ],
            SelectThree: [
                {required : true, message: '请选择三级标签', trigger: 'blur'}
            ],
            BigTitle: [
                {required : true, message: '请填写标题', trigger: 'change'}
            ],
            Title: [
                {required : true, message: '请填写文章标题', trigger: 'change'}
            ],
            BackgroundText: [
                {required : true, message: '请填写背景描述', trigger: 'change'}
            ],
            Article: [
                {required : true, message: '请填写文章内容', trigger: 'change'}
            ],

        },
      selectOne: [],
      selectTwo: [],
      selectThree: []
    }
  },
    methods: {
        commit (ArticlesArray) {
         this.$refs[ArticlesArray].validate((valid) => {
                if (valid) {
                    this.ArticlesArray.PersonID  = JSON.parse(sessionStorage.getItem('userinfor') ).PersonID;
                    this.ArticlesArray.PersonName  = JSON.parse(sessionStorage.getItem('userinfor') ).PersonName;

                    let formData = new FormData();
                    formData.append('file', this.image[0].raw);
                    formData.append('Time','2020-05-27');
                    console.log(this.ArticlesArray);
                    let A = JSON.stringify(this.ArticlesArray)
                    formData.append('data',A);
                    formData.get('data')

                    this.$http({
                        url:'/api'+'/saveArticle',
                        method: 'POST',
                        processData: false,
                        contentType: false,
                        data: formData,
                    }).then( (res)=> {
                        console.log(res)
                    })
//                    saveArticle(this.ArticlesArray).then( (res) => {
//                        if(res.data.isSuccess){
//                            this.$message({
//                                message: res.data.data,
//                                type: 'success'
//                            });
//                            this.ArticlesArray = {}
//                        }else{
//                            this.$message.error(res.data.errorMessage)
//                        }
//                    })
                } else {
                    return false;
                }
            });

        },
        handleChange(file, fileList){
            const isImage = file.raw.type == 'image/png' || file.raw.type == 'image/jpg' || file .raw.type=='image/jpeg';
            const isIt1M = file.size < 1024* 1024;
            if(!isImage){
                this.$message.error('只能上传png、jpg、jpeg格式的图片');
            }
            if(!isIt1M) {
                this.$message.error('图片不可超过1M');
            }
            if(fileList.length > 1) {
                this.$message.error('只能传一张图片');
            }

            if(isImage&& isIt1M && fileList.length<2) {
                this.image = fileList
            }else {
                fileList.splice(-1, 1);
                this.image = fileList
            }
        },
        handleRemove(file,fileList) {
            fileList.splice(-1, 1);
            this.ArticlesArray.image = fileList
            console.log(fileList)
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
//            console.log(file);
            if(file.size >1024*1024){
                this.$message.error('图片不可超过1M');
                return
            }
//            console.log(this.fileList)
//            let formData = new FormData();
//            formData.append('file', file.raw);
//            formData.append('Time','2020-05-27');
//            formData.append('name', file.name);
//            formData.append('data', this.ArticlesArray);
//            console.log(formData.get('data'));
//            this.$http({
//                url:'/api'+'/upload',
//                method: 'POST',
//                processData: false,
//                contentType: false,
//                data: formData,
//            }).then( (res)=> {
//                console.log(res)
//            })

        },
        handleDownload(file) {
            console.log(file);
        },
    },
    watch: {
         'ArticlesArray.SelectOne' (val, oldVal) {
             if(val !=oldVal) {
                 getArticlTitle({ParentID : val}).then((res) => {
                    this.selectTwo = res.data.data;
                     this.selectThree = []
                    this.ArticlesArray.SelectTwo = '';
                    this.ArticlesArray.SelectThree = '';


                 })
             }
         },
        'ArticlesArray.SelectTwo' (val, oldVal) {
             if(val == ''){
                 this.selectThree = []
                 this.ArticlesArray.SelectThree = ''
             }else if(val !=oldVal) {
                getArticlTitle({ParentID : val}).then((res) => {
                    this.selectThree = res.data.data;
                    this.ArticlesArray.SelectThree = ''
                })
            }
        }
    }
}
</script>
