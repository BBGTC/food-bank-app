import { Icon } from '@rneui/base'
import { useTheme } from '@rneui/themed'
import { useState } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import ExamplesModal from './ExamplesModal'

const noPictureUrl = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'

export interface PriorityQueueItemProps {
  title: string
  priority: number
  imageUrl?: string
  examples: string // This is just an string that concatenates different items. e.g. `egg, rice, beans`
}

const getPriorityColor = (priority: number): string => {
  if (priority >= 0.0 && priority <= 0.33) return '#dd596e'
  if (priority >= 0.34 && priority <= 0.66) return '#ddc857'
  return '#00953b'
}

const getPriorityLabel = (priority: number): string => {
  if (priority >= 0.0 && priority <= 0.33) return 'ALTA'
  if (priority >= 0.34 && priority <= 0.66) return 'MEDIANA'
  return 'BAJA'
}

const PriorityQueueItem = ({
  title,
  priority,
  imageUrl = noPictureUrl,
  examples
}: PriorityQueueItemProps): JSX.Element => {
  const { theme } = useTheme()
  const [isModalVisible, setModalVisible] = useState(false)
  return (
    <View
    style={[styles.priorityQueueItemContainer, { shadowColor: theme.colors.shadow }]}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.imageContainer}
        borderRadius={10}
        borderBottomRightRadius={0}
        borderTopRightRadius={0}
      />
      <View
        style={{
          width: '70%',
          borderRadius: 10
        }}>
        <View style={styles.itemInfoContainer}>
          <Text style={{
            fontSize: 20
          }}>
            {title}
          </Text>
          {Boolean(examples) && (
            <>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon
                  name='info'
                  type='foundation'
                  size={30}
                  color= '#666666'
                />
              </TouchableOpacity>
              <ExamplesModal
                isVisible={isModalVisible}
                examples={examples}
                onClose={() => setModalVisible(false)}
              />
            </>
          )}
        </View>
        <View
          style={{
            width: '85%',
            alignSelf: 'center',
            marginTop: 10
          }}>
          <Text
            style={{
              color: getPriorityColor(priority),
              fontSize: 17
            }}>{getPriorityLabel(priority)}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  priorityQueueItemContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 110,
    flexDirection: 'row',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    borderRadius: 10
  },
  imageContainer: {
    width: '30%',
    height: undefined,
    flex: 1
  },
  itemInfoContainer: {
    marginTop: 30,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
})
export default PriorityQueueItem
