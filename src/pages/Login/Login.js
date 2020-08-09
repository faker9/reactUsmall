import React, { Component } from 'react'
import './login.css'
import {requestMemberLogin} from '../../utils/request'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: '',
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
    login(){
        requestMemberLogin(this.state.user).then(res=>{
            if(res.data.code=== 200){
                this.props.history.push('/index') 
            }
            else{
                alert(res.data.msg)
            }
        })
    }
    render() {
        const { user } = this.state
        return (
            <div className='login'>
                <header>登录<span>注册</span></header>
                <div className="main">
                <div className='input'>
                  账号:<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, 'phone')} />
                </div>
                <div className='input'>
                   密码: <input type="password" value={user.password} onChange={(e) => this.changeUser(e, 'password')}/>
                </div>
                <span>忘记密码</span>
                <button onClick = {()=>this.login()}>登录</button>
                </div>
                
            </div>
        )
    }
}
