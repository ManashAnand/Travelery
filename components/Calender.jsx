"use client";
import { useState } from 'react';
import Calendar from 'react-calendar';

const Calender = ({value,onChange}) => {
    
  const [date, setDate] = useState(new Date());

  const handleDateChange = (_date) => {
    console.log(_date); 
  };
  return (
    <div className="bg-white mb-6 rounded-md flex sm:w-1/2 w-full ">
       <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default Calender
