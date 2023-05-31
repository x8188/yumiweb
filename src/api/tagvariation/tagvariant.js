import request from '@/utils/request'

export function searchTagVariant(data,query){
    return request({
        url:"/variations/tagvariant/selectTagvariant",
        method:"post",
        data:data,
        params:query
    })
}