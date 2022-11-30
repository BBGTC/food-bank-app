import { View, Button, Linking } from 'react-native'

const Receipts = (): JSX.Element => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 32,
      marginTop: 16
    }}>
      <Button
        onPress={(async () => await Linking.openURL('mailto:comunicacionbamx@bdalimentos.org?subject=SendMail&body=Description')) as () => void}
        title="comunicacionbamx@bdalimentos.org" />
    </View>
  )
}

export default Receipts
