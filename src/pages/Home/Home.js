import React, { Component } from 'react'
import logo from '../../assets/img/img/home/logo.jpg'
import './home.css'
import Banner from './components/Banner'
import Rush from './components/Rush'
import Goods from './components/Goods'
import {connect} from 'react-redux'
import { bannerList, requestBannerAction, goodsList, requestGoodsAction } from '../../store'
 class Home extends Component {
     componentDidMount(){
        this.props.requestBanner()
        this.props.requestGoods()
     }
    render() {
        // const {goods} = this.props
        return (
            <div className='home'>
               <div className='header'>
                   <img src={logo} alt=""/> <input type="text" placeholder='寻找商品'/>             
               </div>
               <Banner {...this.props}></Banner>
                <Rush ></Rush>
                <Goods {...this.props}></Goods>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {     
        banner:bannerList(state),
        goods:goodsList(state)
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        requestBanner :()=>dispatch(requestBannerAction()),
        requestGoods:()=>dispatch(requestGoodsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)