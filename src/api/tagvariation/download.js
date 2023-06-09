import request from '@/utils/request'

export function Download(data){
    return request({
        url:"/variations/tagvariant/download",
        method:"post",
        data:data,  
        responseType: 'blob',
    })
}