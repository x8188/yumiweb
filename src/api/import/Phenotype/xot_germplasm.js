import request from '@/utils/request'

// 查询import列表
export function listImportxotgermplasm(query) {
  return request({
    url: '/zeamap/importxotgermplasm/list',
    method: 'get',
    params: query
  })
}

// 查询import详细
export function getImportxotgermplasm(xotGermplasmId) {
  return request({
    url: '/zeamap/importxotgermplasm/' + xotGermplasmId,
    method: 'get'
  })
}

// 新增import
export function addImportxotgermplasm(data) {
  return request({
    url: '/zeamap/importxotgermplasm',
    method: 'post',
    data: data
  })
}

// 修改import
export function updateImportxotgermplasm(data) {
  return request({
    url: '/zeamap/importxotgermplasm',
    method: 'put',
    data: data
  })
}

// 删除import
export function delImportxotgermplasm(xotGermplasmId) {
  return request({
    url: '/zeamap/importxotgermplasm/' + xotGermplasmId,
    method: 'delete'
  })
}
