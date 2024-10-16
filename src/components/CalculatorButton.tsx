import React from 'react'
import { Pressable, Text } from 'react-native';
import { GlobalStyles, colors } from '../theme/App-theme';

interface Props {
    title: string,
    color?: string,
    colorTitle?: string,
    action?: () => void;
}

export const CalculatorButton = ({ title, action, colorTitle = colors.textPrimary, color =  colors.darkGray }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    ...GlobalStyles.Button,
                    backgroundColor: color,
                    opacity: pressed ? 0.8 : 1,
                    flex: title === '0' ? 2 : 1 // solo si es 0 ocupa dos espacio en el row
                }
            ]}
            onPress={action}
        >
            <Text style={{
                ...GlobalStyles.ButtonText,
                color: colorTitle
            }}>{title}</Text>
        </Pressable>
    )
}
