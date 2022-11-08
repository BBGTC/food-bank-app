import { useAuthContext } from '../contexts/AuthContext';
import { styles } from '../styles/styles';
import { 
  Button,
  Text, 
  View
} from 'react-native';
import PriorityListItem from '../components/PriorityListItem/PriorityListItem';

export default function HomeScreen() {
    const { setIsAuthenticated }= useAuthContext();
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <PriorityListItem title='hola' />
        <Button
        title= "Cerrar Sesión"
        onPress={() => setIsAuthenticated(false)}/>
      </View>
    );
}


  