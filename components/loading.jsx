"use client";

import React from 'react'
import animationData from '@/public/loading.json'
import { motion } from "framer-motion";
import Lootie from 'lottie-react'

const Loading = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full  mt-8 mb-4 h-screen ">
       
        <motion.div 
        className="flex w-full justify-center items-center"
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        >
            <Lootie animationData={animationData}  />
        </motion.div>
      </div>
    </>
  )
}

export default Loading