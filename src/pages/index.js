import * as React from "react"
import GradientCanvas from "../components/gradientCanvas"
import AmbientLogo from "../../content/assets/ambient.inline.svg"
import SquircleLogo from "../../content/assets/squircle.inline.svg"
import SubscribtionForm from "../components/subscribtionForm"

export default function Home() {
  return  (
	<>
		<title>Ambient</title>
		<div className="flex min-h-screen max-w-full h-screen grid-cols-1 bg-verylightblue">
			<GradientCanvas id="canvas"/>
			<div className="absolute h-full w-full backdrop-blur-lg bg-white/10" />
			<AmbientLogo className="absolute w-[70px] h-[25px] md:w-[100px] md:h-[30px] mt-8 ml-8 opacity-100" />
			<SquircleLogo className="absolute w-[15px] h-[15px] md:w-[25px] md:h-[25px] bottom-0 mb-8 ml-8 opacity-100" />
			<div className="w-3/4 lg:w-1/2 mx-auto text-center text-verylightblue z-10">
				<div className="text-4xl md:text-5xl lg:text-6xl font-[600] mt-[150px] md:mt-[250px] "> 
					Transforming cancer care with artificial intelligence.
				</div> 
				<div className="text-md font-[300] mt-16"> 
					Coming soon.
				</div> 
				<div className="mt-3"> 
							<SubscribtionForm />
				</div> 
			</div>
		</div>
	</>
  )
}