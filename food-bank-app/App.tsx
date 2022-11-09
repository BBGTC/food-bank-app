import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider, Button, createTheme } from '@rneui/themed';

import Main from './Main';
import FooterButton from './src/components/FooterButton';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </AuthProvider>
  )
}