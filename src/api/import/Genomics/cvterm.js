import request from '@/utils/request'

// 查询ImportCvterm列表
export function listCvterm(query) {
  return request({
    url: '/zeamap/ImportCvterm/list',
    method: 'get',
    params: query
  })
}

// 查询ImportCvterm详细
export function getCvterm(cvtermId) {
  return request({
    url: '/zeamap/ImportCvterm/' + cvtermId,
    method: 'get'
  })
}

// 新增ImportCvterm
export function addCvterm(data) {
  return request({
    url: '/zeamap/ImportCvterm/add',
    method: 'post',
    data: data
  })
}

// 修改ImportCvterm
export function updateCvterm(data) {
  return request({
    url: '/zeamap/ImportCvterm/edit',
    method: 'put',
    data: data
  })
}

// 删除ImportCvterm
export function delCvterm(cvtermId) {
  return request({
    url: '/zeamap/ImportCvterm/remove/' + cvtermId,
    method: 'delete'
  })
}
