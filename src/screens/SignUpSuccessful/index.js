import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../services/utilities/images';
import { styles } from './style';



export default function SignUpSuccessful({navigation}) {

    const handleHome = () => {
        navigation.navigate("AdminPanel")
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={images.bigTick} style={styles.tickImage}/>
                <Text style={styles.headingOne}>Your Sign up was successful</Text>
                <TouchableOpacity onPress={() => handleHome()}>
                    <Text style={styles.textOne}>Continue to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};




