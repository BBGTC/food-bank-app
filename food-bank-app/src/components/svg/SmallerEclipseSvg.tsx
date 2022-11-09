import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"

export const SmallerEclipseSvg = (props: SvgProps) => {
  return (
    <Svg
    width={40}
    height={65}
    fill="none"
    {...props}
  >
    <Path
      d="M32.53 60c-15.187.004-27.502-12.305-27.506-27.493C5.02 17.319 17.329 5.004 32.517 5c15.188-.004 27.503 12.305 27.507 27.493C60.028 47.681 47.718 59.996 32.53 60Z"
      stroke="#131313"
      strokeWidth={10}
    />
  </Svg>
  )
}


<svg width="40" height="65" viewBox="0 0 40 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5307 60.0001C17.3428 60.0038 5.02766 47.6947 5.02393 32.5069C5.02021 17.319 17.3294 5.00385 32.5172 5.00012C47.705 4.99639 60.0202 17.3055 60.0239 32.4934C60.0277 47.6812 47.7185 59.9964 32.5307 60.0001Z" stroke="#131313" stroke-width="10"/>
</svg>
