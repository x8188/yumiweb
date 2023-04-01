import request from '@/utils/request'

// 根据name查询详细信息
export function details(params) {
  return request({
    url: '/zeamap/germplasm/details',
    method: 'get',
    params: params
  })
}
