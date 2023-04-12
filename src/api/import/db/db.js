import request from '@/utils/request'

// 查询db列表
export function listDb(query) {
  return request({
    url: '/zeamap/db/list',
    method: 'get',
    params: query
  })
}

// 查询db详细
export function getDb(dbId) {
  return request({
    url: '/zeamap/db/' + dbId,
    method: 'get'
  })
}

// 新增db
export function addDb(data) {
  return request({
    url: '/zeamap/db',
    method: 'post',
    data: data
  })
}

// 修改db
export function updateDb(data) {
  return request({
    url: '/zeamap/db',
    method: 'put',
    data: data
  })
}

// 删除db
export function delDb(dbId) {
  return request({
    url: '/zeamap/db/' + dbId,
    method: 'delete'
  })
}
