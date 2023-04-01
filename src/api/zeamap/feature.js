import request from '@/utils/request'

// 查询Phenomics列表
export function listFeature(query) {
  return request({
    url: '/zeamap/feature/list',
    method: 'get',
    params: query
  })
}

// 查询Phenomics详细
export function getFeature(featureId) {
  return request({
    url: '/zeamap/feature/' + featureId,
    method: 'get'
  })
}

// 新增Phenomics
export function addFeature(data) {
  return request({
    url: '/zeamap/feature',
    method: 'post',
    data: data
  })
}




