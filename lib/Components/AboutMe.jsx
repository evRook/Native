import React, { useState }from 'react';
import { Text, View } from 'react-native'
import style from '../styles'


const AboutMe = ({navigation}) => {
    return ( 
        <View style={style.amContainer}>     
            <Text>I am a driven software engineer with a background in customer service, eager to apply my knowledge of computer science and my passion for technology to solve complex problems. I am a fast learner and a dedicated team player committed to taking on new challenges and delivering results for my clients and employer. My ability to work well in a team and communicate effectively makes me a valuable asset to any organization.</Text>
        </View>
     );
}

export default AboutMe
