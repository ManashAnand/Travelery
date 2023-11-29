import React from 'react'
import Link  from 'next/link';

const Register = () => {
  return (
    <>
<section className="mt-10 p-8 rounded-xl bg-[#654C4F]">
  <div className="container h-full px-6 py-24">
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      {/* Left column container with background*/}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
      </div>
      {/* Right column container with form */}
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12 text-white">
        <form>
          {/* Email input */}
          <div className="text-yellow-300 text-3xl mb-4">
            Register to have fun
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="text" className=" border-b-2 border-yellow-300 text-yellow-300 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput3 border-b-2 border-yellow-300" placeholder="Email address" />
            <label htmlFor="exampleFormControlInput3" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email address
            </label>
          </div>
          {/* Password input */}
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="password" className="border-b-2 border-yellow-300 text-yellow-300 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput33" placeholder="Password" />
            <label htmlFor="exampleFormControlInput33" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password
            </label>
          </div>
          {/* Remember me checkbox */}
          <div className="mb-6 flex items-center justify-between">
            
            {/* Forgot password link */}
            <Link href="/login" className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 hover:text-yellow-300 dark:focus:text-primary-500 dark:active:text-primary-600">Have an account?</Link>
          </div>
          {/* Submit button */}
          <button type="submit" className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-yellow-300" data-te-ripple-init data-te-ripple-color="light">
            Sign in
          </button>
          {/* Divider */}
       
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Register
