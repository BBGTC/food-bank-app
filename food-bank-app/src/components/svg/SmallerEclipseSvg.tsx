import Svg, { SvgProps, Path } from 'react-native-svg'

export const SmallerEclipseSvg = (props: SvgProps): JSX.Element => {
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
