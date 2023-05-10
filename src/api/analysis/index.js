import request from '@/utils/request'
import errorCode from '@/utils/errorCode'
import { blobValidate } from "@/utils/ruoyi";
import { saveAs } from 'file-saver'
import service from '@/utils/request'

// 是否显示重新登录
export let isRelogin = { show: false };

// 下拉框选择Omics
export function dropDownOmics() {
  return request({
    url: '/tran/fator/analysis/selectOmics',
  })
}

// 下拉框选择analysis ID
export function dropDownAnalysisId() {
  return request({
    url: '/tran/fator/analysis/selectAnalysisID',
  })
}

// 大查询
export function queryAll(params) {
  return request({
    url: '/tran/fator/analysis/selectAnalysis',
    params
  })
}

export function downloadAll(url, names, filename, config) {
  const list = names.join(",")
  const params = new URLSearchParams()
  params.append('list', list)

  return service.post(url, params.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'blob',
    ...config
  }).then(async (data) => {
    const isLogin = await blobValidate(data);
    if (isLogin) {
      const blob = new Blob([data])
      saveAs(blob, filename)
    } else {
      const resText = await data.text();
      const rspObj = JSON.parse(resText);
      const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
      Message.error(errMsg);
    }
  }).catch((r) => {
    console.error(r)
    Message.error('下载文件出现错误，请联系管理员！')
  })
}
