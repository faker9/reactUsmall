import React from 'react'
import './goods.css'
import {priceFilter} from '../../../filters/index'
export default function Goods(props) {
    const {goods} = props
    console.log(goods)
    var toDetail = (id)=>{
        props.history.push('/goodDetail?id='+id)
    }
    return (<div>
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
            
       /*  <div className='goods'>
            
            <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg" alt=""/>
            <div className="right">
                <h3>上帝自行车</h3>
                <p>Y338</p>
                <span>立即抢购</span>
            </div>
        </div> */
    )
}
