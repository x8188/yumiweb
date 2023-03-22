import request from '@/utils/request'

// 请求Phenomics表格数据
export function getPhenomics(params) {
  return request({
    url: '/zeamap/xot/xots',
    params
  })
}
// 请求Phenomics下拉框们
export function getPhenomicsDropDown() {
  return request({
    url: '/zeamap/xot/xots/DownMenu'
  })
}