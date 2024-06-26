import request from '@/utils/request'

// 查询详细信息的germplasm表
export function listGermplasm(data) {
  return request({
    url: '/zeamap/germplasm/list',
    method: 'post',
    data,
  })
}

// 根据name值查询germplasm表详细信息
export function choose(params) {
  return request({
    url: '/zeamap/germplasm/choose',
    method: 'get',
    params: params
  })
}
