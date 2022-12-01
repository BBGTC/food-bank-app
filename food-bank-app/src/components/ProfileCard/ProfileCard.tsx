import { View } from 'react-native'
import { Avatar, Text, useTheme } from '@rneui/themed'

interface ProfileCardProps {
  name: string
  email: string
  image: string
}

const ProfileCard = ({ name, email, image }: ProfileCardProps): JSX.Element => {
  const { theme } = useTheme()

  return (
    <View style={{ flexDirection: 'row', marginBottom: 40 }}>
      <Avatar
        size={72}
        rounded
        title={image}
        containerStyle={{ backgroundColor: theme.colors.disabled }}
      />
      <View style={{ marginLeft: 12, justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>{name}</Text>
        <Text style={{ fontSize: 16 }}>{email}</Text>
      </View>
      <Text />
    </View>
  )
}

export default ProfileCard
