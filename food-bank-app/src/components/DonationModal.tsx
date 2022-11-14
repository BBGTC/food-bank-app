import { Modal, View, Button } from 'react-native'

import { Category } from '../../types'
import DonationCategoryItem from './DonationCategoryItem/DonationCategoryItem'

interface DonationModalProps {
  isVisible: boolean
  availableCategories: Category[]
  handleAdd: (id: number) => void
  onPress: () => void
}

const DonationModal = ({
  isVisible,
  availableCategories,
  onPress,
  handleAdd
}: DonationModalProps): JSX.Element => {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      presentationStyle="formSheet"
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {availableCategories.map(category => <DonationCategoryItem
          id={category.id}
          key={category.name}
          name={category.name}
          displayName={category.displayName}
          icon={category.icon}
          quantity={category.quantity}
          type='add'
          onAdd={handleAdd}
        />)}
        <Button
          title="Cerrar"
          onPress={onPress}
        />
      </View>
    </Modal>
  )
}

export default DonationModal
