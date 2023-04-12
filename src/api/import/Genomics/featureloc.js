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
    url: '/zeamap/featureloc/' + featurelocId,
    method: 'get'
  })
}

// 新增ImportFeatureloc
export function addFeatureloc(data) {
  return request({
    url: '/zeamap/featureloc',
    method: 'post',
    data: data
  })
}

// 修改ImportFeatureloc
export function updateFeatureloc(data) {
  return request({
    url: '/zeamap/featureloc',
    method: 'put',
    data: data
  })
}

// 删除ImportFeatureloc
export function delFeatureloc(featurelocId) {
  return request({
    url: '/zeamap/featureloc/' + featurelocId,
    method: 'delete'
  })
}
