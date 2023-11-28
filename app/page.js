"use client";
import Testimonials from "@/components/Testimonials";
import ContributerCard from "./../components/ContributerCard";
import FreeRide from "./../components/FreeRide";
import useSWR from 'swr'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://vbps4gqg55.execute-api.ap-south-1.amazonaws.com/', fetcher)
  
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    
    <>
      <ContributerCard data={data}/>

      <FreeRide data={data}/>

      <Testimonials data={data}/>

    </>
  );
}
