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
import { FooterButton, TextInputWithIcon, FormError } from '../../components'

import { SmallEclipseSvg, StarSvg } from '../../components/svg'
import { isValidEmail } from '../../util/emailUtils'

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

export const SignupStart = ({ navigation }: any): JSX.Element => {
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
      [type]: value
    }))
  }

  const handleSubmit = async (): Promise<void> => {
    const { email, password, passwordConfirm } = credentials

    let isValid = true

    if ((email.trim().length === 0) || (password.trim().length === 0) || (passwordConfirm.trim().length === 0)) {
      isValid = false
      setErrors((prevErrors) => ({ ...prevErrors, allFields: ['Todos los campos son necesarios'] }))
      // Early return to avoid filling screen with too many error warnings
      return
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
