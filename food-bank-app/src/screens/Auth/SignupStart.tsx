import { Link } from '@react-navigation/native'
import { useState } from 'react'
import {
  Alert,
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import { useClient } from '../../hooks'
import { styles } from '../../styles/styles'
import { FooterButton, TextInputWithIcon } from '../../components'

import { SmallEclipseSvg, StarSvg } from '../../components/svg'
import { isValidEmail } from '../../util/emailUtils'

interface Errors {
  [key: string]: string[]
}

export const SignupStart = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const client = useClient()
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (type: string, value: string) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value
    }))
  }

  const handleSubmit = async (): Promise<void> => {
    const { email, password, passwordConfirm } = credentials

    if (!isValidEmail(credentials.email)) setErrors({ ...errors, email: ['Introduce un email correcto'] })

    if (password !== passwordConfirm) setErrors({ ...errors, password: [''] })

    const { email: username } = await client.signup(email, password, passwordConfirm)

    Alert.alert('Successful signup', `Registered with username ${username}`)

    navigation.navigate('PersonalSignup')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <StarSvg />
        </View>
        <Text style={{ fontSize: 48 }}>Crea tu cuenta</Text>
      </View>
      <View>
        <TextInputWithIcon
          placeholder="Email"
          icon="email"
          value={credentials.email}
          type="email"
          handleChange={handleChange}
        ></TextInputWithIcon>

      </View>
      <View>
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
      <View style={{ width: '100%' }}>
        <FooterButton
          title="Siguiente"
          onPress={handleSubmit}
        />
        <Text
          style={{ textAlign: 'center', margin: 10, fontSize: 16 }}>
          ¿Ya tienes una cuenta? <Link
            to={{ screen: 'Login' }}
            style={{ color: 'green' }}>Inicia sesión</Link>
        </Text>
      </View>
      <View style={{ position: 'absolute', left: 0, bottom: '30%' }}>
        <SmallEclipseSvg />
      </View>
    </KeyboardAvoidingView>
  )
}
