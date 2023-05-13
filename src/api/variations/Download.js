import service from '@/utils/request';
import request from '@/utils/request'
import { tansParams, blobValidate } from "@/utils/ruoyi";


// 下载文件
export function Download(data){
    return request({
        url:"/variations/variant/download",
        method:"post",
        data:data,  
        responseType: 'blob',
    })
}

