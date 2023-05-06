import request from '@/utils/request'
//点击Variant ID 跳转
export function toDetailPage(VID){
    return request({
        url:"variations/variant_info/selectByVID",
        method:"post",
        params:{
            VID:VID
        }
    })
}



