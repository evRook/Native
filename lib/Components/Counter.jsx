import React, { useState }from 'react';
import { 
    Text, 
    View,
    Button,
    TouchableOpacity,
} from 'react-native'
import style from '../styles'


export default function Greeting(props) {
    const [count, setCount] = useState(0)

    return ( 
        <View style={style.container}>     
            <TouchableOpacity style={style.button} onPress={() => setCount(count + 1)}>
                <Text>Click me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={() => setCount(0)}>
                <Text>Reset</Text>
            </TouchableOpacity>
            <View>
                <Text>Clicked: {count} times.</Text>
            </View>
        </View>
     );
}