import React from 'react';
import Svg, { SvgProps, Circle } from "react-native-svg"

export const LargeEclipseSvg = (props: SvgProps) => {
  return (
    <Svg
    width={66}
    height={101}
    fill="none"
    {...props}
  >
    <Circle
      cx={50.012}
      cy={50.012}
      r={45}
      transform="rotate(89.986 50.012 50.012)"
      stroke="#131313"
      strokeWidth={10}
    />
  </Svg>
  )
}


<svg width="66" height="101" viewBox="0 0 66 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50.0123" cy="50.0123" r="45" transform="rotate(89.9859 50.0123 50.0123)" stroke="#131313" stroke-width="10"/>
</svg>
