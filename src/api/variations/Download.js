import request from '@/utils/request'

//下载文件
export function Download(data){
    return request({
        url:"/variations/variant/download",
        method:"post",
        data:data
    })
}
