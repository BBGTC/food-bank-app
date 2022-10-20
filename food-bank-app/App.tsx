import { useState } from 'react';
import { 
  Alert,
  Button,
  StyleSheet,
  Text, 
  TextInput,
  View
} from 'react-native';

// libreria material ui 
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Bienvenido</Text>
      <TextInput
        style={styles.textInput}
        value={email} 
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        value={password} 
        onChangeText={text => setPassword(text)}
      />
      <Button
        title="Iniciar Sesión"
        onPress={() => Alert.alert('navigate to home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    margin: 10,
    borderWidth: 1,
  },
});
