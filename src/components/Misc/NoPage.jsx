import React from 'react'
import NoPageAnimation from '@/assets/Page Not Found 404.json'
import LottieModule from "lottie-react"

const Lottie = LottieModule?.default ?? LottieModule

const NoPage = () => {
  return (
        <main className='d-flex justify-content-center align-items-center'>          
            <Lottie animationData={NoPageAnimation} loop={true} style={{ width: "700px"}}/>
        </main>          
  )
}

export default NoPage