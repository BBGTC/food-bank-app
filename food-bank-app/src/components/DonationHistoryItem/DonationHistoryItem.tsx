import { View, Text } from 'react-native'
import { Button, useTheme } from '@rneui/themed'

const DonationHistoryItem = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <View
      style={{
        flexDirection: 'row',
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
      <View>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 4
          }}>Basílica de Zapopan</Text>
        <Text
          style={{
            fontSize: 12,
            color: theme.colors.gray.A,
            fontWeight: 'bold'
          }}>10 de Octubre de 2021</Text>
        <Text style={{
          fontSize: 12,
          color: theme.colors.red,
          fontWeight: 'bold'
        }}>180 kg • Canasta básica</Text>
      </View>
      <Button
        title={'DETALLES'}
        buttonStyle={{
          backgroundColor: 'transparent',
          color: 'black'
        }}
      />
    </View >
  )
}

export default DonationHistoryItem
