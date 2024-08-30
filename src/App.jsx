import React from 'react'

import { Outlet } from 'react-router-dom'
import { Footer, Header, ProductDetails } from './pages'

const App = () => {
  return (
    <section className='w-full h-full min-h-screen  bg-ground '>
      <Header />
      <main className='w-full h-full min-h-screen pt-14'>
        <Outlet />
        {/* <ProductDetails/> */}
      </main>
      <Footer />
    </section>
  )
}

export default App