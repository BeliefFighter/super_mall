import { callApi } from '@/util/http'

// get请求 带参数
export const getUserInfo = data => {
  callApi({
    url: 'user/info',
    data
  })
}

// get请求
export const getData = () => {
  callApi({
    url: 'home/getData'
  })
}
