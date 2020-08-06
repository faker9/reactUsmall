import React, { Component } from 'react'
import './login.css'
export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <header>登录<a>注册</a></header>
                <div className="main">
                <div className='input'>
                  账号:<input type="text" />
                </div>
                <div className='input'>
                   密码: <input type="password" />
                </div>
                <span>忘记密码</span>
                <button>登录</button>
                </div>
                
            </div>
        )
    }
}
