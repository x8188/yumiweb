import request from '@/utils/request'

// 查询ImportCvterm列表
export function listCvterm(query) {
  return request({
    url: '/zeamap/cvterm/list',
    method: 'get',
    params: query
  })
}

// 查询ImportCvterm详细
export function getCvterm(cvtermId) {
  return request({
    url: '/zeamap/cvterm/' + cvtermId,
    method: 'get'
  })
}

// 新增ImportCvterm
export function addCvterm(data) {
  return request({
    url: '/zeamap/cvterm/add',
    method: 'get',
    data: data
  })
}

// 修改ImportCvterm
export function updateCvterm(data) {
  return request({
    url: '/zeamap/cvterm/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportCvterm
export function delCvterm(cvtermId) {
  return request({
    url: '/zeamap/cvterm/remove/' + cvtermId,
    method: 'delete'
  })
}
