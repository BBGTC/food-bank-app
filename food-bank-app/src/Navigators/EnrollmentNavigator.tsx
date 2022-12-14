import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignupDataProvider } from '../contexts/SignupDataContext'
import { SignupPersonal, SignupRFC, SignupAddress } from '../screens'

const Stack = createNativeStackNavigator()

export const EnrollmentNavigator = (): JSX.Element => {
  return (
    <SignupDataProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignupPersonal" component={SignupPersonal} />
          <Stack.Screen name="SignupRFC" component={SignupRFC} />
          <Stack.Screen name="SignupAddress" component={SignupAddress} />
      </Stack.Navigator>
    </SignupDataProvider>
  )
}
