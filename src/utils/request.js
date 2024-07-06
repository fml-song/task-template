// 封装请求库
import axios from 'axios'
import { log } from '../utils/index.js'

// 创建 axios 实例
const http = axios.create({
    baseURL: 'https://api.juejin.cn/',
    headers: {
        'Cookie': '_tea_utm_cache_2018={%22utm_source%22:%22gold_browser_extension%22}; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227374693535167628819%2522%252C%2522user_unique_id%2522%253A%25227374693535167628819%2522%252C%2522timestamp%2522%253A1717054662773%257D; passport_csrf_token=fb385ea888ba509cec9b03de21907af8; passport_csrf_token_default=fb385ea888ba509cec9b03de21907af8; n_mh=KCQeuhfFeGCYtVY2nL54rokzQbj03_6ZEDQYxrjBeqo; passport_auth_status=fb77dc099c9bff87bb34885ab8bea2bb%2C; passport_auth_status_ss=fb77dc099c9bff87bb34885ab8bea2bb%2C; sid_guard=b9314f061f540db03ead971037e46d1b%7C1717070116%7C31536000%7CFri%2C+30-May-2025+11%3A55%3A16+GMT; uid_tt=2de3429cf40d0c270e0dd5450532aae1; uid_tt_ss=2de3429cf40d0c270e0dd5450532aae1; sid_tt=b9314f061f540db03ead971037e46d1b; sessionid=b9314f061f540db03ead971037e46d1b; sessionid_ss=b9314f061f540db03ead971037e46d1b; sid_ucp_v1=1.0.0-KGM4NWQwMmM5MGY0NDRkMzRhOWRhM2E5MzA1MzM1ZWU1ZjQ4ZDRjNTUKFwj-pPCmxI20BxCk0uGyBhiwFDgCQPEHGgJsZiIgYjkzMTRmMDYxZjU0MGRiMDNlYWQ5NzEwMzdlNDZkMWI; ssid_ucp_v1=1.0.0-KGM4NWQwMmM5MGY0NDRkMzRhOWRhM2E5MzA1MzM1ZWU1ZjQ4ZDRjNTUKFwj-pPCmxI20BxCk0uGyBhiwFDgCQPEHGgJsZiIgYjkzMTRmMDYxZjU0MGRiMDNlYWQ5NzEwMzdlNDZkMWI; store-region=cn-ah; store-region-src=uid; csrf_session_id=30df180aedee70244a0a6350b0fe4c5b; msToken=x-Ve5FLy2Q_BawMHzCWTxhzPVjRGSk58NeRk0T3D6jCMOdUW6g9yp00bwI_Xm_kMLw44tc05ydPxchT905FEcBcV7IyZt35VbHdvYQokl8QRWthf3EuBSuIVvsKMAIc='
    },
    timeout: 10000
})

// 请求拦截器
http.interceptors.request.use(
    config => {
        return config
    },
    error => {
        log.error('request error', error)
        return
    }
)

// 响应拦截器
http.interceptors.response.use(
    response => {
        const data = response.data
        if (data.err_no !== 0) {
            log.error(data.err_msg || 'Error')
            return
        } else {
            return data.data
        }
    },
    error => {
        log.error('response error', error)
        return
    }
)

// GET请求
export const get = (url, params) => {
    return http({ method: 'GET', url, params })
}

// POST请求
export const post = (url, data, params) => {
    return http({ method: 'POST', url, data, params })
}