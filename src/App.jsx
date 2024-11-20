import React from 'react'
import Navbar from './componets/Navbar'
import Worke from './componets/Worke'
import Strips from './componets/Strips'
import Products from './componets/Products'
import Maruees from './componets/Maruees'
import Cards from './componets/Cards'

function App() {
  return (
    <div className='w-screen h-full  bg-zinc-900'>
      <Navbar></Navbar>
      <Worke></Worke>
      <Strips></Strips>
      <Products></Products>
      <Maruees></Maruees>
      <Cards></Cards>
    </div>
  )
}

export default App
