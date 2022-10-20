import { createContext, useContext, useState } from 'react';
import { 
  Button,
  StyleSheet,
  Text, 
  TextInput,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

interface AuthContextValue  {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const AuthContext = createContext({} as AuthContextValue);

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsAuthenticated } = useContext(AuthContext);

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
        onPress={() => setIsAuthenticated(true)}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

// libreria material ui 
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <NavigationContainer>
        <Stack.Navigator>
          {!isAuthenticated ? <Stack.Screen name="Login" component={Login} /> : <Stack.Screen name="Home" component={HomeScreen} />}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
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
