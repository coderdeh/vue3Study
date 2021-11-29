/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: coderdeh
 * @Date: 2021-07-16 11:30:25
 * @LastEditors: coderdeh
 * @LastEditTime: 2021-11-29 23:28:05
 * @Function: 
 */
const routes = [
  {
    path: '/',
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: () => import('@/views/NotFound/NotFound.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/notfound',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/Index.vue'),
    redirect: '/echarts',
    children: [
      {
        path: '/echarts',
        name: 'echarts',
        meta: {
          keepAlive: true
        },
        component: ()=> import ('@/views/Home/Home.vue')
      },
      {
        path: '/video',
        name: 'video',
        meta: {
          keepAlive: true
        },
        component: ()=> import ('@/views/video/Video.vue')
      },
    ]
  },
  
]

export default routes
