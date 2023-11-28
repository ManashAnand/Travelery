"use client";

import React from 'react'
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const data = [
        {
          description: "Exploring a scenic trail",
          name: "John Doe",
          date: "2023-12-01",
          time: "15:30",
          number: "ABC123",
          preferredVehicle: "SUV",
        },
        {
          description: "Exploring a scenic trail",
          name: "John Doe",
          date: "2023-12-01",
          time: "15:30",
          number: "ABC123",
          preferredVehicle: "SUV",
        },
        {
          description: "Exploring a scenic trail",
          name: "John Doe",
          date: "2023-12-01",
          time: "15:30",
          number: "ABC123",
          preferredVehicle: "SUV",
        },
        {
          description: "City tour and sightseeing",
          name: "Jane Smith",
          date: "2023-12-05",
          time: "10:00",
          number: "XYZ456",
          preferredVehicle: "Sedan",
        },
        {
          description: "Adventure in the mountains",
          name: "Alex Johnson",
          date: "2023-12-10",
          time: "12:45",
          number: "123DEF",
          preferredVehicle: "Off-road Vehicle",
        },
        {
          description: "Relaxing beach day",
          name: "Emily Brown",
          date: "2023-12-15",
          time: "14:15",
          number: "GHI789",
          preferredVehicle: "Convertible",
        },
        {
          description: "Relaxing beach day",
          name: "Emily Brown",
          date: "2023-12-15",
          time: "14:15",
          number: "GHI789",
          preferredVehicle: "Convertible",
        },
      
      ];
  return (
    <>
      <div className="w-full text-3xl flex justify-start items-center font-bold mt-4 text-[#654C4F]">Testimonials</div>

      <TestimonialCard data={data}/>
    </>
  )
}

export default Testimonials
