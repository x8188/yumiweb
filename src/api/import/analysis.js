import request from '@/utils/request'

// 查询Analysis列表
export function listAnalysis(query) {
  return request({
    url: '/zeamap/Analysis/list',
    method: 'get',
    params: query
  })
}

// 查询Analysis详细
export function getAnalysis(analysisId) {
  return request({
    url: '/zeamap/Analysis/' + analysisId,
    method: 'get'
  })
}

// 新增Analysis
export function addAnalysis(data) {
  return request({
    url: '/zeamap/Analysis',
    method: 'post',
    data: data
  })
}

// 修改Analysis
export function updateAnalysis(data) {
  return request({
    url: '/zeamap/Analysis',
    method: 'put',
    data: data
  })
}

// 删除Analysis
export function delAnalysis(analysisId) {
  return request({
    url: '/zeamap/Analysis/' + analysisId,
    method: 'delete'
  })
}
