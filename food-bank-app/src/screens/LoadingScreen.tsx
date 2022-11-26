import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useTheme } from '@rneui/themed'

export const LoadingScreen = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.red} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
