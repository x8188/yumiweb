import request from '@/utils/request'

export function btnAll() {
  return request({
    url: '/zeamap/Wphenotype/all',
    method: 'get'
  })
}
export function btnMorAll() {
  return request({
    url: '/zeamap/Wphenotype/allMor',
    method: 'get'
  })
}
export function btnMor() {
  return request({
    url: '/zeamap/Wphenotype/yearMor',
    method: 'get'
  })
}
export function btnAgroAll() {
  return request({
    url: '/zeamap/Wphenotype/allAgr',
    method: 'get'
  })
}
export function btnAgro() {
  return request({
    url: '/zeamap/Wphenotype/yearAgr',
    method: 'get'
  })
}
export function btnBioAll() {
  return request({
    url: '/zeamap/Wphenotype/allBiotic',
    method: 'get'
  })
}
export function btnBio() {
  return request({
    url: '/zeamap/Wphenotype/yearBiotic',
    method: 'get'
  })
}
export function btnAbioAll() {
  return request({
    url: '/zeamap/Wphenotype/allAbiotic',
    method: 'get'
  })
}
export function btnAbio() {
  return request({
    url: '/zeamap/Wphenotype/yearAbiotic',
    method: 'get'
  })
}
export function btnYieldAll() {
  return request({
    url: '/zeamap/Wphenotype/allYield',
    method: 'get'
  })
}
export function btnYield() {
  return request({
    url: '/zeamap/Wphenotype/yearYield',
    method: 'get'
  })
}
