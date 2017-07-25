<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <div class="header-wrapper">
            <app-header></app-header>
            <div class="header-lines"></div>
        </div>
        <div class="sidebar-wrapper">
            <sidebar class="sidebar-container"></sidebar>
        </div>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain, AppHeader,AppFooter } from '@/views/layout';

    export default {
      name: 'layout',
      components: {
        Navbar,
        Sidebar,
        AppMain,
        AppHeader,
        AppFooter
      },
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.hideSidebar {
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
            .main-container {
                margin-left: 40px;
            }
        }
        .sidebar-wrapper {
            width: 180px;
            position: fixed;
            top: 55px;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;
            transition: all .28s ease-out;
        }
        .header-wrapper {
            width: 100%;
            height: 55px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            overflow: hidden;
            background: #324157;
            // border-bottom: 5px solid #009688;
            // transition: all .28s ease-out;
        }
        .header-lines{
            width: 100%;
            height: 5px;
            background-color:#009688; 
            margin-top: 5px;
        }
        .sidebar-container {
            transition: all .28s ease-out;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: -17px;
            overflow-y: scroll;
        }
        .main-container {
            min-height: 100%;
            transition: all .28s ease-out;
            margin-top: 55px;
            margin-left: 180px;
        }
    }
</style>
