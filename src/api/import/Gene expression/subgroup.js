import request from '@/utils/request'

// 查询Import列表
export function listSubgroup(query) {
  return request({
    url: '/zeamap/subgroup/list',
    method: 'get',
    params: query
  })
}

// 查询Import详细
export function getSubgroup(subgroupId) {
  return request({
    url: '/zeamap/subgroup/' + subgroupId,
    method: 'get'
  })
}

// 新增Import
export function addSubgroup(data) {
  return request({
    url: '/zeamap/subgroup',
    method: 'post',
    data: data
  })
}

// 修改Import
export function updateSubgroup(data) {
  return request({
    url: '/zeamap/subgroup',
    method: 'put',
    data: data
  })
}

// 删除Import
export function delSubgroup(subgroupId) {
  return request({
    url: '/zeamap/subgroup/' + subgroupId,
    method: 'delete'
  })
}
