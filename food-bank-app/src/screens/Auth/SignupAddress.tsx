import { KeyboardAvoidingView, Text, View } from 'react-native'
import TextInputWithIcon from '../../components/TextInputWithIcon'
import { styles } from '../../styles/styles'
import { Address } from '../../models'
import { useState } from 'react'
import { FooterButton, FormError } from '../../components'
import { isEmptyString } from '../../util'

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

  const handleChange = (type: string, value: string): void => {
    setErrors((prevErrors) => [])
    setAddress((prevAddress) => ({
      ...prevAddress,
      [type]: value
    }))
  }

  const handleSubmit = (): void => {
    const { street, exteriorNumber, interiorNumber, zipCode, municipality, state, neighborhood } = address
    setErrors(() => [])
    if ([
      street,
      exteriorNumber,
      interiorNumber,
      zipCode,
      municipality,
      state,
      neighborhood
    ].some(isEmptyString)) {
      setErrors((prevErrors) => [...prevErrors, 'Todos los campos son necesarios'])
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ fontSize: 48 }}>Ingresa tu dirección</Text>
      <View style={{ maxHeight: '75%', padding: 0 }}>
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
          placeholder="CP"
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

      <FooterButton
        title="Siguiente"
        onPress={handleSubmit}
      />
    </KeyboardAvoidingView>
  )
}
