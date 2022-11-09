import {
  SafeAreaView,
  Text,
  View
} from 'react-native'
import { useState } from 'react'
import { Button, useTheme } from '@rneui/themed'
import PriorityListItem from '../../components/PriorityListItem/PriorityListItem'
import { FooterButton } from '../../components'
import DonationCategoryItem from '../../components/DonationCategoryItem/DonationCategoryItem'
import { Icon } from '@rneui/base'

const CATEGORIES = [
  {
    name: 'fruitsAndVegetables',
    displayName: 'Frutas y verduras',
    icon: 'brunch-dining',
    quantity: 100,
    isSelected: true
  }, {
    name: 'sausagesAndDairy',
    displayName: 'Embutidos y lácteos',
    icon: 'brunch-dining',
    quantity: 50,
    isSelected: true
  }, {
    name: 'groceries',
    displayName: 'Abarrotes',
    icon: 'shopping-cart',
    quantity: 12,
    isSelected: true
  },
  {
    name: 'nonEatables',
    displayName: 'No comestibles',
    icon: 'soap',
    quantity: 200,
    isSelected: false
  }
]

export default function Donation({ navigation }) {
  const [categories, setCategories] = useState(CATEGORIES)
  const { theme } = useTheme()
  categories
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tu donación</Text>
      {categories.map(category => {
        if (!category.isSelected) { return <DonationCategoryItem name={category.displayName} icon={category.icon} quantity={category.quantity} /> }
      })}
      <Button
        buttonStyle={{
          height: 28,
          backgroundColor: theme.colors.green,
          borderRadius: 10
        }}
        containerStyle={{
          width: 300
        }}><Icon
          name="add"
          size={12}
          type="material"
          color={theme.colors.white}>
        </Icon></Button>
    </SafeAreaView>
  )
}
