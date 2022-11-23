import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import { useState } from 'react'
import { Icon } from '@rneui/base'
import { Button, useTheme } from '@rneui/themed'
import PriorityListItem from '../../components/PriorityListItem/PriorityListItem'
import { FooterButton } from '../../components'
import DonationCategoryItem from '../../components/DonationCategoryItem/DonationCategoryItem'
import DonationModal from '../../components/DonationModal/DonationModal'
import { Category } from '../../../types'
import EventCard from '../../components/EventCard'
import FooterButton from '../../components/FooterButton'
import QRModal from '../../components/QRModal/QRModal'

interface DonationProps {
  route: any
  navigation: any
}

const EVENT_CARDS = [
  {
    address: {
      street: 'Calle El Chaco',
      exteriorNumber: '3200',
      interiorNumber: '',
      zipCode: '43219',
      state: 'Jalisco',
      municipality: 'Guadalajara',
      neighborhood: 'Providencia'
    },
    place: 'Bosque Colomos',
    startDate: new Date(2022, 12, 12),
    endDate: new Date(2022, 12, 15),
    startTime: '10:00AM',
    endTime: '5:00PM',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2f/1c/7b/jardin-japones.jpg?w=1200&h=-1&s=1'
  },
  {
    address: {
      street: 'asdasa',
      exteriorNumber: '12',
      interiorNumber: '123',
      zipCode: '43219',
      state: 'Jalisco',
      municipality: 'Guadalajara',
      neighborhood: 'centro'
    },
    place: 'Bosque Colomos',
    startDate: new Date(2022, 12, 12),
    endDate: new Date(2022, 12, 15),
    startTime: '10:00AM',
    endTime: '5:00PM',
    imageUrl: ''
  }
]

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

const Donation = ({ route, navigation }: DonationProps): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>(ALL_CATEGORIES)
  const [donationModalIsVisible, setDonationModalIsVisible] = useState(false)
  const [qrModalIsVisible, setQrModalIsVisible] = useState(false)

  const { theme } = useTheme()
  const { itemId } = route.params

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

  return (
    <View style={{
      flex: 1,
      // justifyContent: 'space-between',
      alignItems: 'center',
      padding: 32
    }}>
      <DonationModal
        isVisible={donationModalIsVisible}
        handleAdd={toggleSelectedCategory}
        availableCategories={filterAvailableCategories()}
        onPress={() => setDonationModalIsVisible(false)}
      />
      <QRModal
        isVisible={qrModalIsVisible}
        value={encodeURIComponent(JSON.stringify(categories))}
        onPress={() => setQrModalIsVisible(false)}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        marginBottom: 36
      }}>
        <View style={{
          marginLeft: 10,
          width: '75%',
          justifyContent: 'center'
        }}>
          <Text style={{
            fontSize: 30
          }}>
            {'Registra una \ndonación'}
          </Text>
        </View>
        <View style={{ width: '25%', justifyContent: 'center' }}>
          <Image
            source={require('../../../assets/logo.png')}
            style={{
              height: 80,
              width: 80,
              marginRight: 10
            }}
          />
        </View>
      </View>
      <Text style={{ fontSize: 20, width: '100%' }}>En donde vas a donar</Text>
      <View style={{
        flexDirection: 'row',
        maxHeight: 235,
        marginBottom: 36
      }}>
        <EventCard event={EVENT_CARDS[itemId]} hideButtons />
      </View>
      <Text style={{ fontSize: 20, width: '100%' }}>Tu donación</Text>
      <ScrollView style={{ flex: 1, margin: 12, width: '100%', padding: 4 }}>
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
      </ScrollView>
      {filterSelectedCategories().length < categories.length &&
        <Button
          buttonStyle={{
            shadowOffset: {
              width: 0,
              height: 8
            },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            height: 28,
            backgroundColor: theme.colors.green,
            borderRadius: 10
          }}
          containerStyle={{
            width: '100%',
            marginBottom: 12,
            overflow: 'visible'
          }}
          onPress={() => setDonationModalIsVisible(true)}
        ><Icon
            name="add"
            size={12}
            type="material"
            color={theme.colors.white} />
        </Button>}
      <FooterButton title='Genera tu QR' onPress={() => setQrModalIsVisible(true)} />

    </View >
  )
}

export default Donation
