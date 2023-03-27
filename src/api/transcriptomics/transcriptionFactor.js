import request from '@/utils/request'

export const reqMultiTissue = () =>
  request({ url: `/zeamap/tissue/multi`, method: "get" });

  