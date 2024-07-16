import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors } from '../../services/utilities/colors';
import { images } from '../../services/utilities/images';

export default function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const toggleRememberMe = () => {
        setIsChecked(!isChecked);
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headingOne}>Welcome back!</Text>
                <Text style={styles.headingTwo}>Log In to your account</Text>
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Enter your name'
                    placeholderTextColor={colors.black}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Enter your password'
                    placeholderTextColor={colors.black}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={styles.rowOne}>
                    <View style={styles.checkBox}>
                        <TouchableOpacity onPress={toggleRememberMe}>
                            <Image source={isChecked ? images.tickAfter : images.tickBefore} />
                        </TouchableOpacity>
                        <Text style={styles.remeberMeText}>Remember Me</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassTxt}>Forgotten password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowTwo}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.remeberMeText}>Or</Text>
                </View>
                <TouchableOpacity style={styles.btnContainerTwo} >
                    <Image source={images.googleLogo} style={styles.googleImg} />
                    <Text style={styles.btnTextTwo}>Log in with your Google account</Text>
                </TouchableOpacity>
                    <Text style={styles.textOne}>
                        Dont’t have an account?
                        <Text style={styles.textTwo}> Sign Up</Text>
                    </Text>
            </View>
        </SafeAreaView>
    )
}

