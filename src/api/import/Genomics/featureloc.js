import request from '@/utils/request'

// 查询ImportFeatureloc列表
export function listFeatureloc(query) {
  return request({
    url: '/zeamap/featureloc/list',
    method: 'get',
    params: query
  })
}

// 查询ImportFeatureloc详细
export function getFeatureloc(featurelocId) {
  return request({
    url: '/zeamap/ImportFeatureloc/' + featurelocId,
    method: 'get'
  })
}

// 新增ImportFeatureloc
export function addFeatureloc(data) {
  return request({
    url: '/zeamap/ImportFeatureloc/add',
    method: 'get',
    data: data
  })
}

// 修改ImportFeatureloc
export function updateFeatureloc(data) {
  return request({
    url: '/zeamap/ImportFeatureloc/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportFeatureloc
export function delFeatureloc(featurelocId) {
  return request({
    url: '/zeamap/ImportFeatureloc/remove/' + featurelocId,
    method: 'delete'
  })
}
