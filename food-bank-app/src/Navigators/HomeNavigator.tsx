import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  HomeScreen,
  Donation
} from '../screens'

const Stack = createNativeStackNavigator()

const HomeNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Donation" component={Donation}/>
    </Stack.Navigator>
  )
}

export default HomeNavigator
