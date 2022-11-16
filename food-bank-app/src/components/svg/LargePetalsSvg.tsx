import Svg, { SvgProps, Path } from 'react-native-svg'

export const LargePetalsSvg = (props: SvgProps): JSX.Element => {
  return (
    <Svg
    width={143}
    height={143}
    fill="none"
    {...props}
  >
    <Path
      d="M100 0c23.748 0 43 19.252 43 43s-19.252 43-43 43H57V43c0-23.748 19.252-43 43-43Z"
      fill="#CE0E2D"
      fillOpacity={0.7}
    />
    <Path
      d="M0 114.5C0 130.24 12.76 143 28.5 143S57 130.24 57 114.5V86H28.5C12.76 86 0 98.76 0 114.5Z"
      fill="#00953B"
    />
  </Svg>
  )
}
