// 通过用户的权限和之前在router.js里面asyncRouterMap的每一个页面所需要的权限做匹配，最后返回一个该用户能够访问路由有哪些

import { asyncRouterMap, constantRouterMap } from '@/router/index';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}
/**
 * 设置头部导航路由的切换
 */
function switchRouter(routerItems, index) {
  // console.log(routerItems)
  for (var j = 0; j < routerItems.length; j++) {
    routerItems[j].hidden = false
    if (routerItems[j].index !== index) {
      routerItems[j].hidden = true
    }
  }
}

const permission = {
  state: {
    routerItem: 1,
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    },
    ChangeRouterItem: (state, i) => {
      state.routerItem = parseInt(i);
      var routerItems = state.addRouters;
      // console.log(state.routerItem)
      switch (state.routerItem) {
        case 1:
          switchRouter(routerItems, 1)
          break;
        case 2:
          switchRouter(routerItems, 2)
          break;
        case 3:
          switchRouter(routerItems, 3)
          break;
        case 4:
          switchRouter(routerItems, 4)
          break;
        default:
          // console.log(typeof(state.routerItem))
          return false
          break;
      }
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }else if (roles.indexOf('editor') >= 0) {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }else {
          return false
        }
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
};

export default permission;
