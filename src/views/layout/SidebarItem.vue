<template>
    <div>
        <template v-for="item in routes">
            <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
                <el-menu-item :index="item.path+'/'+item.children[0].path">
                    <!-- <icon-svg v-if='item.icon' :icon-class="item.icon" /> {{item.children[0].name}} -->
                    <Icon v-if='item.icon' :type="item.icon" /> {{item.children[0].name}} 
                </el-menu-item>
            </router-link>
            <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
                <template slot="title">
                     <!-- <icon-svg v-if='item.icon' :icon-class="item.icon" /> {{item.name}}  -->
                     <Icon v-if='item.icon' :type="item.icon" /> {{item.name}} 
                </template>
                <template v-for="child in item.children" v-if='!child.hidden'>
                    <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
                    <router-link v-else class="menu-indent" :to="item.path+'/'+child.path">
                        <el-menu-item :index="item.path+'/'+child.path">
                            {{child.name}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
//   {
//     path: '/__hyzx',
//     component: Layout,
//     redirect: '__hyzx/testAdmin',
//     name: '行业资讯',
//     icon: 'zujian',
//     noDropdown: false,
//     children: [
//       { meta: { role: ['admin'] }, path: 'testAdmin', component: __hyzxA, name: 'testAdmin__hyzx ' },
//       { meta: { role: ['editor'] }, path: 'testUser', component: __hyzxU, name: 'testUser__hyzx ' },
//     ]
//   },
    export default {
      name: 'SidebarItem',
      props: {
        routes: {
          type: Array
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .svg-icon {
    margin-right: 12px;
  }
  // iview Icon
  .ivu-icon {
    vertical-align: baseline;
    margin-right: 13px;
    font-size: 16px;
  }
  .hideSidebar .menu-indent{
    display: block;
    text-indent: 10px;
  }
  .default-active li {
    color: #20a0ff;
  }
</style>

