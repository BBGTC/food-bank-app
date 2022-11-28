import { View, Text, TextInput } from 'react-native'
import { useState } from 'react'
import { useTheme, Input } from '@rneui/themed'

const INITIAL_INFO = {
  name: 'Jon Doe',
  email: 'jondoe@gmail.com',
  address: 'avenida x'
}

const PersonalInfo = (): JSX.Element => {
  const [personalInfo, setPersonalInfo] = useState(INITIAL_INFO)

  const handleChange = (type: string, value: string): void => {
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [type]: value
    }))
  }

  const { theme } = useTheme()
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 32,
      marginTop: 16
    }}>
      <Text style={{
        fontSize: 16,
        width: '100%',
        marginTop: 20,
        marginBottom: 12,
        color: theme.colors.gray.A
      }}>Nombre</Text>
      <Input
        style={{ width: '100%' }}
        value={personalInfo.name}
        onChangeText={newValue => handleChange('name', newValue)} />
      <Text style={{
        fontSize: 16,
        width: '100%',
        marginTop: 20,
        marginBottom: 12,
        color: theme.colors.gray.A
      }}>Email</Text>
      <Input
        style={{ width: '100%' }}
        value={personalInfo.email}
        keyboardType='email-address'
        onChangeText={newValue => handleChange('email', newValue)} />
      <Text style={{
        fontSize: 16,
        width: '100%',
        marginTop: 20,
        marginBottom: 12,
        color: theme.colors.gray.A
      }}>Dirección</Text>
      <Input
        style={{ width: '100%' }}
        value={personalInfo.address}
        onChangeText={newValue => handleChange('address', newValue)} />
    </View>
  )
}

export default PersonalInfo
