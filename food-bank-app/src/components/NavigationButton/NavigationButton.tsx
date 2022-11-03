import React from 'react'
import { useTheme } from '@rneui/themed';
import { Button } from 'react-native'

type NavigationButtonProps = {
    title: string;
    onPress: Function
}

const NavigationButton = ({ title, onPress }: NavigationButtonProps) => {
    const { theme } = useTheme();
    return (
        <Button title={title}
            onPress={onPress}

        ></Button>
    )
}

export default NavigationButton
