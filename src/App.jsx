import React from 'react'

import { Outlet, Route, Routes } from 'react-router-dom'
import { Footer, Header, Login, ProductDetails, Signup } from './pages'
import { NewArrivals } from './components'


const App = () => {
  return (
    <section className='w-full h-[100vh] text-white flex justify-center items-center bg-cover' style={{"backgroundImage" : "URL(https://wallpapercave.com/wp/wp8503304.jpg)"}}>
      <Routes>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element= {<Signup/>}/>
      </Routes>
     
    </section>
  )
}

export default App