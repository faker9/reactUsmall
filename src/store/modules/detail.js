import { requestCateInfo} from '../../utils/request'
const initState ={
    isDoor: false,
    goodDetail: [],//商品详情
}

const reducer = (state=initState,action)=>{
    switch(action.type){
        case 'changeDetail':
            return {
                ...state,
                goodDetail: action.obj
            }
        default :
        return state
    }
}

//详情
const changeGoodDetail = (obj) => {
    return {
        type: 'changeDetail', obj: obj
    }
}
// 请求数据==================================================
export const requestGoodDetailAction = (id) => {
    return (dispatch, getState) => {
        if(parseInt(id.id) === getState().detail.goodDetail.id){
            return
        }
        requestCateInfo(id).then(res => {
            dispatch(changeGoodDetail(res.data.list[0]))
        })
    }
}

//导出
export const goodDetails = (state) => state.detail.goodDetail
export default reducer