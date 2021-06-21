import http from '@/utils/http'
const { axiosSvc } = http
const baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1/home'

/**
 * 轮播图
 * url: /swiperdata
 * method: get
 */
export const reqHomeSwiper = () => axiosSvc.get(`${baseURL}/swiperdata`)

/**
 * 导航菜单
 * url: /catitems
 * method: get
 */
export const reqHomeCatitems = () =>
  axiosSvc({
    url: `${baseURL}/catitems`,
    method: 'GET',
  })

/**
 * 楼层
 * url: /floordata
 * method: get
 */
export const reqHomeFloor = () => axiosSvc.get(`${baseURL}/floordata`)
