import request from "@/utils/request";

export const reqSelectReference = () =>
  request({ url: `/tran/fator/info/selectReference`, method: "get" });

export const reqSelectVersion = (accession) =>
  request({
    url: `/tran/fator/info/selectVersion`,
    method: "get",
    // data: {"accession":accession},
    params: { accession: accession },
    // data: accession,
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });

export const reqSelectAnalysis = () =>
  request({ url: `/tran/fator/info/selectAnalysis`, method: "get" });

export const reqSelectTFID = () =>
  request({ url: `/tran/fator/info/selectTFID`, method: "get" });

export const reqSelectTFName = () =>
  request({ url: `/tran/fator/info/selectTFName`, method: "get" });

export const reqSelectTFFamily = () =>
  request({ url: `/tran/fator/info/selectTFFamily`, method: "get" });

export const reqSelectTFGeneID = () =>
  request({ url: `/tran/fator/info/selectTFGeneID`, method: "get" });

export const reqSelectInfo = (data, pageParams) =>
  request({
    url: `/tran/fator/info/selectInfo`,
    method: "post",
    data: data,
    params: pageParams,
    // headers: {
    //   // "Content-Type": "multipart/form-data; boundary=--------------------------738612952322689331490464",
    //   "Content-Type": "multipart/form-data;",
    // },
  });

export const reqDownload = (data) =>
  request({ url: `/tran/fator/info/download`, method: "post", data: data, responseType: 'blob' });
