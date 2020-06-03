<template>
    <div class="home_page">
        <div class="home_div">
            <p class="home_title">一个不断学习,不断积累</p>
            <p class="home_title2">头发茂密的90后程序员</p>
        </div>
        <div class="tag_title">
            <el-col :span ='20' :offset="2">
                <el-row>
                    <div class="tag_title_div">
                        <p class="jishu_title"><span class="el-icon-milk-tea"></span>技术栈</p>
                        <div  class="button_div">
                            <el-button type="primary" > node.js</el-button>
                            <el-button type="primary" > vue.js</el-button>
                            <el-button type="primary" > javascript</el-button>
                            <el-button type="primary" >HTML5/CSS3</el-button>
                            <el-button type="primary" > MySQL</el-button>
                            <el-button type="primary" > GIT</el-button>
                            <el-button type="primary" >HTML5/CSS3</el-button>
                            <el-button type="primary" > MySQL</el-button>
                            <el-button type="primary" > SVN</el-button>
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div class="tag_infor_div">
                         <div class="tag_item_div"></div>
                         <div class="tag_item_div"></div>
                         <div class="tag_item_div"></div>
                         <div class="tag_item_div"></div>
                         <div class="tag_item_div"></div>
                         <div class="tag_item_div"></div>
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
        margin-left: 0;
    }
    .tag_infor_div{
        width: 100%;
    }
    .tag_item_div{
        width: 32%;
        margin-left: 1%;
        height: 50rem;
        background: #F7F7F7;
        float: left;
        margin-bottom: 2.5rem;
    }
</style>