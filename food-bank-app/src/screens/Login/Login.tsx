import { Link } from "@react-navigation/native"
import { useState } from "react";
import {
  Button,
  Text,
  Image,
  View
} from 'react-native';
import { useAuthContext } from "../../contexts/AuthContext";
import { styles } from "../../styles/styles";
import { FooterButton, TextInputWithIcon } from "../../components";
// import BAMX from '../../assets/bamx.svg';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { setIsAuthenticated } = useAuthContext();

  const handleChange = (type: string, value: string) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value,
    }))
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>Bienvenido</Text>
      <View>
        {/* <BAMX width={120} height={40} />; */}
        <TextInputWithIcon
          placeholder="Email"
          icon="email"
          value={credentials.email}
          type="email"
          handleChange={handleChange}
        ></TextInputWithIcon>
        <TextInputWithIcon
          placeholder="Contraseña"
          icon="lock"
          value={credentials.password}
          type="password"
          handleChange={handleChange}
        />
      </View>
      <View>
        <FooterButton
          title="Iniciar Sesión"
          onPress={() => setIsAuthenticated(true)}
        />
        <Text
          style={{ textAlign: "center", margin: 10 }}>
          ¿Aun no tienes cuenta? <Link
            to={{ screen: 'StartSignup' }}
            style={{ color: "green" }}>Regístrate</Link>
        </Text>
      </View>
    </View>
  );
}  