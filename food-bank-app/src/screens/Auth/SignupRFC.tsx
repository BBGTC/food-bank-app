import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { TextInputWithIcon } from '../../components'
import { LargePetalsSvg } from '../../components/svg'
import { useAuthContext } from '../../contexts/AuthContext'
import { useSignupDataContext } from '../../contexts/SignupDataContext'
import { useClient } from '../../hooks'

import { SignupStep } from './SignupStep'


export const SignupRFC = (): JSX.Element => {
  const [rfc, setRFC] = useState<string>('')

  const client = useClient()

  const { saveProfile } = useAuthContext()
  const { isComplete, signupData, setSignupData } = useSignupDataContext()

  const handleSubmit = (): void => {
    setSignupData(prevSignupData => ({ ...prevSignupData, rfc }))
  }

  useEffect(() => {
    const createProfileFromSignupData = async (): Promise<void> => {
      // TODO: the data is formatted from camelCase to snake_case
      // when the request is made, however, we are not changing the keys back
      // when we receive a response. This is, the response has snake_case keys
      const profile = await client.createProfile(signupData)

      if (profile !== null) {
        saveProfile(profile)
      }
    }

    if (isComplete) {
      createProfileFromSignupData()
    }
  }, [isComplete])

  return (
    <SignupStep footerButtonConfig={{ title: 'Finalizar', onPress: handleSubmit }}>
        <View style={{ padding: 20 }}>
          <View style={{ width: '100%' }}>
            <View style={{ marginBottom: 30 }}>
              <LargePetalsSvg />
            </View>

            <Text style={{ fontSize: 48, textAlign: 'left', width: '100%' }}>Por último,</Text>
            <Text style={{ fontSize: 48, textAlign: 'left', width: '100%' }}>tu <Text style={{ fontWeight: '700' }}>RFC</Text></Text>
          </View>
          <View style={{ marginTop: 60 }}>
            <TextInputWithIcon
              placeholder="RFC"
              icon="article"
              value={rfc}
              type="email"
              handleChange={(_, newRFC) => setRFC(newRFC)}
            />
            <Text style={{ textAlign: 'left', fontSize: 16 }}>Es opcional, nos ayudará a generar tus recibos deducibles.</Text>
            <Text style={{ fontSize: 16, color: '#CE0E2D' }}>
              Más información
            </Text>
          </View>
        </View>
    </SignupStep>
  )
}
