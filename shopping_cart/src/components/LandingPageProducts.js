/*import React  from 'react'
import axios from 'axios'

import Product from './Product'

const LandingPageProducts = (props) =>{
    const landingPageProducts=props.landingPageProducts
    
 /* useEffect = (() => {
    const getProductsforLandingPage = async () => {
      const options = {
        method: 'GET',
        url: 'https://datagram-products-v1.p.rapidapi.com/storeproduct/search/',
        params: { q: 'laptop' },
        headers: {
          'X-RapidAPI-Key': 'b0aa06f1c1msh784ba5a3d741d16p108396jsn82164ffef512',
          'X-RapidAPI-Host': 'datagram-products-v1.p.rapidapi.com'
        }
      }
      const landingPageProducts = await axios.request(options);
      console.log(landingPageProducts.data)
      setLandingPageProducts(landingPageProducts)
    }

    getProductsforLandingPage();
  }, [])
  console.log(landingPageProducts)
  return(
    <div className='landing-page'>
        {landingPageProducts.map(product =>(
            <Product 
                key={product.id}
                product={product}
        />
                ))}
    </div>
  )
}
export default LandingPageProducts*/