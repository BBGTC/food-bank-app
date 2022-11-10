import { Icon } from '@rneui/base'
import { Text, View } from 'react-native'

interface EventCardFieldProps {
  icon: string
  iconType: string
  text: string
}

const EventCardField = ({ icon, iconType, text }: EventCardFieldProps): JSX.Element => {
  return (
    <View
      style={{
        width: '90%',
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        marginLeft: 10,
        paddingRight: 10
      }}>
    <Icon
      name={icon}
      type={iconType}
      size={12}
      style={{
        marginTop: 1,
        marginBottom: 1,
        marginRight: 5
      }}
    />
    <Text
        style={{
          fontSize: 12,
          color: 'gray'
        }}>{ text }</Text>
    </View>
  )
}

export default EventCardField
