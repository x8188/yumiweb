import request from '@/utils/request'

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
    url: '/zeamap/Phenotype/Morphological',
    params:params,
    method: 'post'
  })
}
export function getMorMeanByName() {
  return request({
    url: '/zeamap/Phenotype/MorMean',
    method: 'get'
  })
}
export function getAgrByName(params) {
  return request({
    url: '/zeamap/Phenotype/Agronomical',
    params:params,
    method: 'post'
  })
}
export function getAgrMeanByName() {
  return request({
    url: '/zeamap/Phenotype/AgrMean',
    method: 'get'
  })
}
export function getPhenoTypeDataByName(params) {
  return request({
    url: '/zeamap/Phenotype/Date',
    params:params,
    method: 'post'
  })
}
export function getPhenoTypeDataMeanByName() {
  return request({
    url: '/zeamap/Phenotype/DateMean',
    method: 'get'
  })
}
export function getPhenoTypeRateByName(params) {
  return request({
    url: '/zeamap/Phenotype/Rates',
    params:params,
    method: 'post'
  })
}
export function getPhenoTypeRateMeanByName() {
  return request({
    url: '/zeamap/Phenotype/RatesMean',
    method: 'get'
  })
}
export function getPhenoTypeByName(params) {
  return request({
    url: '/zeamap/Phenotype/name',
    params:params,
    method: 'post'
  })
}

export function searchByYear(params) {
  return request({
    url: '/zeamap/Phenotype/year',
    params:params,
    method: 'post'
  })
}
export function searchByTrait(params) {
  return request({
    url: '/zeamap/Phenotype/trait',
    params:params,
    method: 'post'
  })
}
export function searchChartByTrait(params) {
  return request({
    url: '/zeamap/Phenotype/locationTrait',
    params:params,
    method: 'post'
  })
}
export function searchByLocation(params) {
  return request({
    url: '/zeamap/Phenotype/location',
    params:params,
    method: 'post'
  })
}
export function searchByNatr(params) {
  return request({
    url: '/zeamap/Phenotype/traitByName',
    params:params,
    method: 'post'
  })
}
export function searchChartByNatr(params) {
  return request({
    url: '/zeamap/Phenotype/locationTraitName',
    params:params,
    method: 'post'
  })
}
