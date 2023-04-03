import request from '@/utils/request'

// 查询群体展示列表
export function listPCA() {
  return request({
    url: '/zeamap/pca/list',
    method: 'get',
  })
}
