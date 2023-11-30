'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import { useState } from 'react'
import Link from 'next/link'

const CloseHover = () => {
  const [close, setClose] = useState(true)

  return (
    <>
      {close && (
        <>
          <div className='   text-[#E9CE2C] flex h-[3rem] mt-2'>
            <Marquee className='max-w-[97%] bg-[#654C4F]' pauseOnHover={true}>
              <div className=' ml-5'>
                🚀 Hey! we are launching a travel log app for all our peers 🎉
              </div>
              <div className=' ml-5'>
              This will reduce fair cost drastically and enable sustainable way of travelling 🌍
              <Link href="/about" className='ml-5'>For clarification go to our about section </Link>
              </div>
              <div className=' ml-5'>
               💀 Please report any error or suggestion in testimonials for any bug 🐛
              </div>
            </Marquee>
            <div
              className=' flex justify-center items-center bg-[#654C4F] text-white hover:bg-[#E9CE2C] cursor-pointer'
              onClick={() => setClose(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-12 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CloseHover
