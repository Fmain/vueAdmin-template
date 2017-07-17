import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login = _import('login/index');

/* dashboard */
const dashboard = _import('dashboard/index');

/* home */
const home = _import('home/index');

/* error page */
const Err404 = _import('404');

/* demo page */
const Test = _import('page/test');
const Form = _import('page/form');
const Table = _import('table/index');

/* _sentiment */
const __hyzxA = _import('_sentiment/__hyzx/testAdmin');
const __hyzxU = _import('_sentiment/__hyzx/testUser');
const __qyxxA = _import('_sentiment/__qyxx/testAdmin');
const __qyxxU = _import('_sentiment/__qyxx/testUser');
const __jzdsA = _import('_sentiment/__jzds/testAdmin');
const __jzdsU = _import('_sentiment/__jzds/testUser');
const __rdjcA = _import('_sentiment/__rdjc/testAdmin');
const __rdjcU = _import('_sentiment/__rdjc/testUser');
const __yqbgA = _import('_sentiment/__yqbg/testAdmin');
const __yqbgU = _import('_sentiment/__yqbg/testUser');
const __yqyjA = _import('_sentiment/__yqyj/testAdmin');
const __yqyjU = _import('_sentiment/__yqyj/testUser');

/* _index */
const __ictA = _import('_index/__ict/testAdmin');
const __ictU = _import('_index/__ict/testUser');
const __jjjrA = _import('_index/__jjjr/testAdmin');
const __jjjrU = _import('_index/__jjjr/testUser');

/* _report */
const __bgglA = _import('_report/__bggl/testAdmin');
const __bgglU = _import('_report/__bggl/testUser');

/* _setting */
const __dqglA = _import('_setting/__dqgl/testAdmin');
const __dqglU = _import('_setting/__dqgl/testUser');

Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/

//所有权限通用路由表 
//如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    { path: '/404', component: Err404, hidden: true },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Home',
        hidden: true,
        children: [{ path: 'dashboard', component: dashboard }]
    }
]

export default new Router({
    linkActiveClass: 'default-active',
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    //实例化vue的时候只挂载constantRouter
    routes: constantRouterMap
});

//异步挂载的路由
//动态需要根据权限加载的路由表 
export const asyncRouterMap = [
  // _sentiment
  {
    index: 1,
    path: '/__hyzx',
    component: Layout,
    redirect: '__hyzx/testAdmin',
    name: '行业资讯',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __hyzxA, name: 'testAdmin__hyzx ' },
      { meta: { role: ['editor'] }, path: 'testUser', component: __hyzxU, name: 'testUser__hyzx ' },
    ]
  },
  {
    index: 1,
    path: '/__qyxx',
    component: Layout,
    redirect: '__qyxx/testAdmin',
    name: '企业信息',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __qyxxA, name: 'testAdmin__qyxx ' },
      { path: 'testUser', component: __qyxxU, name: 'testUser__qyxx ' },
    ]
  },
  {
    index: 1,
    path: '/__jzds',
    component: Layout,
    redirect: '__jzds/testAdmin',
    name: '竞争对手',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __jzdsA, name: 'testAdmin__jzds ' },
      { path: 'testUser', component: __jzdsU, name: 'testUser__jzds ' },
    ]
  },
  {
    index: 1,
    path: '/__rdjc',
    component: Layout,
    redirect: '__rdjc/testAdmin',
    name: '热点监测',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __rdjcA, name: 'testAdmin__rdjc ' },
      { path: 'testUser', component: __rdjcU, name: 'testUser__rdjc ' },
    ]
  },
  {
    index: 1,
    path: '/__yqbg',
    component: Layout,
    redirect: '__yqbg/testAdmin',
    name: '舆情报告',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __yqbgA, name: 'testAdmin__yqbg ' },
      { path: 'testUser', component: __yqbgU, name: 'testUser__yqbg ' },
    ]
  },
  {
    index: 1,
    path: '/__yqyj',
    component: Layout,
    redirect: '__yqyj/testAdmin',
    name: '舆情预警',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __yqyjA, name: 'testAdmin__yqyj ' },
      { path: 'testUser', component: __yqyjU, name: 'testUser__yqyj ' },
    ]
  },
  // _index
  {
    index: 2,
    path: '/__ict',
    component: Layout,
    redirect: '__ict/testAdmin',
    name: 'ICT',
    icon: 'zujian',
    hidden: true,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __ictA, name: 'testAdmin__ict ' },
      { path: 'testUser', component: __ictU, name: 'testUser__ict ' },
    ]
  },
  {
    index: 2,
    path: '/__jjjr',
    component: Layout,
    redirect: '__jjjr/testAdmin',
    name: '经济金融',
    icon: 'zujian',
    hidden: true,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __jjjrA, name: 'testAdmin__jjjr ' },
      { path: 'testUser', component: __jjjrU, name: 'testUser__jjjr ' },
    ]
  },
  // _report
  {
    index: 3,
    path: '/__bggl',
    component: Layout,
    redirect: '__bggl/testAdmin',
    name: '报告管理',
    icon: 'zujian',
    hidden: true,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __bgglA, name: 'testAdmin__bggl ' },
      { path: 'testUser', component: __bgglU, name: 'testUser__bggl ' },
    ]
  },
  // _setting
  {
    index: 4,
    path: '/__dqgl',
    component: Layout,
    redirect: '__dqgl/testAdmin',
    name: '地区管理',
    icon: 'zujian',
    hidden: true,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: __dqglA, name: 'testAdmin__dqgl ' },
      { path: 'testUser', component: __dqglU, name: 'testUser__dqgl ' },
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];