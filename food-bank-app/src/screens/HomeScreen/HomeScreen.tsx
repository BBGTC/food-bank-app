import { useEffect, useState } from 'react'
import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native'
import { EventCarousel, EventCard, PriorityQueue } from '../../components'
import { Contributor, DonationEvent, InventoryModel } from '../../models'
import { useClient } from '../../hooks'
import { PriorityQueueItemProps } from '../../components/PriorityQueueItem'
import { useIsFocused } from '@react-navigation/native'
import { useAuthContext } from '../../contexts/AuthContext'

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
  const [donationEvents, setDonationEvents] = useState<DonationEvent[]>([])
  const isFocused = useIsFocused()
  const client = useClient()
  const { profile } = useAuthContext() as { profile: Contributor }

  useEffect(() => {
    const loadPriorityQueueItems = async (): Promise<void> => {
      const inventories = await client.getInventories()
      setPriorityQueueItems(inventories.map(inventoryAdapter))
    }

    const loadDonationEvents = async (): Promise<void> => {
      const events = await client.getEvents()
      setDonationEvents(events)
    }
    void loadDonationEvents()

    void loadPriorityQueueItems()
  }, [isFocused])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 100
      }}>
        <View style={{
          marginLeft: 10,
          width: '75%',
          justifyContent: 'center'
        }}>
          <Text style={{
            fontSize: 30
          }}>
            {`${displayWelcomeMessage()},\n${profile.name}`}
          </Text>
        </View>
        <View style={{ width: '25%', justifyContent: 'center' }}>
          <Image
            source={require('../../../assets/logo.png')}
            style={{ height: 80, width: 80, marginRight: 10 }}
          />
        </View>
      </View>
      <EventCarousel>
        {donationEvents.map((event, index) => {
          return <EventCard event={event} key={index} />
        })}
      </EventCarousel>
      <PriorityQueue items={priorityQueueItems} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16
  }
})
