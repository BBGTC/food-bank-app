import { Link } from "@react-navigation/native"
import { useState } from "react";
import {
  Text,
  View
} from 'react-native';
import { useAuthContext } from "../../contexts/AuthContext";
import { styles } from "../../styles/styles";
import { FooterButton, TextInputWithIcon } from "../../components";
// import BAMX from '../../assets/bamx.svg';

export default function StartSignup({navigation}) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
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
      <Text style={{ fontSize: 48 }}>Crea tu cuenta</Text>
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
        <TextInputWithIcon
          placeholder="Confirma tu contraseña"
          icon="lock"
          value={credentials.passwordConfirm}
          type="passwordConfirm"
          handleChange={handleChange}
        />
      </View>
      <View>
        <FooterButton
          title="Siguiente"
          onPress={() => navigation.navigate('PersonalSignup')}
        />
        <Text
          style={{ textAlign: "center", margin: 10 }}>
          ¿Ya tienes una cuenta? <Link
            to={{ screen: 'Login' }}
            style={{ color: "green" }}>Inicia sesión</Link>
        </Text>
      </View>
    </View>
  );
}  