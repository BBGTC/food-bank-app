import { useState } from "react";
import { 
    Button,
    Text, 
    TextInput,
    View
  } from 'react-native';
import { useAuthContext } from "../contexts/AuthContext";
import { styles } from "../styles/styles";
import NavigationButton from "../components/NavigationButton";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setIsAuthenticated }= useAuthContext();
    
    return (
      <View style={styles.container}>
        <Text>Login</Text>
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
        <NavigationButton
          title="Iniciar Sesión"
          onPress={ () => setIsAuthenticated(true) }
        />
      </View>
    );
}  