import { Link } from '@react-navigation/native'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import { useAuthContext } from '../../contexts/AuthContext'
import { FooterButton, FormError, TextInputWithIcon } from '../../components'

import { PetalsSvg, SmallEclipseSvg } from '../../components/svg'
import { useClient } from '../../hooks'

import { isEmptyString } from '../../util'

export const Login = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState<string>('')

  const { saveAuthTokens } = useAuthContext()
  const client = useClient()

  const handleChange = (type: string, value: string): void => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value.trim()
    }))
  }

  const handleSubmit = async (): Promise<void> => {
    const { email, password } = credentials

    if ([email, password].some(isEmptyString)) {
      setError('Todos los campos son necesarios')
      return
    }
    setError('')

    const { accessToken, refreshToken } = await client.login(email, password)

    await saveAuthTokens(accessToken, refreshToken)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <PetalsSvg />
        </View>
        <Text style={{ fontSize: 48 }}>Bienvenido</Text>
      </View>
      <View style={{ position: 'relative', top: 10 }}>
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
        {error !== '' && (
          <View style={{ position: 'relative', top: 10, margin: 0 }}>
            <FormError message={error} />
          </View>
        )}
      </View>
      <View style={{ margin: 0, width: '100%' }}>
        <FooterButton
          title="Iniciar Sesión"
          onPress={(handleSubmit as () => void)}
        />
        <Text
          style={{ textAlign: 'center', fontSize: 16, marginTop: 10 }}>
          ¿Aun no tienes cuenta? <Link
            to={{ screen: 'SignupStart' }}
            style={{ color: 'green' }}>Regístrate</Link>
        </Text>
      </View>
      <View style={{ position: 'absolute', left: 0, bottom: '30%' }}>
        <SmallEclipseSvg />
      </View>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20
  }
})
