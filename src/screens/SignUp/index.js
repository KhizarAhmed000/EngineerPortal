import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../../services/utilities/colors';
import { styles } from './style';
import { images } from '../../services/utilities/images';


export default function SignUp({navigation}) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const toggleRememberMe = () => {
        setIsChecked(!isChecked);
    };

    const handleSignUpSuccess = () => {
        navigation.navigate("SignUpSuccessful")
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headingOne}>Welcome!</Text>
                <Text style={styles.headingTwo}>Sign up for the Xtract Engineers App</Text>
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Enter your name'
                    placeholderTextColor={colors.black}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Last Name'
                    placeholderTextColor={colors.black}
                    value={lastName}
                    onChangeText={setLastName}
                />
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Email/Phone Number'
                    placeholderTextColor={colors.black}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Password'
                    placeholderTextColor={colors.black}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Confirm Password'
                    placeholderTextColor={colors.black}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <View style={styles.rowOne}>
                    <View style={styles.checkBox}>
                        <TouchableOpacity onPress={toggleRememberMe}>
                            <Image source={isChecked ? images.tickAfter : images.tickBefore} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.combineText}>
                        <Text style={styles.textOne}>By clicking on ‘sign up’, you’re agreeing to the Chunky app
                            <Text style={styles.textTwo}> Terms of Service </Text>
                            and
                            <Text style={styles.textTwo}> Privacy Policy</Text>
                        </Text>
                    </View>


                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={() => handleSignUpSuccess()}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

