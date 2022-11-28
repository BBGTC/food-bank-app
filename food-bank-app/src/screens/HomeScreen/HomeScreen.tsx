import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native'
import EventCarousel from '../../components/EventCarousel'
import PriorityQueue from '../../components/PriorityQueueItem/PriorityQueue'
import EventCard from '../../components/EventCard'

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

const displayWelcomeMessage = (): string => {
  const currentTime = new Date().getHours()
  if (currentTime >= 5 && currentTime < 12) {
    return 'Buenos días'
  }
  if (currentTime >= 12 && currentTime < 20) {
    return 'Buenas tardes'
  }
  return 'Buenas noches'
}

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        marginTop: 30
      }}>
        <View style={{
          marginLeft: 10,
          width: '75%',
          justifyContent: 'center'
        }}>
          <Text style={{
            fontSize: 30
          }}>
            {`${displayWelcomeMessage()},\nJohn Doe`}
          </Text>
        </View>
        <View style={{ width: '25%', justifyContent: 'center' }}>
          <Image
            source={require('../../../assets/logo.png')}
            style={{ height: 80, width: 80, marginRight: 10 }}
          />
        </View>
      </View>
      <View style={{
        width: '100%',
        marginTop: 20,
        marginLeft: 10,
        justifyContent: 'flex-start'
      }}>
        <Text style={{
          fontSize: 25
        }}>
          ¡Ven a apoyarnos!
        </Text>
      </View>
      <EventCarousel>
        {EVENT_CARDS.map((event, index) => {
          return <EventCard event={event} key={index}/>
        })}
      </EventCarousel>
      <View style={{
        width: '100%',
        marginTop: 20,
        marginBottom: 10
      }}>
        <Text style={{
          fontSize: 25
        }}>Prioridades</Text>
        <PriorityQueue
          items={[{
            title: 'Canasta básica',
            priorityLevel: 2,
            imageUrl: 'https://www.gob.mx/cms/uploads/image/file/475639/canasta_ba_sica2.jpg',
            modal: 'Huevo, Arroz, Pasta, Azúcar, Avena, Soya, Frijol, Aceite, Trigo, Garbanzo'
          }, {
            title: 'Frutas y verduras',
            priorityLevel: 1,
            imageUrl: 'https://s1.eestatic.com/2021/05/28/ciencia/nutricion/584702647_186499572_1024x576.jpg',
            modal: 'Naranja, Fresa, Manzana, Sandía, Papá, Cebolla, Jitomate, Pera, Zanahoria'
          }, {
            title: 'Embutidos y lácteos',
            priorityLevel: 0,
            imageUrl: 'https://agraria.pe/imgs/a/lx/en-nuestro-pais-se-consume-2-5-kilos-de-embutidos-por-person-19553.jpg',
            modal: 'Leche, Mantequilla, Yogurt, Queso, Jamón, Salchicha, Gelatina, Crema'
          }]}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '105%',
    width: '95%'
  }
})
