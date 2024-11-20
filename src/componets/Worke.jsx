import React from 'react'

function Worke() {

    var images=[
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp", top:'50%', left:'50%', isActive: true},
        {url:"https://pbs.twimg.com/ext_tw_video_thumb/1766464338573897728/pu/img/Znbx2tFbXpmFkXCe.jpg", top:'56%', left:'44%', isActive: false},
        {url:"https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/6346b68e7f858311216e120b_V2%20Tools%20OpenGraph%20Final.jpg", top:'45%', left:'56%', isActive: false},
        {url:"https://cdn.dribbble.com/userupload/13541292/file/still-24dc32bf0d6fa3550ef87bbd966c94b7.png?resize=400x0", top:'60%', left:'53%', isActive: false},
    ]

  return (
    <div className='w-full '>
      <div className=' relative max-w-screen-xl mx-auto text-center '>
       <h1 className='text-[30vw] text-white leading-none font-medium select-none tracking-tight'>Work </h1>
       <div className='absolute top-0 w-full h-full '>
        {images.map((elem,index)=>(elem.isActive && (<img className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%] ' src={elem.url} style={{top: elem.top, left:elem.left}} alt=''></img>)))}
       </div>
      </div>
    </div>
  )
}

export default Worke
