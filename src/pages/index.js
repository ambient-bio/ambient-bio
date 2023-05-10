import * as React from "react"
import GradientCanvas from "../components/gradientCanvas"
import Logo from "../../content/assets/logo_1.inline.svg"

export default function Home() {
  return  (
  <div className="flex min-h-screen max-w-full bg-verylightblue">
  <div className="w-1/12 lg:w-2/12"></div>
    <div className="w-10/12 md:w-6/12 xl:w-5/12 pt-32 lg:pt-36 text-darkblue font-sans">
      <GradientCanvas id="canvas"/>
      <Logo className="absolute w-[300px] md:w-[400px] lg:w-[600px] md:pb-2 opacity-100" />
      <Logo className="w-[300px] md:w-[400px] lg:w-[600px] md:pb-2" />
      <div className="text-3xl lg:text-6xl font-[200]"> 
        We are a team of clinical medicine & AI experts on a mission to better quantify human health.
      </div> 
      <div className="md:text-base lg:text-xl font-[300] pt-1 md:pt-2 lg:pt-4"> 
        info@ambient.bio
      </div> 
    </div>
  </div>
  )
}