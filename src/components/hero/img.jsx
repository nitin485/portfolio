import React from 'react'
import Imgg from '../../assets/nitinb_.png'

function Imagediv() {
  return (
    <div className='relative w-full flex justify-center items-center'>
      {/* Offset background frame */}
      <div className="absolute top-40 left-[calc(50%-130px)] w-[280px] h-[380px] border border-gray-800 -z-10"></div>

      {/* Main image container — editorial portrait */}
      <div className="relative w-[260px] h-[360px] overflow-hidden shadow-2xl shadow-black/80 bg-black" >
        <img
          src={Imgg}
          alt="Nitin Bhardwaj"
          className="w-full h-[115%] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
        />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Small label bottom-right */}
      <div className="absolute bottom-0 right-[calc(50%-160px)] flex items-center gap-2">
        <div className="w-4 h-[1px] bg-gray-600"></div>
        <span className="text-[9px] tracking-[0.3em] text-gray-600 uppercase font-bold">Portfolio 2026</span>
      </div>
    </div>
  )
}

export default Imagediv
