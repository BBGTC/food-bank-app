import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { useTheme } from '@rneui/themed'
import Modal from 'react-native-modal'

interface ExamplesModalProps {
  isVisible: boolean
  examples: string
  onClose: () => void
}

const ExamplesModal = ({ isVisible, examples, onClose }: ExamplesModalProps): JSX.Element => {
  const { theme } = useTheme()

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
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
            <Text style={{ fontSize: 16 }}>{examples}</Text>
            <TouchableOpacity onPress={onClose}>
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
  )
}

const styles = StyleSheet.create({
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

export default ExamplesModal
