import { useState } from 'react'
import { Text, View } from 'react-native'

import { useAuthContext } from '../../contexts/AuthContext'
import { styles } from '../../styles/styles'
import { FooterButton, TextInputWithIcon } from '../../components'

const RFCSignup = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const { setIsAuthenticated } = useAuthContext()

  const handleChange = (type: string, value: string): void => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value
    }))
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>Por último, tu RFC</Text>
      <View style={{ width: 300 }}>
        <View>
          <TextInputWithIcon
            placeholder="RFC"
            icon="article"
            value={credentials.email}
            type="email"
            handleChange={handleChange}
          ></TextInputWithIcon>
        </View>
        <Text style={{ textAlign: 'center' }}>Es opcional, nos ayudará a generar tus recibos deducibles. Más información</Text>
      </View>
      <View>
        <FooterButton
          title="Siguiente"
          onPress={() => setIsAuthenticated(true)}
        />
      </View>
    </View>
  )
}

export default RFCSignup
