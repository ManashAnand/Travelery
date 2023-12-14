"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { mutate } from "swr";

const ContributerCard = ({data:Post}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const router = useRouter()

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const state = useSelector((state) => state.user);


  const getRandomColor = () => {
    const colors = ["#E9CE2C", "#654C4F", "#0081af","#94B0DA","#16BAC5"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const handleDelete = async (_id) => {
  
    try {
      const res = await axios.delete("https://vbps4gqg55.execute-api.ap-south-1.amazonaws.com/", {
        data: { id: _id }, 
    });
      if(res){
        mutate("https://vbps4gqg55.execute-api.ap-south-1.amazonaws.com/")
        // router.refresh()
      }
      else{
        alert("Not deleted")
      }
      
    } catch (error) {
      console.log(error)
      console.log(error.response.data);

    }
  }

  return (
    <>
    
      <div  className="w-full text-3xl flex justify-between items-center font-bold mt-4 text-[#654C4F] ">
        <div>Equal contributions</div>

        <div className="relative inline-block"> 
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white  hover:bg-[#654C4F]  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-[#654C4F] "
        type="button"
      >
       Common Locations 
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-2  divide-y divide-gray-100 rounded-lg shadow w-44 bg-[#463638] -translate-x-16 sm:-translate-x-0">
          <ul className="py-2 text-sm text-white ">
            <li>
              <button  onClick={() => handleLocationSelect('bagulur')}
                className="block px-4 py-2 w-full  hover:bg-gray-600 hover:text-white"
              >
                Bagulur
              </button>
            </li>
            <li>
              <button  onClick={() => handleLocationSelect('majestic')}
                className="block px-4 py-2 w-full  hover:bg-gray-600 hover:text-white"
              >
                Majestic
              </button>
            </li>
            <li>
              <button  onClick={() => handleLocationSelect('airport')}
                className="block px-4 py-2 w-full  hover:bg-gray-600 hover:text-white"
              >
                Airport
              </button>
            </li>
            <li>
              <button  onClick={() => handleLocationSelect('KSR')}
                className="block px-4 py-2 w-full  hover:bg-gray-600 hover:text-white"
              >
                KSR
              </button>
            </li>
            <li>
              <button  onClick={() => handleLocationSelect(null)}
                className="block px-4 py-2 w-full  hover:bg-gray-600 hover:text-white"
              >
                All Journey
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
      </div>

      <div className=" md:grid grid-cols-3 gap-4 flex flex-col mt-6  w-full">
      {Post?.filter(
          (item) =>
            item?.role === 'Equity' &&
            (!selectedLocation || item?.location === selectedLocation)
        ).map((item) => (
          <figure 
          key={item?.id}
            style={{ backgroundColor: getRandomColor() }}
            className="  text-center p-6 rounded-lg shadow-lg min-w-3xl"
          >
            <svg
              className="w-10 h-10 mx-auto mb-3 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path
                d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-white">
                {item?.descp}
              </p>
            </blockquote>
            <blockquote>
              <p className="text-2xl  font-bold  text-red-500">
                {item?.location}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-white">
                <cite className="pe-3 font-medium text-white">
                  {item?.name}
                </cite>
                <cite className="ps-3 text-sm text-white">{item?.number}</cite>
              </div>
            </figcaption>

            <figcaption className="flex items-center justify-center mt-2 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-white">
                <cite className="pe-3 font-medium text-white">
                  {item?.dateOfTravel}
                </cite>
                <cite className="ps-3 text-sm text-white">{item?.timeOfTravel}</cite>
              </div>
            </figcaption>
            <div className="text-white mt-2">
              Preferred vehicle: {item?.preferredVehicle}
            </div>

             {/* <button
              type="button"
              class="mt-2  border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900"
              onClick={() => handleDelete(item?.id)}
            >
              Delete
            </button>  */}
          </figure>
        ))}
      </div>
    </>
  );
};

export default ContributerCard;
