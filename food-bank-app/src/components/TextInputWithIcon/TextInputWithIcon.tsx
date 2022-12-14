import { useTheme, Input, Icon } from '@rneui/themed'

interface TextInputWithIconProps {
  placeholder: string
  icon: string
  value: string
  type: string
  handleChange: (type: string, event: string) => void
}

const TextInputWithIcon = ({ placeholder, icon, value, type, handleChange }: TextInputWithIconProps): JSX.Element => {
  const { theme } = useTheme()
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChangeText={newValue => handleChange(type, newValue)}
      secureTextEntry={type === 'password' || type === 'passwordConfirm'}
      keyboardType={type === 'email' ? 'email-address' : 'default'}
      rightIcon={
        <Icon name={icon} type="material" color={theme.colors.gray.A} />
      }
      style={{
        padding: 0
      }}
      inputStyle={{
        paddingHorizontal: 12
      }}
      inputContainerStyle={{
        borderBottomWidth: 0,
        borderRadius: 10,
        backgroundColor: theme.colors.gray.B,
        width: '100%'
      }}
      containerStyle={{
        width: '100%'
      }}
    />
  )
}

export default TextInputWithIcon
