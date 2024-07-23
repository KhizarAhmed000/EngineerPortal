import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import Button from '../../component/Button';

export default function OnBoard({ navigation }) {
    
    const handleLogin = () => {
        navigation.navigate("Login")
    }
    
    const handleSignUp = () => {
        navigation.navigate("SignUp",{
            role:"user"
        })
    }

    const handleStartEngineer = () => {
        navigation.navigate("SignUpEngineer",{
            role:"engineer"
        })
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={images.onBoardImg} style={styles.onBoardImg} />
                <Text style={styles.heading}>Ready to reshape the future of civil engineering? </Text>
                <Text style={styles.heading}>Let’s get started!</Text>
                
                <TouchableOpacity style={styles.buttonConatiner} onPress={() => handleLogin()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.marginTop}>
                <Button title={'Sign Up'} onPress={() => handleSignUp()}/>
                </View>
                <View style={styles.marginTop}>
                <Button title={'Start as Engineer'} onPress={() => handleStartEngineer()}/>
                </View>
            </View>
        </SafeAreaView>
    )
}