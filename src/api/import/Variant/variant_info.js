import request from '@/utils/request'

// 查询ImportInfo列表
export function listImportInfo(query) {
  return request({
    url: '/zeamap/ImportInfo/list',
    method: 'get',
    params: query
  })
}

// 查询ImportInfo详细
export function getImportInfo(variantinfoId) {
  return request({
    url: '/zeamap/ImportInfo/' + variantinfoId,
    method: 'get'
  })
}

// 新增ImportInfo
export function addImportInfo(data) {
  return request({
    url: '/zeamap/ImportInfo',
    method: 'post',
    data: data
  })
}

// 修改ImportInfo
export function updateImportInfo(data) {
  return request({
    url: '/zeamap/ImportInfo',
    method: 'put',
    data: data
  })
}

// 删除ImportInfo
export function delImportInfo(variantinfoId) {
  return request({
    url: '/zeamap/ImportInfo/' + variantinfoId,
    method: 'delete'
  })
}
