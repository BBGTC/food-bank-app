import { ScrollView, View } from 'react-native'
import PriorityQueueItem from './PriorityQueueItem'

const PriorityQueue = (props: any): JSX.Element => {
  const { items } = props
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
              priorityLevel={item.priorityLevel}
              imageUrl= {item.imageUrl}
              modal={item.modal}
            />
          </View>
        )
      })}
    </ScrollView>
  )
}

export default PriorityQueue
