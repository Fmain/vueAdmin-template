<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/images/logo.png" alt=""> 
    </div>
    <div class="hamburger">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>  
    </div>

    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <!-- <el-menu-item index="1"><i class="el-icon-message"></i>舆情监测</el-menu-item> -->
      <el-menu-item index="1"><Icon type="person-stalker"></Icon>舆情监测</el-menu-item>
      <el-menu-item index="2"><Icon type="ios-pulse"></Icon></Icon>行业指数</el-menu-item>
      <el-menu-item index="3"><Icon type="android-list"></Icon>研究报告</el-menu-item>
      <el-menu-item index="4"><Icon type="gear-b"></Icon>设置</el-menu-item>
    </el-menu> 

    <!-- 全屏组件 -->
     <screenfull class='screenfull'></screenfull> 

    <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
            <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
            <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <router-link class='inlineBlock' to="/">
                 <el-dropdown-item> 
                    个人信息
                 </el-dropdown-item> 
            </router-link>
            <router-link class='inlineBlock' to="/">
                 <el-dropdown-item> 
                    修改密码
                 </el-dropdown-item> 
            </router-link>
            <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <!-- <el-button type="primary" @click="showRouterItem()">测试按钮</el-button> -->
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import Levelbar from './Levelbar';
  import Hamburger from '@/components/Hamburger';
  import Screenfull from '@/components/Screenfull';
  import screenfull from 'screenfull';


  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isFullscreen: false
      };
    },
    components: {
      Hamburger,
      Screenfull
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar'
      ])
    },
    methods: {
      // 测试全局中的routerItem，可注释掉
      showRouterItem() {
        // console.log(this.$store)
        console.log(this.$store.state.permission.routerItem)
      },
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
        // 更改routerItem的值
        this.$store.commit('ChangeRouterItem',key)
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload();  // 为了重新实例化vue-router对象 避免bug
        });
      },
      screenfull() {
        // alert(1);
        if (!screenfull.enabled) {
          this.$message({
            message: 'you browser can not work',
            type: 'warning'
          });
          return false;
        }
        screenfull.toggle();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-button {
    position: absolute;
    top: 12px;
  }
  .header {
    width: 100%;
  }
  .header .logo {
    width: 180px;
    height: 55px;
    float: left;
    text-align: center; 
  }
  .header .logo img {
    width: 120px;
    height: 55px;
  }
  .hamburger {
    line-height: 60px;
    height: 60px;
    float: left;
    padding: 0 5px;
    background: #009688;
  }
  .el-menu-demo {
    margin-left: 234px;
    height: 45px;
  }
  .el-menu--horizontal .el-menu-item {
    height: 55px;
    line-height: 60px;
    padding-left: 10px;
    padding-right: 30px;
  }
  // iview Icon
  .ivu-icon {
    vertical-align: baseline;
    margin-right: 6px;
  }
  .nav_margin {
    float: left;
    width: 96px;
    height: 1px;
  }

  .screenfull {
    position: absolute;
    right: 123px;
    top: 16px;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    top: 0;
  }
  .el-dropdown {
    color: #fff;
    font-size: 14px;
  }
  .avatar-container .avatar-wrapper {
    cursor: pointer;
    margin-top: 5px;
    position: relative;
  }
  .avatar-container .avatar-wrapper .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  // .avatar-container {
  //     height: 50px;
  //     display: inline-block;
  //     position: absolute;
  //     right: 35px;
  //     .avatar-wrapper {
  //         cursor: pointer;
  //         margin-top: 5px;
  //         position: relative;
  //         .user-avatar {
  //             width: 40px;
  //             height: 40px;
  //             border-radius: 10px;
  //         }
  //         .el-icon-caret-bottom {
  //             position: absolute;
  //             right: -20px;
  //             top: 25px;
  //             font-size: 12px;
  //         }
  //     }
  // }
</style>



