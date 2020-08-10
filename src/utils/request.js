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

//轮播图
export const requestBanner = (params)=> axios({
    url:'/api/getbanner',
    method:'get',
    params
})

//首页分类信息
export const requestCate = (params)=> axios({
    url:'/api/getcate',
    method:'get',
    params
})

//限时秒杀
export const requestSeckill = (params)=> axios({
    url:'/api/getseckill',
    method:'get',
    params
})

//首页商品信息
export const requestGoods = (params)=> axios({
    url:'/api/getindexgoods',
    method:'get',
    params
})

//获取分类树形结构
export const requestCateTree = (params)=> axios({
    url:'/api/getcatetree',
    method:'get',
    params
})

//获取分类商品
export const requestCateGoods = (params)=> axios({
    url:'/api/getgoods',
    method:'get',
    params
})
//获取一个商品信息
export const requestCateInfo= (params)=> axios({
    url:'/api/getgoodsinfo',
    method:'get',
    params
})

//购物车列表
export const requestShopInfo= (params)=> axios({
    url:'/api/cartlist',
    method:'get',
    params
})
//购物车增加
export const requestShopAdd= (params)=> axios({
    url:'/api/cartadd',
    method:'post',
    data:qs.stringify(params)
})

//购物车删除
export const requestShopDel= (params)=> axios({
    url:'/api/cartdelete',
    method:'post',
    data:qs.stringify(params)
})
//购物车修改
export const requestShopEdit= (params)=> axios({
    url:'/api/cartedit',
    method:'post',
    data:qs.stringify(params)
})