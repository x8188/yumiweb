import request from '@/utils/request'
//点击Variant ID 跳转
export function toDetailPage(featureId){
    return request({
        url:'/system/feature/skipResult',
        method:"get",
        params:{
            featureId:featureId
        }

    })
}




