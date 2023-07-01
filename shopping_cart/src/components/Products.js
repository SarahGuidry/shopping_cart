import { useContext} from 'react'

import Product from './Product'
import ProductContext from '../contexts/ProductContext'

const Products = () =>{
   const {products, addItemToCart} = useContext(ProductContext)

    return(
        <div className="products-container">
            {products.map(d=> (
                <Product
                    key={d.id}
                    product={d}
                    addItem={addItemToCart}/>
            ))}
        </div>
    )
}

export default Products