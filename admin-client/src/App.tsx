import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import { Login } from "./components/screens"
import { useAuthContext } from "./contexts/AuthContext"
import { Container, Verify } from './components'


export default function App() {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return (
    <Container>
      <h1> Loading </h1>
    </Container>
  )

  if (isAuthenticated) return (
    <Router>
      <Routes>
        <Route path="/" element={ <div> placeholder </div> } />
        <Route path="/verify/:donationId" element={ <Verify/> } />
      </Routes>
    </Router>
  )
  return (
    <Login />
  )
}