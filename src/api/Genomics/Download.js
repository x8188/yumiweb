import request from '@/utils/request'

//下载文件
export function Download(feature_id){
    return request({
        url:"/system/feature/download",
        method:"post",
        data:{
            feature_id
        }
    })
}
