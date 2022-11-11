import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '98%',
    marginTop: 10,
    maxHeight: 220
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
    paddingHorizontal: 10,
    paddingTop: 5
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20
  }
})

export default styles
