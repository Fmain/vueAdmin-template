import fetch from '@/utils/fetch';
import qs from 'qs'

export function login(username, password) {
  let data = qs.stringify({
    username,
    password
  })
  return fetch({
    baseURL: process.env.BASE_URL,
    url: '/user/login',
    method: 'post',
    data
  });
}

export function getInfo(token) {
  // let params = qs.stringify({
  //   token
  // })
  return fetch({
    // baseURL: process.env.BASE_URL,
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  });
}



