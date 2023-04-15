import request from '@/utils/request'

// 下拉框选analysis
export function dropDownAnalysis() {
  return request({
    url: '/chromatin_interaction/selectanalysis?accession=B73&version=4.43.0'
  })
}

// 下拉框选择version
export function dropDownVersion() {
  return request({
    url: '/chromatin_interaction/selectversion?accession=B73',
  })
}

// 下拉框选择accession
export function dropDownAccession() {
  return request({
    url: '/chromatin_interaction/selectaccession',
  })
}

// 查找chrA
export function queryChrA() {
  return request({
    url: '/chromatin_interaction/selectchrA'
  })
}

// 查找chrB
export function queryChrB() {
  return request({
    url: '/chromatin_interaction/selectchrB'
  })
}

// 大查询
export function queryAll(params) {
  return request({
    url: '/chromatin_interaction/selectchromatin_interaction',
    params
  })
}

// 下载
export function downloadAll(data) {
  return request({
    url: '/chromatin_interaction/download',
    method: 'post',
    data,
    responseType: 'blob'
  })
}