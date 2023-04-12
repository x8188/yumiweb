import request from '@/utils/request'

// 查询dbxref列表
export function listDbxref(query) {
  return request({
    url: '/zeamap/Dbxref/list',
    method: 'get',
    params: query
  })
}

// 查询dbxref详细
export function getDbxref(dbxrefId) {
  return request({
    url: '/zeamap/Dbxref/' + dbxrefId,
    method: 'get'
  })
}

// 新增dbxref
export function addDbxref(data) {
  return request({
    url: '/zeamap/Dbxref',
    method: 'post',
    data: data
  })
}

// 修改dbxref
export function updateDbxref(data) {
  return request({
    url: '/zeamap/Dbxref',
    method: 'put',
    data: data
  })
}

// 删除dbxref
export function delDbxref(dbxrefId) {
  return request({
    url: '/zeamap/Dbxref/' + dbxrefId,
    method: 'delete'
  })
}
