import {
  Button,
  View,
  Text
} from 'react-native'

import { useAuthContext } from '../../contexts/AuthContext'

export const Profile = (): JSX.Element => {
  const { clearAuth } = useAuthContext()

  return (
    <View style={{ height: '100%', alignContent: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
        <Button title="Cerrar sesión" onPress={clearAuth} />
    </View>
  )
}
