import { useTheme } from '@rneui/themed'
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native'

interface buttonProps {
  onPress: (event: GestureResponderEvent) => void
  title: string
  rightborder?: boolean
}

const EventButton = ({ onPress, title, rightborder = false }: buttonProps): JSX.Element => {
  const { theme } = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        borderColor: theme.colors.buttonBorder,
        borderTopWidth: 1,
        borderRightWidth: rightborder ? 1 : 0,
        alignSelf: 'stretch',
        justifyContent: 'center'
      }}>
    <Text
      style={{
        color: theme.colors.green,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
      }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default EventButton
