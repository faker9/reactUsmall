import React from 'react'
import { Carousel} from 'antd-mobile'
// import {requestBanner} from '../../../utils/request'
import 'antd-mobile/dist/antd-mobile.css';
import './banner.css'
export default function banner(props){
        const {banner} = props
        return (  
            <div className='banner'> 
             <Carousel>
                {banner.map(item=>{
                    return <img  key={item.id} src={item.img} alt=''/>                    
                })}
             </Carousel>
            </div> 
        )
}

