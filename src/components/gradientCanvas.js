import React from "react"
import { Script } from "gatsby"

const GradientCanvas = ({id, position}) => {
  return (
    <div>
      <Script src="/minigl.js" />
      <div className="flex w-full h-full overflow-hidden bg-red-400 z-1">
        <canvas className="absolute gradient-colors z-2 w-[300px] md:w-[400px] lg:w-[600px] h-20 md:h-28 lg:h-40 pb-[1px] pr-[1px]" id={id} />
      </div>
    </div>
  )
}

export default GradientCanvas