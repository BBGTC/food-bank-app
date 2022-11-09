import { Link } from "@react-navigation/native"
import { useState } from "react";
import {
  Text,
  View
} from 'react-native';
import { styles } from "../../styles/styles";
import { FooterButton, TextInputWithIcon } from "../../components";
// import BAMX from '../../assets/bamx.svg';

export default function StartSignup({ navigation }) {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    surnames: "",
    phone: "",
    address: ""
  });

  const handleChange = (type: string, value: string) => {
    setPersonalInfo((prevCredentials) => ({
      ...prevCredentials,
      [type]: value,
    }))
  }

  return (
    <View style={styles.container}>
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
      <View>
        <FooterButton
          title="Siguiente"
          onPress={() => navigation.navigate('RFCSignup')}
        />
      </View>
    </View>
  );
}  