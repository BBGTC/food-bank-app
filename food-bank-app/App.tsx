import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider, Button, createTheme } from '@rneui/themed';

import Main from './Main';
import NavigationButton from './src/components/NavigationButton';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </AuthProvider>
  )
}