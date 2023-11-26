import React from "react";

const ContributerCard = ({ data }) => {
  const getRandomColor = () => {
    const colors = ["#E9CE2C", "#654C4F", "#0081af"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  return (
 
    <div className=" md:grid grid-cols-3 gap-4 flex flex-col mt-6  w-full">
   
      {data?.map((item) => (
        <figure
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
              {item?.description}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-white">
              <cite className="pe-3 font-medium text-white">{item?.name}</cite>
              <cite className="ps-3 text-sm text-white">{item?.number}</cite>
            </div>
          </figcaption>

          <figcaption className="flex items-center justify-center mt-2 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-white">
              <cite className="pe-3 font-medium text-white">{item?.date}</cite>
              <cite className="ps-3 text-sm text-white">{item?.time}</cite>
            </div>
          </figcaption>
          <div className="text-white mt-2">
            Preferred vehicle: {item?.preferredVehicle}
          </div>
        
          <button
            type="button"
            class="mt-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </figure>
      ))}
    </div>
  );
};

export default ContributerCard;
