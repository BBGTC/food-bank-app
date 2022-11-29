import { useEffect } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

import { Category } from '../../../types'
import DonationCategoryItem from '../DonationCategoryItem/DonationCategoryItem'

interface DonationModalProps {
  isVisible: boolean
  type: 'add' | 'show'
  availableCategories: Category[]
  handleAdd?: (id: number) => void
  onPress?: () => void
}

const DonationModal = ({
  isVisible,
  type,
  availableCategories,
  onPress,
  handleAdd
}: DonationModalProps): JSX.Element => {
  useEffect(() => {
    if (availableCategories.length === 0) {
      onPress?.()
    }
  }, [availableCategories])

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onPress}
    >
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      }}>
        {availableCategories.map(category => <DonationCategoryItem
          id={category.id}
          key={category.name}
          name={category.name}
          displayName={category.displayName}
          icon={category.icon}
          quantity={category.quantity}
          type={type}
          onAdd={handleAdd}
        />)}
      </View>
    </Modal>
  )
}

export default DonationModal
