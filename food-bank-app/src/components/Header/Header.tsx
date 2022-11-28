import { View, Text, Image } from 'react-native'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 16
    }}>
      <Text style={{
        fontSize: 30
      }}>
        {title}
      </Text>
      <Image
        source={require('../../../assets/logo.png')}
        style={{
          height: 80,
          width: 80
          // marginRight: 10
        }} />
    </View>
  )
}

export default Header
