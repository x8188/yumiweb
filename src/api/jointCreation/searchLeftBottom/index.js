import request from '@/utils/request'

export function btnAll() {
  return request({
    url: '/zeamap/Phenotype/all',
    method: 'get'
  })
}
export function btnMorAll() {
  return request({
    url: '/zeamap/Phenotype/allMor',
    method: 'get'
  })
}
export function btnMor() {
  return request({
    url: '/zeamap/Phenotype/yearMor',
    method: 'get'
  })
}
