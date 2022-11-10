import { Image, Text, View } from 'react-native'
import EventCardField from './EventCardField'
import EventButton from './EventButton'
import { useTheme } from '@rneui/themed'

interface EventCardProps {
  title: string
  location: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  hideButtons?: boolean
}

const EventCard = ({
  title,
  location,
  startDate = '',
  endDate = '',
  startTime = '',
  endTime = '',
  hideButtons = false
}: EventCardProps): JSX.Element => {
  const { theme } = useTheme()
  return (
      <View
        style={{
          borderRadius: 10,
          height: hideButtons ? '15%' : '21%',
          backgroundColor: 'white',
          flexDirection: 'row',
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 3
        }}>
        <Image
          source={require('../../../assets/zapopan.jpg')}
          style={{
            width: '30%',
            height: '100%'
          }}
          borderRadius={10}
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
        />
        <View
          style={{
            width: '60%'
          }}>
          <Text
            style={{
              fontSize: 20,
              margin: 10
            }}>{title}</Text>
          <EventCardField
            icon='location-sharp'
            iconType='ionicon'
            text={location}/>
          <EventCardField
            icon='calendar-today'
            iconType='materialicons'
            text={`${startDate} - ${endDate}`}/>
          <EventCardField
            icon='clock'
            iconType='feather'
            text={`${startTime} - ${endTime}`}/>
          { !hideButtons &&
            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderWidth: 0,
              width: '100%',
              flex: 1
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
