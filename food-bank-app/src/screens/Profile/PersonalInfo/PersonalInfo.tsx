import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { useState } from 'react'
import { useTheme, Input } from '@rneui/themed'
import { FooterButton, Header } from '../../../components/'
import { useAuthContext } from '../../../contexts/AuthContext'

const PersonalInfo = (): JSX.Element => {
  const { profile } = useAuthContext()
  const [personalInfo, setPersonalInfo] = useState(profile)

  const handleChangeContributor = (type: string, value: string): void => {
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [type]: value
    }))
  }

  const handleChangeAddress = (type: string, value: string): void => {
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      address: {
        ...prevPersonalInfo?.address,
        [type]: value
      }
    }))
  }

  const { theme } = useTheme()
  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={40}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <ScrollView style={{
        padding: 32,
        marginTop: 16
      }}>
        <Header title='Mi informacion' />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Primer nombre</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.name}
          onChangeText={newValue => handleChangeContributor('first_name', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Segundo nombre</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.middleName}
          onChangeText={newValue => handleChangeContributor('middle_name', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Apellido paterno</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.surname}
          onChangeText={newValue => handleChangeContributor('surname', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Apellido materno</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.secondSurname}
          onChangeText={newValue => handleChangeContributor('second_surname', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Teléfono</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.phone}
          onChangeText={newValue => handleChangeContributor('phone', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>RFC</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.rfc}
          onChangeText={newValue => handleChangeContributor('rfc', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>email</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.email}
          keyboardType='email-address'
          onChangeText={newValue => handleChangeContributor('email', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Calle</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.address.street}
          onChangeText={newValue => handleChangeAddress('street', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Número exterior</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.address.exteriorNumber}
          onChangeText={newValue => handleChangeAddress('exterior_number', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Número interior</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.address.interiorNumber}
          onChangeText={newValue => handleChangeAddress('interior_number', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Código postal</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.address.zipCode}
          onChangeText={newValue => handleChangeAddress('zip_code', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Municipio</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.address.municipality}
          onChangeText={newValue => handleChangeAddress('municipality', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Colonia</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.address.neighborhood}
          onChangeText={newValue => handleChangeAddress('neighborhood', newValue)} />
        <Text style={{
          fontSize: 16,
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
          color: theme.colors.gray.A
        }}>Estado</Text>
        <Input
          style={{ width: '100%' }}
          value={personalInfo?.address.state}
          onChangeText={newValue => handleChangeAddress('state', newValue)} />
        <FooterButton title='Guardar cambios' onPress={() => { }} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default PersonalInfo
