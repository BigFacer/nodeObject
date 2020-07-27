<template>

    <div class="hand_div">
        <el-row>
            <el-col :span = "8" class="my_logo"> Gentle博客</el-col>
            <el-col :span="11">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1"  @click="routeLink('/')"><span class="el-icon-s-home"></span><span class="nav_text" >首页</span></el-menu-item>
                    <el-menu-item index="2"  @click="routeLink('/Tag')"><span class="el-icon-position" ></span><span class="nav_text">标签</span></el-menu-item>
                    <el-menu-item index="3" ><span class="el-icon-files"></span><span class="nav_text">分类</span></el-menu-item>
                    <el-menu-item index="4" @click="routeLink('/About')" ><span class="el-icon-user"></span><span class="nav_text">关于</span></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="2">
                <div class="search_civ"> <span class="el-icon-search"></span></div>
            </el-col>
        </el-row>
    </div>
</template>
<style scope>

    .hand_div .el-menu.el-menu--horizontal{
        background: #1DA7DA;
        border: none;
        height: 6.5rem;

    }
    .my_logo {
        color: #fff;
        font-size: 3rem;
        height: 100%;
        line-height: 6.5rem;
    }
    /*.nav_text{*/
         /*margin-top: 0.3rem;*/
    /*}*/
    .hand_div .el-menu--horizontal{
       /*margin-top: 1.5rem;*/
        /*padding-top: 2rem;*/
        margin-left: 25rem;

    }
   .hand_div .el-menu--horizontal>.el-menu-item{
       border: none;
       height: 100%;
       line-height: 6.5rem;
       padding-left: 1.5rem;
       padding-right:1.5rem;
       color: #fff;
   }
   .search_civ{
       color: #fff;
       line-height: 6.5rem;
       font-weight: bold;
   }
    .hand_div .el-menu--horizontal>.el-menu-item span{
        margin-right: 0;
        display: inline-block;
        font-size: 1.4rem;
        font-weight: bold;
    }
    .hand_div .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,.hand_div .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{
        color: #fff;
        background: #1A96C4;
    }
  .hand_div .el-menu--horizontal>.el-menu-item.is-active ,  .hand_div .el-menu--horizontal>.el-menu-item.is-active span{
        border: none;
        color: #fff;
    }

</style>
<script>
    export  default {
        data() {
            return {
                activeIndex: '1',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            routeLink(route) {
              this.$emit('func', route)
            }
        }
    }
</script>