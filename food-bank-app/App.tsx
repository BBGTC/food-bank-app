import { AuthProvider } from './src/contexts/AuthContext'
import { ThemeProvider } from '@rneui/themed'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './Main'

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default App
