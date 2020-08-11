import React, { Component } from 'react'
import Header from '../../components/Header'
import carStore from '../../assets/img/store.png'
import { Modal } from 'antd-mobile'
import './shopCar.css'
import { priceFilter } from '../../filters'
import edit from '../../assets/img/editor_nor.png'
import editer from '../../assets/img/editor_hig.png'
import sel from '../../assets/img/radio_nor.png'
import select from '../../assets/img/radio_hig.png'
import emptycar from '../../assets/img/tab_shopping_nor.png'
import { requestShopListAction, shopList, isSelectAll, changeIsSelectAll, changeCheckedOne, changeIsEdit, isEdit, requestShopDelAction, requestShopEditAddAction } from '../../store'
import { connect } from 'react-redux'
import { requestShopEdit } from '../../utils/request'
class ShopCar extends Component {
    constructor() {
        super()
        this.state = {
            num: 1,
        }
    }

    //删除
    del(id) {
        const alert = Modal.alert;
        alert('删除', '是否删除该宝贝???', [{ text: '取消', style: 'default' },
        {
            text: '删除', onPress: () => {
                this.props.shopDell(id)
                this.requestList()
            }
        }
        ])
    }

    // 购物车数量减一
    sub(id, num) {
        if (num < 2) {
            return
        }
        let params = {
            id: id,
            type: 1
        }
        requestShopEdit(params).then(res => {
            this.requestList()
        })
    }



    //请求购物车列表
    requestList() {
        let uid = { uid: sessionStorage.getItem('uid') }
        this.props.requestShopList(uid)
    }

    //加载完成
    componentDidMount() {
        this.requestList()
        /*  this.setState({
             arr: this.props.shopList.map((item) => {
                 return false
             })
         }) */
    }
    render() {
        const { shopList, changeIsSelectAll, isSelectAll, changeCheckedOne, changeIsEdit, isEdit, shopAdd } = this.props
        let uid = { uid: sessionStorage.getItem('uid') }
        var total = 0
        shopList.forEach((item) => {
            if (item.checked) {
                total += item.num * item.price
            }
        })
        return (
            <div className='cars'>
                <Header title='购物车'></Header>
                {shopList.length > 0 ? <div className='sco'>{shopList.map((item, index) => {
                    return <div className="car" key={item.id}>
                        <h3><img src={carStore} alt="" />杭州报税区仓</h3>
                        <div className={isEdit ? 'con remove' : 'con'} >
                            <div className="conmain">
                                <div className="imgce" > <img src={item.checked ? select : sel} alt="" onClick={() => changeCheckedOne(index)} /></div>

                                <img className='pic' src={item.img} alt="" />
                                <div className="cal">
                                    <h4>{item.goodsname}</h4>
                                    {/* 计算器 */}
                                    <div className="addsub">
                                        <button onClick={() => this.sub(item.id, item.num)}>-</button>
                                        <span><button>{item.num}</button></span>
                                        <button onClick={() => shopAdd(item.id, uid)}>+</button>
                                    </div>
                                    <p>总价:{priceFilter(item.price * item.num)}</p>
                                </div>
                                <p className='price'>$ {priceFilter(item.price)}</p>
                            </div>
                            <button className='del' onClick={() => this.del(item.id)}>删除</button>
                        </div>
                        <div className="tettle">
                            <div className="selAll">
                                <img src={isSelectAll ? select : sel} alt="" onClick={() => changeIsSelectAll()} />
                全选
            </div>
                            <div className="edit">
                                <img src={isEdit ? editer : edit} alt="" onClick={() => changeIsEdit()} />
                编辑
            </div>
                            <div className="count">
                                合计:{priceFilter(total)}
                                <p>(不含运费)</p>
                            </div>
                            <span >去结算</span>
                        </div>
                    </div>
                })}</div> : <div className="empty">
                        <img src={emptycar} alt="" />
                        <p>购物车还是空的</p>
                        <p>快去逛逛吧~</p>

                    </div>}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopList: shopList(state),
        isSelectAll: isSelectAll(state),
        isEdit: isEdit(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestShopList: (id) => dispatch(requestShopListAction(id)),
        changeIsSelectAll: () => dispatch(changeIsSelectAll()),
        changeCheckedOne: index => dispatch(changeCheckedOne(index)),
        changeIsEdit: () => dispatch(changeIsEdit()),
        shopDell: (id) => dispatch(requestShopDelAction(id)),
        shopAdd: (id, uid) => dispatch(requestShopEditAddAction(id, uid))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCar)
