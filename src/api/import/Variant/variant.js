import request from '@/utils/request'

// 查询ImportVariant列表
export function listImportVariant(query) {
  return request({
    url: '/zeamap/ImportVariant/list',
    method: 'get',
    params: query
  })
}

// 查询ImportVariant详细
export function getImportVariant(variantId) {
  return request({
    url: '/zeamap/ImportVariant/' + variantId,
    method: 'get'
  })
}

// 新增ImportVariant
export function addImportVariant(data) {
  return request({
    url: '/zeamap/ImportVariant/add',
    method: 'get',
    data: data
  })
}

// 修改ImportVariant
export function updateImportVariant(data) {
  return request({
    url: '/zeamap/ImportVariant/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportVariant
export function delImportVariant(variantId) {
  return request({
    url: '/zeamap/ImportVariant/remove/' + variantId,
    method: 'delete'
  })
}
