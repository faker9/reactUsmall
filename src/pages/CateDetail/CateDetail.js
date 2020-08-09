import React, { Component } from 'react'
// import { requestCateGoods } from '../../utils/request'
import QueryString from 'qs'
import Header from '../../components/Header'
import { cateDetails, requestCateGoodsAction} from '../../store'
import { connect } from 'react-redux'
import {priceFilter} from '../../filters'
import './catedetail.css'
class CateDetail extends Component {
    componentDidMount() {
        const id = QueryString.parse(this.props.location.search.slice(1))
        console.log(id)
        this.props.requestCateDetail(id)
    }
    render() {
        const {cateDetail } =this.props
        console.log(this.props.cateDetail)
        return (
           <div>
                <Header isShow={true} title='电视'></Header>
                <div className="catedetail">
                    <div className="img"></div>
                    {cateDetail.map(item=>{
                        return (<div className='goods' key={item.id} >
                        <img src={item.img} alt="" />
                        <div className="right">
                            <h3>{item.goodsname}</h3>
                            <p>{priceFilter(item.price)}</p>
                            <span>立即抢购</span>
                        </div>
                    </div>)
                    })}
                    
                </div>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cateDetail: cateDetails(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestCateDetail: (id) => dispatch(requestCateGoodsAction(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CateDetail)

