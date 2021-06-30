import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

function decorateService(service: AxiosInstance) {
  // 请求拦截
  service.interceptors.request.use(
    // 请求配置
    (config: AxiosRequestConfig) => {
      config.headers.Authorization = 'deh'
      return config
    },
    (error: AxiosError) => {
      // 做一些请求错误
      Promise.reject(error)
    }
  )

  // 响应拦截器
  service.interceptors.response.use(
    // 响应成功处理, 状态: 200
    (response: AxiosResponse) => {
      const result = response.data
      return result
    },
    // 响应失败处理, 状态: !200
    (error: AxiosError) => {
      console.log(error.message)
      return Promise.reject(error)
    }
  )
}

const servicesOptions = {
  axiosSvc: {
    timeout: 20000,
  },
}

function getServices(options: any) {
  const res: any = {}
  Object.keys(options).forEach(svcName => {
    res[svcName] = axios.create(options[svcName])
    decorateService(res[svcName])
  })
  return res
}

export default getServices(servicesOptions)
