import { Link } from '@react-navigation/native'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import { useClient } from '../../hooks'

import { FooterButton, TextInputWithIcon, FormError } from '../../components'

import { SmallEclipseSvg, StarSvg } from '../../components/svg'
import { isValidEmail, isEmptyString } from '../../util'
import { useAuthContext } from '../../contexts/AuthContext'

const INITIAL_CREDENTIALS = {
  email: '',
  password: '',
  passwordConfirm: ''
}

type Credentials = typeof INITIAL_CREDENTIALS

interface Errors {
  [key: string]: string[]
  email: string[]
  password: string[]
  passwordConfirm: string[]
  allFields: string[]
}

export const SignupStart = (): JSX.Element => {
  const { saveAuthTokens } = useAuthContext()
  const [credentials, setCredentials] = useState<Credentials>(INITIAL_CREDENTIALS)

  const client = useClient()
  const [errors, setErrors] = useState<Errors>({
    email: [],
    password: [],
    passwordConfirm: [],
    allFields: []
  })

  const handleChange = (type: string, value: string): void => {
    setErrors({
      ...errors,
      allFields: [],
      [type]: []
    })

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value.trim()
    }))
  }

  const handleSubmit = async (): Promise<void> => {
    let isValid = true
    const { email, password, passwordConfirm } = credentials

    if ([email, password, passwordConfirm].some(isEmptyString)) {
      isValid = false
      // Early return to avoid filling screen with too many error warnings
      setErrors((prevErrors) => ({ ...prevErrors, allFields: ['Todos los campos son necesarios'] }))
    }

    if (!isValidEmail(credentials.email)) {
      isValid = false
      setErrors((prevErrors) => ({ ...prevErrors, email: ['Introduce un email adecuado'] }))
    }

    if (password !== passwordConfirm) {
      isValid = false
      setErrors((prevErrors) => ({ ...prevErrors, password: ['Las contraseñas no coinciden'] }))
    }

    if (!isValid) { return }

    const { auth } = await client.signup(email, password, passwordConfirm)

    await saveAuthTokens(auth.access, auth.refresh)
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
        />
        {errors.email.length > 0 &&
          errors.email.map((message, index) => <FormError key={index} message={message} />)
        }
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
        {errors.password.length > 0 &&
          errors.password.map((message, index) => <FormError key={index} message={message} />)
        }
      </View>
      <View style={{ width: '100%' }}>
        {errors.allFields.length > 0 &&
          <FormError message={errors.allFields.at(0) ?? ''} />
        }
      </View>
      <View style={{ width: '100%' }}>
        <FooterButton
          title="Siguiente"
          onPress={(handleSubmit as () => void)}
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
