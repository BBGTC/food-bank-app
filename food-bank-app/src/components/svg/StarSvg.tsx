import Svg, { SvgProps, Path } from 'react-native-svg'

export const StarSvg = (props: SvgProps): JSX.Element => {
  return (

    <Svg
    width={65}
    height={80}
    fill="none"
    {...props}
  >
    <Path
      d="M0 40c17.747 0 32.133-17.909 32.133-40 0 22.091 14.387 40 32.134 40-17.747 0-32.134 17.909-32.134 40 0-22.091-14.386-40-32.133-40Z"
      fill="#131313"
    />
  </Svg>
  )
}
