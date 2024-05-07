import request from '@/utils/request'

export function getYear() {
  return request({
    url: '/zeamap/Wphenotype/allYear',
    method: 'get'
  })
}
export function getTrait() {
  return request({
    url: '/zeamap/Wphenotype/allTrait',
    method: 'get'
  })
}
export function getLocation() {
  return request({
    url: '/zeamap/Wphenotype/allLocation',
    method: 'get'
  })
}

export function getCheckTrait() {
  return request({
    url: '/zeamap/Phenotype/checkTraitTypeName',
    method: 'get'
  })
}

export function searchByName(params) {
  return request({
    url: '/zeamap/Phenotype/name',
    params:params,
    method: 'post'
  })
}
export function getMorByName(params) {
  return request({
    url: '/zeamap/Wphenotype/Morphological',
    params:params,
    method: 'post'
  })
}
export function getMorMeanByName() {
  return request({
    url: '/zeamap/Wphenotype/MorMean',
    method: 'get'
  })
}
export function getAgrByName(params) {
  return request({
    url: '/zeamap/Wphenotype/Agronomical',
    params:params,
    method: 'post'
  })
}
export function getAgrMeanByName() {
  return request({
    url: '/zeamap/Wphenotype/AgrMean',
    method: 'get'
  })
}
export function getYieldByName(params) {
  return request({
    url: 'zeamap/Wphenotype/Yield',
    params:params,
    method: 'post'
  })
}
export function getYieldMeanByName() {
  return request({
    url: '/zeamap/Wphenotype/YieldMean',
    method: 'get'
  })
}
export function getPhenoTypeDataByName(params) {
  return request({
    url: '/zeamap/Wphenotype/Date',
    params:params,
    method: 'post'
  })
}
export function getPhenoTypeDataMeanByName() {
  return request({
    url: '/zeamap/Wphenotype/DateMean',
    method: 'get'
  })
}
export function getPhenoTypeRateByName(params) {
  return request({
    url: '/zeamap/Wphenotype/Rates',
    params:params,
    method: 'post'
  })
}
export function getPhenoTypeRateMeanByName() {
  return request({
    url: '/zeamap/Wphenotype/RatesMean',
    method: 'get'
  })
}
export function getPhenoTypeByName(params) {
  return request({
    url: '/zeamap/Wphenotype/name',
    params:params,
    method: 'post'
  })
}

export function searchByYear(params) {
  return request({
    url: '/zeamap/Wphenotype/year',
    params:params,
    method: 'post'
  })
}
export function searchByYelo(params) {
  return request({
    url: '/zeamap/Wphenotype/search',
    params:params,
    method: 'post'
  })
}
export function searchByTrait(params) {
  return request({
    url: '/zeamap/Wphenotype/trait',
    params:params,
    method: 'post'
  })
}
export function searchChartByTrait(params) {
  return request({
    url: '/zeamap/Wphenotype/locationTrait',
    params:params,
    method: 'post'
  })
}
export function searchByLocation(params) {
  return request({
    url: '/zeamap/Wphenotype/location',
    params:params,
    method: 'post'
  })
}
export function searchByNatr(params) {
  return request({
    url: '/zeamap/Wphenotype/traitByName',
    params:params,
    method: 'post'
  })
}
export function searchChartByNatr(params) {
  return request({
    url: '/zeamap/Wphenotype/locationTraitName',
    params:params,
    method: 'post'
  })
}
