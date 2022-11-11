import { Image, Text, View } from 'react-native'
import EventCardField from './EventCardField'
import EventButton from './EventButton'
import { useTheme } from '@rneui/themed'

const nopictureUrl = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'

interface EventCardProps {
  title: string
  location: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  imageUrl: string
  hideButtons?: boolean
}

const EventCard = ({
  title,
  location,
  startDate = '',
  endDate = '',
  startTime = '',
  endTime = '',
  imageUrl = nopictureUrl,
  hideButtons = false
}: EventCardProps): JSX.Element => {
  const { theme } = useTheme()
  return (
      <View
        style={{
          flexBasis: '100%',
          flex: 1,
          maxWidth: '96%',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 30,
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          height: !hideButtons ? 180 : 120,
          marginRight: 10
        }}>
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: '30%',
            height: undefined,
            flex: 1
          }}
          borderRadius={10}
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
        />
        <View
          style={{
            width: '70%'
          }}>
          <View
            style={{
              maxHeight: 120,
              marginBottom: 10
            }}
          >
            <Text
              style={{
                fontSize: 20,
                margin: 10
              }}
            >
              {title}
            </Text>
            <EventCardField
              icon='location-sharp'
              iconType='ionicon'
              text={location}
            />
            <EventCardField
              icon='calendar-today'
              iconType='materialicons'
              text={`${startDate} - ${endDate}`}
            />
            <EventCardField
              icon='clock'
              iconType='feather'
              text={`${startTime} - ${endTime}`}
            />
          </View>
          { !hideButtons &&
            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderWidth: 0,
              width: '100%',
              minHeight: 50,
              maxHeight: 50
            }}>
              <EventButton
                onPress={ () => null }
                title= {'CÓMO\nLLEGAR'}
                rightborder={ true }
                />
              <EventButton
                onPress={() => null}
                title= {'DONAR'}
                />
            </View>
          }
        </View>
      </View>
  )
}

export default EventCard
