<template>
    <el-menu class="navbar" mode="horizontal">
        <!-- <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger> -->
        <levelbar></levelbar>
    
        <!-- 标签 -->
         <div class="tabs_view"> 
            <tabs-view></tabs-view>
         </div> 
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import Levelbar from './Levelbar';
import TabsView from './TabsView'; //tab标签

// import Hamburger from '@/components/Hamburger';

export default {
    components: {
        Levelbar,
        TabsView,

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
    width: 100%;
    min-width: 860px;
    border-radius: 0px !important;
    position: fixed;
    z-index: 999;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    background-color: #ECEFF1;
    border: 1px solid #C1C1C1;
    .errLog-container {
        display: inline-block;
        position: absolute;
        right: 150px;
    }
    .app-levelbar.el-breadcrumb {
        float: left;
    }
    .tabs_view {
        width: 70%;
        height: 35px;
        float: left;
        margin-left: 10px;
        overflow: hidden;
    } 
    // .screenfull {
    //     position: absolute;
    //     right: 90px;
    //     top: 16px;
    //     color: red;
    // }
}
</style>



