import React, { Component } from 'react'
import Header from '../../components/Header'
import './goodDetail.css'
import { connect } from 'react-redux'
import { requestGoodDetailAction, goodDetails } from '../../store'
import QueryString from 'qs'
import cart from '../../assets/img/img/cart.png'
import {Tag} from 'antd-mobile'
class GoodDetail extends Component {
    state = {
        isShow: true,
        title: '商品详情',
        isDoor:false,
        arr:[]
    }
    componentDidMount() {
        const id = QueryString.parse(this.props.location.search.slice(1))
        this.props.requestDetails(id)
        // JSON.parse(this.props.goodDetails.specsattr)
       
    }
    cancel(){
        this.setState({
            ...this.state,
            isDoor:false
        })
    }
    clickAdd(){
        this.setState({
            ...this.state,
            isDoor:true
        })
    }
    change(selected,item) {
        if(`${selected}`==='true'){
            this.state.arr.push(item)
            this.setState({
                ...this.state,
                arr:this.state.arr
            })     
        } else{
                const index = this.state.arr.findIndex(i=>{return i = item })
                if(index){
                    this.state.arr.splice(index,1)
                }
                this.setState({
                    ...this.state,
                    arr:this.state.arr
                }) 
            }
            console.log( this.state.arr)
      }
    doorCancel(e){
        if(e.target.className==='door'){
            this.setState({
                ...this.state,
                isDoor:false
            })
        }
    }
    render() {
        const { goodDetails } = this.props
        const {isDoor} = this.state
        // console.log(goodDetails)
        // console.log(typeof JSON.parse(goodDetails.specsattr))
        return (<div>
           <div >
                <Header {...this.state}></Header>
                <div className="gooddes">
                    <img src={goodDetails.img} alt="" />

                    <div className="head">
                        <h3>{goodDetails.goodsname}</h3>
                        <div className="selec">
                            <img src={cart} alt="" />
                             收藏
                         </div>
                    </div>
                    <p className='price'>Y78 {goodDetails.ishot ? <span>热卖</span> : null} {goodDetails.isnew ? <span>新品</span> : null}</p>
                    <p className='beforePrice'>$199</p>
                    <div dangerouslySetInnerHTML={{ __html: goodDetails.description }}></div>
                    <footer><span onClick={()=>this.clickAdd()}>加入购物车</span></footer>
                        {isDoor?(<div className="door" onTouchStart={(e)=>this.doorCancel(e)}>
                        <div className="block">
                            <div className="top">
                                <img src={goodDetails.img} alt="" />
                                <span>{goodDetails.goodsname}</span>
                            </div>
                            <div className="prop">
                                <h3>{goodDetails.specsname}</h3>               
                                {goodDetails.specsattr?JSON.parse(goodDetails.specsattr).map((item,index)=>{
                                    return (<Tag key = {index} value={item}  onChange = {(selected)=>this.change(selected,item)}>{item}</Tag>)
                                }):null}                      
                            </div>
                            <button>加入购物车</button>
                        </div>
                    </div>):null}
                </div>
            </div>
        </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        goodDetails: goodDetails(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestDetails: (id) => dispatch(requestGoodDetailAction(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoodDetail)