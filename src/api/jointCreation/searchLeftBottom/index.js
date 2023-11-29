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
export function btnAgroAll() {
  return request({
    url: '/zeamap/Phenotype/allAgr',
    method: 'get'
  })
}
export function btnAgro() {
  return request({
    url: '/zeamap/Phenotype/yearAgr',
    method: 'get'
  })
}
export function btnBioAll() {
  return request({
    url: '/zeamap/Phenotype/allBiotic',
    method: 'get'
  })
}
export function btnBio() {
  return request({
    url: '/zeamap/Phenotype/yearBiotic',
    method: 'get'
  })
}
export function btnAbioAll() {
  return request({
    url: '/zeamap/Phenotype/allAbiotic',
    method: 'get'
  })
}
export function btnAbio() {
  return request({
    url: '/zeamap/Phenotype/yearAbiotic',
    method: 'get'
  })
}
