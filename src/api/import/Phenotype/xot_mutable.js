import request from '@/utils/request'

// 查询ImportXot_mutable列表
export function listImportXot_mutable(query) {
  return request({
    url: '/zeamap/ImportXot_mutable/list',
    method: 'get',
    params: query
  })
}

// 查询ImportXot_mutable详细
export function getImportXot_mutable(xotMutableId) {
  return request({
    url: '/zeamap/ImportXot_mutable/' + xotMutableId,
    method: 'get'
  })
}

// 新增ImportXot_mutable
export function addImportXot_mutable(data) {
  return request({
    url: '/zeamap/ImportXot_mutable/add',
    method: 'post',
    data: data
  })
}

// 修改ImportXot_mutable
export function updateImportXot_mutable(data) {
  return request({
    url: '/zeamap/ImportXot_mutable/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportXot_mutable
export function delImportXot_mutable(xotMutableId) {
  return request({
    url: '/zeamap/ImportXot_mutable/remove/' + xotMutableId,
    method: 'delete'
  })
}
