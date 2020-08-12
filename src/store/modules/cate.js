import {  requestCateTree, requestCateGoods} from '../../utils/request'
const initState ={
    cateTree: [],
    cateDetails: [],//分类详情
}

const reducer = (state=initState,action)=>{
    switch(action.type){
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
        default :
        return state
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
//catetree
export const requestCateTreeAction = (id) => {
    return (dispatch, getState) => {
        if(getState().cate.cateTree.length>0){
            return
        }
        requestCateTree().then(res => {
            const list = res.data.list?res.data.list:[]
            dispatch(changeCateTree(list))
        })
    }
}
//cateDetail
export const requestCateGoodsAction = (id) => {
    return (dispatch, getState) => {
        if(sessionStorage.getItem('reduce')===id.fid){
            return
        }
    sessionStorage.setItem('reduce',id.fid) 
        requestCateGoods(id).then(res => {         
            dispatch(changecateDetail(res.data.list))

        })
    }
}
//导出
export const cateTree = (state) => state.cate.cateTree
export const cateDetails = (state) => state.cate.cateDetails
export default reducer