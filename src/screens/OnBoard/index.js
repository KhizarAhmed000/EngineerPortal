import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import Button from '../../component/Button';

export default function OnBoard({ navigation }) {
    const handleLogin = () => {
        navigation.navigate("Login")
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
                <Button title={'Sign Up'}/>
                </View>
                <View style={styles.marginTop}>
                <Button title={'Start as Engineer'}/>
                </View>
            </View>
        </SafeAreaView>
    )
}