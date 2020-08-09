import React, { Component } from 'react'
import { Carousel} from 'antd-mobile'
// import {requestBanner} from '../../../utils/request'
import 'antd-mobile/dist/antd-mobile.css';
import './banner.css'
export default class banner extends Component {
    state = {
        arr :[]
    }
 /*    componentDidMount(){
        requestBanner().then(res=>{
            this.setState({
                arr:res.data.list
            })
        })
    } */
    render() {
        const {banner} = this.props
        return (  
            <div className='banner'> 
             <Carousel>
                {banner.map(item=>{
                    return <img src="" key={item.id} src={item.img} alt=''/>
                    
                })}
             </Carousel>
            </div>
            
        )
    }
}
