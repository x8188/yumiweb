import request from '@/utils/request'

// 查询产品列表
export function listPopulation(query) {
  return request({
    url: '/zeamap/population/list',
    method: 'get',
    params: query
  })
}

// 查询产品详细
export function getPopulation(populationId) {
  return request({
    url: '/zeamap/population/' + populationId,
    method: 'get'
  })
}

// 新增产品
export function addPopulation(data) {
  return request({
    url: '/zeamap/population/add',
    method: 'post',
    data: data
  })
}

// 修改产品
export function updatePopulation(data) {
  return request({
    url: '/zeamap/population/edit',
    method: 'put',
    data: data
  })
}

// 删除产品
export function delPopulation(populationId) {
  return request({
    url: '/zeamap/population/remove/' + populationId,
    method: 'delete'
  })
}
