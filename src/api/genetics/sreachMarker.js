import request from '@/utils/request'

export const reqselectaccession= () =>
  request({ url: `/genetics/search_marker/association_marker/selectaccession`, method: "get" });

export const reqselectversion= (accession) =>
  request({ url: `/genetics/search_marker/association_marker/selectversion`, method: "get" ,params:{accession}});

export const reqselecttraitcategory= () =>
  request({ url: `/genetics/search_marker/association_marker/selecttraitcategory`, method: "get" });

export const reqselecttraitid= (trait_id) =>
  request({ url: `/genetics/search_marker/association_marker/selecttraitid`, method: "get" ,params:{trait_id}});

export const reqselectchr= () =>
  request({ url: `/genetics/search_marker/association_marker/selectchr`, method: "get" });

export const reqselectVarType= () =>
  request({ url: `/genetics/search_marker/association_marker/selecttype`, method: "get" });

export const reqassociation_qtl= (data,pageParams) =>
  request({ url: `/genetics/search_marker/association_marker/selectassociation_marker`, method: "post" ,data:data,params:pageParams});


export const reqlinkageaccession= () =>
  request({ url: `/genetics/search_marker/linkage_marker/selectaccession`, method: "get" });

export const reqlinkageversion= (accession) =>
  request({ url: `/genetics/search_marker/linkage_marker/selectversion`, method: "get" ,params:{accession}});

export const reqlinkagetraitcategory= () =>
  request({ url: `/genetics/search_marker/linkage_marker/selecttraitcategory`, method: "get" });

export const reqlinkagetraitid= (trait_id) =>
  request({ url: `/genetics/search_marker/linkage_marker/selecttraitid`, method: "get" ,params:{trait_id}});

export const reqlinkagelg= () =>
  request({ url: `/genetics/search_marker/linkage_marker/selectlg`, method: "get" });

export const reqlinkagemap= () =>
  request({ url: `/genetics/search_marker/linkage_marker/selectlinkagemap`, method: "get" });

export const reqlinkage= (data,pageParams) =>
  request({ url: `/genetics/search_marker/linkage_marker/selectlinkage_marker`, method: "post" ,data:data,params:pageParams});
