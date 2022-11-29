import { StyleSheet, View, Text } from 'react-native'
import { useState } from 'react'

import { FormError, TextInputWithIcon } from '../../components'
import { LargeEclipseSvg } from '../../components/svg'
import { isEmptyString } from '../../util'
import { useSignupDataContext } from '../../contexts/SignupDataContext'

import { SignupStep } from './SignupStep'

const INITIAL_PERSONAL_INFO = {
  name: '',
  middleName: '',
  surname: '',
  secondSurname: '',
  phone: ''
}

type PersonalInfo = typeof INITIAL_PERSONAL_INFO

interface Errors {
  [key: string]: string[]
  name: string[]
  middleName: string[]
  surname: string[]
  secondSurname: string[]
  phone: string[]
  allFields: string[]
}

export const SignupPersonal = ({ navigation }: any): JSX.Element => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(INITIAL_PERSONAL_INFO)
  const [errors, setErrors] = useState<Errors>({
    name: [],
    middleName: [],
    surname: [],
    secondSurname: [],
    phone: [],
    allFields: []
  })

  const { setSignupData } = useSignupDataContext()

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
    const { name, surname, phone } = personalInfo

    if ([name, surname, phone].some(isEmptyString)) {
      isValid = false
      setErrors((prevErrors) => ({ ...prevErrors, allFields: ['Hay campos requeridos sin completar.'] }))
    }

    if (!isValid) { return }

    setSignupData(prevSignupData => ({ ...prevSignupData, ...personalInfo }))
    navigation.navigate('SignupAddress')
  }

  return (
    <SignupStep footerButtonConfig={{ title: 'Siguiente', onPress: handleSubmit }}>
      <View style={{ position: 'absolute', right: 0 }}>
        <LargeEclipseSvg />
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 48 }}>Agrega tu información personal</Text>
        <View style={{ height: 32 }}/>
        <TextInputWithIcon
          type="name"
          icon="person"
          placeholder="Nombre"
          value={personalInfo.name}
          handleChange={handleChange}
        />
        <TextInputWithIcon
          type="middleName"
          icon=""
          placeholder="Segundo Nombre (Opcional)"
          value={personalInfo.middleName}
          handleChange={handleChange}
        />
        <TextInputWithIcon
          type="surname"
          icon=""
          placeholder="Primer Apellido"
          value={personalInfo.surname}
          handleChange={handleChange}
        />
        <TextInputWithIcon
          type="secondSurname"
          icon="person"
          placeholder="Segundo Apellido (Opcional)"
          value={personalInfo.secondSurname}
          handleChange={handleChange}
        />
        <View style={{ height: 32 }}/>
        <TextInputWithIcon
          type="phone"
          icon="phone"
          placeholder="Teléfono"
          value={personalInfo.phone}
          handleChange={handleChange}
        />
        <View>
          {Object.values(errors).map(err => err.map((message, index) => <FormError key={index} message={message} />))}
        </View>
      </View>
    </SignupStep>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
