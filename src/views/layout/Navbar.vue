<template>
    <el-menu class="navbar" mode="horizontal">
        <!-- <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger> -->
        <levelbar></levelbar>

        <!-- 标签 -->
        <!-- <tabs-view></tabs-view> -->
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Levelbar from './Levelbar';
    // import TabsView from './TabsView'; //tab标签

    // import Hamburger from '@/components/Hamburger';

    export default {
      components: {
        Levelbar,
        // TabsView,

        // Hamburger
      },
      computed: {
        // ...mapGetters([
        //   'sidebar',
        //   'avatar'
        // ])
      },
      methods: {
        toggleSideBar() {
          this.$store.dispatch('ToggleSideBar')
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        // .hamburger-container {
        //     line-height: 58px;
        //     height: 50px;
        //     float: left;
        //     padding: 0 10px;
        // }
        .errLog-container {
            display: inline-block;
            position: absolute;
            right: 150px;
        }
        // .screenfull {
        //     position: absolute;
        //     right: 90px;
        //     top: 16px;
        //     color: red;
        // }
    }
</style>



