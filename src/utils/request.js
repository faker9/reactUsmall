import axios from 'axios'
import qs from 'qs'

//响应拦截
axios.interceptors.response.use(res=>{
    console.group('=============url:' + res.config.url + '===================')
    console.log(res)
    console.groupEnd()
    return res
})


//会员登录请求
export const requestMemberLogin = (params)=> axios({
    url:'/api/login',
    method:'post',
    data:qs.stringify(params)
})

//会员注册请求
export const requestMemberReg = (params)=> axios({
    url:'/api/register',
    method:'post',
    data:qs.stringify(params)
})