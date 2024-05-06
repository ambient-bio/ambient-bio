import * as React from "react"
import GradientCanvas from "../components/gradientCanvas"
import AmbientLogo from "../../content/assets/ambient.inline.svg"
import SquircleLogo from "../../content/assets/squircle.inline.svg"
import SubscribtionForm from "../components/subscribtionForm"

export default function Home() {
  return  (
  <div className="flex min-h-screen max-w-full h-screen grid-cols-1">
	  
	  <GradientCanvas id="canvas"/>
	  <div className="absolute h-full w-full backdrop-blur-lg bg-white/10" />
	  <AmbientLogo className="absolute w-[100px] h-[30px] mt-8 ml-8 opacity-100" />
	  <SquircleLogo className="absolute w-[25px] h-[25px] bottom-0 mb-8 ml-8 opacity-100" />
	  <div className="w-1/2 mx-auto text-center text-verylightblue z-10">
		<div className="text-6xl font-[600] mt-[250px] "> 
			Transforming cancer care with artificial intelligence.
		</div> 
		<div className="text-md font-[300] mt-16"> 
			Coming soon.
		</div> 
		<div className="mt-3"> 
      		<SubscribtionForm />
		</div> 
	  </div>

    {/* <div className="w-1/12 lg:w-2/12 "></div> */}
    <div className="text-darkblue font-sans">
      {/* <GradientCanvas id="canvas"/> */}
      {/* <Logo className="absolute w-[300px] md:w-[400px] lg:w-[600px] md:pb-2 opacity-100" />
      <Logo className="w-[300px] md:w-[400px] lg:w-[600px] md:pb-2" /> */}
      {/* <div className="text-3xl lg:text-6xl font-[100]"> 
        We are a team of medical AI experts on a mission to improve patient outcomes.
      </div> 
      <div className="md:text-base lg:text-xl font-[300] pt-1 md:pt-2 lg:pt-5"> 
        info@ambient.bio
      </div>  */}
    </div>
  </div>
  )
}