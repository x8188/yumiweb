import request from '@/utils/request'

// 下拉框选reference
export function dropDownReference() {
  return request({
    url: '/zeamap/expression/reference'
  })
}

// 下拉框选择version
export function dropDownVersion() {
  return request({
    url: '/zeamap/expression/version?reference=is_symmetric',
  })
}