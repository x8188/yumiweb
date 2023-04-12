import request from '@/utils/request'

// 查询Import列表
export function listImportMarker(query) {
  return request({
    url: '/zeamap/ImportMarker/list',
    method: 'get',
    params: query
  })
}

// 查询Import详细
export function getImportMarker(associationMarkerId) {
  return request({
    url: '/zeamap/ImportMarker/' + associationMarkerId,
    method: 'get'
  })
}

// 新增Import
export function addImportMarker(data) {
  return request({
    url: '/zeamap/ImportMarker',
    method: 'post',
    data: data
  })
}

// 修改Import
export function updateImportMarker(data) {
  return request({
    url: '/zeamap/ImportMarker',
    method: 'put',
    data: data
  })
}

// 删除Import
export function delImportMarker(associationMarkerId) {
  return request({
    url: '/zeamap/ImportMarker/' + associationMarkerId,
    method: 'delete'
  })
}
