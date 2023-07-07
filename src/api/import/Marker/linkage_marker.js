import request from '@/utils/request'

// 查询Import列表
export function listImportmarker(query) {
  return request({
    url: '/zeamap/ImportLmarker/list',
    method: 'get',
    params: query
  })
}

// 查询Import详细
export function getImportmarker(linkageMarkerId) {
  return request({
    url: '/zeamap/ImportLmarker/' + linkageMarkerId,
    method: 'get'
  })
}

// 新增Import
export function addImportmarker(data) {
  return request({
    url: '/zeamap/ImportLmarker/add',
    method: 'post',
    data: data
  })
}

// 修改Import
export function updateImportmarker(data) {
  return request({
    url: '/zeamap/ImportLmarker/edit',
    method: 'put',
    data: data
  })
}

// 删除Import
export function delImportmarker(linkageMarkerId) {
  return request({
    url: '/zeamap/ImportLmarker/remove/' + linkageMarkerId,
    method: 'delete'
  })
}
