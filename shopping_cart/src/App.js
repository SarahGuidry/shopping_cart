import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'

function App () {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const addItemToCart = item => {}

  return (
    <div className='App'>
      <Navigation cart={cart} />
      <Routes>
        <Route exact path='/' element={<Products products={products} addItemToCart={addItemToCart}/> }>
        </Route>

        <Route exact path='/cart' element={<ShoppingCart cart={cart} /> } >
        </Route>
      </Routes>
    </div>
  )
}

export default App
