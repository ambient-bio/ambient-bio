'use client';
import React from "react"
import Script from "next/script";

const GradientCanvas = ({id}) => {
  return (
    <div>
      <Script src="/minigl.js"/>
      <canvas className="absolute gradient-colors z-2 aspect-square w-[65%] p-1 inset-0 mx-auto my-auto" id={id} />
    </div>
  )
}

export default GradientCanvas