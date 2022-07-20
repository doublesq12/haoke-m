import request from '@/utils/request'
// 查询房屋具体信息接口component页面要用的接口
export const getHouseDetailList = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
