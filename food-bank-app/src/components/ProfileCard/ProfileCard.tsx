import { View } from 'react-native'
import { Avatar, Text, useTheme } from '@rneui/themed'

const ProfileCard = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <View style={{ flexDirection: 'row', marginBottom: 40 }}>
      <Avatar
        size={72}
        rounded
        title="JD"
        containerStyle={{ backgroundColor: theme.colors.disabled }}
      />
      <View style={{ marginLeft: 12 }}>
        <Text style={{ fontSize: 24 }}>Jon Doe</Text>
        <Text style={{ fontSize: 16 }}>jon_doe@gmail.com</Text>
      </View>
      <Text />
    </View>
  )
}

export default ProfileCard
