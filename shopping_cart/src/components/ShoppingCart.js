import React from 'react'
import Item from './ShoppingCartItem'

const ShoppingCart = props =>{
    const getCartTotal = () =>{
        return props.cart.reduce((acc,value)=>{
            return acc + value.price
        }, 0).toFixed(2);
        };
    return(
        <div className="shopping-cart">
            {props.cart.map(item =>{
                <Item key={item.id} {...item}/>}
                )}
        <div className="shopping-cart_checkout">
            <p>Total: ${getCartTotal ()}</p>
            <button>Checkout</button>
        </div>
        </div>)
}

export default ShoppingCart