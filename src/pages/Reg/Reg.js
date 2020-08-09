import React, { Component } from 'react'
import './reg.css'
import {requestMemberReg} from '../../utils/request'
export default class Reg extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: '',
                nickname: '',
                password: ''
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    reg(){
        requestMemberReg(this.state.user).then(res=>{
            if(res.data.code=== 200){
                this.props.history.push('/login')
            }
            else{
                alert(res.data.msg)
            }
        })
    }
    render() {
        const { user } = this.state
        return (
            <div className='reg'>
                <header>注册<span >返回</span></header>
                <div className="main">
                    <div className='input'>
                        手机号:<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, 'phone')} />
                    </div>
                    <div className='input'>
                        昵    称:<input type="text" value={user.nickname} onChange={(e) => this.changeUser(e, 'nickname')} />
                    </div>
                    <div className='input'>
                        密    码: <input type="password" value={user.password} onChange={(e) => this.changeUser(e, 'password')} />
                    </div>
                    <button onClick = {()=>this.reg()}>注册</button>
                </div>

            </div>
        )
    }
}
