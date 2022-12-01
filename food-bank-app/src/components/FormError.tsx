import { StyleSheet, Text } from 'react-native'
import { Card } from '@rneui/themed'

interface FormErrorProps {
  message: string
}

export const FormError = ({ message }: FormErrorProps): JSX.Element => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Text>{message}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 0,
    borderColor: '#800000',
    backgroundColor: '#ffcccc',
    borderRadius: 10
  }
})
