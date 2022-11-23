import { Login } from "./components/screens"
import { useAuthContext } from "./contexts/AuthContext"

export default function App() {
  const authContext = useAuthContext()

  return (
      <Login />
    )
}