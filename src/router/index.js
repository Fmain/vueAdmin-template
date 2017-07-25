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
const A_O_hyzx_jcfa = _import('_opinion/__hyzx/jcfaAdmin');
const U_O_hyzx_xxhz = _import('_opinion/__hyzx/xxhzUser');
// 企业信息
const A_O_qyxx_jcfa = _import('_opinion/__qyxx/jcfaAdmin');
// const U_O_qyxx = _import('_opinion/__qyxx/testUser');
const U_O_qyxx_xxhz = _import('_opinion/__qyxx/xxhzUser');
const U_O_qyxx_nrfx = _import('_opinion/__qyxx/nrfxUser');
const U_O_qyxx_cbfx = _import('_opinion/__qyxx/cbfxUser');
const U_O_qyxx_zzjb = _import('_opinion/__qyxx/zzjbUser');
// 竞争对手
const A_O_jzds_jcfa = _import('_opinion/__jzds/jcfaAdmin');
const U_O_jzds_xxhz = _import('_opinion/__jzds/xxhzUser');
// 热点监测
const A_O_rdjc_jcfa = _import('_opinion/__rdjc/jcfaAdmin');
const U_O_rdjc_xxhz = _import('_opinion/__rdjc/xxhzUser');
// 舆情报告
const A_O_yqbg = _import('_opinion/__yqbg/yqbgAdmin');
const U_O_yqbg = _import('_opinion/__yqbg/yqbgUser');
// 舆情预警
const A_O_yqyj = _import('_opinion/__yqyj/yqyjAdmin');
const U_O_yqyj = _import('_opinion/__yqyj/yqyjUser');

/* _indexnumber */
// ICT
const A_I_ict_hlw = _import('_indexnumber/__ict/hlwAdmin');
const A_I_ict_tx = _import('_indexnumber/__ict/txAdmin');
const A_I_ict_dz = _import('_indexnumber/__ict/dzAdmin');
const U_I_ict_hlw = _import('_indexnumber/__ict/hlwUser');
const U_I_ict_tx = _import('_indexnumber/__ict/txUser');
const U_I_ict_dz = _import('_indexnumber/__ict/dzUser');
// 经济金融
const A_I_jjjr_jj = _import('_indexnumber/__jjjr/jjAdmin');
const A_I_jjjr_trz = _import('_indexnumber/__jjjr/trzAdmin');
const A_I_jjjr_ysp = _import('_indexnumber/__jjjr/yspAdmin');
const U_I_jjjr_jj = _import('_indexnumber/__jjjr/jjUser');
const U_I_jjjr_trz = _import('_indexnumber/__jjjr/trzUser');
const U_I_jjjr_ysp = _import('_indexnumber/__jjjr/yspUser');

/* _report */
const U_R_sxbg = _import('_report/__sxbg/sxbgUser');
const U_R_dygl = _import('_report/__dygl/dyglUser');

const A_R_scbg = _import('_report/__scbg/scbgAdmin');
const A_R_bggl = _import('_report/__bggl/bgglAdmin');
const A_R_bgjs = _import('_report/__bgjs/bgjsAdmin');
const A_R_tjfx = _import('_report/__tjfx/tjfxAdmin');

/* _setting */
const U_S_grxx = _import('_setting/__grxx/grxxUser');
const U_S_xgmm = _import('_setting/__xgmm/xgmmUser');
/*我的面板*/
const A_S_grxx = _import('_setting/__wdmb/grxxAdmin');
const A_S_xgmm = _import('_setting/__wdmb/xgmmAdmin');
/*用户管理*/
const A_S_gly = _import('_setting/__yhgl/glyAdmin');
const A_S_vip = _import('_setting/__yhgl/vipAdmin');
const A_S_pt = _import('_setting/__yhgl/ptAdmin');
/*系统设置*/
const A_S_jbcs = _import('_setting/__xtsz/jbcsAdmin');
const A_S_rzgl = _import('_setting/__xtsz/rzglAdmin');
const A_S_dlrz = _import('_setting/__xtsz/dlrzAdmin');
const A_S_dxjk = _import('_setting/__xtsz/dxjkAdmin');
/*地区管理*/
const A_S_yfsz = _import('_setting/__dqgl/yfszAdmin');
const A_S_sjdq = _import('_setting/__dqgl/sjdqAdmin');
const A_S_sqj = _import('_setting/__dqgl/sqjAdmin');
const A_S_xjdq = _import('_setting/__dqgl/xjdqAdmin');
/*微信公众*/
const A_S_wxjk = _import('_setting/__wxgz/wxjkAdmin');
const A_S_gzh = _import('_setting/__wxgz/gzhAdmin');
const A_S_zfjk = _import('_setting/__wxgz/zfjkAdmin');
/*关于我们*/
const A_S_gsjj = _import('_setting/__gywm/gsjjAdmin');
const A_S_qywh = _import('_setting/__gywm/qywhAdmin');
const A_S_ryzz = _import('_setting/__gywm/ryzzAdmin');
const A_S_lxwm = _import('_setting/__gywm/lxwmAdmin');
/*前端首页*/
const A_S_sytb = _import('_setting/__qdsy/sytbAdmin');
const A_S_zjgg = _import('_setting/__qdsy/zjggAdmin');
/*友情链接*/
const A_S_yqlj = _import('_setting/__yqlj/yqljAdmin');

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
    // {path:'/mytest',component:mytest},
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
    // redirect: 'O_hhzx/xxhz',
    redirect: 'noredirect',
    name: '行业资讯',
    icon: 'pie-graph',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'jcfa', component: A_O_hyzx_jcfa, name: '监测方案1' },
      // { meta: { role: ['editor'] }, path: 'testUser', component: U_O_hyzx, name: 'testUser__hyzx ' },
      { meta: { role: ['editor'] }, path: 'xxhz', component: U_O_hyzx_xxhz, name: '信息汇总（行业） ' },
    ]
  },
  {
    index: 1,
    path: '/O_qyxx',
    component: Layout,
    redirect: 'noredirect',
    name: '企业信息',
    icon: 'ionic',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'jcfa', component: A_O_qyxx_jcfa, name: '监测方案2 ' },
      // { meta: { role: ['editor'] }, path: 'testUser', component: U_O_qyxx, name: 'testUser__qyxx ' },
      { meta: { role: ['editor'] }, path: 'xxhz', component: U_O_qyxx_xxhz, name: '信息汇总（self）' },
      { meta: { role: ['editor'] }, path: 'nrfx', component: U_O_qyxx_nrfx, name: '内容分析（self）' },
      { meta: { role: ['editor'] }, path: 'cbfx', component: U_O_qyxx_cbfx, name: '传播分析（self）' },
      { meta: { role: ['editor'] }, path: 'zzjb', component: U_O_qyxx_zzjb, name: '制作简报（self）' },
    ]
  },
  {
    index: 1,
    path: '/O_jzds',
    component: Layout,
    redirect: 'noredirect',
    name: '竞争对手',
    icon: 'person-stalker',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'jcfa', component: A_O_jzds_jcfa, name: '监测方案3 ' },
      { meta: { role: ['editor'] }, path: 'xxhz', component: U_O_jzds_xxhz, name: '信息汇总（竞品）' },
    ]
  },
  {
    index: 1,
    path: '/O_rdjc',
    component: Layout,
    redirect: 'noredirect',
    name: '热点监测',
    icon: 'stats-bars',
    hidden: false,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'jcfa', component: A_O_rdjc_jcfa, name: '监测方案4 ' },
      { meta: { role: ['editor'] }, path: 'xxhz', component: U_O_rdjc_xxhz, name: '信息汇总（热点）' },
    ]
  },
  {
    index: 1,
    path: '/O_yqbg',
    component: Layout,
    redirect: 'noredirect',
    // name: '舆情报告',
    icon: 'chatboxes',
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
    redirect: 'noredirect',
    // name: '舆情预警',
    icon: 'arrow-graph-up-right',
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
    redirect: 'noredirect',
    name: 'ICT',
    icon: 'podium',
    hidden: true,
    noDropdown: false,
    children: [
      { meta: { role: ['admin'] }, path: 'hlw', component: A_I_ict_hlw, name: '互联网' },
      { meta: { role: ['admin'] }, path: 'tx', component: A_I_ict_tx, name: '通信' },
      { meta: { role: ['admin'] }, path: 'dz', component: A_I_ict_dz, name: '电子' },
      { meta: { role: ['editor'] }, path: 'hlw', component: U_I_ict_hlw, name: '互联网' },
      { meta: { role: ['editor'] }, path: 'tx', component: U_I_ict_tx, name: '通信' },
      { meta: { role: ['editor'] }, path: 'dz', component: U_I_ict_dz, name: '电子' },
    ]
  },
  {
    index: 2,
    path: '/I_jjjr',
    component: Layout,
    redirect: 'noredirect',
    name: '经济金融',
    icon: 'earth',
    hidden: true,
    noDropdown: false,
    children: [
      // { meta: { role: ['admin'] }, path: 'testAdmin', component: A_I_jjjr, name: 'testAdmin__jjjr ' },
      { meta: { role: ['admin'] }, path: 'jj', component: A_I_jjjr_jj, name: '经济' },
      { meta: { role: ['admin'] }, path: 'trz', component: A_I_jjjr_trz, name: '投融资' },
      { meta: { role: ['admin'] }, path: 'ysp', component: A_I_jjjr_ysp, name: '衍生品' },
      { meta: { role: ['editor'] }, path: 'jj', component: U_I_jjjr_jj, name: '经济' },
      { meta: { role: ['editor'] }, path: 'trz', component: U_I_jjjr_trz, name: '投融资' },
      { meta: { role: ['editor'] }, path: 'ysp', component: U_I_jjjr_ysp, name: '衍生品' },
    ]
  },
  // _report
  {
    index: 3,
    path: '/R_sxbg',
    component: Layout,
    redirect: 'noredirect',
    // name: '上线报告',
    icon: 'ios-book-outline',
    hidden: true,
    noDropdown: true,
    children: [
      { meta: { role: ['editor'] }, path: 'sxbg', component: U_R_sxbg, name: '上线报告 ' },
    ]
  },
  {
    index: 3,
    path: '/R_dygl',
    component: Layout,
    redirect: 'noredirect',
    // name: '订阅管理',
    icon: 'android-bookmark',
    hidden: true,
    noDropdown: true,
    children: [
      { meta: { role: ['editor'] }, path: 'dygl', component: U_R_dygl, name: '订阅管理 ' },
    ]
  },
  {
    index: 3,
    path: '/R_scbg',
    component: Layout,
    redirect: 'noredirect',
    // name: '订阅管理',
    icon: 'android-bookmark',
    hidden: true,
    noDropdown: true,
    children: [
      { meta: { role: ['admin'] }, path: 'scbg', component: A_R_scbg, name: '上传报告 ' },
    ]
  },
  {
    index: 3,
    path: '/R_bggl',
    component: Layout,
    redirect: 'noredirect',
    // name: '订阅管理',
    icon: 'android-bookmark',
    hidden: true,
    noDropdown: true,
    children: [
      { meta: { role: ['admin'] }, path: 'bggl', component: A_R_bggl, name: '报告管理 ' },
    ]
  },
  {
    index: 3,
    path: '/R_bgjs',
    component: Layout,
    redirect: 'noredirect',
    // name: '订阅管理',
    icon: 'android-bookmark',
    hidden: true,
    noDropdown: true,
    children: [
      { meta: { role: ['admin'] }, path: 'bgjs', component: A_R_bgjs, name: '报告检索 ' },
    ]
  },
  {
    index: 3,
    path: '/R_tjfx',
    component: Layout,
    redirect: 'noredirect',
    // name: '订阅管理',
    icon: 'android-bookmark',
    hidden: true,
    noDropdown: true,
    children: [
      { meta: { role: ['admin'] }, path: 'tjfx', component: A_R_tjfx, name: '统计分析 ' },
    ]
  },
  // _setting
  {
    index: 4,
    path: '/S_grxx',
    component: Layout,
    redirect: 'noredirect',
    // name: '个人信息',
    icon: 'android-contact',
    hidden: true,
    noDropdown: true,
    children: [
      { meta: { role: ['editor'] }, path: 'grxx', component: U_S_grxx, name: '个人信息' },
    ]
  },
  {
    index: 4,
    path: '/S_xgmm',
    component: Layout,
    redirect: 'noredirect',
    // name: '修改密码',
    icon: 'android-warning',
    hidden: true,
    noDropdown: true,
    children: [
      { meta: { role: ['editor'] }, path: 'xgmm', component: U_S_xgmm, name: '修改密码' },
    ]
  },
  {
    index: 4,
    path: '/S_wdmb',
    component: Layout,
    redirect: 'noredirect',
    name: '我的面板',
    icon: 'android-warning',
    hidden: true,
    noDropdown: false,
    meta: { role: ['admin'] },
    children: [
      { meta: { role: ['admin'] }, path: 'grxx', component: A_S_grxx, name: '个人信息' },
      { meta: { role: ['admin'] }, path: 'xgmm', component: A_S_xgmm, name: '修改密码' },
    ]
  },
  {
    index: 4,
    path: '/S_yhgl',
    component: Layout,
    redirect: 'noredirect',
    name: '用户管理',
    icon: 'android-warning',
    hidden: true,
    noDropdown: false,
    meta: { role: ['admin'] },
    children: [
      { meta: { role: ['admin'] }, path: 'gly', component: A_S_gly, name: '管理员' },
      { meta: { role: ['admin'] }, path: 'vip', component: A_S_vip, name: 'VIP管理' },
      { meta: { role: ['admin'] }, path: 'pt', component: A_S_pt, name: '普通会员管理' },
    ]
  },
  {
    index: 4,
    path: '/S_xtsz',
    component: Layout,
    redirect: 'noredirect',
    name: '系统设置',
    icon: 'android-warning',
    hidden: true,
    noDropdown: false,
    meta: { role: ['admin'] },
    children: [
      { meta: { role: ['admin'] }, path: 'jbcs', component: A_S_jbcs, name: '基本参数' },
      { meta: { role: ['admin'] }, path: 'rzgl', component: A_S_rzgl, name: '日志管理' },
      { meta: { role: ['admin'] }, path: 'dlrz', component: A_S_dlrz, name: '登录日志' },
      { meta: { role: ['admin'] }, path: 'dxjk', component: A_S_dxjk, name: '短信接口' },
    ]
  },
  {
    index: 4,
    path: '/S_dqgl',
    component: Layout,
    redirect: 'noredirect',
    name: '地区管理',
    icon: 'android-warning',
    hidden: true,
    noDropdown: false,
    meta: { role: ['admin'] },
    children: [
      { meta: { role: ['admin'] }, path: 'yfsz', component: A_S_yfsz, name: '运费设置' },
      { meta: { role: ['admin'] }, path: 'sjdq', component: A_S_sjdq, name: '省级地区' },
      { meta: { role: ['admin'] }, path: 'sqj', component: A_S_sqj, name: '市区级' },
      { meta: { role: ['admin'] }, path: 'xjdq', component: A_S_xjdq, name: '县级地区' },
    ]
  },
  {
    index: 4,
    path: '/S_wxgz',
    component: Layout,
    redirect: 'noredirect',
    name: '微信公众',
    icon: 'android-warning',
    hidden: true,
    noDropdown: false,
    meta: { role: ['admin'] },
    children: [
      { meta: { role: ['admin'] }, path: 'wxjk', component: A_S_wxjk, name: '微信接口' },
      { meta: { role: ['admin'] }, path: 'gzh', component: A_S_gzh, name: '公众号' },
      { meta: { role: ['admin'] }, path: 'zfjk', component: A_S_zfjk, name: '支付接口' },
    ]
  },
  {
    index: 4,
    path: '/S_gywm',
    component: Layout,
    redirect: 'noredirect',
    name: '关于我们',
    icon: 'android-warning',
    hidden: true,
    noDropdown: false,
    meta: { role: ['admin'] },
    children: [
      { meta: { role: ['admin'] }, path: 'gsjj', component: A_S_gsjj, name: '公司介绍' },
      { meta: { role: ['admin'] }, path: 'qywh', component: A_S_qywh, name: '企业文化' },
      { meta: { role: ['admin'] }, path: 'ryzz', component: A_S_ryzz, name: '荣誉资质' },
      { meta: { role: ['admin'] }, path: 'lxwm', component: A_S_lxwm, name: '联系我们' },
    ]
  },
  {
    index: 4,
    path: '/S_qdsy',
    component: Layout,
    redirect: 'noredirect',
    name: '前端首页',
    icon: 'android-warning',
    hidden: true,
    noDropdown: false,
    meta: { role: ['admin'] },
    children: [
      { meta: { role: ['admin'] }, path: 'sytb', component: A_S_sytb, name: '首页头部' },
      { meta: { role: ['admin'] }, path: 'zjgg', component: A_S_zjgg, name: '中间广告' },
    ]
  },
  {
    index: 4,
    path: '/S_yqlj',
    component: Layout,
    redirect: 'noredirect',
    name: '友情链接',
    icon: 'android-warning',
    hidden: true,
    noDropdown: true,
    meta: { role: ['admin'] },
    children: [
      { meta: { role: ['admin'] }, path: 'yqlj', component: A_S_yqlj, name: '友情链接' },
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
];