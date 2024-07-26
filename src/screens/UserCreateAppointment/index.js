import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import BackButton from '../../component/BackButton';
import { colors } from '../../services/utilities/colors';
import { PermissionsAndroid, PermissionsIOS } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { images } from '../../services/utilities/images';
import Button from '../../component/Button';
import backendUrl from '../../services/config/backendUrl';



export default function UserCreateAppointment({ navigation, route }) {
    const [clientName, setclientName] = useState("")
    const [projecTimeline, setprojecTimeline] = useState("")
    const [appointmentDate, setappointmentDate] = useState("")
    const [valueOfProject, setValueOfProject] = useState("")
    const [projectDetails, setprojectDetails] = useState("")
  
    const [error, setError] = useState("validated");
    const {userData,engineer} = route.params;
    console.log(engineer)

    const validateFields = () => {
        if (
            clientName === "" ||
            projecTimeline === "" ||
            appointmentDate === "" ||
            valueOfProject === "" ||
            projectDetails === ""
        ) {
            setError("Please fill out all fields.");
        } else {
            setError("validated");
        }
    };

    const handleAddProject = () => {
        validateFields()
        // console.log(userData.userData.engineer.email)
        if (error === "validated") {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "user": userData.email,
                "engineerId": engineer._id,
                "clientName": clientName,
                "projectTimeline": projecTimeline,
                "proposedValue": valueOfProject,
                "appointmentDate": appointmentDate,
                "projectDetails": projectDetails
            });
            console.log(raw)
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(`${backendUrl}user/createAppointment`, requestOptions)
                .then((response) => response.text())
                .then((appointmentResult) => {
                    console.log(appointmentResult)


                    const requestOptions = {
                        method: "GET",
                        redirect: "follow"
                      };
                      
                      fetch(`${backendUrl}user/getAllEngineers`, requestOptions)
                        .then((response) => response.text())
                        .then((result) => {
                            const parsedEngineerData = JSON.parse(result)
                            const hiredEngineers = filterHiredEngineers(parsedEngineerData.engineers,userData.email)
                            const projects = extractProjectIds(hiredEngineers)
                            const appointments = extractAppointmentIds(hiredEngineers)
                            // console.log("hiredEngineers:",hiredEngineers)
                            // console.log(appointments)
                            // console.log(projects)
                            // console.log(result)
                            navigation.navigate("UserPanel", {
                                result,
                                userData: userData,
                                projects,
                                appointments,
                                hiredEngineers,
                            });
                        })
                        .catch((error) => console.error(error));
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
                <BackButton
                    onPress={() => navigation.goBack()}
                    title={"Book Appointment"} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.body}>
                        <Text style={styles.heading}>Client Name</Text>
                        <TextInput style={styles.inputContainer}
                            placeholder='Enter Project Name'
                            placeholderTextColor={colors.textColor}
                            value={clientName}
                            onChangeText={setclientName} />

                        <Text style={styles.heading}>Project Timeline</Text>
                        <TextInput style={styles.inputContainer}
                            placeholder='Enter Project Initiation Date'
                            placeholderTextColor={colors.textColor}
                            value={projecTimeline}
                            onChangeText={setprojecTimeline} />

                        <Text style={styles.heading}>Appointment Date</Text>
                        <TextInput style={styles.inputContainer}
                            placeholder='Enter Project Completion Date'
                            placeholderTextColor={colors.textColor}
                            value={appointmentDate}
                            onChangeText={setappointmentDate} />

                        <Text style={styles.heading}>Value Of Project</Text>
                        <View style={styles.inputContainerTwo}>
                            <TextInput
                                style={styles.inputText}
                                placeholder='Enter Value Of Project'
                                placeholderTextColor={colors.textColor}
                                value={valueOfProject}
                                onChangeText={setValueOfProject} />
                            <View style={styles.currencyContianer}>
                                <Text style={styles.currencyText}>PKR</Text>
                            </View>
                        </View>

                        <Text style={styles.heading}>Project Details</Text>
                        <TextInput style={styles.descriptionBox}
                            placeholder='Enter Description'
                            placeholderTextColor={colors.textColor}
                            value={projectDetails}
                            onChangeText={setprojectDetails}
                            multiline={true}
                            numberOfLines={3}
                        />



                    </View>
                    <View>
                        <Text style={error === "validated" ? styles.errorValidated : styles.error}>
                            {error}
                        </Text>
                    </View>
                    <View style={styles.btnMargin}>
                        <Button title={'Book Appointment'}
                            onPress={handleAddProject}
                        />
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}