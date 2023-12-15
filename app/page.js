"use client";
import Testimonials from "@/components/Testimonials";
import ContributerCard from "./../components/ContributerCard";
import FreeRide from "./../components/FreeRide";
import useSWR from 'swr'
import { useState } from "react";


export default function Home() {
  const [page,setPage] = useState(1);

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://vbps4gqg55.execute-api.ap-south-1.amazonaws.com/', fetcher)
  
  if (error) return <h1>Error...</h1>
  if (isLoading) return <h1>Loading...</h1>
  return (
    
    <>
      <ContributerCard data={data}/>
    

      <FreeRide data={data}/>

      <Testimonials data={data}/>

    </>
  );
}
