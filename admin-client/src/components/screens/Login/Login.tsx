import { useState } from "react"

import { Container } from "../../Container"
import { useAuthContext } from "../../../contexts/AuthContext"


export const Login = () => {
  
    const [ credentials, setCredentials ] = useState({ username: "", password: "" })
    const { isAuthenticated, setIsAuthenticated } = useAuthContext()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      return
    }

    return (
        <Container>
            <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl font-semibold m-10"> Administrador </h1>
                <div className="p-12 w-full shadow-xl  border-red-800 border-2">
                    <form action="">
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
                        <button className="bg-red-400 w-full p-2 hover:bg-red-700 text-white font-semibold text-xl"  type="button">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </Container>
  )
}
