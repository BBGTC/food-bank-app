import { AuthProvider } from './contexts/AuthContext';
import Main from './Main';

export default function App(){    
  return (
    <AuthProvider>
        <Main/>
    </AuthProvider>
  )
}