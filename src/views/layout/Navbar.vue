<template>
    <el-menu class="navbar" mode="horizontal">
        <!-- <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger> -->
        <levelbar></levelbar>
    
        <!-- 标签 -->
        <tabs-view class="tabs_view"></tabs-view>
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
    // height: 50px;
    // line-height: 50px;
    // border-radius: 0px !important;
    position: fixed;
    z-index: 999;
    width: 100%;
    left: 1;
    height: 35px;
    line-height: 35px;
    padding-left: 15px;
    background-color: #ECEFF1;
    border: 1px solid #C1C1C1;
    .errLog-container {
        display: inline-block;
        position: absolute;
        right: 150px;
    }
    .tabs_view {
        width: 900px;
        height: 35px;
        position: absolute;
        top: 0;
        left: 254px;
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



