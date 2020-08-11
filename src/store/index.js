import { createStore, applyMiddleware } from 'redux'
import { requestBanner, requestGoods, requestCateInfo, requestCateTree, requestCateGoods, requestShopInfo, requestShopDel, requestShopEdit } from '../utils/request'
import thunk from 'redux-thunk'
import { Toast } from 'antd-mobile'
const initState = {
    banner: [],
    goods: [],
    goodDetail: {},
    cateTree: [],
    cateDetails: [],//分类详情
    shopList: [],//购物车列表
    isSelectAll: false,//全选
    isEdit: false//编辑
}
//修改数据
const reducer = (state = initState, action) => {
    const shopList = [...state.shopList]
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
        case 'changeShopList':
            return {
                ...state,
                shopList: action.arr,
            }
        case "changeIsSelectAll":

            shopList.forEach(item => {
                item.checked = !state.isSelectAll
            })
            return {
                ...state,
                isSelectAll: !state.isSelectAll,
                shopList
            }
        case "changeCheckedOne":
            shopList[action.index].checked = !shopList[action.index].checked;
            return {
                ...state,
                shopList,
                isSelectAll: shopList.every(item => item.checked)
            }
        case 'changeIsEdit':
            return {
                ...state,
                isEdit: !state.isEdit,
                
            }
        case 'changeNum':
            let arr = []
            arr.forEach((item,index)=>{
                item= state.shopList[index].checked
            })
            return {
                ...state,
                shopList:arr
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
//购物车列表
const changeShopList = (arr) => {
    return {
        type: 'changeShopList', arr: arr
    }
}

//是否全选
export const changeIsSelectAll = () => {
    return {
        type: "changeIsSelectAll",
    }
}
//每一个选择
export const changeCheckedOne = index => {
    return {
        type: "changeCheckedOne",
        index
    }
}
//是否编辑
export const changeIsEdit = () => {
    return {
        type: 'changeIsEdit'
    }
}
export const changeNum = () => {
    return {
        type: 'changeNum',
    }
}


// 请求数据==================================================
export const requestBannerAction = () => {
    return (dispatch, getState) => {
        if(getState().banner.length>0){
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
        if(getState().goods.length>0){
            return
        }
        requestGoods().then(res => {
            dispatch(changeGoods(res.data.list[0].content))
        })
    }
}
//详情
export const requestGoodDetailAction = (id) => {
    return (dispatch, getState) => {
        if(parseInt(id.id) === getState().goodDetail.id){
            return
        }
        requestCateInfo(id).then(res => {
            dispatch(changeGoodDetail(res.data.list[0]))
        })
    }
}
//catetree
export const requestCateTreeAction = (id) => {
    return (dispatch, getState) => {
        if(getState().cateTree.length>0){
            return
        }
        requestCateTree().then(res => {
            dispatch(changeCateTree(res.data.list))
        })
    }
}
//cateDetail
export const requestCateGoodsAction = (id) => {
    return (dispatch, getState) => {
        
        /* if(parseInt(id.fid)===getState().cateDetails){
            return 两者ID不一致
        }  */
        requestCateGoods(id).then(res => {            
            dispatch(changecateDetail(res.data.list))
        })
    }
}
//cateList
export const requestShopListAction = (id) => {
    return (dispatch, getState) => {
        requestShopInfo(id).then(res => {
            let oldlist = getState().shopList;
            const list = res.data.list ? res.data.list : []
            
            list.forEach((item,index) => {
                if (oldlist.length>index){
                    item.checked = oldlist[index].checked;
                }else{
                    item.checked = false;
                }
                
            })
            dispatch(changeShopList(list))
        })
    }
}
//cateDel
export const requestShopDelAction = (id) => {
    return (dispatch, getState) => {
        requestShopDel({ id: id }).then(res => {
            if (res.data.code === 200) {
                Toast.success('删除成功', 2);
            }


        })
    }
}
//加一
export const requestShopEditAddAction = (id,uid) => {
    const params = { id: id, type: 2 }
    return (dispatch, getState) => {
        requestShopEdit(params).then(res => {
            if(res.data.code === 200 ){
                dispatch(requestShopListAction(uid))
            }
        })
    }
}

// 导出数据====================================================================
export const bannerList = (state) => state.banner
export const goodsList = (state) => state.goods
export const goodDetails = (state) => state.goodDetail
export const cateTree = (state) => state.cateTree
export const cateDetails = (state) => state.cateDetails
export const shopList = (state) => state.shopList
export const isSelectAll = state => state.isSelectAll
export const isEdit = state => state.isEdit

const store = createStore(reducer, applyMiddleware(thunk))
export default store