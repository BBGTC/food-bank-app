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
      rightIcon={
        <Icon name={icon} type="material" color={theme.colors.gray.A}></Icon>
      }
      inputStyle={{
        paddingHorizontal: 12
      }}
      inputContainerStyle={{
        borderBottomWidth: 0,
        borderRadius: 10,
        backgroundColor: theme.colors.gray.B
      }}
      containerStyle={{
        width: 300
      }}
    />
  )
}

export default TextInputWithIcon
