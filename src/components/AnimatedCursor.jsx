import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function AniCursor() {
  return (
    <AnimatedCursor 
        innerSize={0}
      outerSize={50}
      color='255, 255, 255'
      outerAlpha={1}
      innerScale={1}
      outerScale={3.5}
      outerStyle={{
    // border: '3px solid #ffffff'
    mixBlendMode:'exclusion'
  }}
  showSystemCursor='true'
  trailingSpeed='1'

      clickables={[
        'a',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.post'
      ]}
    />
  )
}

export default AniCursor