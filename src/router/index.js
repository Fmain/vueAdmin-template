import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* dashboard */
const dashboard = _import('dashboard/index');

/* home */
const home = _import('home/Main');
const index = _import('home/index');
const indexnumber = _import('home/indexnumber');
const opinion = _import('home/opinion');
const report = _import('home/report');
/* login */
const Login = _import('login/index');
/* register */
const register = _import('home/register');

/* error page */
const Err404 = _import('404');

/* demo page */
const Test = _import('page/test');
const Form = _import('page/form');
const Table = _import('table/index');

// 命名规则 用户角色_一级_二级_三级
/* _opinion */
// 行业资讯
const A_O_hyzx = _import('_opinion/__hyzx/testAdmin');
// const U_O_hyzx = _import('_opinion/__hyzx/testUser');
const U_O_hyzx_xxhz = _import('_opinion/__hyzx/xxhzUser');
// 企业信息
const A_O_qyxx = _import('_opinion/__qyxx/testAdmin');
// const U_O_qyxx = _import('_opinion/__qyxx/testUser');
const U_O_qyxx_xxhz = _import('_opinion/__qyxx/xxhzUser');
const U_O_qyxx_nrfx = _import('_opinion/__qyxx/nrfxUser');
const U_O_qyxx_cbfx = _import('_opinion/__qyxx/cbfxUser');
const U_O_qyxx_zzjb = _import('_opinion/__qyxx/zzjbUser');
// 竞争对手
const A_O_jzds = _import('_opinion/__jzds/testAdmin');
const U_O_jzds = _import('_opinion/__jzds/testUser');
// 热点监测
const A_O_rdjc = _import('_opinion/__rdjc/testAdmin');
const U_O_rdjc = _import('_opinion/__rdjc/testUser');
// 舆情报告
const A_O_yqbg = _import('_opinion/__yqbg/yqbgAdmin');
const U_O_yqbg = _import('_opinion/__yqbg/yqbgUser');
// 舆情预警
const A_O_yqyj = _import('_opinion/__yqyj/yqyjAdmin');
const U_O_yqyj = _import('_opinion/__yqyj/yqyjUser');

/* _indexnumber */
const A_I_ict = _import('_indexnumber/__ict/testAdmin');
const U_I_ict = _import('_indexnumber/__ict/testUser');
const A_I_jjjr = _import('_indexnumber/__jjjr/testAdmin');
const U_I_jjjr = _import('_indexnumber/__jjjr/testUser');

/* _report */
// 上线报告
const A_R_sxbg = _import('_report/__sxbg/sxbgAdmin');
const U_R_sxbg = _import('_report/__sxbg/sxbgUser');
// 订阅管理
const A_R_dygl = _import('_report/__dygl/dyglAdmin');
const U_R_dygl = _import('_report/__dygl/dyglUser');

const A_R_bggl = _import('_report/__bggl/testAdmin');
const U_R_bggl = _import('_report/__bggl/testUser');

/* _setting */
const A_S_grxx = _import('_setting/__grxx/grxxAdmin');
const U_S_grxx = _import('_setting/__grxx/grxxUser');
const A_S_xgmm = _import('_setting/__xgmm/xgmmAdmin');
const U_S_xgmm = _import('_setting/__xgmm/xgmmUser');

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
    { path: '/register', component: register, hidden: true },
    { path: '/home', component: home, hidden: true },
    { path: '/index', component: index, hidden: true },
    { path: '/indexnumber', component: indexnumber, hidden: true },
    { path: '/opinion', component: opinion, hidden: true },
    { path: '/report', component: report, hidden: true },
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
    path: '/O_hhzx',
    component: Layout,
    // redirect: 'O_hhzx/testAdmin',
    name: '行业资讯',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: A_O_hyzx, name: 'testAdmin__hyzx ' },
      // { meta: { role: ['editor'] }, path: 'testUser', component: U_O_hyzx, name: 'testUser__hyzx ' },
      { meta: { role: ['editor'] }, path: 'xxhz', component: U_O_hyzx_xxhz, name: '信息汇总（行业） ' },
    ]
  },
  {
    index: 1,
    path: '/O_qyxx',
    component: Layout,
    // redirect: '__qyxx/testAdmin',
    name: '企业信息',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: A_O_qyxx, name: 'testAdmin__qyxx ' },
      // { meta: { role: ['editor'] }, path: 'testUser', component: U_O_qyxx, name: 'testUser__qyxx ' },
      { meta: { role: ['editor'] }, path: 'xxhz', component: U_O_qyxx_xxhz, name: '信息汇总 ' },
      { meta: { role: ['editor'] }, path: 'nrfx', component: U_O_qyxx_nrfx, name: '内容分析 ' },
      { meta: { role: ['editor'] }, path: 'cbfx', component: U_O_qyxx_cbfx, name: '成本分析 ' },
      { meta: { role: ['editor'] }, path: 'zzjb', component: U_O_qyxx_zzjb, name: '制作简报 ' },
    ]
  },
  {
    index: 1,
    path: '/O_jzds',
    component: Layout,
    // redirect: '__jzds/testAdmin',
    name: '竞争对手',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: A_O_jzds, name: 'testAdmin__jzds ' },
      { meta: { role: ['editor'] }, path: 'testUser', component: U_O_jzds, name: 'testUser__jzds ' },
    ]
  },
  {
    index: 1,
    path: '/O_rdjc',
    component: Layout,
    // redirect: '__rdjc/testAdmin',
    name: '热点监测',
    icon: 'zujian',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: A_O_rdjc, name: 'testAdmin__rdjc ' },
      { meta: { role: ['editor'] }, path: 'testUser', component: U_O_rdjc, name: 'testUser__rdjc ' },
    ]
  },
  {
    index: 1,
    path: '/O_yqbg',
    component: Layout,
    // redirect: '__yqbg/testAdmin',
    // name: '舆情报告',
    icon: 'zujian',
    hidden: false,
    noDropdown: true,
    children: [
      { meta: { role: ['admin'] }, path: 'yqbg', component: A_O_yqbg, name: '舆情报告 ' },
      { meta: { role: ['editor'] }, path: 'yqbg', component: U_O_yqbg, name: '舆情报告 ' },
    ]
  },
  {
    index: 1,
    path: '/O_yqyj',
    component: Layout,
    // redirect: '__yqyj/testAdmin',
    // name: '舆情预警',
    icon: 'zujian',
    hidden: false,
    noDropdown: true,
    children: [
      { meta: { role: ['admin'] }, path: 'yqyj', component: A_O_yqyj, name: '舆情预警 ' },
      { meta: { role: ['editor'] }, path: 'yqyj', component: U_O_yqyj, name: '舆情预警 ' },
    ]
  },
  // _index
  {
    index: 2,
    path: '/I_ict',
    component: Layout,
    // redirect: '__ict/testAdmin',
    name: 'ICT',
    icon: 'zujian',
    hidden: true,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: A_I_ict, name: 'testAdmin__ict ' },
      { meta: { role: ['editor'] }, path: 'testUser', component: U_I_ict, name: 'testUser__ict ' },
    ]
  },
  {
    index: 2,
    path: '/I_jjjr',
    component: Layout,
    // redirect: '__jjjr/testAdmin',
    name: '经济金融',
    icon: 'zujian',
    hidden: true,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'testAdmin', component: A_I_jjjr, name: 'testAdmin__jjjr ' },
      { meta: { role: ['editor'] }, path: 'testUser', component: U_I_jjjr, name: 'testUser__jjjr ' },
    ]
  },
  // _report
  {
    index: 3,
    path: '/R_sxbg',
    component: Layout,
    // redirect: '__bggl/testAdmin',
    // name: '上线报告',
    icon: 'zujian',
    hidden: true,
    noDropdown: true,
    children: [
      // { meta: { role: ['admin'] }, path: 'sxbg', component: A_R_sxbg, name: '上线报告 ' },
      { meta: { role: ['editor'] }, path: 'sxbg', component: U_R_sxbg, name: '上线报告 ' },
    ]
  },
  {
    index: 3,
    path: '/R_dygl',
    component: Layout,
    // redirect: '__dybg/testAdmin',
    // name: '订阅管理',
    icon: 'zujian',
    hidden: true,
    noDropdown: true,
    children: [
      // { meta: { role: ['admin'] }, path: 'dygl', component: A_R_dybg, name: '订阅管理 ' },
      { meta: { role: ['editor'] }, path: 'dygl', component: U_R_dygl, name: '订阅管理 ' },
    ]
  },
  // _setting
  {
    index: 4,
    path: '/S_grxx',
    component: Layout,
    // redirect: '__dqgl/testAdmin',
    // name: '个人信息',
    icon: 'zujian',
    hidden: true,
    noDropdown: true,
    children: [
      // { meta: { role: ['admin'] }, path: 'grxx', component: A_S_grxx, name: '个人信息' },
      { meta: { role: ['editor'] }, path: 'grxx', component: U_S_grxx, name: '个人信息' },
    ]
  },
  {
    index: 4,
    path: '/S_xgmm',
    component: Layout,
    // redirect: '__dqgl/testAdmin',
    // name: '修改密码',
    icon: 'zujian',
    hidden: true,
    noDropdown: true,
    children: [
      // { meta: { role: ['admin'] }, path: 'xgmm', component: A_S_xgmm, name: '修改密码' },
      { meta: { role: ['editor'] }, path: 'xgmm', component: U_S_xgmm, name: '修改密码' },
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];