import React from 'react'
import './cateGoods.css'
import { withRouter } from 'react-router-dom'

function CateGoods(props) {
    const { info } = props
    const toCateDetail = (id) => {
        props.history.push('/cateDetail?fid=' + id)
        // console.log()
    }
    return (
        <div className='goodtatol'>
            {info.length > 0 ? info.map(item => {
                return <div className="categoods" key={item.id} onClick={() => toCateDetail(item.id)}>
                    <img src={item.img} alt="" />
                    <h4>{item.catename}</h4>
                </div>
            }) : null}

        </div>
    )
}

export default withRouter(CateGoods)
