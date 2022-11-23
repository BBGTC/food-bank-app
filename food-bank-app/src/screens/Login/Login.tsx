import { Link } from '@react-navigation/native'
import { useState } from 'react'
import { useTheme } from '@rneui/themed'
import { Text, View } from 'react-native'

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

  const { theme } = useTheme()
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>Bienvenido</Text>
      <View>
        <TextInputWithIcon
          placeholder="Email"
          icon="email"
          value={credentials.email}
          type="email"
          handleChange={handleChange}
        />
        <TextInputWithIcon
          placeholder="Contraseña"
          icon="lock"
          value={credentials.password}
          type="password"
          handleChange={handleChange}
        />
      </View>
      <View style={{ width: 300 }}>
        <FooterButton
          title="Iniciar Sesión"
          onPress={() => setIsAuthenticated(true)}
        />
        <Text
          style={{ textAlign: 'center', margin: 10 }}>
          ¿Aun no tienes cuenta? <Link
            to={{ screen: 'Credentials' }}
            style={{ color: theme.colors.green }}>Regístrate</Link>
        </Text>
      </View>
    </View>
  )
}

export default Login
