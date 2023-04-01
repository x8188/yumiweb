import request from '@/utils/request'

// 查询群体展示列表
export function listStructure() {
  return request({
    url: '/zeamap/structure/list',
    method: 'get',
  })
}
