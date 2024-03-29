import request from '@/utils/request'

// 下拉框选analysis
export function dropDownAnalysis() {
  return request({
    url: '/chromatin_interaction/selectanalysis?accession=B73&version=4.43.0'
  })
}

// 下拉框选择version
export function dropDownVersion(params) {
  return request({
    url: '/chromatin_interaction/selectversion',
    params
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
export function queryAll(data) {
  return request({
    method:'post',
    url: `/chromatin_interaction/selectchromatin_interaction?pageNum=${data.pageNum}&pageSize=${data.pageSize}`,
    data
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