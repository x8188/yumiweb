import request from '@/utils/request'

// 查询import列表
export function listImportxotgermplasm(query) {
  return request({
    url: '/zeamap/importXotGermplasm/list',
    method: 'get',
    params: query
  })
}

// 查询import详细
export function getImportxotgermplasm(xotGermplasmId) {
  return request({
    url: '/zeamap/importXotGermplasm/' + xotGermplasmId,
    method: 'get'
  })
}

// 新增import
export function addImportxotgermplasm(data) {
  return request({
    url: '/zeamap/importXotGermplasm/add',
    method: 'post',
    data: data
  })
}

// 修改import
export function updateImportxotgermplasm(data) {
  return request({
    url: '/zeamap/importXotGermplasm/edit',
    method: 'put',
    data: data
  })
}

// 删除import
export function delImportxotgermplasm(xotGermplasmId) {
  return request({
    url: '/zeamap/importXotGermplasm/remove/' + xotGermplasmId,
    method: 'delete'
  })
}
