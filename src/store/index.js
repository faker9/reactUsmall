import { createStore, applyMiddleware } from 'redux'
import { requestBanner, requestGoods, requestCateInfo, requestCateTree,requestCateGoods} from '../utils/request'
import thunk from 'redux-thunk'
const initState = {
    banner: [],
    goods: [],
    goodDetail: {},
    cateTree: [],
    cateDetails: [],
}
//修改数据
const reducer = (state = initState, action) => {
    switch (action.type) {
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
        case 'changeDetail':
            return {
                ...state,
                goodDetail: action.obj
            }
        case 'changeCateTree':
            return {
                ...state,
                cateTree: action.arr
            }
        case 'changeCateDetail':
            return {
                ...state,
                cateDetails: action.arr
            }
        default:
            return state
    }
}
//返回JSON
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
//详情
const changeGoodDetail = (obj) => {
    return {
        type: 'changeDetail', obj: obj
    }
}
const changeCateTree = (arr) => {
    return {
        type: 'changeCateTree', arr: arr
    }
}
//分类详情
const changecateDetail = (arr) => {
    return {
        type: 'changeCateDetail', arr: arr
    }
}

// 请求数据==================================================
export const requestBannerAction = () => {
    return (dispatch, getState) => {
        requestBanner().then(res => {
            dispatch(changeBanner(res.data.list))
        })
    }
}
//首页商品
export const requestGoodsAction = () => {
    return (dispatch, getState) => {
        requestGoods().then(res => {
            dispatch(changeGoods(res.data.list[0].content))
        })
    }
}
//详情
export const requestGoodDetailAction = (id) => {
    return (dispatch, getState) => {
        requestCateInfo(id).then(res => {
            dispatch(changeGoodDetail(res.data.list[0]))
        })
    }
}
//catetree
export const requestCateTreeAction = (id) => {
    return (dispatch, getState) => {
        requestCateTree().then(res => {
            dispatch(changeCateTree(res.data.list))
        })
    }
}
//cateDetail
export const requestCateGoodsAction = (id) => {
    return (dispatch, getState) => {
        requestCateGoods(id).then(res => {
            dispatch(changecateDetail(res.data.list))
        })
    }
}
// 导出数据====================================================================
export const bannerList = (state) => state.banner
export const goodsList = (state) => state.goods
export const goodDetails = (state) => state.goodDetail
export const cateTree = (state) => state.cateTree
export const cateDetails = (state) => state.cateDetails

const store = createStore(reducer, applyMiddleware(thunk))
export default store