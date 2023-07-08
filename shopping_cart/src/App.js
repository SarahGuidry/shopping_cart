import React, { useState, useEffect } from 'react'
import { Route, Routes, Await, defer, useLoaderData } from 'react-router-dom'
//import {useHistory} from 'react-router'
import axios from 'axios'

import Navigation from './components/Navigation'

import ShoppingCart from './components/ShoppingCart'
import Products from './components/Products'
import Deals from './components/Deals'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [deals, setDeals] = useState([])

  useEffect(() => {
    const options = {
      params: {
        countryCode: 'US',
        languageCode: 'EN'
      },
      headers: {
        "access-control-allow-credentials": "true",
        "access-control-allow-origin": "*",
        "api-supported-versions": "1.0",
        "content-type": "application/json; charset=utf-8; x-api-version=1.0",
        "x-rapidapi-region": "AWS - us-east-1",
        "x-rapidapi-version": "1.2.8",
        "x-rapidapi-key": "b0aa06f1c1msh784ba5a3d741d16p108396jsn82164ffef512",
        "x-rapidapi-host": "amazon-web-scraping-api.p.rapidapi.com"
      }
    }
    async function getDeals() {

      axios.get('https://amazon-web-scraping-api.p.rapidapi.com/products/deals', options)
        .then(resp => {
          console.log(resp.data.deals)
          setDeals(resp.data.deals)
          //history.push('/products')

        }).catch(err => {
          console.log(err)
        })
    }
    getDeals()
  }, [])

  useEffect(() => {
    if (deals) {
      console.log(deals)
    }
  }, [deals])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://amazon-web-scraping-api.p.rapidapi.com/products/search',
      params: {
        criteria: 't2 chip',
        countryCode: 'US',
        languageCode: 'EN'
      },
      headers: {
        'X-RapidAPI-Key': 'b0aa06f1c1msh784ba5a3d741d16p108396jsn82164ffef512',
        'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
      }
    }

    const getProducts = async () => {
      await axios.request(options)
      .then(resp=>{
        console.log(resp.data)
        setProducts([...products, resp.data])
      })
      .catch(err=>console.log(err))
    }
    getProducts()
    
  }, [products])
 

  const addItemToCart = item => {
    setCart([...cart, item.id])
  }

  return (
    <div className='App'>
      <Navigation cart={cart} products={products} deals={deals} />
      <Routes>
        <Route exact path='/' element={<Deals deals={deals}  />}></Route>

        <Route exact path="/products" element={<Products products={products} addItemToCart={addItemToCart} />}>

        </Route>

        <Route exact path='/cart' element={<ShoppingCart cart={cart} />} >
        </Route>
      </Routes>
    </div>
  )
}
export default App
