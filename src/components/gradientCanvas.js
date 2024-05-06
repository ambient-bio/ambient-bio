import React from "react"
import { Script, ScriptStrategy } from "gatsby"

const GradientCanvas = ({id, position}) => {
  return (
    <div>
      <Script src="/minigl.js" strategy={ScriptStrategy.idle}/>
      <div className="flex w-full h-full overflow-hidden bg-red-400 z-1">
        <canvas className="absolute gradient-colors h-full z-2" id={id} />
      </div>
    </div>
  )
}

export default GradientCanvas