<<<<<<< HEAD
import { useState } from 'react'
import { Text, View } from 'react-native'
=======
import { Link } from "@react-navigation/native"
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import { useState } from "react";
import { styles } from "../../styles/styles";
import { FooterButton, TextInputWithIcon } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
// import BAMX from '../../assets/bamx.svg';
>>>>>>> add svgs and keyboard hidding

import { styles } from '../../styles/styles'
import { FooterButton, TextInputWithIcon } from '../../components'

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
<<<<<<< HEAD
    </View>
  )
}

export default PersonalSignup
=======
    </KeyboardAvoidingView>

  );
}  
>>>>>>> add svgs and keyboard hidding
