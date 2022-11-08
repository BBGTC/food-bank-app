<<<<<<< HEAD
import { Link } from '@react-navigation/native'
import { useState } from 'react'
import { Text, View } from 'react-native'
=======
import { Link } from "@react-navigation/native"
import { useState } from "react";
import {
  Button,
  Text,
  Image,
  View
} from 'react-native';
import { useAuthContext } from "../../contexts/AuthContext";
import { styles } from "../../styles/styles";
import { FooterButton, TextInputWithIcon } from "../../components";
import SVG from '../../components/SVG'
>>>>>>> add svgs and keyboard hidding

import { useAuthContext } from '../../contexts/AuthContext'
import { styles } from '../../styles/styles'
import { FooterButton, TextInputWithIcon } from '../../components'

const Login = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const { setIsAuthenticated } = useAuthContext()

  const handleChange = (type: string, value: string): void => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value
    }))
  }

  return (
    <View style={styles.container}>
      <View>
<<<<<<< HEAD
=======
        <SVG></SVG>
        <Text style={{ fontSize: 48 }}>Bienvenido</Text>
      </View>
      <View>
>>>>>>> add svgs and keyboard hidding
        <TextInputWithIcon
          placeholder="Email"
          icon="email"
          value={credentials.email}
          type="email"
          handleChange={handleChange}
        ></TextInputWithIcon>
        <TextInputWithIcon
          placeholder="Contraseña"
          icon="lock"
          value={credentials.password}
          type="password"
          handleChange={handleChange}
        />
      </View>
      <View>
        <FooterButton
          title="Iniciar Sesión"
          onPress={() => setIsAuthenticated(true)}
        />
        <Text
          style={{ textAlign: 'center', margin: 10 }}>
          ¿Aun no tienes cuenta? <Link
            to={{ screen: 'StartSignup' }}
            style={{ color: 'green' }}>Regístrate</Link>
        </Text>
      </View>
    </View>
  )
}

export default Login
