"use client";
import Testimonials from "@/components/Testimonials";
import ContributerCard from "./../components/ContributerCard";
import FreeRide from "./../components/FreeRide";
import useSWR from 'swr'
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "@/redux/slices/UserSlice";


export default function Home() {

  const state = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("working")
    const data = localStorage.getItem('accessToken')
    // console.log("from useEffect")
    // console.log(JSON.parse(data))
    dispatch(logIn(JSON.parse(data)))
    
  },[])

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
