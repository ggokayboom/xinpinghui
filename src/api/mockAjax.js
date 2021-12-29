//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//利用axios对象的方法create，创建一个axios实例
const requests = axios.create({
    baseURL:'/mock',
    timeout:5000,
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    //config:配置对象，对象里面有一个属性很重要，headers请求头
    //进度条开始动
    nprogress.start()
    return config
})

//相应拦截器
requests.interceptors.response.use(
    res => {
        nprogress.done()
        return res.data
    },
    err => Promise.reject(new Error(err.message)),
)

export default requests