import request from '@/utils/request'

// 查询ImportCv列表
export function listCv(query) {
  return request({
    url: '/zeamap/cv/list',
    method: 'get',
    params: query
  })
}

// 查询ImportCv详细
export function getCv(cvId) {
  return request({
    url: '/zeamap/cv/' + cvId,
    method: 'get'
  })
}

// 新增ImportCv
export function addCv(data) {
  return request({
    url: '/zeamap/cv',
    method: 'post',
    data: data
  })
}

// 修改ImportCv
export function updateCv(data) {
  return request({
    url: '/zeamap/cv',
    method: 'put',
    data: data
  })
}

// 删除ImportCv
export function delCv(cvId) {
  return request({
    url: '/zeamap/cv/' + cvId,
    method: 'delete'
  })
}