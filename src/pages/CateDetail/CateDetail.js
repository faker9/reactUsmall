import React, { Component } from 'react'
// import { requestCateGoods } from '../../utils/request'
import QueryString from 'qs'
import Header from '../../components/Header'
import { cateDetails, requestCateGoodsAction} from '../../store/modules/cate'
import { connect } from 'react-redux'
import {priceFilter} from '../../filters'
import './catedetail.css'
class CateDetail extends Component {
    componentDidMount() {
        const id = QueryString.parse(this.props.location.search.slice(1))
        this.props.requestCateDetail(id)

    }
    toDetail(id){
        this.props.history.push('/goodDetail?id='+id)
    }
    render() {
        const {cateDetail } =this.props
        return (
           <div>
                <Header isShow={true} title='电视'></Header>
                <div className="catedetail">
                    <div className="img"></div>
                    {cateDetail?cateDetail.map(item=>{
                        return (<div className='goods' key={item.id} onClick={()=>this.toDetail(item.id)}>
                        <img src={item.img} alt="" />
                        <div className="right">
                            <h3>{item.goodsname}</h3>
                            <p>{priceFilter(item.price)}</p>
                            <span>立即抢购</span>
                        </div>
                    </div>)
                    }):null}
                    
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

