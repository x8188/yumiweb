import request from '@/utils/request'

// 查询ImportInfo列表
export function listImportInfo(query) {
  return request({
    url: '/zeamap/ImportVariantInfo/list',
    method: 'get',
    params: query
  })
}

// 查询ImportInfo详细
export function getImportInfo(variantinfoId) {
  return request({
    url: '/zeamap/ImportVariantInfo/' + variantinfoId,
    method: 'get'
  })
}

// 新增ImportInfo
export function addImportInfo(data) {
  return request({
    url: '/zeamap/ImportVariantInfo/add',
    method: 'post',
    data: data
  })
}

// 修改ImportInfo
export function updateImportInfo(data) {
  return request({
    url: '/zeamap/ImportVariantInfo/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportInfo
export function delImportInfo(variantinfoId) {
  return request({
    url: '/zeamap/ImportVariantInfo/remove/' + variantinfoId,
    method: 'delete'
  })
}
