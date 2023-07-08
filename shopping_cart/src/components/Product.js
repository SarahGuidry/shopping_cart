import React from 'react'

const Product =props =>{
    const product = props.product
    return(
        <div className='product'>
            <a href={product.url} ><img src={product.image.url} alt={`${product.image.description}`}/></a>
            <h1 className='name'>{product.name}</h1>
            <p className='price'>{product.price.priceSymbol}{product.price.currentPrice}</p>
            <button onClick={() =>
                props.addItem(product.id)}>Add to Cart</button>
        </div>)
}

export default Product