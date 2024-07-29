import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors } from '../../services/utilities/colors';
import { images } from '../../services/utilities/images';
import backendUrl from '../../services/config/backendUrl';

export default function Login({ navigation }) {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState()

    const toggleRememberMe = () => {
        setIsChecked(!isChecked);
    };
    const handleSignUp = () => {

        navigation.navigate("SignUp", {
            role: "user"
        })
    }

    const handleValidation = () => {
        if (!name) {
            setError("Name is required");
        } else if (!password) {
            setError("Password is required");
        } else {
            setError("validated");
        }
    };

    const handleLogin = () => {
        handleValidation()
        if (error === "validated") {
            console.log("validated")
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append('ngrok-skip-browser-warning', 'true')

            const raw = JSON.stringify({
                "password": password,
                "email": name
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(`${backendUrl}auth/signin`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    console.log(result)
                    const data = JSON.parse(result);
                    console.log(data)
                    if (data.member.role === 'admin') {
                        console.log(data.member.role, " login")
                        navigation.navigate("AdminPanel", {
                            role: data.member.role
                        });
                    } else if (data.member.role === 'engineer') {
                        console.log(data.member.role, " login")

                        const myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append('ngrok-skip-browser-warning', 'true')

                        // console.log(email)
                        const raw = JSON.stringify({
                            "email": name
                        });

                        const requestOptions = {
                            method: "POST",
                            headers: myHeaders,
                            body: raw,
                            redirect: "follow"
                        };

                        fetch(`${backendUrl}user/getEngineer`, requestOptions)
                            .then((response) => response.text())
                            .then((resultFirst) => {


                                const myHeaders = new Headers();
                                myHeaders.append("Content-Type", "application/json");
                                myHeaders.append('ngrok-skip-browser-warning', 'true')


                                const raw = JSON.stringify({
                                    "email": name
                                });

                                const requestOptions = {
                                    method: "POST",
                                    headers: myHeaders,
                                    body: raw,
                                    redirect: "follow"
                                };

                                fetch(`${backendUrl}user/getEngineerProjects`, requestOptions)
                                    .then((response) => response.text())
                                    .then((result) => {
                                        navigation.navigate("EngineerPanel", {
                                            userData: resultFirst,
                                            projects: result
                                        });
                                    })
                                    .catch((error) => console.error(error));


                            })
                            .catch((error) => console.error(error));




                    } else if (data.member.role === 'user') {
                        console.log(data.member.role, " login")
                        const requestOptions = {
                            method: "GET",
                            redirect: "follow"
                        };

                        fetch(`${backendUrl}user/getAllEngineers`, requestOptions)
                            .then((response) => response.text())
                            .then((result) => {
                                const parsedEngineerData = JSON.parse(result)
                                const hiredEngineers = filterHiredEngineers(parsedEngineerData.engineers, data.member.email)
                                const projects = extractProjectIds(hiredEngineers)
                                const appointments = extractAppointmentIds(hiredEngineers)
                                // console.log("hiredEngineers:",hiredEngineers)
                                // console.log(appointments)
                                // console.log(projects)
                                // console.log(result)
                                navigation.navigate("UserPanel", {
                                    result,
                                    userData: data.member,
                                    projects,
                                    appointments,
                                    hiredEngineers,
                                });
                            })
                            .catch((error) => console.error(error));

                    }
                })
                .catch((error) => console.error(error));

        }
    }


    const extractAppointmentIds = (data) => {
        const appointmentIds = [];
        for (let i = 0; i < data.length; i++) {
            const engineer = data[i];
            if (engineer.hasOwnProperty('appointments') && Array.isArray(engineer.appointments)) {
                for (let j = 0; j < engineer.appointments.length; j++) {
                    appointmentIds.push(engineer.appointments[j]);
                }
            }
        }
        return appointmentIds;
    };

    const extractProjectIds = (data) => {
        const projectIds = [];
        for (let i = 0; i < data.length; i++) {
            const engineer = data[i];
            if (engineer.hasOwnProperty('projects') && Array.isArray(engineer.projects)) {
                for (let j = 0; j < engineer.projects.length; j++) {
                    projectIds.push(engineer.projects[j]);
                }
            }
        }
        return projectIds;
    };

    const filterHiredEngineers = (data, searchString) => {
        const hiredEngineers = [];
        for (let i = 0; i < data.length; i++) {
            const engineer = data[i];
            if (engineer.hasOwnProperty('hiredBy')) {
                for (let j = 0; j < engineer.hiredBy.length; j++) {
                    const value = engineer.hiredBy[j];
                    if (value.includes(searchString)) {
                        hiredEngineers.push(engineer);
                        break;
                    }
                }
            }
        }
        return hiredEngineers;
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headingOne}>Welcome back!</Text>
                <Text style={styles.headingTwo}>Log In to your account</Text>
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Enter your email'
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
                    <TouchableOpacity style={styles.btnContainer} onPress={() => handleLogin()}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity style={styles.btnContainerTwo} >
                    <Image source={images.googleLogo} style={styles.googleImg} />
                    <Text style={styles.btnTextTwo}>Log in with your Google account</Text>
                </TouchableOpacity> */}
                <View>
                    <Text style={error === "validated" ? styles.errorValidated : styles.error}>
                        {error}
                    </Text>
                </View>
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

