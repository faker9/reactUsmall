import React, { Component } from 'react'
import Header from '../../components/Header'
import carStore from '../../assets/img/store.png'
import { Checkbox } from 'antd-mobile'
import './shopCar.css'
import { priceFilter } from '../../filters'
import edit from '../../assets/img/editor_nor.png'
import editer from '../../assets/img/editor_hig.png'
import sel from '../../assets/img/radio_nor.png'
import select from '../../assets/img/radio_hig.png'
export default class ShopCar extends Component {
    constructor() {
        super()
        this.state = {
            selAll:false,
            isEdit:false,
            num: 1
        }
    }

    sel() {
        this.setState({
            ...this.state,
            selAll:!this.state.selAll
        })
    }
    edit(){
        this.setState({
            ...this.state,
            isEdit:!this.state.isEdit
        })
    }
    render() {
        const CheckboxItem = Checkbox.CheckboxItem;
        const { selAll,isEdit} = this.state
        return (
            <div>
                <Header title='购物车'></Header>
                <div className="car">
                    <h3><img src={carStore} alt="" />杭州报税区仓</h3>
                    <div className="con">
                        <CheckboxItem></CheckboxItem>
                        <img className='pic' src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg" alt="" />
                        <div className="cal">
                            <h4>哆啦咪女装</h4>
                            <div className="addsub">
                                <button>-</button><span><button>123</button></span><button>+</button>
                            </div>
                            <p>总价:{priceFilter(388)}</p>
                        </div>
                        <p className='price'>$ {priceFilter(368)}</p>
                        <button className='del'>删除</button>
                    </div>
                </div>

                <div className="tettle">
                    <div className="selAll">
                        <img src={selAll?select:sel} alt="" onClick={() => this.sel()} />
                        全选
                    </div>
                    <div className="edit">
                        <img src={isEdit?editer:edit} alt="" onClick={()=>this.edit()}/>
                        编辑
                    </div>
                    <div className="count">
                        合计:232
                        <p>(不含运费)</p>
                    </div>
                    <span >去结算</span>
                </div>

            </div>


        )
    }
}
