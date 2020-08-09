import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import {Provider}  from 'react-redux'
import store from './store'
import App from './App';
//重置样式表
import './assets/js/rem'
import './assets/css/reset.css'
import 'antd-mobile/dist/antd-mobile.css';

Component.prototype.$img='http://localhost:3000'
ReactDOM.render(
  <Provider store = {store}>
    <HashRouter>
    <App />
  </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);
