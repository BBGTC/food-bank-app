import { AuthProvider } from './src/contexts/AuthContext'
import { ThemeProvider } from '@rneui/themed'

import Main from './Main'

const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
