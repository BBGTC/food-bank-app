import { ScrollView, View } from 'react-native'
import PriorityQueueItem, { PriorityQueueItemProps } from './PriorityQueueItem'

interface PriorityQueueProps {
  items: PriorityQueueItemProps[]
}

const PriorityQueue = ({ items }: PriorityQueueProps): JSX.Element => {
  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'center',
      width: '98%'
    }}>
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
  )
}

export default PriorityQueue
