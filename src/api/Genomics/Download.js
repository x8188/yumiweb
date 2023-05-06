import request from '@/utils/request'


//下载文件
export function Download(data){
    return request({
        url:"/system/feature/download",
        method:"post",
        // headers:"Content-type:application/json;",
        // headers: { 'Content-Type': 'application/json;utf-8' },
        responseType: 'blob',
        data:data
    })
}
