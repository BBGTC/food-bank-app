import { Link } from '@react-navigation/native'
import { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { styles } from '../../styles/styles'
import { FooterButton, TextInputWithIcon } from '../../components'
import { useClient } from '../../hooks'

const StartSignup = ({ navigation }: NativeStackScreenProps<{}>): JSX.Element => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const client = useClient()

  const handleChange = (type: string, value: string): void => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value
    }))
  }

  const handleSubmit = async (): Promise<void> => {
    const { email, password, passwordConfirm } = credentials

    const { email: username } = await client.signup(email, password, passwordConfirm)

    Alert.alert('Successful signup', `Registered with username ${username}`)

    navigation.navigate('PersonalSignup')
  }

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
          onPress={handleSubmit}
        />
        <Text
          style={{ textAlign: 'center', margin: 10 }}>
          ¿Ya tienes una cuenta? <Link
            to={{ screen: 'Login' }}
            style={{ color: 'green' }}>Inicia sesión</Link>
        </Text>
      </View>
    </View>
  )
}

export default StartSignup
