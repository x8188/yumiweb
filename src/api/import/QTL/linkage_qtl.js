import request from '@/utils/request'

// 查询ImportLqtl列表
export function listImportLqtl(query) {
  return request({
    url: '/zeamap/ImportLqtl/list',
    method: 'get',
    params: query
  })
}

// 查询ImportLqtl详细
export function getImportLqtl(linkageQtlId) {
  return request({
    url: '/zeamap/ImportLqtl/' + linkageQtlId,
    method: 'get'
  })
}

// 新增ImportLqtl
export function addImportLqtl(data) {
  return request({
    url: '/zeamap/ImportLqtl',
    method: 'post',
    data: data
  })
}

// 修改ImportLqtl
export function updateImportLqtl(data) {
  return request({
    url: '/zeamap/ImportLqtl',
    method: 'put',
    data: data
  })
}

// 删除ImportLqtl
export function delImportLqtl(linkageQtlId) {
  return request({
    url: '/zeamap/ImportLqtl/' + linkageQtlId,
    method: 'delete'
  })
}
