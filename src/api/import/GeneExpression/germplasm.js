import request from '@/utils/request'

// 查询产品详情列表
export function listGermplasm(query) {
  return request({
    url: '/zeamap/germplasm/list',
    method: 'get',
    params: query
  })
}

// 查询产品详情详细
export function getGermplasm(germplasmId) {
  return request({
    url: '/zeamap/germplasm/' + germplasmId,
    method: 'get'
  })
}

// 新增产品详情
export function addGermplasm(data) {
  return request({
    url: '/zeamap/germplasm/add',
    method: 'get',
    data: data
  })
}

// 修改产品详情
export function updateGermplasm(data) {
  return request({
    url: '/zeamap/germplasm/edit',
    method: 'put',
    data: data
  })
}

// 删除产品详情
export function delGermplasm(germplasmId) {
  return request({
    url: '/zeamap/germplasm/remove/' + germplasmId,
    method: 'delete'
  })
}
