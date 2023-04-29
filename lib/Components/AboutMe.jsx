import React, { useState }from 'react';
import { Text } from 'react-native'
import style from '../styles'


const Counter = ({navigation}) => {
    const [count, setCount] = useState(0)

    return ( 
        <View style={style.container}>     
            <Text></Text>
        </View>
     );
}

export default Counter

