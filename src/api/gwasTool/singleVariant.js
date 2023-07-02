import request from '@/utils/request'

export const reqIDs = (VID) =>
  request({ url: `/system/variant/select`, method: "get",params:{ VID: VID } });


export const reqPointChart = (VID) =>
  request({ url: `/system/variant/PointChart`, method: "get",params:{ VID: VID } });

export const reqGene = (info) =>
  request({ url: `/system/variant/gene`, method: "get",params:{ ...info } });
