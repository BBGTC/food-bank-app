import { useState } from "react"

import { Container } from "../../Container"
import { useAuthContext } from "../../../contexts/AuthContext"

const SERVER_URL = `${import.meta.env.SERVER_URL || 'http://localhost'}:${import.meta.env.SERVER_PORT || '8000'}`

export const Login = () => {
  
    const [ credentials, setCredentials ] = useState({ username: "", password: "" })
    const { setAuth } = useAuthContext()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const loginUrl = `${SERVER_URL}/auth/login`
      try {

          const response = await fetch(loginUrl, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
          })
          const { refresh, access } = await response.json()
          localStorage.setItem('refresh_token', refresh)
          setAuth(true, access, false)
      } catch (error) {
        console.log(error)
      }

      return
    }

    return (
        <Container>
            <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl font-semibold m-10"> Administrador </h1>
                <div className="p-12 w-full shadow-xl  border-red-800 border-2">
                    <form onSubmit={handleSubmit}>
                        <div className=" my-6">
                            <label className=" text-xl" htmlFor="username">Nombre de usuario: </label>
                            <div>
                                <input className="p-2 border-red-900 border-2 w-full" type="text" name="username" value={credentials.username} onChange={handleChange} />
                            </div>
                        </div>
                        <div className=" my-6">
                            <label className=" text-xl" htmlFor="password"> Contraseña: </label>
                            <div>
                                <input className="p-2 border-red-900 border-2 w-full" type="password" name="password" value={credentials.password} onChange={handleChange} />
                            </div>
                        </div>
                        <button className="bg-red-400 w-full p-2 hover:bg-red-700 text-white font-semibold text-xl"  type="submit">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </Container>
  )
}
