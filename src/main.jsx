import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header/Header.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUS from './Components/AboutUs/AboutUS.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Products from './Components/Products/Products.jsx'
import Lamps from './Components/Lamps/Lamps.jsx'
import ProductPage from './Components/ProductPage/ProductPage.jsx'
import GreenPots from './Components/GreenPots/GreenPots.jsx'
import ModernArt from './Components/ModernArt/ModernArt.jsx'
import Login from './Components/LogIn/Login.jsx'
import Product from './Components/Product/Product.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUS />} />
      <Route path='productPage' element={<ProductPage />} />
      <Route path='contact' element={<Contact />} />
      <Route path='products' element={<Products />} />
      <Route path='Lamps' element={<Lamps />} />
      <Route path='GreenPots' element={<GreenPots />} />
      <Route path='ModernArt' element={<ModernArt />} />
      <Route path='login' element={<Login />} />
      <Route path='/product' element={<Product />} >
        <Route path=':productId' element={<Product />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
