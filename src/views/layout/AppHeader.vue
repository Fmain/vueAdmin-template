<template>
  <div class="header">
    <div class="logo">
      <!-- <img src="assets/images/logo.png" alt=""> -->
    </div>
    <div class="hamburger">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>  
    </div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu> 
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Levelbar from './Levelbar';
  import Hamburger from '@/components/Hamburger';

  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    components: {
      Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    // height: 55px;
    width: 100%;
  }
  .logo {
    width: 180px;
    height: 55px;
    background: pink;
    float: left;
  }
  .hamburger {
    line-height: 60px;
    height: 60px;
    float: left;
    padding: 0 10px;
    background: #009688;
  }
  .el-menu-demo {
    margin-left: 250px;
    height: 55px;
  }
</style>



