import { Link } from "@react-navigation/native"
import { useState } from "react";
import {
  Button,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useAuthContext } from "../../contexts/AuthContext";
import { styles } from "../../styles/styles";
import { FooterButton, TextInputWithIcon } from "../../components";

import { PetalsSvg } from "../../components/svg";
import { EclipseSvg } from "../../components/svg";

const Login = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const { setIsAuthenticated } = useAuthContext()

  const handleChange = (type: string, value: string): void => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [type]: value
    }))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >

      <View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <PetalsSvg />
        </View>
        <Text style={{ fontSize: 48 }}>Bienvenido</Text>
      </View>
      <View>
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
      <View style={{ margin: 0, width: '100%' }}>
        <FooterButton
          title="Iniciar Sesión"
          onPress={() => setIsAuthenticated(true)}
        />
        <Text
          style={{ textAlign: "center", margin: 10, fontSize: 16 }}>
          ¿Aun no tienes cuenta? <Link
            to={{ screen: 'StartSignup' }}
            style={{ color: 'green' }}>Regístrate</Link>
        </Text>
      </View>
      <View style={{ position: 'absolute', left: 0, bottom: '30%' }}>
        <EclipseSvg />
      </View>
    </KeyboardAvoidingView>

  );
}  