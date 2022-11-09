import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  ProfileStart,
  DonationHistory,
  Receipts,
  PersonalInfo
} from '../screens'

const Stack = createNativeStackNavigator()

const ProfileNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Mi perfil" component={ProfileStart} />
      <Stack.Screen name="Mis donaciones" component={DonationHistory} />
      <Stack.Screen name="Mis facturas" component={Receipts} />
      <Stack.Screen name="Mi informacion" component={PersonalInfo} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
