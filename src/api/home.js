import request from '@/utils/request'
export const getRotationChart = () => {
  return request({
    url: '/home/swiper'
  })
}
export const homeGroups = (id) => {
  return request({
    url: '/home/groups',
    area: id
  })
}
