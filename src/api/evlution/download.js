import request from "@/utils/request"

export function Download(data){
    return request({
        url:"/variations/evolution/download",
        method:"post",
        data:data,
        responseType: 'blob'
    })
}