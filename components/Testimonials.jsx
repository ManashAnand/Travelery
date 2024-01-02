"use client";

import React from 'react'
import TestimonialCard from './TestimonialCard';

const Testimonials = ({data: Test,showDeleteBtn}) => {
    
  return (
    <>
      <div className="w-full text-3xl flex justify-start items-center font-bold mt-4 text-[#654C4F]">Testimonials</div>

      <TestimonialCard data={Test} showDeleteBtn={showDeleteBtn}/>
    </>
  )
}

export default Testimonials
