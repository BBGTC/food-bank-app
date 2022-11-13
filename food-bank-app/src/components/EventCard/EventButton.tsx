import { useTheme } from '@rneui/themed'
import { TouchableOpacity, Text, GestureResponderEvent, StyleSheet } from 'react-native'

interface buttonProps {
  onPress: (event: GestureResponderEvent) => void
  title: string
  rightBorder?: boolean
}

const EventButton = ({ onPress, title, rightBorder = false }: buttonProps): JSX.Element => {
  const { theme } = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {
        borderColor: theme.colors.buttonBorder,
        borderRightWidth: rightBorder ? 1 : 0
      }]}>
      <Text
        style={[styles.title, { color: theme.colors.green }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  }
})

export default EventButton
