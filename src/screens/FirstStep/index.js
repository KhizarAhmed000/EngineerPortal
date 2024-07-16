import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../services/utilities/images';
import { styles } from './styles';




export default function FirstStep({navigation}) {

    const handleNextStep = () => {
        navigation.navigate("StepTwo")
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={images.bigTick} style={styles.tickImage} />
                <Text style={styles.headingOne}>1st Step Completed </Text>
                <Text style={styles.textOne}>Now You will be Questioned About Your Degree
                    And a Payment Plan for Creating an Account  </Text>
                <TouchableOpacity onPress={() => handleNextStep()}>
                    <Text style={styles.textTwo}>Continue to go Next Step</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};




