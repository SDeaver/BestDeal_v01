import { StyleSheet } from 'react-native';

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
        backgroundColor: 'lightgrey',
    },
    calcBoxBestDeal: {
        flex: 0.45,
        justifyContent: 'space-evenly',
        borderWidth: 0.5,
        padding: 10,
        height: '100%',
        backgroundColor: 'lightgreen',
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
        backgroundColor: 'white',
        fontSize: 20,
    },
    calcBoxOutput: {
        flex: 0.95,
        borderWidth: 1,
        backgroundColor: 'ghostwhite',
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
        width: '12%',
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    clearButtonPressed: {
        width: '12%',
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'grey'

    },
    clearButtonText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    compareButton: {
        marginTop: 20,
        alignSelf: 'center',
        height: '20%',
        width: '35%',
        borderWidth: 0.5,
        backgroundColor: 'lightgrey'
    },
    compareButtonPressed: {
        marginTop: 20,
        alignSelf: 'center',
        height: '20%',
        width: '35%',
        borderWidth: 0.5,
        backgroundColor: 'grey'
    },
    compareButtonLocked: {
        marginTop: 20,
        alignSelf: 'center',
        height: '20%',
        width: '35%',
        borderWidth: 1,
        opacity: 0.5,
        backgroundColor: 'white'
    },
    compareButtonText:{
        flex: 1,
        justifyContent: 'space-around',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    test: {
        borderWidth: 1,
        borderColor: 'red',
    }
});