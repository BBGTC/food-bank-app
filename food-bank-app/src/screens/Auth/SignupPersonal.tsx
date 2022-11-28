import { View, KeyboardAvoidingView, Text, Platform } from 'react-native'
import { useState } from 'react'
import { styles } from '../../styles/styles'
import { FooterButton, FormError, TextInputWithIcon } from '../../components'
import { LargeEclipseSvg } from '../../components/svg'

import { isEmptyString } from '../../util'

const INITIAL_PERSONAL_INFO = {
  name: '',
  surnames: '',
  phone: '',
  address: ''
}

type PersonalInfo = typeof INITIAL_PERSONAL_INFO

interface Errors {
  [key: string]: string[]
  name: string[]
  surnames: string[]
  phone: string[]
  address: string[]
  allFields: string[]
}

export const SignupPersonal = ({ navigation }: any): JSX.Element => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(INITIAL_PERSONAL_INFO)
  const [errors, setErrors] = useState<Errors>({
    name: [],
    surnames: [],
    phone: [],
    address: [],
    allFields: []
  })

  const handleChange = (type: string, value: string): void => {
    setErrors({
      ...errors,
      allFields: [],
      [type]: []
    })

    setPersonalInfo((prevCredentials) => ({
      ...prevCredentials,
      [type]: value
    }))
  }

  const handleSubmit = (): void => {
    let isValid = true
    const { name, surnames, phone, address } = personalInfo

    if ([name, surnames, phone, address].some(isEmptyString)) {
      isValid = false
      setErrors((prevErrors) => ({ ...prevErrors, allFields: ['Todos los campos son necesarios'] }))
    }

    if (!isValid) { return }

    navigation.navigate('SignupRFC')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <View style={{ position: 'absolute', right: 0 }}>
        <LargeEclipseSvg />
      </View>
      <Text style={{ fontSize: 48 }}>Agrega tu información personal</Text>
      <View>
        <TextInputWithIcon
          placeholder="Nombre"
          icon="person"
          value={personalInfo.name}
          type="name"
          handleChange={handleChange}
        />
        <TextInputWithIcon
          placeholder="Apellidos"
          icon="person"
          value={personalInfo.surnames}
          type="surnames"
          handleChange={handleChange}
        />
        <TextInputWithIcon
          placeholder="Teléfono"
          icon="phone"
          value={personalInfo.phone}
          type="phone"
          handleChange={handleChange}
        />
        <TextInputWithIcon
          placeholder="Dirección"
          icon="home"
          value={personalInfo.address}
          type="address"
          handleChange={handleChange}
        />
        {Object.values(errors).map(err => err.map((message, index) => <FormError key={index} message={message} />))}
      </View>
      <FooterButton
        title="Siguiente"
        onPress={handleSubmit}
      />

    </KeyboardAvoidingView>

  )
}
