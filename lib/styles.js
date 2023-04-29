
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    cardContainer: {
        height: '100%',
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
    },

    img: {
        maxHeight: 200,
        maxWidth: 200,
        borderRadius: 100,
        borderWidth: 3,
    },

    amContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },

    contactsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },

    header:{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#f1f1f1',  
    },

    text: {
        color: 'red',
        textAlign: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        minWidth: 100,
        padding: 10,
        margin: 10,
    },
})

export default style