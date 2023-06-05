import request from '@/utils/request'
//获取 Reference 
export function getSelectReference (){
    return request({
        url:"/variations/evolution/selectReference",
        method:"get",
    })
}
//获取 Version
export function getSelectVersion(data){
    return request({
        url:"/variations/evolution/selectVersion",
        method:"get",
        params:{
            accession:data
        }
    })
}
// 获取 Indicator
export function getSelectIndicator(){
    return request({
        url:"/variations/evolution/selectIndicator",
        method:"get"
    })
}
// 获取 selectiontype
export function getSelectType(data){
    return request({
        url:"/variations/evolution/selectselectiontype",
        method:"get",
        params:{
            indicator:data
        }
    })
}
// 获取 PopCompared
export function getSelectPopCompared(data){
    return request({
        url:"/variations/evolution/selectpopcompared",
        method:"get",
        params:{
            indicator:data
        }
    })
}
// 获取 Chr
export function getSelectChr(){
    return request({
        url:"/variations/evolution/selectchr",
        method:"get"
    })
}
