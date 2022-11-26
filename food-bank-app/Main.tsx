import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider, createTheme } from '@rneui/themed'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuthContext } from './src/contexts/AuthContext'

import {
  HomeScreen,
  Donation,
  Login,
  SignupStart,
  SignupPersonal,
  SignupRFC,
  NewsFeed
} from './src/screens'

const Stack = createNativeStackNavigator()

const theme = createTheme({
  lightColors: {
    gray: {
      A: '#616161',
      B: '#f3f3f3',
      date: '#b5babf'
    },
    green: '#00953B',
    shadow: '#2e2e2e',
    buttonBorder: '#e0e0e0',
    red: '#dd576c'
  },
  mode: 'light', // your light or dark mode value
  components: {
    Input: {
      containerStyle: {
        paddingHorizontal: 0
      }
    }
  }
})

const Main = (): JSX.Element => {
  const { isAuthenticated } = useAuthContext()
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          {!isAuthenticated
            ? <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignupStart" component={SignupStart} />
            <Stack.Screen name="SignupPersonal" component={SignupPersonal} />
            <Stack.Screen name="SignupRFC" component={SignupRFC} />
          </>
            : <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Donation" component={Donation} />
              <Stack.Screen name="News" component={NewsFeed}/>
            </>
          }
        </Stack.Navigator>
      </NavigationContainer >
    </ThemeProvider>
  )
}

export default Main
