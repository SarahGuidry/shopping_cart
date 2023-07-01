import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'
import Product from './components/Product'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [searchTerms, setSearchTerms] = useState()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [pages,setPages] = useState([])

  useEffect(() => {
  /*  const options = {
      method: 'GET',
      params: { q: 'laptop' },
      headers: `${headers}`,
      url: `https://datagram-products-v1.p.rapidapi.com/storeproduct/search/`
    }*/
    const options = {
      method: 'GET',
      url: 'https://datagram-products-v1.p.rapidapi.com/storeproduct/search/',
      params: {q: 'laptop'},
      headers: {
        'X-RapidAPI-Key': 'b0aa06f1c1msh784ba5a3d741d16p108396jsn82164ffef512',
        'X-RapidAPI-Host': 'datagram-products-v1.p.rapidapi.com'
      }
    };

    const getData = async () => {
      await axios.request(options)
        .then(res => {
           setProducts(res.data);
          console.log(res.data)
          setPages(res.data)})
        .catch(err => console.log(err))
        }
    
    getData()
  }, [])

  const addItemToCart = product => {
    setCart([...cart, product])
  }

  
  //setProducts(getProducts);

  // useEffect(()=>{
  // getHomeProducts();
  //},[])

  return (
    <div className='App'>
      <ProductContext.Provider value={{products, addItemToCart, pages }}>
        <CartContext.Provider value={{ cart }}>
          <Navigation cart={cart} />
          <Routes>
            <Route exact path='/' element={<Products />}>
            </Route>

            <Route exact path='/cart' element={<ShoppingCart />} >
            </Route>

          </Routes>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  )
}

export default App
