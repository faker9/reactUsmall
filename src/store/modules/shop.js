import { requestShopInfo, requestShopDel, requestShopEdit} from '../../utils/request'
import { Toast } from 'antd-mobile'
const initState ={
    shopList: [],//购物车列表
    isSelectAll: false,//全选
    isEdit: false,//编辑
}

const reducer = (state=initState,action)=>{
    const shopList = [...state.shopList]
    switch(action.type){
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
        default :
        return state
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


// 请求数据==================================================
//shopList
export const requestShopListAction = (id) => {
    return (dispatch, getState) => {
        requestShopInfo(id).then(res => {
            //防止刷新
            
            let oldlist = getState().shop.shopList;
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
//shopDel
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
//导出
export const shopList = (state) => state.shop.shopList
export const isSelectAll = state => state.shop.isSelectAll
export const isEdit = state => state.shop.isEdit
export default reducer