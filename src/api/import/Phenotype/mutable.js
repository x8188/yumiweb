import request from '@/utils/request'

// 查询ImportMutable列表
export function listImportMutable(query) {
  return request({
    url: '/zeamap/ImportMutable/list',
    method: 'get',
    params: query
  })
}

// 查询ImportMutable详细
export function getImportMutable(mutableId) {
  return request({
    url: '/zeamap/ImportMutable/' + mutableId,
    method: 'get'
  })
}

// 新增ImportMutable
export function addImportMutable(data) {
  return request({
    url: '/zeamap/ImportMutable/add',
    method: 'post',
    data: data
  })
}

// 修改ImportMutable
export function updateImportMutable(data) {
  return request({
    url: '/zeamap/ImportMutable/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportMutable
export function delImportMutable(mutableId) {
  return request({
    url: '/zeamap/ImportMutable/remove/' + mutableId,
    method: 'delete'
  })
}
