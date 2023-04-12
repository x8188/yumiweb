import request from '@/utils/request'

// 查询基因表达量查询列表
export function listExpression(query) {
  return request({
    url: '/zeamap/expression/list',
    method: 'get',
    params: query
  })
}

// 查询基因表达量查询详细
export function getExpression(expressionId) {
  return request({
    url: '/zeamap/expression/' + expressionId,
    method: 'get'
  })
}

// 新增基因表达量查询
export function addExpression(data) {
  return request({
    url: '/zeamap/expression',
    method: 'post',
    data: data
  })
}

// 修改基因表达量查询
export function updateExpression(data) {
  return request({
    url: '/zeamap/expression',
    method: 'put',
    data: data
  })
}

// 删除基因表达量查询
export function delExpression(expressionId) {
  return request({
    url: '/zeamap/expression/' + expressionId,
    method: 'delete'
  })
}
