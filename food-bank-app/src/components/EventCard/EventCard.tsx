import { Image, Text, View, StyleSheet } from 'react-native'
import EventCardField from './EventCardField'
import EventButton from './EventButton'
import { useTheme } from '@rneui/themed'
import { DonationEvent } from '../../models'
import { useNavigation } from '@react-navigation/native'

const NO_PICTURE_URL = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'

export interface EventCardProps {
  event: DonationEvent
  hideButtons?: boolean
  navigation?: any
}

const EventCard = ({
  event,
  hideButtons = false,
  navigation
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
<<<<<<< HEAD
        marginHorizontal: !hideButtons ? 4 : 0
=======
        marginRight: !hideButtons ? 10 : 0
>>>>>>> 067b32a5 (working donation with QR code)
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
            {event.title}
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
<<<<<<< HEAD
        { !hideButtons &&
          <View style={styles.buttonsContainer}>
            <EventButton
              onPress={() => null}
              title= {'CÓMO\nLLEGAR'}
              rightBorder={ true }
            />
            <EventButton
              onPress={() => navigation.navigate('Donation', { eventId: event.id })}
              title= {'DONAR'}
            />
          </View>
          }
      </View>
    </View>)
=======
        {!hideButtons &&
          <View style={styles.buttonsContainer}>
            <EventButton
              onPress={() => null}
              title={'CÓMO\nLLEGAR'}
              rightBorder={true}
            />
            <EventButton
              onPress={() => navigation?.navigate('Donation', {
                itemId: 0 // aquí irá el id
              })}
              title={'DONAR'}
            />
          </View>
        }
      </View>
    </View>
  )
>>>>>>> 067b32a5 (working donation with QR code)
}

const styles = StyleSheet.create({
  cardContainer: {
<<<<<<< HEAD
    maxWidth: '95%',
=======
    // flexBasis: '100%',
    // flex: 1,
    maxWidth: '96%',
>>>>>>> 067b32a5 (working donation with QR code)
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
<<<<<<< HEAD
    shadowRadius: 3,
    flex: 1
=======
    shadowRadius: 3
>>>>>>> 067b32a5 (working donation with QR code)
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
