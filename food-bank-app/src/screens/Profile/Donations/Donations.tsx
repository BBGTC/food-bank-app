import { View, Text } from 'react-native'
import { DonationHistoryItem } from '../../../components'

const Donations = (): JSX.Element => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 32,
      marginTop: 16

    }}>
      <DonationHistoryItem />
    </View>
  )
}

export default Donations
