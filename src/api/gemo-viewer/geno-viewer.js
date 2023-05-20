import request from '@/utils/request'

// 下拉框选reference
export function dropDownReference() {
  return request({
    url: '/zeamap/LDviewer/reference'
  })
}

// 下拉框选择version
export function dropDownVersion(params) {
  return request({
    url: '/zeamap/LDviewer/version',
    params
  })
}

// 下拉框选择Population
export function dropDownPopulation() {
  return request({
    url: '/zeamap/LDviewer/alias'
  })
}

// 下拉框选择Analysis
export function dropDownAnalysis(params) {
  return request({
    url: '/zeamap/LDviewer/description',
    params
  })
}

// 查询chr
export function dropDownChr(params) {
  return request({
    url: '/zeamap/LDviewer/selectChorm',
    params
  })
}