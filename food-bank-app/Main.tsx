import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider, Button, createTheme } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from "./src/contexts/AuthContext";
import HomeScreen from "./src/screens/HomeScreen";
import Donation from "./src/screens/Donation";
import Login from "./src/screens/Login/Login";
import StartSignup from "./src/screens/Signup/StartSignup";
import PersonalSignup from "./src/screens/Signup/PersonalSignup";
import RFCSignup from "./src/screens/Signup/RFCSignup";

const Stack = createNativeStackNavigator()

const theme = createTheme({
  lightColors: {
    gray: {
      A: '#616161',
      B: '#f3f3f3'
    },
    green: '#00953B',
    shadow: '#2e2e2e',
    buttonBorder: '#e0e0e0'
  },
  mode: 'light', // your light or dark mode value
  components: {
    Input: {
      containerStyle: {
        paddingHorizontal: 0
      }
    }
  }
});

const Main = (): JSX.Element => {
  const { isAuthenticated } = useAuthContext()
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
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Donation" component={Donation} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer >
    </ThemeProvider>
  )
}

export default Main
