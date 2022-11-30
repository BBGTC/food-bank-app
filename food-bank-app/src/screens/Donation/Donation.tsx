import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import { useEffect, useState } from 'react'
import { Icon } from '@rneui/base'
import { Button, useTheme } from '@rneui/themed'
import DonationCategoryItem from '../../components/DonationCategoryItem/DonationCategoryItem'
import DonationModal from '../../components/DonationModal/DonationModal'
import { Category } from '../../../types'
import { EventCard } from '../../components/EventCard'
import FooterButton from '../../components/FooterButton'
import QRModal from '../../components/QRModal/QRModal'
import { Donation, DonationEvent } from '../../models'
import useClient from '../../hooks/useClient'

interface DonationProps {
  route: any
  navigation: any
}

const CATEGORIES: Category[] = [
  {
    id: 0,
    name: 'basicBasket',
    displayName: 'Canasta básica',
    icon: 'home',
    quantity: 0,
    isSelected: false
  },
  {
    id: 1,
    name: 'fruitsAndVegies',
    displayName: 'Frutas y vegetales',
    icon: 'home',
    quantity: 0,
    isSelected: false
  },
  {
    id: 2,
    name: 'dairy',
    displayName: 'Lácteos',
    icon: 'home',
    quantity: 0,
    isSelected: false
  },
  {
    id: 3,
    name: 'inedibles',
    displayName: 'No comestibles',
    icon: 'home',
    quantity: 0,
    isSelected: false
  }
]

const DonationScreen = ({ route, navigation }: DonationProps): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES)
  const [donationModalIsVisible, setDonationModalIsVisible] = useState(false)
  const [qrModalIsVisible, setQrModalIsVisible] = useState(false)
  const { theme } = useTheme()
  const client = useClient()
  const { eventId } = route.params
  const [donation, setDonation] = useState<Donation>({
    id: '',
    event: eventId,
    date: new Date(),
    basicBasket: '',
    fruitsAndVegies: '',
    dairy: '',
    inedibles: ''
  })
  const [event, setEvent] = useState<DonationEvent>({
    id: '',
    title: 'Bosque Colomos',
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    startTime: '',
    endTime: '',
    imageUrl: '',
    address: {
      street: '',
      interiorNumber: '',
      exteriorNumber: '',
      state: '',
      municipality: '',
      zipCode: '',
      neighborhood: ''
    }
  })

  useEffect(() => {
    const fetchEventData = async (): Promise<void> => {
      const fetchedEvent = await client.getEvent(eventId)
      setEvent((prevEvent) => ({
        ...prevEvent,
        ...fetchedEvent
      }))
      setDonation((prevDonation) => ({
        ...prevDonation,
        event: fetchedEvent.id,
        date: new Date(Date.now())
      }))
    }
    void fetchEventData()
  }, [])

  useEffect(() => {
    const quantities: any = {}

    categories.forEach(category => {
      quantities[category.name] = category.quantity.toString()
    })

    setDonation(prevDonation => ({
      ...prevDonation,
      ...quantities
    }))
  }, [categories])

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

  const handleGenerateQR = (): void => {
    if (categories.every((category) => category.quantity === 0)) return

    const createDonation = async (): Promise<void> => {
      const createdDonation = await client.createDonation({ ...donation, id: undefined })
      setDonation((prevDonation) => ({
        ...prevDonation,
        ...createdDonation
      }))
      setQrModalIsVisible(true)
    }

    const updateDonation = async (): Promise<void> => {
      const updatedDonation = await client.updateDonation(donation)
      setDonation((prevDonation) => ({
        ...prevDonation,
        ...updatedDonation
      }))
      setQrModalIsVisible(true)
    }

    if (donation.id?.trim() === '') {
      void createDonation()
      return
    }
    void updateDonation()
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
      {donation.id !== '' && (
        <QRModal
          isVisible={qrModalIsVisible}
          value={donation.id as string}
          onPress={() => setQrModalIsVisible(false)}
        />
      )}
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
        <EventCard event={event} hideButtons />
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
      {filterSelectedCategories().length < 4 &&
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
      <FooterButton title='Genera tu QR' onPress={handleGenerateQR} />

    </View >
  )
}

export default DonationScreen
