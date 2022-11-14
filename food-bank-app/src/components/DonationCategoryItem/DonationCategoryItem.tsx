import { useRef, useEffect } from 'react'
import {
  Text,
  View,
  Animated
} from 'react-native'

import { useTheme, Icon, Button } from '@rneui/themed'
import NumericInput from 'react-native-numeric-input'

interface DonationCategoryItemProps {
  id: number
  name: string
  displayName: string
  icon: string
  quantity: number
  type: 'quantity' | 'add'
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
  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeTo = (toValue: 0 | 1, duration: number, onCompletion?: () => void): void => {
    console.log(quantity)

    Animated.timing(
      fadeAnim,
      {
        toValue,
        duration,
        useNativeDriver: true
      }
    ).start(() => onCompletion?.())
  }

  useEffect(() => {
    fadeTo(1, 200)
  }, [])

  const displayRightSection = (): JSX.Element => {
    switch (type) {
      case 'add':
        return <Button
          buttonStyle={{ backgroundColor: theme.colors.green, borderRadius: 4 }}
          onPress={() => { fadeTo(0, 200, () => onAdd?.(id)) }}
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
          onLimitReached={() => fadeTo(0, 200, () => onDelete?.(id))}
          minValue={0}
        />
      default:
        return <></>
    }
  }

  return (
    <Animated.View
      style={{ opacity: fadeAnim }}>
      <View
        style={{
          height: 70,
          width: 300,
          padding: 12,
          marginBottom: 20,
          shadowOffset: {
            width: 0,
            height: 2
          },
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
          type="material"
          color={theme.colors.gray.A}
        />
        <View
          style={{
            width: 100,
            marginHorizontal: 12
          }}>
          <Text style={{ flexWrap: 'wrap' }}>{displayName}</Text>
        </View>
        <View
          style={{ flexDirection: 'row' }}>
          {displayRightSection()}
        </View>
      </View>
    </Animated.View>

  )
}

export default DonationCategoryItem
