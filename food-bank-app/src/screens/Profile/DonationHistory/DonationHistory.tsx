import { View } from 'react-native'
import { DonationHistoryItem, Header } from '../../../components'

const DonationHistory = (): JSX.Element => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 32,
      marginTop: 16
    }}>
      <Header title='Mis donaciones' />
      <DonationHistoryItem />
    </View>
  )
}

export default DonationHistory
