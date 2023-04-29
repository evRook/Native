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
        <View style={style.container}>     
            <TouchableOpacity style={style.button} onPress={() => Linking.openURL('http://google.com')}>
                <Text>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={() => Linking.openURL('http://google.com')}>
                <Text>GitHub</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Contacts