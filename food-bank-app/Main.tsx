import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider, createTheme } from '@rneui/themed'
import { useAuthContext } from './src/contexts/AuthContext'
import { PrivateNavigator, PublicNavigator } from './src/Navigators'

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
    red: '#e41c3d'
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
          <PublicNavigator/>
        )}
        {(!isLoadingAuth && isAuthenticated) && (
          <PrivateNavigator/>
        )}
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Main
