import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  HomeScreen,
  Profile
} from '../screens'

const Stack = createNativeStackNavigator()

const HomeNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Perfil" component={Profile}/>
    </Stack.Navigator>
  )
}

export default HomeNavigator
