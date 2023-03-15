import request from '@/utils/request'
export function getPhenomics(params) {
  return request({
    url: '/zeamap/xot/xots',
    params
  })
}