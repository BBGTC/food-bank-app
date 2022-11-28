import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider, createTheme } from '@rneui/themed'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useAuthContext } from './src/contexts/AuthContext'
import {
  HomeScreen,
  Profile,
  Login,
  SignupStart,
  SignupPersonal,
  SignupRFC,
  NewsFeed,
  LoadingScreen
} from './src/screens'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

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
  const { isAuthenticated, isLoadingAuth } = useAuthContext()
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {(!isLoadingAuth && !isAuthenticated) && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoadingAuth && <Stack.Screen name="Loading" component={LoadingScreen} />}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignupStart" component={SignupStart} />
            <Stack.Screen name="SignupPersonal" component={SignupPersonal} />
            <Stack.Screen name="SignupRFC" component={SignupRFC} />
        </Stack.Navigator>
        )}
        {(!isLoadingAuth && isAuthenticated) && (
          <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Inicio">
              <Tab.Screen name="Comunidad" component={NewsFeed}/>
              <Tab.Screen name="Inicio" component={HomeScreen} />
              <Tab.Screen name="Perfil" component={Profile} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Main
