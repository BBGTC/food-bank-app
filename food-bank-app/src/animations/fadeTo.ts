
import { Animated } from 'react-native'

// Wrap component in Animated.View
const fadeTo = (toValue: 0 | 1,
  duration: number,
  animation: Animated.Value,
  onCompletion?: () => void): void => {
  Animated.timing(
    animation,
    {
      toValue,
      duration,
      useNativeDriver: true
    }
  ).start(() => onCompletion?.())
}

export default fadeTo
