import React from 'react';
import { 
    Text, 
    View,
    Button,
    Image,
    Linking,
    TouchableOpacity,
} from 'react-native'
import style from '../styles'

const Contacts = ({navigation}) => {

    return ( 
        <View style={style.contactsContainer}>     
            <TouchableOpacity style={style.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/ericspychalski/')}>
                <Text>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={() => Linking.openURL('https://github.com/evRook')}>
                <Text>GitHub</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Contacts