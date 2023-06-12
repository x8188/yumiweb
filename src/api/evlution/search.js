import request from "@/utils/request"

export function Search(data,query){
    return request({
        url:"/variations/evolution/selectevol",
        method:"post",
        data:data,
        params:query
    })
}