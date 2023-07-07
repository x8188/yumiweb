import request from '@/utils/request'

// 查询ImportAqtl列表
export function listImportAqtl(query) {
  return request({
    url: '/zeamap/ImportAqtl/list',
    method: 'get',
    params: query
  })
}

// 查询ImportAqtl详细
export function getImportAqtl(associationQtlId) {
  return request({
    url: '/zeamap/ImportAqtl/' + associationQtlId,
    method: 'get'
  })
}

// 新增ImportAqtl
export function addImportAqtl(data) {
  return request({
    url: '/zeamap/ImportAqtl/add',
    method: 'post',
    data: data
  })
}

// 修改ImportAqtl
export function updateImportAqtl(data) {
  return request({
    url: '/zeamap/ImportAqtl/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportAqtl
export function delImportAqtl(associationQtlId) {
  return request({
    url: '/zeamap/ImportAqtl/remove/' + associationQtlId,
    method: 'delete'
  })
}
