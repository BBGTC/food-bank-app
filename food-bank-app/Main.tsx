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
  NewsFeed,
  LoadingScreen
} from './src/screens'

const Stack = createNativeStackNavigator()

const theme = createTheme({
  lightColors: {
    gray: {
<<<<<<< HEAD
      A: '#616161',
      B: '#f3f3f3',
      date: '#b5babf'
    },
    green: '#00953B',
    shadow: '#2e2e2e',
    buttonBorder: '#e0e0e0'
=======
      A: "#616161",
      B: "#f3f3f3"
    },
    green: "#00953b",
>>>>>>> 32ff5dcc (add category card for donation)
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
  const { isAuthenticated, isLoadingAuth } = useAuthContext()
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          {!isAuthenticated
            ? <>
<<<<<<< HEAD
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="StartSignup" component={StartSignup} />
              <Stack.Screen name="PersonalSignup" component={PersonalSignup} />
              <Stack.Screen name="RFCSignup" component={RFCSignup} />
            </>
            : <Stack.Screen name="Home" component={HomeScreen} />}
=======
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignupStart" component={SignupStart} />
            <Stack.Screen name="SignupPersonal" component={SignupPersonal} />
            <Stack.Screen name="SignupRFC" component={SignupRFC} />
          </>
          )}
          {(!isLoadingAuth && isAuthenticated) && (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Donation" component={Donation} />
            <Stack.Screen name="News" component={NewsFeed}/>
          </>
          )}
        </Stack.Navigator>
      </NavigationContainer >
    </ThemeProvider >
  )
}

export default Main
