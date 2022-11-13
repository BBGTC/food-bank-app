import { View, ScrollView, Text } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

interface EventCarouselProps {
  children: JSX.Element[]
  itemsPerInterval?: number
}

const EventCarousel = ({ children, itemsPerInterval }: EventCarouselProps): JSX.Element => {
  const items = itemsPerInterval === undefined
    ? 1
    : itemsPerInterval

  const [interval, setInterval] = useState(1)
  const [intervals, setIntervals] = useState(1)
  const [width, setWidth] = useState(0)

  const init = (initWidth: number): void => {
    // initialise width
    setWidth(initWidth)
    // initialise total intervals
    const totalItems = children.length
    setIntervals(Math.ceil(totalItems / items))
  }

  const getInterval = (offset: number): number => {
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i
      }
      if (i === intervals) {
        return i
      }
    }
    return 0
  }

  const bullets = []
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1
        }}
      >
        &bull;
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width)
          setInterval(getInterval(data.nativeEvent.contentOffset.x))
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        { children }
      </ScrollView>
      <View style={styles.bullets}>
        {bullets}
      </View>
    </View>
  )
}

export default EventCarousel
