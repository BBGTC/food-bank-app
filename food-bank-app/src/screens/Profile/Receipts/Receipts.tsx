import { useEffect, useState } from 'react'
import { View } from 'react-native'
import useClient from '../../../hooks/useClient'
import { DonationReceiptRequest, Header } from '../../../components/'
import { Donation } from '../../../models'

const Receipts = (): JSX.Element => {
  const [donationHistory, setDonationHistory] = useState<Donation[]>()

  const client = useClient()

  useEffect(() => {
    const fetchDonationHistory = async (): Promise<void> => {
      const fetchedDonationHistory = await client.getDonations()
      setDonationHistory(fetchedDonationHistory)
    }
    void fetchDonationHistory()
  })

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 32,
      marginTop: 16
    }}>
      <Header title='Mis facturas' />
      {donationHistory?.map(donation => (
        <DonationReceiptRequest
          key={donation.id}
          id={donation.id}
          date={donation.date}
        />
      ))}
    </View>
  )
}

export default Receipts
