import { useAuthContext } from '../contexts/AuthContext';
import { styles } from '../styles/styles';
import { 
  Button,
  Text, 
  View
} from 'react-native';

export default function HomeScreen() {
    const { setIsAuthenticated }= useAuthContext();
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
        title= "Cerrar Sesión"
        onPress={() => setIsAuthenticated(false)}/>
      </View>
    );
}


  