import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import asyncComponent from '../../utils/asyncComponent'
import './index.css'
import home1 from '../../assets/img/tab_home_nor.png'
import home2 from '../../assets/img/tab_home_hig.png'

import cate1 from '../../assets/img/tab_menu_nor.png'
import cate2 from '../../assets/img/tab_menu_hig.png'

import shopCar1 from '../../assets/img/tab_shopping_nor.png'
import shopCar2 from '../../assets/img/tab_shopping_hig.png'

import mine1 from '../../assets/img/tab_me_nor.png'
import mine2 from '../../assets/img/tab_me_hig.png'
export default class index extends Component {
    constructor(){
        super()
        this.state={
            icon:[home1,cate1,shopCar1,mine1],
            icon2:[home2,cate2,shopCar2,mine2],
        }
    }
    change(index){
        this.state.icon=[home1,cate1,shopCar1,mine1]
        this.state.icon[index]= this.state.icon2[index]
        this.setState({   
           icon: this.state.icon,
           icon2:this.state.icon2
        })
    }
    render() {
        const {icon}= this.state
        return (
            <div className='index'>
                <Switch>
                <Route path='/index/home' component = {asyncComponent(()=>import('../Home/Home'))}></Route>
                <Route path='/index/cate' component = {asyncComponent(()=>import('../Cate/Cate'))}></Route>
                <Route path='/index/shopCar' component = {asyncComponent(()=>import('../ShopCar/ShopCar'))}></Route>
                <Route path='/index/mine' component = {asyncComponent(()=>import('../Mine/Mine'))}></Route>
                <Redirect to='/index/home'></Redirect>
                </Switch>

                
                <footer>
                    <NavLink to='/index/home' activeClassName = 'select'><div onClick={(e)=>this.change(0,e)}><img src={icon[0]}  alt=""/> 首页</div></NavLink>
                    <NavLink to='/index/cate'  activeClassName = 'select'><div onClick={(e)=>this.change(1,e)}><img src={icon[1]}   alt=""/>分类</div></NavLink>
                    <NavLink to='/index/shopCar'  activeClassName = 'select'><div onClick={(e)=>this.change(2,e)}><img src={icon[2]}  alt=""/>购物车</div></NavLink>
                    <NavLink to='/index/mine'  activeClassName = 'select'><div onClick={(e)=>this.change(3,e)}><img src={icon[3]}  alt=""/>我的</div></NavLink>
                </footer>
            </div>
        )
    }
}
