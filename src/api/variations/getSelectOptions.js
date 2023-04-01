import request from '@/utils/request'
//获取 Reference 
export function getSelectReference (){
    return request({
        url:"/variations/variant/selectReference",
        method:"get",
        // data:accession
        
    })
}
//获取 Version
export function getSelectVersion(data){
    return request({
        url:"/variations/variant/selectVersion",
        method:"get",
        params:{
            accession:data
        }
    })
}
// 获取 Population
export function getSelectPopulation(){
    return request({
        url:"/variations/variant/selectPopulation",
        method:"get"
    })
}
// 获取 VariantClass
export function getSelectVariantClass(){
    return request({
        url:"/variations/variant/selectVariantClass",
        method:"get"
    })
}
// 获取 Region
export function getSelectRegion(){
    return request({
        url:"/variations/variant/selectChr",
        method:"get"
    })
}
// 获取 Consequences
export function getSelectConsequences(){
    return request({
        url:"/variations/variant/selectConsequences",
        method:"get"
    })
}
// 获取 impacts
export function getSelectImpacts(){
    return request({
        url:"/variations/variant/selectImpacts",
        method:"get"
    })
}
// 获取 Analysis
export function getSelectAnalysis(){
    return request({
        url:"/variations/variant/selectAnalysis",
        method:"get"
    })
}