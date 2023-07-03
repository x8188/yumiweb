import request from '@/utils/request'

// 查询Import列表
export function listImportmarker(query) {
  return request({
    url: '/zeamap/Importmarker/list',
    method: 'get',
    params: query
  })
}

// 查询Import详细
export function getImportmarker(linkageMarkerId) {
  return request({
    url: '/zeamap/Importmarker/' + linkageMarkerId,
    method: 'get'
  })
}

// 新增Import
export function addImportmarker(data) {
  return request({
    url: '/zeamap/Importmarker/add',
    method: 'get',
    data: data
  })
}

// 修改Import
export function updateImportmarker(data) {
  return request({
    url: '/zeamap/Importmarker/edit',
    method: 'put',
    data: data
  })
}

// 删除Import
export function delImportmarker(linkageMarkerId) {
  return request({
    url: '/zeamap/Importmarker/remove/' + linkageMarkerId,
    method: 'delete'
  })
}
