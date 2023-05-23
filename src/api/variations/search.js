import request from '@/utils/request'
// 查询 信息 后端拿到 表格内的东西
export function Search(data,query){
    return request({
        url:"/variations/variant/selectVariant",
        method:"post",
        data:data,
        params:query
    })
}


