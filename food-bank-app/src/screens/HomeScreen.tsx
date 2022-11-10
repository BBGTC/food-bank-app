import { useAuthContext } from '../contexts/AuthContext'
import { styles } from '../styles/styles'
import {
  Button,
  Text,
  View
} from 'react-native'

import EventCard from '../components/EventCard'

const HomeScreen = (): JSX.Element => {
  const { setIsAuthenticated } = useAuthContext()
  return (
    <View style={styles.container}>
      <EventCard
        title='Basílica de Zapopan'
        location='Calle Eva Briseño 152, Zapopan, Jal.'
        startDate='12 Octubre'
        endDate='14 Octubre'
        startTime='8:00AM'
        endTime='4:00PM'
      />
      <Text>Home</Text>
      <Button
        title= "Cerrar Sesión"
        onPress={() => setIsAuthenticated(false)}
        />
    </View>
  )
}

export default HomeScreen
