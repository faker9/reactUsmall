import React, { Component } from 'react'
import Header from '../../components/Header'
import './goodDetail.css'
import { connect } from 'react-redux'
import { Toast } from 'antd-mobile'
// import { requestGoodDetailAction, goodDetails } from '../../store'
import { requestGoodDetailAction, goodDetails } from '../../store/modules/detail'
import { requestShopAdd } from '../../utils/request'
import QueryString from 'qs'
import cart from '../../assets/img/img/cart.png'
import { priceFilter } from '../../filters/index'
import { Tag } from 'antd-mobile'
class GoodDetail extends Component {
    state = { 
        isDoor: false,
        arr:[]
    }
    componentDidMount() {
        const id = QueryString.parse(this.props.location.search.slice(1))
        this.props.requestDetails(id)
    }
    cancel() {
        this.setState({
            ...this.state,
            isDoor: false
        })
    }
    clickAdd() {
        this.setState({
            ...this.state,
            isDoor: true
        })
    }
    //添加购物车
    add() {
        let params = {
            uid: sessionStorage.getItem('uid'),
            goodsid: QueryString.parse(this.props.location.search.slice(1)).id,
            num: 1
        }
        requestShopAdd(params).then(res => {
            if (res.data.code === 200) {
                Toast.success('成功加入购物车 !!!', 1);
            }

            this.cancel()
        })
    }
    //选择属性
    change(selected, item) {
        if (`${selected}` === 'true') {
            this.state.arr.push(item)
            this.setState({
                ...this.state,
                arr: this.state.arr
            })
        } else {
            const index = this.state.arr.findIndex(i => { return i = item })
            if (index) {
                this.state.arr.splice(index, 1)
            }
            this.setState({
                ...this.state,
                arr: this.state.arr
            })
        }
        console.log(this.state.arr)
    }
    //门板
    doorCancel(e) {
        if (e.target.className === 'door') {
            this.setState({
                ...this.state,
                isDoor: false
            })
        }
    }
    render() {
        const { goodDetails } = this.props
        const { isDoor } = this.state
        return (<div>
            <div >
                <Header isShow title='商品详情'></Header>
                <div className="gooddes">
                    <img src={goodDetails.img} alt="" />
                    <div className="head">
                        <h3>{goodDetails.goodsname}</h3>
                        <div className="selec">
                            <img src={cart} alt="" />
                             收藏
                         </div>
                    </div>
                    <p className='price'>￥{goodDetails.price ? priceFilter(goodDetails.price) : null} {goodDetails.ishot ? <span>热卖</span> : null} {goodDetails.isnew ? <span>新品</span> : null}</p>
                    <p className='beforePrice'>￥{goodDetails.price ? priceFilter(goodDetails.market_price) : null}</p>
                    <div dangerouslySetInnerHTML={{ __html: goodDetails.description }}></div>
                    <footer><span onClick={() => this.clickAdd()}>加入购物车</span></footer>

                    {/* 门板弹框 */}
                    {isDoor ? (<div className="door" onTouchStart={(e) => this.doorCancel(e)}>
                        <div className="block">
                            <div className="top">
                                <img src={goodDetails.img} alt="" />
                                <span>{goodDetails.goodsname}</span>
                            </div>
                            <div className="prop">
                                <h3>{goodDetails.specsname}</h3>
                                {goodDetails.specsattr ? JSON.parse(goodDetails.specsattr).map((item, index) => {
                                    return (<Tag key={index} value={item} onChange={(selected) => this.change(selected, item)}>{item}</Tag>)
                                }) : null}
                            </div>
                            <button onClick={() => this.add()}>加入购物车</button>
                        </div>
                    </div>) : null}
                </div>
            </div>
        </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        goodDetails: goodDetails(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestDetails: (id) => dispatch(requestGoodDetailAction(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoodDetail)