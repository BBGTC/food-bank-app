import React from 'react';
import Svg, { SvgProps, Circle } from "react-native-svg";

export const SmallEclipseSvg = (props: SvgProps) => {
  return (
    <Svg
      width={19}
      height={66}
      fill="none"
      {...props}
    >
      <Circle
        cx={-14.492}
        cy={32.508}
        r={27.5}
        transform="rotate(89.986 -14.492 32.508)"
        stroke="#131313"
        strokeWidth={10}
      />
    </Svg>
  )
};
