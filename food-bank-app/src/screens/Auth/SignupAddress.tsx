import { StyleSheet, Text, View } from 'react-native'

import TextInputWithIcon from '../../components/TextInputWithIcon'
import { Address } from '../../models'
import { useState } from 'react'
import { FormError } from '../../components'
import { isEmptyString } from '../../util'
import { useSignupDataContext } from '../../contexts/SignupDataContext'

import { SignupStep } from './SignupStep'
import { useNavigation } from '@react-navigation/native'

const INITIAL_ADDRESS: Address = {
  street: '',
  exteriorNumber: '',
  interiorNumber: '',
  zipCode: '',
  municipality: '',
  state: '',
  neighborhood: ''
}

export const SignupAddress = (): JSX.Element => {
  const [errors, setErrors] = useState<string[]>([])
  const [address, setAddress] = useState<Address>(INITIAL_ADDRESS)

  const { setSignupData } = useSignupDataContext()

  const navigation = useNavigation()

  const handleChange = (type: string, value: string): void => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [type]: value.trim()
    }))
  }

  const handleSubmit = (): void => {
    const { interiorNumber, ...requiredFields } = address

    setErrors(() => [])

    if (Object.values(requiredFields).some(isEmptyString)) {
      setErrors((prevErrors) => [...prevErrors, 'Hay campos requeridos sin completar'])
      return
    }

    setSignupData(prevSignupData => ({ ...prevSignupData, address }))
    navigation.navigate('SignupRFC')
  }

  return (
    <SignupStep footerButtonConfig={{ title: 'Siguiente', onPress: handleSubmit }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 48 }}>Ingresa tu dirección</Text>
        <View style={{ maxHeight: '75%', padding: 0, marginTop: 32 }}>
          <TextInputWithIcon
            placeholder="Calle"
            type='street'
            icon='home'
            value={address.street}
            handleChange={handleChange}
          />
          <TextInputWithIcon
            placeholder="Colonia"
            type='neighborhood'
            icon='streetview'
            value={address.neighborhood}
            handleChange={handleChange}
          />
          <View style={{ flexDirection: 'row', maxWidth: '100%', justifyContent: 'space-between' }}>
            <View style={{ width: '45%', justifyContent: 'center' }}>
              <TextInputWithIcon
                placeholder="Num. Ext."
                type='exteriorNumber'
                icon='tag'
                value={address.exteriorNumber}
                handleChange={handleChange}
              />
            </View>
            <View style={{ width: '45%', justifyContent: 'center' }}>
              <TextInputWithIcon
                placeholder="Num. Int."
                type='interiorNumber'
                icon='tag'
                value={address.interiorNumber}
                handleChange={handleChange}
              />
            </View>
          </View>
          <TextInputWithIcon
            placeholder="Código Postal"
            type='zipCode'
            icon='mail'
            value={address.zipCode}
            handleChange={handleChange}
          />
          <View style={{ flexDirection: 'row', maxWidth: '100%', justifyContent: 'space-between' }}>
            <View style={{ width: '45%', justifyContent: 'center' }}>
              <TextInputWithIcon
                placeholder="Municipio"
                type='municipality'
                icon='map'
                value={address.municipality}
                handleChange={handleChange}
              />
            </View>
            <View style={{ width: '45%', justifyContent: 'center' }}>
              <TextInputWithIcon
                placeholder="Estado"
                type='state'
                icon='map'
                value={address.state}
                handleChange={handleChange}
              />
            </View>
          </View>
        </View>

        <View style={{ width: '100%' }}>
          {errors.map((error, index) => (
            <FormError message={error} key={index} />
          ))}
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
