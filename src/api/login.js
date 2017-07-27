import fetch from '@/utils/fetch';

export function login(username, password) {
  let data = {
    email: username,
    password
  }
  console.log(data)
  return fetch({
    url: '/user/login',
    method: 'post',
    data
  });
}

export function getInfo(token) {
  return fetch({
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



