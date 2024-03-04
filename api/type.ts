

export interface ResponseDto<D = any> {
  code: number
  message: string
  error: string | null
  data: D | null
  timestamp: number
}
export interface IPagination {
    total: number
    perPage: number
    currentPage: number
    lastPage: number
    from: number
    to: number
}
export interface IParamsRoom {
  provinceId: number | null
  districtId: number| null
  limit: number
  wardId: number| null
  price: string| null
  square: string| null
  page: number
  areaId: number| null
}
export interface IRoomListDetails {
  id: number
  title: string
  provinceName: string
  districtName: string
  wardName: string
  square: number
  price: number
  createTime: string
  thumbnail: string
  original: number
}
