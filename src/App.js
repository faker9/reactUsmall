import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from './utils/asyncComponent'
export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component = {asyncComponent(()=>import('./pages/Login/Login'))}></Route>
        <Route path='/index' component = {asyncComponent(()=>import('./pages/Index/Index'))}></Route>
        <Route path='/reg' component = {asyncComponent(()=>import('./pages/Reg/Reg'))}></Route>
        <Route path='/goodDetail' component = {asyncComponent(()=>import('./pages/GoodDetail/GoodDetail'))}></Route>
        <Route path='/cateDetail' component = {asyncComponent(()=>import('./pages/CateDetail/CateDetail'))}></Route>
        <Redirect to='./login'></Redirect>
      </Switch>
    </div>
  )
}
