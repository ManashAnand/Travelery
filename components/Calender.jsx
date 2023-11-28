"use client";
import { useState } from 'react';
import Calendar from 'react-calendar';

const Calender = () => {
    
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-white mb-6 rounded-md flex sm:w-1/2 w-full ">
       <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default Calender
