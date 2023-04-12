import request from '@/utils/request'

// 查询Import列表
export function listInfo(query) {
  return request({
    url: '/zeamap/info/list',
    method: 'get',
    params: query
  })
}

// 查询Import详细
export function getInfo(tfbdId) {
  return request({
    url: '/zeamap/info/' + tfbdId,
    method: 'get'
  })
}

// 新增Import
export function addInfo(data) {
  return request({
    url: '/zeamap/info',
    method: 'post',
    data: data
  })
}

// 修改Import
export function updateInfo(data) {
  return request({
    url: '/zeamap/info',
    method: 'put',
    data: data
  })
}

// 删除Import
export function delInfo(tfbdId) {
  return request({
    url: '/zeamap/info/' + tfbdId,
    method: 'delete'
  })
}
