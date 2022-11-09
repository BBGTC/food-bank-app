import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View
} from 'react-native';
import { useAuthContext } from "../../contexts/AuthContext";
import { styles } from "../../styles/styles";
import { FooterButton, TextInputWithIcon } from "../../components";

import { LargePetalsSvg } from "../../components/svg";
import { Link } from "@react-navigation/native";

export const SignupRFC = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
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
      <View style={{ width: '100%' }}>

        <View style={{ width: '100%' }}>
          <View style={{marginBottom: 30}}>
            <LargePetalsSvg />
          </View>
          <Text style={{ fontSize: 48, textAlign: 'left', width: '100%' }}>Por último,</Text>
          <Text style={{ fontSize: 48, textAlign: 'left', width: '100%' }}>tu <Text style={{ fontWeight: '700' }}>RFC</Text></Text>
        </View>
        <View style={{marginTop: 60}}>
          <TextInputWithIcon
            placeholder="RFC"
            icon="article"
            value={credentials.email}
            type="email"
            handleChange={handleChange}
          />
          <Text style={{ textAlign: "left", fontSize: 16 }}>Es opcional, nos ayudará a generar tus recibos deducibles.</Text>
          <Text style={{fontSize: 16, color: '#CE0E2D'}}>
            Más información
          </Text>
        </View>
      </View>

      <FooterButton
        title="Finalizar"
        onPress={() => setIsAuthenticated(true)}
      />
    </KeyboardAvoidingView>
  );
}  
