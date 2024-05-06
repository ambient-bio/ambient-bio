import React from "react"
import { Script, ScriptStrategy } from "gatsby"

const GradientCanvas = ({id, position}) => {
  return (
    <div>
      <Script src="/minigl.js"/>
      <div className="flex overflow-hidden z-1">
        <canvas className="absolute gradient-colors w-full h-full z-2" id={id} />
      </div>
    </div>
  )
}

export default GradientCanvas