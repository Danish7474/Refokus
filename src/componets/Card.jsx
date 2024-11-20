import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card( {width , start, para}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl text-white ${width}`}>
    <div>
      <div className='w-full flex justify-between items-center'>
        <h3>one heading</h3>
        <IoIosArrowRoundForward />

      </div>
      <h1 className='text-3xl font-medium mt-5'>what ever</h1>
    </div>
    <div className='down w-full mt-60'>
    {
       
        start===true && (
            <>
            <h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
    <button className='rounded-full py-2 mt-5 px-5 border-[1px] border-zinc-50'>Contax Us</button>
    </>
    ) 
     

    }
    {
        para && (
       <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur.</p>
        )
    }
        
    </div>
    </div>
  )
}

export default Card
