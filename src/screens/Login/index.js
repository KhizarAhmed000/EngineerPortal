import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors } from '../../services/utilities/colors';
import { images } from '../../services/utilities/images';

export default function Login({ navigation }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const toggleRememberMe = () => {
        setIsChecked(!isChecked);
    };
    const handleSignUp = () => {
        navigation.navigate("SignUp")
    }

    const handleLogin = () => {
        navigation.navigate("AdminPanel")
    }
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
                    <TouchableOpacity style={styles.btnContainer} onPress={()=> handleLogin()}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.remeberMeText}>Or</Text>
                </View>
                <TouchableOpacity style={styles.btnContainerTwo} >
                    <Image source={images.googleLogo} style={styles.googleImg} />
                    <Text style={styles.btnTextTwo}>Log in with your Google account</Text>
                </TouchableOpacity>
                <View style={styles.textCombine}>
                    <Text style={styles.textOne}>
                        Dont’t have an account?
                    </Text>
                    <TouchableOpacity onPress={() => handleSignUp()}>
                        <Text style={styles.textTwo}> Sign Up</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </SafeAreaView>
    )
}

