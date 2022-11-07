
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from "./src/contexts/AuthContext";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login/Login";
import Signup from "./src/screens/Signup/Signup";

const Stack = createNativeStackNavigator();

function Main() {
  const { isAuthenticated } = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </> :
          <Stack.Screen name="Home" component={HomeScreen} />}
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default Main