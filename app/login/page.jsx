"use client";
import React, { useState } from 'react'
import Link  from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {logIn} from '@/redux/slices/UserSlice'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';


const Login = () => {

  const dispatch = useDispatch()
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const handleLogin = async (data) => {
    const email = data?.email;
    const password = data?.password;
    // console.log(email+" "+password);
    try {
      const data = await axios.post("https://vbps4gqg55.execute-api.ap-south-1.amazonaws.com/login-traveler",{
        email,password
      })
      
      if(data.status == 200){
        console.log(data?.data?.user)
      }
      console.log(data);
      localStorage.setItem('accessToken',JSON.stringify(data?.data?.user));

      dispatch(logIn(data));
      router.push('/');
    } catch (error) {
        console.log("error is "+error);
    }

  }

  

  return (
    <>
    <div className="h-screen ">

        <section className="my-10 p-8 rounded-xl bg-[#654C4F]  ">
  <div className="h-full">
    {/* Left column container with background*/}
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
      </div>
      {/* Right column container */}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="mb-4 mr-4 text-2xl text-yellow-300">Sign in with</p>
            
          </div>
          <div className="relative mb-6 border-b-2 border-yellow-300" data-te-input-wrapper-init>
            <input type="text" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 " id="exampleFormControlInput2" placeholder="Email address" {...register("email")} />
          
          </div>
          <div className="relative mb-6 border-b-2 border-yellow-300" data-te-input-wrapper-init>
            <input type="password" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 " id="exampleFormControlInput22" placeholder="Password" {...register("password")}/>
            
          </div>
          <div className="mb-6 flex items-center justify-between">
            {/* Remember me checkbox */}
           
            {/*Forgot password link*/}
            {/* <Link href="/">Forgot password?</Link> */}
          </div>
          {/* Login button */}
          <div className="text-center lg:text-left ">
            <button type="button" className="inline-block bg-yellow-300 rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] " data-te-ripple-init data-te-ripple-color="light" onClick={handleSubmit(handleLogin)}>
              Login
            </button>
            {/* Register link */}
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-yellow-300 ">
              Don&apos;t have an account?
              <Link href="register" className="text-white  ml-2 transition duration-150 ease-in-out  p-2 hovar:bg-yellow-500 rounded-md ">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

</div>
    </>
  )
}

export default Login
