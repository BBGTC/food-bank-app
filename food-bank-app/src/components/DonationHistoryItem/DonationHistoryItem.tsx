import { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, useTheme } from '@rneui/themed'
import DonationModal from '../DonationModal'
import { CategoryModel } from '../../models'

interface DonationHistoryItemProps {
  event: string
  date: Date
  categories: CategoryModel[]
}

const DonationHistoryItem = ({ event, date, categories }: DonationHistoryItemProps): JSX.Element => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const { theme } = useTheme()

  return (
    <>
      <DonationModal
        isVisible={modalIsVisible}
        type='show'
        availableCategories={[categories[1]]}
        onPress={() => setModalIsVisible(false)}
      />
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          shadowColor: '#000',
          backgroundColor: 'white',
          shadowOffset: {
            width: 0,
            height: 2
          },
          padding: 12,
          shadowOpacity: 0.25,
          shadowRadius: 1.5,
          borderRadius: 4
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 4
            }}>{event}</Text>
          <Text
            style={{
              fontSize: 12,
              marginBottom: 4,
              color: theme.colors.gray.A,
              fontWeight: 'bold'
            }}>{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
          <Text style={{
            fontSize: 12,
            color: theme.colors.red,
            fontWeight: 'bold'
          }}>${categories[0].quantity}• ${categories[0].displayName}</Text>
        </View>
        <Button
          title={'DETALLES'}
          onPress={() => setModalIsVisible(true)}
          buttonStyle={{
            backgroundColor: 'transparent'
          }}
          titleStyle={{
            color: theme.colors.green,
            fontSize: 14
          }}
        />
      </View >
    </>
  )
}

export default DonationHistoryItem
