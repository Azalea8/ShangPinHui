// 对axios二次封装
import axios from "axios";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: '/api',
    timeout: 6000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
    nprogress.start()
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (err) => {})

export default requests
