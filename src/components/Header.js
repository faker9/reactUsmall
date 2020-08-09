import React from 'react'
import './header.css'
import { withRouter } from 'react-router-dom'

 function Header(props) {
   var goback=()=>{
    props.history.goBack()
      console.log(props.history)
    }
    return (
        <div>
            <header>{props.isShow?<span onClick={()=>goback()}>返回</span>:null}{props.title}</header>
        </div>
    )
}
export default withRouter(Header)