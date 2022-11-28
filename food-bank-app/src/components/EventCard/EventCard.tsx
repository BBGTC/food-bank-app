import { Image, Text, View, StyleSheet } from 'react-native'
import EventCardField from './EventCardField'
import EventButton from './EventButton'
import { useTheme } from '@rneui/themed'
import { DonationEvent } from '../../models'
import { useNavigation } from '@react-navigation/native'

const NO_PICTURE_URL = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'

interface EventCardProps {
  event: DonationEvent
  hideButtons?: boolean
}

const EventCard = ({
  event,
  hideButtons = false
}: EventCardProps): JSX.Element => {
  const { theme } = useTheme()
  const navigation = useNavigation()

  const getAddress = (): string => {
    const addressData = [
      event.address.street,
      event.address.exteriorNumber,
      event.address.municipality,
      event.address.zipCode
    ]

    return addressData.join(', ')
  }

  return (
    <View
      style={[styles.cardContainer, {
        shadowColor: theme.colors.shadow,
        height: !hideButtons ? 180 : 130,
        width: !hideButtons ? '96%' : '100%',
        maxWidth: !hideButtons ? '96%' : '100%',
        marginRight: !hideButtons ? 10 : 0
      }]}
    >
      <Image
        source={{ uri: event.imageUrl !== '' ? event.imageUrl : NO_PICTURE_URL }}
        style={{ width: '30%', flex: 1 }}
        borderRadius={10}
        borderBottomRightRadius={0}
        borderTopRightRadius={0}
      />
      <View style={{ width: '70%' }}>
        <View style={{ maxHeight: 120, marginBottom: 10 }}>
          <Text style={{ fontSize: 20, margin: 10 }}>
            {event.place}
          </Text>
          <EventCardField
            icon='location-sharp'
            iconType='ionicon'
            text={getAddress()}
          />
          <EventCardField
            icon='calendar-today'
            iconType='materialicons'
            text={`${event.startDate.toLocaleDateString('es')} - ${event.endDate.toLocaleDateString('es')}`}
          />
          <EventCardField
            icon='clock'
            iconType='feather'
            text={`${event.startTime} - ${event.endTime}`}
          />
        </View>
        { !hideButtons &&
          <View style={styles.buttonsContainer}>
            <EventButton
              onPress={() => null}
              title= {'CÓMO\nLLEGAR'}
              rightBorder={ true }
            />
            <EventButton
              onPress={() => navigation.navigate('Donation', { itemId: 0 })}
              title= {'DONAR'}
            />
          </View>
          }
      </View>
    </View>)
}

const styles = StyleSheet.create({
  cardContainer: {
    // flexBasis: '100%',
    // flex: 1,
    maxWidth: '96%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 30,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0,
    width: '100%',
    minHeight: 50,
    maxHeight: 50
  }
})

export default EventCard
