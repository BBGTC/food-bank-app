import { useTheme, Input, Icon } from '@rneui/themed';

type TextInputWithIconProps = {
    placeholder: string;
    icon: string;
    value: string;
    type: string;
    handleChange: (type: string, event: string) => void;
}

const TextInputWithIcon = ({ placeholder, icon, value, type, handleChange }: TextInputWithIconProps) => {
    const { theme } = useTheme();
    return (
        <Input
            value={value}
            placeholder={placeholder}
            onChangeText={value => handleChange(type, value)}
            rightIcon={
                <Icon name={icon} color="#616161"></Icon>
            }
            inputStyle={{
                paddingHorizontal: 12,

            }}
            inputContainerStyle={{
                borderBottomWidth: 0,
                borderRadius: 10,
                backgroundColor: "#f3f3f3"
            }}
            containerStyle={{
                width: 300,
            }}
        />
    )
}

export default TextInputWithIcon
