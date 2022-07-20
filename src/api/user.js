import request from '@/utils/request'
// import store from '@/store'
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}
export const getUserInfo = () => {
  return request({
    url: '/user'
    // headers: {
    //   authorization: store.state.user.token
    // }
  })
}
export const getFavoriteList = () => {
  return request({
    url: '/user/favorites'
  })
}
// user——查看已发布房源列表
export const getPublishedList = () => {
  return request({
    url: '/user/houses'
  })
}
