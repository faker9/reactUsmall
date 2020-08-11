import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from './utils/asyncComponent'
import MyRoute from './pages/myRoute/MyRoute'
export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component = {asyncComponent(()=>import('./pages/Login/Login'))}></Route>
        <MyRoute path='/index' component = {asyncComponent(()=>import('./pages/Index/Index'))}></MyRoute>
        <Route path='/reg' component = {asyncComponent(()=>import('./pages/Reg/Reg'))}></Route>
        <MyRoute path='/goodDetail' component = {asyncComponent(()=>import('./pages/GoodDetail/GoodDetail'))}></MyRoute>
        <MyRoute path='/cateDetail' component = {asyncComponent(()=>import('./pages/CateDetail/CateDetail'))}></MyRoute>
        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  )
}
