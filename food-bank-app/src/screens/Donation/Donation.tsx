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
import EventCard from '../../components/EventCard'
import FooterButton from '../../components/FooterButton'
import QRModal from '../../components/QRModal/QRModal'
import { Donation, DonationEvent } from '../../models'
import useClient from '../../hooks/useClient'

interface DonationProps {
  route: any
  navigation: any
}

const DonationScreen = ({ route, navigation }: DonationProps): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([])
  const [donationModalIsVisible, setDonationModalIsVisible] = useState(false)
  const [qrModalIsVisible, setQrModalIsVisible] = useState(false)
  const { theme } = useTheme()
  const client = useClient()
  const { eventId } = route.params
  const [donation, setDonation] = useState<Donation>({
    id: '',
    event: eventId,
    date: '',
    basicBasket: '',
    fruitsAndVegies: '',
    dairy: '',
    inedibles: ''
  })
  const [event, setEvent] = useState<DonationEvent>({
    place: 'Bosque Colomos',
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
      console.log(route)
      const fetchedEvent = await client.getEvent(eventId)
      console.log(fetchedEvent)
      setEvent(fetchedEvent)
    }
    void fetchEventData()
  }, [])

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
        value={donation.id ?? ''}
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
      <FooterButton title='Genera tu QR' onPress={() => setQrModalIsVisible(true)} />

    </View >
  )
}

export default DonationScreen
