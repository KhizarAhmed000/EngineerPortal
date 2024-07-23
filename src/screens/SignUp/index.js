import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../../services/utilities/colors';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import backendUrl from '../../services/config/backendUrl';


export default function SignUp({ navigation, route }) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false);
    const { role } = route.params;
    const [error, setError] = useState("validated")

    const toggleTerms = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = () => {
        if (!name) {
            setError("Name is required");
        } else if (!lastName) {
            setError("Last name is required");
        } else if (!email) {
            setError("Email is required");
        } else if (!password) {
            setError("Password is required");
        } else if (!confirmPassword) {
            setError("Confirm password is required");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else if (!isChecked) {
            setError("Please accept the terms and conditions");
        } else {
            setError("validated");
            // Proceed with form submission
            console.log("Form submitted");
        }
    };

    const handleSignUpSuccess = () => {
        handleSubmit()
        if(error==="validated"){
            const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": name,
            "lastname": lastName,
            "password": password,
            "email": email,
            "role": role
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${backendUrl}auth/signup`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                console.log(data.message);
                if (data.message === "Signup success") {
                    navigation.navigate("SignUpSuccessful");
                }
            })
            .catch((error) => console.error(error));
        }
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
                        <TouchableOpacity onPress={toggleTerms}>
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
                <View>
                    <Text style={error === "validated" ? styles.errorValidated : styles.error}>
                            {error}
                        </Text>
                    </View>
                <TouchableOpacity style={styles.btnContainer} onPress={() => handleSignUpSuccess()}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

