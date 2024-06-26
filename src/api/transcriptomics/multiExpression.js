import request from '@/utils/request'

export const reqMultiDownMenu = () =>
  request({ url: `/zeamap/expression/DownMenu`, method: "get" });

export const reqRefDownMenu = () =>
  request({ url: `/zeamap/expression/reference`, method: "get" });

export const reqVerDownMenu = (reference) =>
  request({ url: `/zeamap/expression/version`, method: "get", params: { reference: reference } });

export const reqEnvironment = () =>
  request({ url: `/zeamap/environment/multi`, method: "get" });

export const reqGermplasm = () =>
  request({ url: `/zeamap/germplasm/multi`, method: "get" });

export const reqTissue = () =>
  request({ url: `/zeamap/tissue/multi`, method: "get" });

// export const reqMultiFull= (fullData) =>
//     request({ url: `/zeamap/expression/mutil`, method: "post" ,data:fullData});

export const reqMultiFull = (type, fullData) =>
  request({
    url: `/zeamap/expression/${type}`,
    method: "get",
    params: fullData
  });


export const reqMultiFullNopage = (type, fullData) =>
  request({
    url: `/zeamap/expression/${type}Nopage`,
    method: "get",
    params: fullData
  });
