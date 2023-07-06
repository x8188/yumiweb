import request from '@/utils/request'

// 查询1列表
export function listImportXot(query) {
  return request({
    url: '/zeamap/ImportXot/list',
    method: 'get',
    params: query
  })
}

// 查询1详细
export function getImportXot(xotId) {
  return request({
    url: '/zeamap/ImportXot/' + xotId,
    method: 'get'
  })
}

// 新增1
export function addImportXot(data) {
  return request({
    url: '/zeamap/ImportXot/add',
    method: 'post',
    data: data
  })
}

// 修改1
export function updateImportXot(data) {
  return request({
    url: '/zeamap/ImportXot/edit',
    method: 'put',
    data: data
  })
}

// 删除1
export function delImportXot(xotId) {
  return request({
    url: '/zeamap/ImportXot/remove/' + xotId,
    method: 'delete'
  })
}
