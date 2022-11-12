import { ScrollView, View } from 'react-native'
import PriorityQueueItem from './PriorityQueueItem'

const PriorityQueue = (props: any): JSX.Element => {
  const { items } = props
  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'center',
      width: '95%'
    }}>
      {items.map((item: any, index: number) => {
        return (
          <View key = {index} style={{ width: '100%', marginBottom: 20 }}>
            <PriorityQueueItem
              title={item.title}
              priorityLevel={item.priorityLevel}
              imageUrl= {item.imageUrl}
            />
          </View>
        )
      })}
    </ScrollView>
  )
}

export default PriorityQueue
