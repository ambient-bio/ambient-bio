import React from "react"
import { Script } from "gatsby"

const GradientCanvas = ({id, position}) => {
  return (
    <div>
      <Script src="/minigl.js" />
      {/* https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js */}
      {/* <Script id={id} strategy="idle">{`var ${id} = new Gradient(); ${id}.initGradient("#${id}");`}</Script> */}
      <div className="flex w-full h-full overflow-hidden bg-red-400 z-1">
        <canvas className="absolute gradient-colors z-2 w-48 lg:w-[600px] h-16 lg:h-40" id={id} />
      </div>
    </div>
  )
}

export default GradientCanvas