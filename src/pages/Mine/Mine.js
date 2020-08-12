import React, { Component } from 'react'
import set from '../../assets/img/set.png'
import news from '../../assets/img/news.png'
import user from '../../assets/img/1.jpg'
import colc from '../../assets/img/hot.png'
import iconi from '../../assets/img/icon_refund.png'

import './mine.css'
export default class Mine extends Component {
    render() {
        return (
            <div className='mine'>
                <div className='header'>
              
                    <img className='img' src={set} alt=""/>
                     个人中心
                    <img className='img' src={news} alt=""/>
                    <span>9+</span>
                    <img src={user} alt="" className='user'/>
                </div>
                <h4>{sessionStorage.getItem('nackname')}</h4>
                <p  className='clo'><img src={colc} alt=""/> 我的收藏(5)</p>
                <div className="center">
                    <h3>我的订单<span>查看订单</span></h3>

                    <div className="icon">
                    <div className="iconItem">
                        <img src={iconi} alt=""/>
                        代发货
                    </div>
                    <div className="iconItem">
                        <img src={iconi} alt=""/>
                        代发货
                        <span>3</span>
                    </div>
                    <div className="iconItem">
                        <img src={iconi} alt=""/>
                        代发货
                        <span>3</span>
                    </div>
                    <div className="iconItem">
                        <img src={iconi} alt=""/>
                        代发货
                        <span>3</span>
                    </div><div className="iconItem">
                        <img src={iconi} alt=""/>
                        代发货
                        <span>3</span>
                    </div>
                </div>

                   {/* 收货地址管理 */}
                   <div className="manage">
                    收货地址管理
                </div>

                </div>
                
                 
            </div>
        )
    }
}
