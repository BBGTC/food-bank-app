import { View, KeyboardAvoidingView, Text, Platform } from 'react-native';
import { useState } from "react";
import { styles } from "../../styles/styles";
import { FooterButton, TextInputWithIcon } from "../../components";
import { EclipseLarge } from "../../components/svg";

const PersonalSignup = ({ navigation }): JSX.Element => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    surnames: '',
    phone: '',
    address: ''
  })

  const handleChange = (type: string, value: string): void => {
    setPersonalInfo((prevCredentials) => ({
      ...prevCredentials,
      [type]: value
    }))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={{ position: 'absolute', right: 0 }}>
        <EclipseLarge />
      </View>
      <Text style={{ fontSize: 48 }}>Agrega tu información personal</Text>
      <View>
        <TextInputWithIcon
          placeholder="Nombre"
          icon="person"
          value={personalInfo.name}
          type="name"
          handleChange={handleChange}
        ></TextInputWithIcon>
        <TextInputWithIcon
          placeholder="Apellidos"
          icon="person"
          value={personalInfo.surnames}
          type="surnames"
          handleChange={handleChange}
        />
        <TextInputWithIcon
          placeholder="Teléfono"
          icon="phone"
          value={personalInfo.phone}
          type="phone"
          handleChange={handleChange}
        />
        <TextInputWithIcon
          placeholder="Dirección"
          icon="home"
          value={personalInfo.address}
          type="address"
          handleChange={handleChange}
        />
      </View>
      <FooterButton
        title="Siguiente"
        onPress={() => navigation.navigate('RFCSignup')}
      />
    </KeyboardAvoidingView>

  );
}