import request from '@/utils/request'
//获取 Germplasm 
export function getSelectGermplasm (){
    return request({
        url:"/system/feature/selectAccession",
        method:"get",
        // data:accession
        
    })
}
//获取 Version
export function getSelectVersion(data){
    return request({
        url:"/system/feature/selectVersion",
        method:"get",
        params:{
            accession:data
        }
    })
}
// 获取 Chr
export function getSelectChr(){
    return request({
        url:"/system/feature/selectUniqueName",
        method:"get"
    })
}

export function getSelectType(){
    return request({
        url:"/system/feature/selectName",
        method:"get"
    })
}

export function getUniqueName(){
    return request({
        url:"/system/feature/selectUniqueName",
        method:"get"
    })
}

export function getCommonName(){
    return request({
        url:"/system/feature/selectCommonName",
        method:"get"
    })
}

