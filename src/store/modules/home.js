import { requestBanner, requestGoods} from '../../utils/request'
const initState ={
    banner: [],
    goods: [],
}

const reducer = (state=initState,action)=>{
    switch(action.type){
        case 'changeBanner':
            return {
                ...state,
                banner: action.arr
            }
        case 'changeGoods':
            return {
                ...state,
                goods: action.arr
            }
        default :
        return state
    }
}

const changeBanner = (arr) => {
    return {
        type: 'changeBanner', arr: arr
    }
}
const changeGoods = (arr) => {
    return {
        type: 'changeGoods', arr: arr
    }
}

// 请求数据==================================================
export const requestBannerAction = () => {
    return (dispatch, getState) => {
        if(getState().home.banner.length>0){
            return
        }
        requestBanner().then(res => {
            dispatch(changeBanner(res.data.list))
        })
    }
}
//首页商品
export const requestGoodsAction = () => {
    return (dispatch, getState) => {
        if(getState().home.goods.length>0){
            return
        }
        requestGoods().then(res => {
            dispatch(changeGoods(res.data.list[0].content))
        })
    }
}
//导出
export const bannerList = (state) => state.home.banner
export const goodsList = (state) => state.home.goods
export default reducer