import request from '@/utils/request'
//点击Variant ID 跳转
export function toDetailPage(featureId){
    return request({
        url:"/system/feature/skip",
        method:"get",
        params:{
            featureId
        }
    })
}



