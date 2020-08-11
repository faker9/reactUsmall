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
            arr:[
                {
                    text:'首页',
                    unsel:home1,
                    sel:home2,
                    path:'/index/home'
                },
                {
                    text:'分类',
                    unsel:cate1,
                    sel:cate2,
                    path:'/index/cate'
                },
                {
                    text:'购物车',
                    unsel:shopCar1,
                    sel:shopCar2,
                    path:'/index/shopCar'
                },
                {
                    text:'我的',
                    unsel:mine1,
                    sel:mine2,
                    path:'/index/mine'
                },
            ],
        
        }
    }
   
    render() {
        const {arr}= this.state
        const path =this.props.location.pathname

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
                    {arr.map(item=>{
                        return (<NavLink key={item.path} to={item.path} activeClassName = 'select'>
                            <div ><img src={item.path===path?item.sel:item.unsel}  alt=""/>{ item.text}</div></NavLink>)
                    })}
                   
                </footer>
            </div>
        )
    }
}
