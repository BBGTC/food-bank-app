import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 27.742C0 12.42 12.42 0 27.742 0c15.321 0 27.742 12.42 27.742 27.742v27.742H27.742C12.42 55.484 0 43.064 0 27.742Z"
      fill="#CE0E2D"
      fillOpacity={0.7}
    />
  </Svg>
)

export default SvgComponent
