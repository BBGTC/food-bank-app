/*
import { useAuthContext } from '../contexts/AuthContext'
import { styles } from '../styles/styles'
import {
  Button,
  Text,
  View
} from 'react-native'
import EventCarousel from '../components/EventCarousel/EventCarousel'

import EventCard from '../components/EventCard'

const HomeScreen = (): JSX.Element => {
  const { setIsAuthenticated } = useAuthContext()
  return (
    /*
    <Text>Home</Text>
  <Button
  title= "Cerrar Sesión"
  onPress={() => setIsAuthenticated(false)}
  />
  <View style={styles.container}>
    <EventCarousel items={[]} />
  </View>
  )
}
*/
import { StyleSheet, View } from 'react-native'
import EventCarousel from '../components/EventCarousel/EventCarousel'
import PriorityQueue from '../components/PriorityQueueItem/PriorityQueue'
import EventCard from '../components/EventCard'

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container }>
    <EventCarousel>
      <EventCard event={{
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
      }}/>
      <EventCard event={{
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
      }}/>
    </EventCarousel>
      <View style={{
        width: '100%'
      }}>
        <PriorityQueue
          items={[{
            title: 'Canasta básica',
            priorityLevel: 3,
            imageUrl: 'https://www.gob.mx/cms/uploads/image/file/475639/canasta_ba_sica2.jpg'
          }, {
            title: 'Frutas y verduras',
            priorityLevel: 2,
            imageUrl: 'https://s1.eestatic.com/2021/05/28/ciencia/nutricion/584702647_186499572_1024x576.jpg'
          }, {
            title: 'Embutidos y lácteos',
            priorityLevel: 2,
            imageUrl: 'https://agraria.pe/imgs/a/lx/en-nuestro-pais-se-consume-2-5-kilos-de-embutidos-por-person-19553.jpg'
          }]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
})

export default HomeScreen
