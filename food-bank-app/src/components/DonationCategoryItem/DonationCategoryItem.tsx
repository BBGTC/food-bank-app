import { useRef, useEffect } from 'react'
import {
  Text,
  View,
  Animated
} from 'react-native'
import { useTheme, Icon, Button } from '@rneui/themed'
import NumericInput from 'react-native-numeric-input'

import fadeTo from '../../animations/fadeTo'

interface DonationCategoryItemProps {
  id: number
  name: string
  displayName: string
  icon: string
  quantity: number
  type: 'quantity' | 'add' | 'show'
  onAdd?: null | ((id: number) => void)
  onDelete?: null | ((id: number) => void)
  onChange?: null | ((id: number, quantity: number) => void)
}

const DonationCategoryItem = ({
  id,
  name,
  displayName,
  icon,
  quantity,
  type,
  onAdd,
  onDelete,
  onChange
}: DonationCategoryItemProps): JSX.Element => {
  const { theme } = useTheme()

  // Animation
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    fadeTo(1, 200, animation)
  }, [])

  const displayRightSection = (): JSX.Element => {
    switch (type) {
      case 'add':
        return <Button
          buttonStyle={{ backgroundColor: theme.colors.green, borderRadius: 4 }}
          onPress={() => { fadeTo(0, 200, animation, () => onAdd?.(id)) }}
        >
          <Icon
            name='add'
            type="material"
            color={theme.colors.white}
          />
        </Button>
      case 'quantity':
        return <NumericInput
          rounded
          totalWidth={90}
          totalHeight={40}
          value={quantity}
          leftButtonBackgroundColor={theme.colors.red}
          rightButtonBackgroundColor={theme.colors.green}
          onChange={value => onChange?.(id, value)}
          onLimitReached={() => fadeTo(0, 200, animation, () => onDelete?.(id))}
          minValue={0}
        />
      case 'show':
        return <Text>{quantity}</Text>
      default:
        return <></>
    }
  }

  return (
    <Animated.View
      style={{
        opacity: animation,
        width: '100%',
        alignItems: 'center'
      }}>
      <View
        style={{
          height: 70,
          width: '100%',
          marginBottom: 20,
          shadowOffset: {
            width: 0,
            height: 2
          },
          padding: 12,
          shadowOpacity: 0.25,
          shadowRadius: 1.5,
          borderRadius: 4,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>

        <Icon
          name={icon}
          size={48}
          type="material-community"
          color={theme.colors.gray.A}
        />
        <Text
          style={{
            flexWrap: 'wrap',
            width: 100,
            marginHorizontal: 12
          }}>{displayName}</Text>
        <View
          style={{ flexDirection: 'row' }}>
          {displayRightSection()}
        </View>
      </View>
    </Animated.View>

  )
}

export default DonationCategoryItem
