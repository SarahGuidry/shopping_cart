import React from 'react'

import Product from './Product'


const Products = props => {
    /*const [products, setProducts] = useState([])*/
    console.log("Products page loading")
    const products = props.products
    console.log(props.products)

    return products.length > 1 ? <div className="products-container">
        {products.products.map(product => (
            <Product
                key={product.id}
                product={product}
                addItem={props.addItems} />
        ))}
    </div> : <div className='products-containter'>Loading...</div>;
}

    export default Products