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

// 下拉框选择chr
export function dropDownChr(params) {
  return request({
    url: '/zeamap/LDviewer/selectChorm',
    params
  })
}

// Germplasm选择TST
export function germplasmSelectTST() {
  return request({
    url: '/zeamap/genoviewer/TST'
  })
}

// Germplasm选择Mixed
export function germplasmSelectMixed() {
  return request({
    url: '/zeamap/genoviewer/Mixed'
  })
}

// Germplasm选择NSS
export function germplasmSelectNSS() {
  return request({
    url: '/zeamap/genoviewer/NSS'
  })
}

// Germplasm选择SS
export function germplasmSelectSS() {
  return request({
    url: '/zeamap/genoviewer/SS'
  })
}

// 大查询
export function selectData(params) {
  return request({
    url: '/zeamap/genoviewer/selectData',
    params
  })
}