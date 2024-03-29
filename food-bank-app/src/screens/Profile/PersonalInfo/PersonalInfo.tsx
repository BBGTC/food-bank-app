import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  View
} from 'react-native'
import { useState } from 'react'
import { useTheme, Input } from '@rneui/themed'
import { FooterButton, Header } from '../../../components/'
import { useAuthContext } from '../../../contexts/AuthContext'
import useClient from '../../../hooks/useClient'
import { Contributor } from '../../../models'
import { useNavigation } from '@react-navigation/native'

const PersonalInfo = (): JSX.Element => {
  const client = useClient()
  const navigation = useNavigation()
  const { profile, saveProfile } = useAuthContext()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [personalInfo, setPersonalInfo] = useState<Contributor>({ ...profile! })

  const handleChangeContributor = (type: string, value: string): void => {
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [type]: value
    }))
  }

  const handleSubmit = (): void => {
    const updateContributor = async (): Promise<void> => {
      const newInfo = await client.updateProfile(personalInfo)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      saveProfile(newInfo!)
      navigation.goBack()
    }

    void updateContributor()
  }

  const { theme } = useTheme()
  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={40}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
          onChangeText={newValue => handleChangeContributor('name', newValue)} />
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
          onChangeText={newValue => handleChangeContributor('middleName', newValue)} />
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
          onChangeText={newValue => handleChangeContributor('secondSurname', newValue)} />
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
        <FooterButton title='Guardar cambios' onPress={() => handleSubmit()} />
        <View style={{ height: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default PersonalInfo
