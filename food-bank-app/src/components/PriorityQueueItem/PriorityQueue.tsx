import {
  Text,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import PriorityQueueItem, { PriorityQueueItemProps } from './PriorityQueueItem'

interface PriorityQueueProps {
  items: PriorityQueueItemProps[]
}

const PriorityQueue = ({ items }: PriorityQueueProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prioridades</Text>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item: any, index: number) => {
          return (
            <View key = {index} style={{ width: '100%', marginBottom: items.length - 1 === index ? 10 : 20 }}>
              <PriorityQueueItem
                title={item.title}
                priority={item.priority}
                examples={item.examples}
                imageUrl= {item.imageUrl}
              />
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 20
  },
  title: {
    fontSize: 25,
    marginBottom: 16
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '98%'
  }
})

export default PriorityQueue
