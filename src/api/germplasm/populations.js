import request from '@/utils/request'

// 查询群体展示列表
export function listPopulation() {
  return request({
    url: '/zeamap/population/list',
    method: 'get',
  })
}
