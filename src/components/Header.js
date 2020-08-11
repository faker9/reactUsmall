import React from 'react'
import './header.css'
import { withRouter } from 'react-router-dom'

 function Header(props) {
   var goback=()=>{
    props.history.goBack()
    }
    return (
        <div>
            <header>{props.isShow?<span onClick={()=>goback()}>返回</span>:null}
            {props.title} {props.reg?<div className='regs'>注册</div>:null}</header>
        </div>
    )
}
export default withRouter(Header)