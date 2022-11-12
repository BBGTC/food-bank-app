import { Icon } from '@rneui/base'
import { useTheme } from '@rneui/themed'
import { Image, Text, View } from 'react-native'
const nopictureUrl = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'

interface PriorityQueueItemProps {
  title: string
  priorityLevel: number
  imageUrl?: string
}

const colors: { [key: number]: string } = {
  1: '#00953b',
  2: '#ddc857',
  3: '#dd596e'
}

const priorityTexts: { [key: number]: string } = {
  1: 'BAJA',
  2: 'MEDIANA',
  3: 'ALTA'
}

const PriorityQueueItem = ({
  title,
  priorityLevel,
  imageUrl = nopictureUrl
}: PriorityQueueItemProps): JSX.Element => {
  const { theme } = useTheme()
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: 110,
        flexDirection: 'row',
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        borderRadius: 10
      }}>
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: '30%',
          height: undefined,
          flex: 1
        }}
        borderRadius={10}
        borderBottomRightRadius={0}
        borderTopRightRadius={0}
      />
      <View
        style={{
          width: '70%',
          borderRadius: 10
        }}>
        <View style={{
          marginTop: 30,
          width: '85%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center'
        }}>
          <Text
            style={{
              fontSize: 20
            }}>{title}</Text>
          <Icon
            name='info'
            type='foundation'
            size={30}
            color= '#666666'
          />
        </View>
        <View
          style={{
            width: '85%',
            alignSelf: 'center',
            marginTop: 10
          }}>
          <Text
            style={{
              color: colors[priorityLevel],
              fontSize: 17
            }}>{priorityTexts[priorityLevel]}</Text>
        </View>
      </View>
    </View>
  )
}

export default PriorityQueueItem
