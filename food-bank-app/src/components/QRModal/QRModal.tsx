import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import QRCode from 'react-native-qrcode-svg'

interface QRModalProps {
  isVisible: boolean
  value: string
  onPress: () => void
}

const QRModal = ({ isVisible, value, onPress }: QRModalProps): JSX.Element => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onPress}>
      <View style={{
        width: '90%',
        height: 300,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        paddingHorizontal: 20
      }}>
        <Text style={{ fontSize: 20 }}>Presenta este QR a un administrador</Text>
        <QRCode
          value={value}
          size={200}
        />
      </View>
    </Modal>
  )
}

export default QRModal
