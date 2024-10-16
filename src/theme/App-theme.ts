// styles globals to app react

import { Button, StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#FF9427',


    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000',
}


export const GlobalStyles = StyleSheet.create({
    background: {
        backgroundColor: colors.background,
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end'
    },
    calculatorRows: {
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    mainResults: {
        color: colors.textPrimary,
        fontSize: 70,
        fontWeight: '400',
        marginBottom: 10,
        textAlign: 'right',
    },
    subResults: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
        marginBottom: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 0
    },
    Button: {
        height: 70,
        width: 70,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 30,
        padding: 10,
        fontWeight: '300',
        color: colors.textPrimary,
        marginTop: 5
    }
})