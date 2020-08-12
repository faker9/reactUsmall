import React, { Component } from 'react'
import './login.css'
import Header from '../../components/Header'
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
                sessionStorage.setItem('nackname',res.data.list.nickname)
                sessionStorage.setItem('uid',res.data.list.uid)
                sessionStorage.setItem('user',JSON.stringify(res.data.list))
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
                <Header reg title='登录'></Header>
                <div className="main">
                <div className='input1'>
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
