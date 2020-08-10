import React from 'react'
import './goods.css'
import {priceFilter} from '../../../filters/index'
export default function Goods(props) {
    const {goods} = props
    var toDetail = (id)=>{
        props.history.push('/goodDetail?id='+id)
    }
    return (<div className='goodmain'>
        {goods.map((item)=>{
               return  <div className='goods' key={item.id} onClick={()=>toDetail(item.id)}>
                <img src={item.img} alt=""/>
                <div className="right">
                    <h3>{item.goodsname}</h3>
                     <p>{priceFilter(item.price)}</p>
                    <span>立即抢购</span>
                </div>
            </div>
            })}
    </div>
            
    )
}
