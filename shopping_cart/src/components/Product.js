import React, { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'

const Product = () => {
    const { product, addItemToCart} = useContext(ProductContext)
    
    return (
        <div className='product'>
            {/*<img src={product.image} alt={`${product.title}`}/>*/}

            <h1 className='name'>{product.name}</h1>
            <p className='brand'>{product.brand}</p>
            <p className='superbrand_id'>{product.superbrand_id}</p>
            <button onClick={() =>
                addItemToCart(product)}>Add to Cart</button>
        </div>)
}

export default Product