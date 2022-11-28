import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuthContext } from '../contexts/AuthContext'
import {
  LoadingScreen,
  Login,
  SignupPersonal,
  SignupStart,
  SignupRFC
} from '../screens'

const PublicNavigator = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  const { isLoadingAuth } = useAuthContext()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoadingAuth && <Stack.Screen name="Loading" component={LoadingScreen} />}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignupStart" component={SignupStart} />
      <Stack.Screen name="SignupPersonal" component={SignupPersonal} />
      <Stack.Screen name="SignupRFC" component={SignupRFC} />
    </Stack.Navigator>
  )
}

export { PublicNavigator }
