import request from '@/utils/request'

// 查询Import列表
export function listTarget(query) {
  return request({
    url: '/zeamap/target/list',
    method: 'get',
    params: query
  })
}

// 查询Import详细
export function getTarget(tfbdTargetId) {
  return request({
    url: '/zeamap/target/' + tfbdTargetId,
    method: 'get'
  })
}

// 新增Import
export function addTarget(data) {
  return request({
    url: '/zeamap/target',
    method: 'post',
    data: data
  })
}

// 修改Import
export function updateTarget(data) {
  return request({
    url: '/zeamap/target',
    method: 'put',
    data: data
  })
}

// 删除Import
export function delTarget(tfbdTargetId) {
  return request({
    url: '/zeamap/target/' + tfbdTargetId,
    method: 'delete'
  })
}
