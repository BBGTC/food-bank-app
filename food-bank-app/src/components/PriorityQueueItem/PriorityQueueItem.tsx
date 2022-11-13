import { Icon } from '@rneui/base'
import { useTheme } from '@rneui/themed'
import { useState } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
const nopictureUrl = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'

interface PriorityQueueItemProps {
  title: string
  priorityLevel: number
  imageUrl?: string
  modal: string
}

enum Colors {
  '#00953b',
  '#ddc857',
  '#dd596e'
}

enum Priorities {
  'BAJA',
  'MEDIANA',
  'ALTA'
}

const PriorityQueueItem = ({
  title,
  priorityLevel,
  imageUrl = nopictureUrl,
  modal
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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon
              name='info'
              type='foundation'
              size={30}
              color= '#666666'
            />
          </TouchableOpacity>
          <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={{ height: '30%' }}>
                <Text style={{
                  fontSize: 20,
                  color: theme.colors.green,
                  marginTop: 20
                }}>
                  ¿Qué artículos puedes donar?
                </Text>
              </View>
              <View style={{
                flexDirection: 'column',
                height: '70%',
                justifyContent: 'space-between'
              }}>
                <Text style={{ fontSize: 16 }}>{modal}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View style={styles.modalButton}>
                    <Text style={{
                      color: 'white',
                      fontSize: 15,
                      textAlign: 'center'
                    }}>
                      Entendido</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View
          style={{
            width: '85%',
            alignSelf: 'center',
            marginTop: 10
          }}>
          <Text
            style={{
              color: Colors[priorityLevel],
              fontSize: 17
            }}>{Priorities[priorityLevel]}</Text>
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
  },
  modalContainer: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  modalButton: {
    backgroundColor: '#131313',
    height: 40,
    width: 100,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 20
  }
})

export default PriorityQueueItem
