import { useState } from "react"

import { Container } from "../../Container"

export const Login = () => {
  
    const [ credentials, setCredentials ] = useState({ username: "", password: "" })

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
            <h1 className="text-4xl font-semibold m-10"> Inicio de sesión </h1>
                <div className="  bg-orange-50 p-12 w-full  rounded-xl shadow-xl">
                    <form action="">
                        <div className=" my-6">
                            <label className=" text-xl" htmlFor="username">Correo: </label>
                            <div>
                                <input className="p-2 border-red-900 border-2 bg-orange-100 w-full" type="text" name="username" value={credentials.username} onChange={handleChange} />
                            </div>
                        </div>
                        <div className=" my-6">
                            <label className=" text-xl" htmlFor="password"> Contraseña: </label>
                            <div>
                                <input className="p-2 border-neutral-900 border-2 bg-orange-100 w-full" type="password" name="password" value={credentials.password} onChange={handleChange} />
                            </div>
                        </div>
                        <button className="bg-orange-400 w-full p-2 hover:bg-orange-700 text-white font-semibold text-xl"  type="button">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </Container>
  )
}
