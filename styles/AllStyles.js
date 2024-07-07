import { StyleSheet } from 'react-native';

const colors = {
    bgInput: 'white',
    bgOutput: 'ghostwhite',
    bgBox: 'rgba(213,232,255,0.7)',
    bgButton: 'lightsteelblue',
    bgButtonPressed: 'steelblue',
    bgButtonLocked: 'ghostwhite',
    text: 'white',
    bdr: 'black'
}

export const allStyles = StyleSheet.create ({
    backgroundImg: {
        // flex: 1,
        // justifyContent: 'center',
    },
    mainContainer: {
        height: '100%',
        width: '100%'
    },
    calcBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 50,
        paddingHorizontal: 10,
        height: 500,
    },
    calcBox: {
        flex: 0.45,
        justifyContent: 'space-evenly',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
        height: '100%',
        backgroundColor: colors.bgBox
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
        borderRadius: 5,
        padding: 5,
        backgroundColor: colors.bgInput,
        fontSize: 20,
    },
    calcImageContainer: {
        flex: 1,
        marginBottom: 20,
        marginTop: -10,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: colors.bgOutput,
    },
    calcQuantityImage: {
        marginTop: -6,
        alignSelf: 'center',
    },
    calcBoxOutput: {
        flex: 0.95,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.bgOutput,
    },
    calcBoxOutputText: {
        padding: 5,
        fontSize: 20,
        textAlign: 'center'
    },
    clearButton: {
        justifyContent: 'center', 
        width: '12%',
        borderWidth: 0.5,
        borderColor: colors.bdr,
        borderRadius: 5,
        backgroundColor: colors.bgButton
    },
    clearButtonPressed: {
        justifyContent: 'center', 
        width: '12%',
        height: '',
        borderWidth: 0.6,
        borderColor: colors.bdr,
        borderRadius: 5,
        backgroundColor: colors.bgButton
    },
    clearButtonText: {
        textAlign: 'center',
    },
    verticalCenterView: {
        flex: 1,
        justifyContent: 'center'
    },
    compareButtonContainer: {
        flex: 0.3,
        justifyContent: 'center',
        height: '15%',
    },
    compareButton: {
        alignSelf: 'center',
        height: '60%',
        width: '35%',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: colors.bgButton
    },
    compareButtonPressed: {
        alignSelf: 'center',
        height: '56%',
        width: '33%',
        borderWidth: 0.7,
        borderRadius: 5,
        backgroundColor: colors.bgButton
    },
    compareButtonLocked: {
        alignSelf: 'center',
        height: '60%',
        width: '35%',
        borderWidth: 1,
        borderRadius: 5,
        opacity: 0.3,
        backgroundColor: colors.bgButton
    },
    compareButtonText:{
        fontSize: 16,
        textAlign: 'center',
    },
    compareButtonTextPressed:{
        fontSize: 15,
        textAlign: 'center',
    },
    compareButtonTextLocked:{
        fontSize: 16,
        textAlign: 'center',
    },
});