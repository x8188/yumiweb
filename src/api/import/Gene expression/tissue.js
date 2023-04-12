import request from '@/utils/request'

// 查询组织列表
export function listImportTissue(query) {
  return request({
    url: '/zeamap/ImportTissue/list',
    method: 'get',
    params: query
  })
}

// 查询组织详细
export function getImportTissue(tissueId) {
  return request({
    url: '/zeamap/ImportTissue/' + tissueId,
    method: 'get'
  })
}

// 新增组织
export function addImportTissue(data) {
  return request({
    url: '/zeamap/ImportTissue',
    method: 'post',
    data: data
  })
}

// 修改组织
export function updateImportTissue(data) {
  return request({
    url: '/zeamap/ImportTissue',
    method: 'put',
    data: data
  })
}

// 删除组织
export function delImportTissue(tissueId) {
  return request({
    url: '/zeamap/ImportTissue/' + tissueId,
    method: 'delete'
  })
}
