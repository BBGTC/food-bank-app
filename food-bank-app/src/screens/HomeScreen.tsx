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
const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container }>
      <EventCarousel
        items={[{
          title: 'Basílica de Zapopan',
          location: 'Calle Eva Briseño 152, Zapopan, Jal.',
          startDate: '12 Octubre',
          endDate: '14 Octubre',
          startTime: '8:00AM',
          endTime: '4:00PM',
          imageUrl: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/62000/62684-Basilica-De-Zapopan.jpg'
        }, {
          title: 'Bosque Colomos',
          location: 'Calle El Chaco 3200, Guadalajara, Jal.',
          startDate: '10 Noviembre',
          endDate: '12 Noviembre',
          startTime: '10:00AM',
          endTime: '6:00PM',
          imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2f/1c/7b/jardin-japones.jpg?w=1200&h=-1&s=1'
        }, {
          title: 'Biblioteca de Guadalajara',
          location: ' Periférico Norte Manuel Gómez Morín, Belenes 1695, Zapopan, Jal.',
          startDate: '20 Noviembre',
          endDate: '22 Noviembre',
          startTime: '8:00AM',
          endTime: '4:00PM',
          imageUrl: 'https://udg.mx/sites/default/files/img_noticias/190130_la_naturaleza_el_centro_de_dos_exposiciones_en_la_biblioteca_publica_del_estado_juan_jose_arreola_udg.jpg'
        }]}
      />
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
      {/* fdsadf
      */}
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
