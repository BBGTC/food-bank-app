import { useTheme, Button } from '@rneui/themed';

type FooterButtonProps = {
    title: string;
    onPress: () => void;
}

const FooterButton = ({ title, onPress }: FooterButtonProps) => {
    const { theme } = useTheme();
    return (
        <Button title={title}
            onPress={onPress}
            buttonStyle={{
                height: 60,
                backgroundColor: theme.colors.black,
                borderRadius: 10,
            }}
            containerStyle={{
                width: 300
            }}
        ></Button>
    )
}

export default FooterButton
