import * as React from "react"
import GradientCanvas from "../components/gradientCanvas"
import Logo from "../../content/assets/logo_1.inline.svg"
import Logo3 from "../../content/assets/logo_3.inline.svg"
import Logo4 from "../../content/assets/logo_4.inline.svg"

export default function Home() {

  return  <div className="flex min-h-screen max-w-full bg-verylightblue">




  <div className="w-0 lg:w-2/12 bg-verylightblue"></div>
  <div className="  lg:w-6/12 pt-36">

    <GradientCanvas id="canvas1"/>
    <Logo className="absolute w-48 lg:w-[600px] pb-2 opacity-100" />
    <Logo className="w-48 lg:w-[600px] pb-2" />
    <div className="text-6xl text-darkblue font-['Space_Grotesk'] font-[300]">
      We are a team of clinical & AI experts on a mission to better quantify human health.
    </div> 
    <div className="text-2xl text-darkblue font-['Space_Grotesk'] font-[300] pt-6"> 
      info@ambient.bio
    </div> 

    <div className="w-full p-96"></div>
    <GradientCanvas id="canvas2"/>




    <Logo3 className="absolute w-48 lg:w-[600px] pb-2 opacity-100" />
    <Logo3 className="w-48 lg:w-[600px] pb-2" />
    <div className="text-6xl text-darkblue font-['IBM_Plex_Sans'] font-[300]"> 
      We are a team of clinical & AI experts on a mission to better quantify human health.
    </div> 
    <div className="text-2xl text-darkblue font-['IBM_Plex_Sans'] font-[300] pt-6"> 
      info@ambient.bio
    </div> 


    <div className="w-full p-96"></div>
    <GradientCanvas id="canvas3"/>




    <Logo4 className="absolute w-48 lg:w-[600px] pb-2 opacity-100" />
    <Logo4 className="w-48 lg:w-[600px] pb-2" />
    <div className="text-6xl text-darkblue font-['Inter'] font-[200]"> 
      Our team brings together experts in clinical medicine and AI on a mission to better quantify human health.
    </div> 
    <div className="text-2xl text-darkblue font-['Inter'] font-[300] pt-7"> 
      info@ambient.bio
    </div> 



    <div className="w-full p-96"></div>

  </div>
      
  {/* <div className="w-0 lg:w-4/12 bg-green-200"></div> */}
  </div>
  
  
  
 

}


 

// <div class="w-full h-screen bg-gray-200 flex justify-center items-center">
// <div class="bg-gray-400 w-96 h-96 relative z-0">
//   <p class="italic text-bold bd-red-100 font-serif">Map</p>
//   <div class="absolute inset-0 flex justify-center items-center z-10">
//     <p class="text-2xl font-bold">This should be on top of the map</p>
//   </div>
// </div>
// </div>