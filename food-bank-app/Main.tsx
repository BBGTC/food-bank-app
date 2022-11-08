import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider, Button, createTheme } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from "./src/contexts/AuthContext";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login/Login";
import StartSignup from "./src/screens/Signup/StartSignup";
import PersonalSignup from "./src/screens/Signup/PersonalSignup";
import RFCSignup from "./src/screens/Signup/RFCSignup";

const Stack = createNativeStackNavigator();

const theme = createTheme({
  lightColors: {
    gray: {
      A: "#616161",
      B: "#f3f3f3"
    }
  },
  mode: 'light', // your light or dark mode value
});

function Main() {
  const { isAuthenticated } = useAuthContext();
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          {!isAuthenticated ? <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="StartSignup" component={StartSignup} />
            <Stack.Screen name="PersonalSignup" component={PersonalSignup} />
            <Stack.Screen name="RFCSignup" component={RFCSignup} />
          </> :
            <Stack.Screen name="Home" component={HomeScreen} />}
        </Stack.Navigator>
      </NavigationContainer >
    </ThemeProvider>
  )
}

export default Main