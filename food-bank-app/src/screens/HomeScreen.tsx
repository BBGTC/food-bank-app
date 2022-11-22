import { useEffect, useState } from 'react'
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native'
import EventCarousel from '../components/EventCarousel/EventCarousel'
import EventCard from '../components/EventCard'
import InventoryModel from '../models/InventoryModel'
import PriorityQueue from '../components/PriorityQueueItem/PriorityQueue'

import { PriorityQueueItemProps } from '../components/PriorityQueueItem/PriorityQueueItem'
import { useClient } from '../hooks'

const inventoryAdapter = (inventory: InventoryModel): PriorityQueueItemProps => {
  const CATEGORY_LABELS: { [key: string]: string } = {
    BB: 'Canasta básica',
    FV: 'Frutas y verduras',
    DA: 'Embutidos y lácteos',
    IE: 'No comestibles',
    GR: 'Abarrotes'
  }

  const CATEGORY_IMAGES: { [key: string]: string } = {
    BB: 'https://www.gob.mx/cms/uploads/image/file/475639/canasta_ba_sica2.jpg',
    FV: 'https://s1.eestatic.com/2021/05/28/ciencia/nutricion/584702647_186499572_1024x576.jpg',
    DA: 'https://agraria.pe/imgs/a/lx/en-nuestro-pais-se-consume-2-5-kilos-de-embutidos-por-person-19553.jpg'
  }

  return {
    title: CATEGORY_LABELS[inventory.category],
    priority: inventory.urgency,
    examples: inventory.examples,
    imageUrl: CATEGORY_IMAGES[inventory.category]
  }
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

export const HomeScreen = (): JSX.Element => {
  const [priorityQueueItems, setPriorityQueueItems] = useState<PriorityQueueItemProps[]>([])

  const client = useClient()

  useEffect(() => {
    const loadPriorityQueueItems = async (): Promise<void> => {
      const inventories = await client.getInventories()
      console.log({ inventories })

      setPriorityQueueItems(inventories.map(inventoryAdapter))
    }

    loadPriorityQueueItems()
  }, [])

  return (
    <View style={styles.container }>
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
            source={require('../../assets/logo.png')}
            style={{ height: 80, width: 80, marginRight: 10 }}
          />
        </View>
      </View>
      <View style= {{
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
        { EVENT_CARDS.map((event, index) => {
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
        <PriorityQueue items={priorityQueueItems} />
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
