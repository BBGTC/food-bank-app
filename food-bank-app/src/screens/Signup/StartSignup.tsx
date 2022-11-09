import { Link } from '@react-navigation/native'
import { useState } from 'react'
import { Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { styles } from '../../styles/styles'
import { FooterButton, TextInputWithIcon } from '../../components'

const StartSignup = ({ navigation }: NativeStackScreenProps<{}>): JSX.Element => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const handleChange = (type: string, value: string): void => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value
    }))
  }

  const { theme } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>Crea tu cuenta</Text>
      <View>
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
        <TextInputWithIcon
          placeholder="Confirma tu contraseña"
          icon="lock"
          value={credentials.passwordConfirm}
          type="passwordConfirm"
          handleChange={handleChange}
        />
      </View>
      <View>
        <FooterButton
          title="Siguiente"
          onPress={() => navigation.navigate('PersonalSignup')}
        />
        <Text
          style={{ textAlign: 'center', margin: 10 }}>
          ¿Ya tienes una cuenta? <Link
            to={{ screen: 'Login' }}
            style={{ color: theme.colors.green}}>Inicia sesión</Link>
        </Text>
      </View>
    </View>
  )
}

export default StartSignup
