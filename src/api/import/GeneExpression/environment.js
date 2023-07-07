import request from '@/utils/request'

// 查询ImportEnvironment列表
export function listImport(query) {
  return request({
    url: '/zeamap/ImportEnvironment/list',
    method: 'get',
    params: query
  })
}

// 查询ImportEnvironment详细
export function getImport(environmentId) {
  return request({
    url: '/zeamap/ImportEnvironment/' + environmentId,
    method: 'get'
  })
}

// 新增ImportEnvironment
export function addImport(data) {
  return request({
    url: '/zeamap/ImportEnvironment/add',
    method: 'post',
    data: data
  })
}

// 修改ImportEnvironment
export function updateImport(data) {
  return request({
    url: '/zeamap/ImportEnvironment/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportEnvironment
export function delImport(environmentId) {
  return request({
    url: '/zeamap/ImportEnvironment/remove' + environmentId,
    method: 'delete'
  })
}
