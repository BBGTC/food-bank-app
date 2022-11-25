import { useTheme, Button } from '@rneui/themed'

interface FooterButtonProps {
  title: string
  onPress: () => void
}

const FooterButton = ({ title, onPress }: FooterButtonProps): JSX.Element => {
  const { theme } = useTheme()
  return (
    <Button title={title}
      onPress={onPress}
      buttonStyle={{
        height: 60,
        backgroundColor: theme.colors.black,
        borderRadius: 10,
        width: '100%',
      }}
      containerStyle={{
        width: '100%'
      }}
    ></Button>
  )
}

export default FooterButton
