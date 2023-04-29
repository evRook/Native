import React from 'react';
import { 
    Text, 
    View,
    Button,
    Image,
    TouchableOpacity,
} from 'react-native'
import style from '../styles'


const Home = ({navigation}) => {
    return ( 
        <View style={style.container}>     
            <View style={style.header}>  
            <Button
                title="About Me"
                onPress={() =>
                    navigation.navigate('AboutMe')
                }
            />
            <Button
                title="Contacts"
                onPress={() =>
                    navigation.navigate('Contacts')
                }
            />
            </View>
            <View style={style.cardContainer}>
                <View style={style.imgContainer}>
                    <Image source={require('../img/HeadShot.jpg')} style={style.img}/>
                </View>
                <View style={style.cardContainer}>
                    <Text>Software Engineer</Text>
                </View>
            </View>
            
        </View>
     );
}

export default Home