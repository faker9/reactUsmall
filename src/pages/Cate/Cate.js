import React, { Component } from 'react'
import Header from '../../components/Header'
import './cate.css'
// import {requestCateInfo,requestCateTree} from '../../utils/request'

import { cateTree, requestCateTreeAction } from '../../store'
import { connect } from 'react-redux'
import CateGoods from './components/CateGoods'
class Cate extends Component {
    constructor(){
        super()
        this.state={
            i:0,
            info:[]
        }
    }
    componentDidMount(){
        this.props.requestcateTree()
        if(this.props.cateTree.length>0){
            console.log(this.props.cateTree)
        }
    }
    sel(index,item){
        this.setState({
            i:index,
            info:item
        })
    }
    render() {
        const {cateTree} = this.props
       console.log('catetree',cateTree)
        return (
            <div>
                <Header title='商品分类'></Header>
                <div className="cate">
                    <ul>
                        {
                     cateTree.map((item,index)=>{
                     return <li className={this.state.i===index?'select':''} onClick={()=>this.sel(index,item.children)} info={item.child} key={item.id}>{item.catename}</li>
                     })       
                    }
                    </ul>
                    {cateTree.length>0&&this.state.i===0? <CateGoods info={cateTree[0].children}></CateGoods>: <CateGoods info={this.state.info}></CateGoods>}
                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cateTree: cateTree(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestcateTree: () => dispatch(requestCateTreeAction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cate)