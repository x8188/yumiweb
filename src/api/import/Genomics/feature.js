import request from '@/utils/request'

// 查询Importfeature列表
export function listImportfeature(query) {
  return request({
    url: '/zeamap/Importfeature/list',
    method: 'get',
    params: query
  })
}

// 查询Importfeature详细
export function getImportfeature(featureId) {
  return request({
    url: '/zeamap/Importfeature/' + featureId,
    method: 'get'
  })
}

// 新增Importfeature
export function addImportfeature(data) {
  return request({
    url: '/zeamap/Importfeature/add',
    method: 'get',
    data: data
  })
}

// 修改Importfeature
export function updateImportfeature(data) {
  return request({
    url: '/zeamap/Importfeature/edit',
    method: 'put',
    data: data
  })
}

// 删除Importfeature
export function delImportfeature(featureId) {
  return request({
    url: '/zeamap/Importfeature/remove/' + featureId,
    method: 'delete'
  })
}
