"use client";
import React, { useState } from 'react'
import Link  from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    // e.preventDefault()
    const image = data.image[0];
    const name = data.name;
    const password = data.password;
    const email = data.email;
    // console.log(image+" "+name+" "+password +" "+email)
    const formData = new FormData();
    formData.append("file", image);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_USERNAME
    );

        try {
          const uploadResponse = await fetch(
              `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}/image/upload`,
              {
                method: "POST",
                body: formData,
              }
            );
            const uploadedImageData = await uploadResponse.json();
            const imageUrl = uploadedImageData.secure_url;

          console.log(imageUrl);


          if (imageUrl) {
            const res = await axios.post("https://vbps4gqg55.execute-api.ap-south-1.amazonaws.com/register-traveler", {
              name,
              pass:password,
              email,
              imageUrl,
            });
            if (res.status === 200) {
              // router.push("/")
              console.log("First image upload")
              console.log(res);
            } else {
              console.log("Error in registring user");
            }
          }
        } catch (error) {
          console.log(error);
        }

    
  };

  const router = useRouter()

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   console.log(email+" "+pass)

  //   try {
  //     const res = await axios.post("https://vbps4gqg55.execute-api.ap-south-1.amazonaws.com/register-traveler",{email,pass});
  
  //     // console.log(res?.data);
  //     // console.log(res?.status)
  //     if(res?.status == 200){
  //       router.push('/login')
  //     }
  //     else{
  //       console.log("Error in logging from frontend")
  //     }

      
  //   } catch (error) {
  //     console.log("error in loggin from backend")
  //     console.log(error);      
  //   }

    

  // }

  return (
    <>
<section  className="my-10  p-8 rounded-xl bg-[#654C4F]">
  <div className="container h-full px-6 py-24">
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
      </div>
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12 text-white">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="text-yellow-300 text-3xl mb-4">
            Register to have fun
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="text" className=" border-b-2 border-yellow-300 text-yellow-300 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 " id="exampleFormControlInput3 border-b-2 border-yellow-300" placeholder="Your good name?"
          
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            {...register("name")}

            />
         
          </div>



          <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="email" className=" border-b-2 border-yellow-300 text-yellow-300 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 " id="exampleFormControlInput3 border-b-2 border-yellow-300" placeholder="Email address" 
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}

            {...register("email")}

            />
         
          </div>
          {/* Password input */}
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="password" className="border-b-2 border-yellow-300 text-yellow-300 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 " id="exampleFormControlInput33" placeholder="Password" 
            //  value={pass}
            // onChange={(e) => setPass(e.target.value)}
            {...register("password")}

            />
          
          </div>

          
        <label className="block mb-2 text-sm font-medium text-yellow-400 mt-10" for="file_input">Upload file</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  bg-yellow-400 focus:outline-none  placeholder-gray-400" id="file_input" type="file"
           {...register("image")}
        />

          {/* Remember me checkbox */}
        
          {/* Submit button */}
          <button type="submit" className="mt-10 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-yellow-300
          active:scale-95
          " data-te-ripple-init data-te-ripple-color="light
          "
          
          >
            Sign in
          </button>
          {/* Divider */}
       
        </form>






        <div className="mb-6 flex items-center justify-between">
            
            {/* Forgot password link */}
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-yellow-300">
              Already have an account?
              <Link href="/login" className="text-white ml-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ">Login</Link>
            </p>
          </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Register
