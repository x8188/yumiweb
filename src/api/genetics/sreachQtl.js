import request from '@/utils/request'

export const reqtraitMAP= () =>
  request({ url: `trait/list`, method: "get" });

export const reqselectaccession= () =>
  request({ url: `/genetics/search_qtl/association_qtl/selectaccession`, method: "get" });

export const reqselectversion= (accession) =>
  request({ url: `/genetics/search_qtl/association_qtl/selectversion`, method: "get" ,params:{accession}});

// export const reqselecttraitcategory= () =>
//   request({ url: `/genetics/search_qtl/association_qtl/selecttraitcategory`, method: "get" });

export const reqselecttraitcategory= () =>
  request({ url: `/zeamap/traitType/list`, method: "get" });

export const reqselecttraitid= (category) =>
  request({ url: `zeamap/type/traitTypeId/${category}`, method: "get" });

//之前traitID是远程模糊匹配的功能 
// export const reqselecttraitid= (trait_id) =>
//   request({ url: `/genetics/search_qtl/association_qtl/selecttraitid`, method: "get",params:{trait_id} });

export const reqselectchr= () =>
  request({ url: `/genetics/search_qtl/association_qtl/selectchr`, method: "get" });

export const reqassociation_qtl= (data,pageParams) =>
  request({ url: `/genetics/search_qtl/association_qtl/selectassociation_qtl`, method: "post" ,data:data,params:pageParams});

export const reqqtldownload= (data) =>
  request({ url: `/genetics/search_qtl/association_qtl/download`, method: "post", data: data, responseType: 'blob'});


export const reqlinkageaccession= () =>
  request({ url: `/genetics/search_qtl/linkage_qtl/selectaccession`, method: "get" });

export const reqlinkageversion= (accession) =>
  request({ url: `/genetics/search_qtl/linkage_qtl/selectversion`, method: "get" ,params:{accession}});

export const reqlinkagetraitcategory= () =>
  request({ url: `/genetics/search_qtl/linkage_qtl/selecttraitcategory`, method: "get" });

export const reqlinkagetraitid= (trait_id) =>
  request({ url: `/genetics/search_qtl/linkage_qtl/selecttraitid`, method: "get" ,params:{trait_id}});

export const reqlinkagechr= () =>
  request({ url: `/genetics/search_qtl/linkage_qtl/selectchr`, method: "get" });

export const reqlinkagemap= () =>
  request({ url: `/genetics/search_qtl/linkage_qtl/selectlinkagemap`, method: "get" });

export const reqlinkage= (data,pageParams) =>
  request({ url: `/genetics/search_qtl/linkage_qtl/selectlinkage_qtl`, method: "post" ,data:data,params:pageParams});

export const reqlinkagedownload= (data) =>
  request({ url: `/genetics//search_qtl/linkage_qtl/download`, method: "post", data: data, responseType: 'blob'});
