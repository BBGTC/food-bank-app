import { useEffect, useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { FooterButton } from '../../components'

interface SignupStepProps {
  footerButtonConfig: {
    title: string
    onPress: () => void
  }
  children: JSX.Element | JSX.Element[]
}

export const SignupStep = ({ children, footerButtonConfig }: SignupStepProps): JSX.Element => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.children} scrollEnabled={isKeyboardVisible}>
          {children}
        </ScrollView>
        <View style={styles.footerButton}>
          <FooterButton
            title={footerButtonConfig.title}
            onPress={footerButtonConfig.onPress}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  keyboardAvoiding: {
    flex: 1,
    width: '100%',
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  children: {
    flex: 1,
    padding: 0,
    margin: 0,
    width: '100%'
  },
  footerButton: {
    width: '90%',
    marginBottom: 32
  }
})
