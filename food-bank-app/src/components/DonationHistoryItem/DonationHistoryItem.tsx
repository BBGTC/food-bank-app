import { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, useTheme } from '@rneui/themed'
import DonationModal from '../DonationModal'

const DonationHistoryItem = (): JSX.Element => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const { theme } = useTheme()

  return (
    <>
      <DonationModal
        isVisible={modalIsVisible}
        type='show'
        availableCategories={[ALL_CATEGORIES[1]]}
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
            }}>Basílica de Zapopan</Text>
          <Text
            style={{
              fontSize: 12,
              marginBottom: 4,
              color: theme.colors.gray.A,
              fontWeight: 'bold'
            }}>10 de Octubre de 2021</Text>
          <Text style={{
            fontSize: 12,
            color: theme.colors.red,
            fontWeight: 'bold'
          }}>180 kg • Canasta básica</Text>
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

const ALL_CATEGORIES = [
  {
    id: 1,
    name: 'fruitsAndVegetables',
    displayName: 'Frutas y verduras',
    icon: 'brunch-dining',
    quantity: 3,
    isSelected: true
  },
  {
    id: 2,
    name: 'sausagesAndDairy',
    displayName: 'Embutidos y lácteos',
    icon: 'brunch-dining',
    quantity: 50,
    isSelected: true
  },
  {
    id: 3,
    name: 'groceries',
    displayName: 'Abarrotes',
    icon: 'shopping-cart',
    quantity: 3,
    isSelected: false
  },
  {
    id: 4,
    name: 'nonEatables',
    displayName: 'No comestibles',
    icon: 'soap',
    quantity: 3,
    isSelected: false
  }
]
