import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = props =>{
    return(
        <div className='navigation'>
        <div className='row'>
        <div className="col-sm-4">
            <NavLink to='/products'>Products</NavLink>
        </div>
        <div className="col-sm-4">
            <NavLink to='/cart'>Cart<span>{props.cart.length}</span></NavLink>
        </div>
        </div>
        </div>)
}

export default Navigation