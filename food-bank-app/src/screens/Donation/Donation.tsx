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

const ALL_CATEGORIES = [
  {
    id: 1,
    name: 'fruitsAndVegetables',
    displayName: 'Frutas y verduras',
    icon: 'brunch-dining',
    quantity: 3,
    isSelected: true
  },
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
    id: 3,
    name: 'groceries',
    displayName: 'Abarrotes',
    icon: 'shopping-cart',
    quantity: 3,
    isSelected: false
  },
  {
    id: 4,
    name: 'nonEatables',
    displayName: 'No comestibles',
    icon: 'soap',
    quantity: 3,
    isSelected: false
  }
]

const Donation = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>(ALL_CATEGORIES)
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const { theme } = useTheme()

  const toggleSelectedCategory = (id: number): void => {
    setCategories(prevCategories => prevCategories.map(category => {
      if (category.id === id) {
        return { ...category, isSelected: !category.isSelected, quantity: 3 }
      }
      return category
    }))
  }

  const handleQuantityChange = (id: number, quantity: number): void => {
    setCategories(prevCategories => prevCategories.map(category => {
      if (category.id === id) {
        return { ...category, quantity }
      }
      return category
    }))
  }

  const filterAvailableCategories = (): Category[] => {
    return categories.filter(category => !category.isSelected)
  }

  const filterSelectedCategories = (): Category[] => {
    return categories.filter(category => category.isSelected)
  }

  const showModal = (): void => {
    setModalIsVisible(prevModalIsVisible => !prevModalIsVisible)
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <DonationModal
        isVisible={modalIsVisible}
        handleAdd={toggleSelectedCategory}
        availableCategories={filterAvailableCategories()}
        onPress={showModal}
      />
      <Text style={{ fontSize: 20 }}>En donde vas a donar</Text>
      <Text >xdxdxddddd</Text>
      <Text style={{ fontSize: 20 }}>Tu donación</Text>
      <View>
        {filterSelectedCategories().map(category => (
          <DonationCategoryItem
            id={category.id}
            key={category.name}
            name={category.name}
            displayName={category.displayName}
            icon={category.icon}
            quantity={category.quantity}
            type="quantity"
            onDelete={toggleSelectedCategory}
            onChange={handleQuantityChange}
          />
        ))}
      </View>
      <Button
        buttonStyle={{
          shadowOffset: {
            width: 0,
            height: 8
          },
          shadowOpacity: 0.25,
          shadowRadius: 1.5,
          height: 28,
          backgroundColor: theme.colors.green,
          borderRadius: 10
        }}
        containerStyle={{
          width: 300
        }}
        onPress={showModal}
      ><Icon
          name="add"
          size={12}
          type="material"
          color={theme.colors.white} />
      </Button>
    </SafeAreaView>
  )
}

export default Donation
