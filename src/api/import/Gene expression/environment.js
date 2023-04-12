import request from '@/utils/request'

// 查询ImportEnvironment列表
export function listImport(query) {
  return request({
    url: '/zeamap/Import/list',
    method: 'get',
    params: query
  })
}

// 查询ImportEnvironment详细
export function getImport(environmentId) {
  return request({
    url: '/zeamap/Import/' + environmentId,
    method: 'get'
  })
}

// 新增ImportEnvironment
export function addImport(data) {
  return request({
    url: '/zeamap/Import',
    method: 'post',
    data: data
  })
}

// 修改ImportEnvironment
export function updateImport(data) {
  return request({
    url: '/zeamap/Import',
    method: 'put',
    data: data
  })
}

// 删除ImportEnvironment
export function delImport(environmentId) {
  return request({
    url: '/zeamap/Import/' + environmentId,
    method: 'delete'
  })
}
