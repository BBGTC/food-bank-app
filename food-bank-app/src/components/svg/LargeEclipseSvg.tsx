import Svg, { SvgProps, Circle } from 'react-native-svg'

export const LargeEclipseSvg = (props: SvgProps): JSX.Element => {
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
