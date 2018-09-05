<template>
  <el-container class="container">
    <!-- 侧边栏 -->
    <el-aside width="300px" class="aside" v-if="hidden">
      <div class="home-logo">
        <span>E-OFFICE10</span>
      </div>
      <!-- 个人信息 -->
      <div class="information">
        <!-- 上传头像 -->
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span class="name">梁建秋</span>
        <span class="department">事业部</span>
      </div>
      <div class="portal">门户</div>
      <!-- 侧边导航菜单 -->
      <div class="broadside">
        <el-menu :default-active="2" class="el-menu-demo" mode="vertical" @select="handleSelect">
          <el-menu-item index="1"><i class="iconfont my-icon-wo"></i> 个人门户</el-menu-item>
          <el-menu-item index="2"><i class="iconfont my-icon-icon-"></i> 公司门户</el-menu-item>
          <el-menu-item index="3"><i class="iconfont my-icon-icon-"></i> 运营门户</el-menu-item>
          <el-menu-item index="4"><i class="iconfont my-icon-icon-"></i> 营销门户</el-menu-item>
          <el-menu-item index="5"><i class="iconfont my-icon-icon-"></i> 知识门户</el-menu-item>
          <el-menu-item index="6"><i class="iconfont my-icon-icon-"></i> 个人门户</el-menu-item>
          <el-menu-item index="7"><i class="iconfont my-icon-icon-"></i> 报表门户</el-menu-item>
          <el-menu-item index="8"><i class="iconfont my-icon-icon-"></i> 新手指引</el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header class="header">
        <!-- 导航栏 -->
        <div class="left-nav">
        <el-row>
          <!-- 左侧 -->
          <el-col :span="15">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#03a9f4"
              text-color="#fff">
              <el-menu-item index="1" @click="handeleDisplay"><i class="iconfont my-icon-liebiao" v-if="hidden"></i><i class="iconfont my-icon-56" v-if="leftIcon"></i></el-menu-item>
              <el-menu-item index="2"><i class="iconfont my-icon-fangzihouse128"></i></el-menu-item>
              <el-menu-item index="3">考勤管理</el-menu-item>
              <el-menu-item index="4">流程管理</el-menu-item>
              <el-menu-item index="5">报表管理</el-menu-item>
              <el-submenu index="6">
                <template slot="title">更多应用</template>
                <el-card class="box-card">
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-card>
              </el-submenu>
            </el-menu>
          </el-col>
          <!-- 右侧 -->
          <el-col :span="9">
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#03a9f4"
            text-color="#fff">
            <el-menu-item index="1" class="mr-nav"><i class="iconfont my-icon-sousuo"></i></el-menu-item>
            <el-menu-item index="1"><i class="iconfont my-icon-shouji"></i></el-menu-item>
            <el-menu-item index="1"><i class="iconfont my-icon-c"></i></el-menu-item>
            <el-menu-item index="1" @click="handleExit"><i class="el-icon-circle-close-outline"></i></el-menu-item>
          </el-menu>
          </el-col>
        </el-row>
        </div>
      </el-header>
      <!-- 主体部分 -->
      <el-main class="main">
        <el-row class="top">
          <el-col :span="15">
            <el-card class="carousel">
            轮播图
            </el-card>
          </el-col>
          <el-col :span="9">
            <el-card class="flow-path">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="代办流程" name="first">代办流程</el-tab-pane>
                <el-tab-pane label="已办流程" name="second">已办流程</el-tab-pane>
                <el-tab-pane label="办结流程" name="third">办结流程</el-tab-pane>
                <el-tab-pane label="我的请求" name="fourth">我的请求</el-tab-pane>
                <el-tab-pane label="抄送流程" name="five">抄送流程</el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="second-line">
          <el-col class="clocking-in" :span="12">
            <el-card>考勤中心</el-card>
          </el-col>
          <el-col :span="12">
            <el-card >邮件</el-card>
          </el-col>
        </el-row>
        <el-row class="third-line">
          <el-col :span="16">
            <el-card>我的项目</el-card>
          </el-col>
          <el-col :span="8">
            <el-card>
              我的任务
            </el-card>
          </el-col>
        </el-row>
        <el-row class="fourth-line">
          <el-col>
            <el-card>测试岗位</el-card>
          </el-col>
        </el-row>
        <el-row class=" fifth-line">
          <el-col :span="12">
            <el-card>
              我的日程
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              客户中心
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      // 导航栏的隐藏与显示
      hidden: true,
      // 小图标切换
      leftIcon: false
    }
  },
  methods: {
    // 隐藏/显示左侧导航栏
    handeleDisplay: function () {
      this.hidden = !this.hidden
      this.leftIcon = !this.leftIcon
    },
    // 退出
    handleExit: function () {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style>
.container {
  height: 100%;
}
/* 头部 */
.header {
  background-color: #03a9f4;
}
/* 图标 */
.my-icon-sousuo,.my-icon-shouji, .my-icon-c,.el-icon-circle-close-outline,.my-icon-liebiao,.my-icon-fangzihouse128,.my-icon-56{
  color: #fff !important;
}
/* .mr-nav {
  margin-left: 50% !important;
} */
.my-icon-56,.my-icon-liebiao {
  position: absolute;
}
/* 侧标栏 */
.aside {
  background-color: #ffffff;
  line-height: 60px;
}
.home-logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  background-color: #03a9f4;
}
.information {
  /* text-align: center; */
  position: relative;
  height: 150px;
}
/* 上传头像 */
.avatar-uploader .el-upload {
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    top: 50px;
    left: 50px;

  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
  /* 个人信息 */
  .information .name {
    color: #000;
    position: absolute;
    left: 140px;
    top: 40px;
  }
  .information .department {
    color: #000;
    position: absolute;
    left: 140px;
    top: 70px;
  }
  .portal {
    color: #000;
    text-align: center
  }
/* 侧边导航 */
.broadside {
  text-align: center
}
.main {
  background-color: #f7f7f7;
  height: 100%;
}
.broadside .el-menu-demo i {
  margin-right: 10px !important;
}
/* 主体部分 */
.top,.second-line,.third-line,.third-path,.fourth-line{
  height: 265px;
  padding: 5px;
  margin-bottom: 10px;
}
.carousel{
  height: 265px;
}
</style>
