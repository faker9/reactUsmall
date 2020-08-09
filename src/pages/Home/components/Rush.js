import React from 'react'
import rushImg from '../../../assets/img/img/home/1.jpg'
import './rush.css'
export default function Rush() {
    return (
        <div className='rush'>
            <div><img src={rushImg} alt=""/>
            <p>限时抢购</p></div>
            <div><img src={rushImg} alt=""/>
            <p>积分商城</p></div>
            <div><img src={rushImg} alt=""/>
            <p>联系我们</p></div>
            <div><img src={rushImg} alt=""/>
            <p>商品分类</p></div>
        </div>
    )
}
