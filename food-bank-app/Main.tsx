import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider, createTheme } from '@rneui/themed'

import { useAuthContext } from './src/contexts/AuthContext'
import { EnrollmentNavigator, PrivateNavigator, PublicNavigator } from './src/Navigators'
import { LoadingScreen } from './src/screens'

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
<<<<<<< HEAD
    red: '#e41c3d'
=======
    red: '#dd566c'
>>>>>>> 067b32a5 (working donation with QR code)
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
  const { isAuthenticated, isLoadingAuth, profile } = useAuthContext()

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
<<<<<<< HEAD
        {isLoadingAuth && <LoadingScreen />}
        {!isLoadingAuth && isAuthenticated && profile === null && <EnrollmentNavigator />}
        {!isLoadingAuth && isAuthenticated && profile !== null && <PrivateNavigator />}
        {!isLoadingAuth && !isAuthenticated && profile === null && <PublicNavigator />}
      </NavigationContainer>
    </ThemeProvider>
=======
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: 'white' }
            }}>
            {!isAuthenticated
              ? <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Credentials" component={Credentials} />
                <Stack.Screen name="PersonalData" component={PersonalData} />
                <Stack.Screen name="RFC" component={RFC} />
              </>
              : <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Donation" component={Donation} />
              </>}
          </Stack.Navigator >
        </SafeAreaView>

      </NavigationContainer >
    </ThemeProvider >
>>>>>>> 067b32a5 (working donation with QR code)
  )
}

export default Main
