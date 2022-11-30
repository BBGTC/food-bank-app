import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { DonationHistoryItem, Header } from '../../../components'
import useClient from '../../../hooks/useClient'
import { CategoryModel, Donation } from '../../../models'

const ALL_CATEGORIES: CategoryModel[] = [
  {
    id: 0,
    name: 'basicBasket',
    displayName: 'Canasta Básica',
    icon: 'brunch-dining',
    quantity: 3,
    isSelected: false
  },
  {
    id: 1,
    name: 'fruitsAndVegies',
    displayName: 'Frutas y verduras',
    icon: 'brunch-dining',
    quantity: 3,
    isSelected: false
  },
  {
    id: 2,
    name: 'dairy',
    displayName: 'Embutidos y lácteos',
    icon: 'brunch-dining',
    quantity: 50,
    isSelected: false
  },
  {
    id: 3,
    name: 'inedibles',
    displayName: 'No comestibles',
    icon: 'soap',
    quantity: 3,
    isSelected: false
  },
  {
    id: 4,
    name: 'groceries',
    displayName: 'Abarrotes',
    icon: 'shopping-cart',
    quantity: 3,
    isSelected: false
  }
]

const DonationHistory = (): JSX.Element => {
  const [donationHistory, setDonationHistory] = useState<Donation[]>()

  const client = useClient()

  useEffect(() => {
    const fetchDonationHistory = async (): Promise<void> => {
      const fetchedDonationHistory = await client.getDonations()
      setDonationHistory(fetchedDonationHistory)
    }
    void fetchDonationHistory()
  })

  const parseCategories = (donationHistoryItem: Donation): CategoryModel[] => {
    const parsedCategories: CategoryModel[] = ALL_CATEGORIES.map((category, index) => {
      const parsedCategory: CategoryModel = {
        id: category.id,
        name: category.name,
        displayName: category.displayName,
        icon: category.icon,
        quantity: parseInt(donationHistoryItem[category.name]),
        isSelected: category.quantity > 0
      }
      return parsedCategory
    })

    return parsedCategories
  }

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 32,
      marginTop: 16
    }}>
      <Header title='Mis donaciones' />
      {donationHistory?.map(donation => (
        <DonationHistoryItem
          key={donation.id}
          event={donation.event}
          date={donation.date}
          categories={parseCategories(donation)}
        />
      ))}
    </View>
  )
}

export default DonationHistory
