import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const PetalsSvg = (props: SvgProps) => (
  <Svg
    width={100}
    height={56}
    fill="none"
    {...props}
  >
    <Path
      d="M0 27.742C0 12.42 12.42 0 27.742 0c15.321 0 27.742 12.42 27.742 27.742v27.742H27.742C12.42 55.484 0 43.064 0 27.742Z"
      fill="#CE0E2D"
      fillOpacity={0.7}
    />
    <Path
      d="M99.87 36.99c0-10.215-8.28-18.495-18.494-18.495s-18.494 8.28-18.494 18.494v18.495h18.494c10.215 0 18.495-8.28 18.495-18.495Z"
      fill="#00953B"
    />
  </Svg>
)

