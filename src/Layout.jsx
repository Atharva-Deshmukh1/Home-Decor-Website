import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ShopContextProvider from './Components/ShopContext/ShopContext'

const Layout = () => {
  return (
    <>
    <ShopContextProvider>
      <Header />
      <Outlet />
      <Footer />
      </ShopContextProvider>
    </>
  )
}

export default Layout
