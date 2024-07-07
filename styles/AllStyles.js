import { StyleSheet } from 'react-native';

const colors = {
    bgInput: 'white',
    bgOutput: 'ghostwhite',
    bgBox: 'rgb(220,220,220)',
    bgButton: 'rgb(220,220,220)',
    bgButtonPressed: 'grey',
    bdr: 'black'
}

export const allStyles = StyleSheet.create ({
    mainContainer: {
        flex: 1, 
        marginTop: 20
    },
    calcBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 50,
        paddingHorizontal: 10,
        height: 500,
        // borderWidth: 1,
        // borderColor: 'blue'
    },
    calcBox: {
        flex: 0.45,
        justifyContent: 'space-evenly',
        borderWidth: 0.5,
        padding: 10,
        height: '100%',
        backgroundColor: colors.bgBox,
    },

    calcInputContainer: {
        height: '25%',
    },
    calcOutputContainer: {
        height: '25%',
    },
    priceTitle: {
        fontSize: 16
    },
    quantityTitle: {
        fontSize: 16,
    },
    perUnitTitle: {
        fontSize: 16,
    },
    calcBoxInputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    calcBoxInput: {
        flex: 0.95,
        borderWidth: 0.5,
        padding: 5,
        backgroundColor: colors.bgInput,
        fontSize: 20,
    },
    calcImageContainer: {
        flex: 1,
        marginBottom: 20,
        marginTop: -10,
        borderWidth: 0.5,
        backgroundColor: colors.bgOutput,
    },
    calcQuantityImage: {
        marginTop: -6,
        alignSelf: 'center',
    },
    calcBoxOutput: {
        flex: 0.95,
        borderWidth: 1,
        backgroundColor: colors.bgOutput,
    },
    calcBoxOutputText: {
        padding: 5,
        fontSize: 20,
        textAlign: 'center'
    },
    compareButtonContainer: {
        flex: 1,
    },
    clearButton: {
        justifyContent: 'center', 
        width: '12%',
        borderWidth: 0.5,
        borderColor: colors.bdr,
        backgroundColor: colors.bgInput
    },
    clearButtonPressed: {
        width: '12%',
        borderWidth: 0.5,
        borderColor: colors.bdr,
        backgroundColor: colors.bgButtonPressed
    },
    clearButtonText: {
        textAlign: 'center',
    },
    verticalCenterView: {
        flex: 1,
        justifyContent: 'center'
    },
    compareButton: {
        marginTop: 20,
        alignSelf: 'center',
        height: '20%',
        width: '35%',
        borderWidth: 0.5,
        backgroundColor: colors.bgButton
    },
    compareButtonPressed: {
        marginTop: 20,
        alignSelf: 'center',
        height: '20%',
        width: '35%',
        borderWidth: 0.5,
        backgroundColor: colors.bgButtonPressed
    },
    compareButtonLocked: {
        marginTop: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        height: '20%',
        width: '35%',
        borderWidth: 1,
        opacity: 0.5,
        backgroundColor: colors.bgInput
    },
    compareButtonText:{
        fontSize: 16,
        textAlign: 'center',
    },
});