import { View, Text, Button, Linking } from 'react-native'
import { Icon, useTheme } from '@rneui/themed'
import { useAuthContext } from '../../contexts/AuthContext'

interface DonationReceiptRequestProps {
  id: string
  date: Date
}

const DonationReceiptRequest = ({ id, date }: DonationReceiptRequestProps): JSX.Element => {
  const { profile } = useAuthContext()
  const { theme } = useTheme()

  const description = (): string => {
    return `Hola, mi nombre es ${profile?.name} ${profile?.surname} y deseo solicitar una factura de 
    la donación con número de identificación ${id} y con fecha ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}.
    Gracias de antemano.
    `
  }

  return (
    <View
      style={{
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        backgroundColor: 'white',
        shadowOffset: {
          width: 0,
          height: 2
        },
        padding: 12,
        shadowOpacity: 0.25,
        shadowRadius: 1.5,
        borderRadius: 4
      }}
    >
      <Icon
        name='description'
        type="material"
        color={theme.colors.gray.A}
      />
      <Button
        onPress={(async () => await Linking.openURL(`mailto:comunicacionbamx@bdalimentos.org?subject=Solicitud de factura&body=${description()}`)) as () => void}
        title="Solicitar factura" />
      <Text>{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
    </View >
  )
}

export default DonationReceiptRequest
