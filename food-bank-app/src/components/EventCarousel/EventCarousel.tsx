import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

interface EventCarouselProps {
  children: JSX.Element[]
}

const EventCarousel = ({ children }: EventCarouselProps): JSX.Element => {
  const [interval, setInterval] = useState(0)
  const [totalItems, setTotalItems] = useState(1)
  const [width, setWidth] = useState(0)

  const init = (newWidth: number): void => {
    setWidth(newWidth)
    const items = children.length
    setTotalItems(items)
  }

  const getInterval = (offset: number): number => {
    const itemWidth = width / totalItems
    return Math.floor(((offset + 1) / itemWidth))
  }

  const bullets = Array.from({ length: totalItems }, (_, i) => {
    return <Text
            key={i}
            style={{
              ...styles.bullet,
              opacity: interval === i ? 0.5 : 0.1
            }}
          >
            &bull;
          </Text>
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Ven a apoyarnos!</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${100 * totalItems}%` }}
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
        {children}
      </ScrollView>
      <View style={styles.bullets}>
        {bullets}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    maxHeight: 250
  },
  title: {
    fontSize: 25,
    marginBottom: 16
  },
  scrollView: {
    flexDirection: 'row',
    overflow: 'hidden',
    maxHeight: 225,
    paddingBottom: 10
  },
  bullets: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20
  }
})

export default EventCarousel
