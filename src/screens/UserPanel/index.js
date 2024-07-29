import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import backendUrl from '../../services/config/backendUrl';

export default function UserPanel({ navigation, route }) {
    // const [appointments, setAppointments] = useState('314')
    // const [hiredEngineers, setHiredEngineers] = useState('10,020')
    const [ongoingProjects, setOngoingProjects] = useState('25')
    const [listedEngineer, setListedEngineer] = useState([
        {
            image: images.personOne,
            name: 'Jenny Wilson',
            desigination: 'Engineer'
        },
        {
            image: images.personTwo,
            name: 'Jane Cooper',
            desigination: 'Engineer'
        },
        {
            image: images.personThree,
            name: 'Kathryn Murphy',
            desigination: 'Engineer'
        },
        {
            image: images.personTwo,
            name: 'Savannah Nguyen',
            desigination: 'Engineer'
        },
        {
            image: images.personThree,
            name: 'Kathryn Murphy',
            desigination: 'Engineer'
        },
        {
            image: images.personFour,
            name: 'Savannah Nguyen',
            desigination: 'Engineer'
        },
    ])
    const { userData, hiredEngineers, appointments, projects, result } = route.params
    console.log(appointments)

    const handleAppointments = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('ngrok-skip-browser-warning', 'true')

        const raw = JSON.stringify({
            "appointmentIds": appointments
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${backendUrl}user/getAppointmentsByIds`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                navigation.navigate("UserAppointments",{
                    result
                })
            })
            .catch((error) => console.error(error));
    }


    const handleBooking = (engineer) => {
        console.log(engineer)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('ngrok-skip-browser-warning', 'true')


        const raw = JSON.stringify({
            "email": engineer.email
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
                navigation.navigate("UserBookAppointment", {
                    engineer,
                    userData,
                    projects:result
                })
            })
            .catch((error) => console.error(error));
    }


    const handlePendingApprovals = () => {
        // navigation.navigate('PendingApproval')
    }

    const handleSeeAll = () => {
        navigation.navigate('UserBookEngineer', {
            result: result,
            userData
        })
    }

    const handleEngineerDetails = (engineer) => {
        // navigation.navigate("UserBookAppointment",{
        //     parsedEngineerData
        // })
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headingOne}>User Panel</Text>
                <View style={styles.rowOne}>
                    <TouchableOpacity style={styles.boxOne } onPress={handleAppointments}>
                        <Text style={styles.textOne}>{appointments.length}</Text>
                        <Text style={styles.textTwo}>Appointments</Text>
                    </TouchableOpacity>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>
                            {hiredEngineers.length}
                        </Text>
                        <Text style={styles.textTwo}>Hired Engineers</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.boxTwo} onPress={() => handlePendingApprovals()}>
                    <View style={styles.boxThree}>
                        <Text style={styles.textWhite}>{projects.length}</Text>
                    </View>
                    <Text style={styles.textThree}>Ongoing Projects</Text>
                </TouchableOpacity>
                <View style={styles.rowOne}>
                    <Text style={styles.headingTwo}>Engineers</Text>
                    <TouchableOpacity style={styles.seeAllBtn} onPress={() => handleSeeAll()}>
                        <Text style={styles.btnText}>SEE ALL</Text>
                        <Image style={styles.arrowImg} source={images.rightArrow} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView}>
                    {hiredEngineers.map((item, index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index} onPress={() => handleBooking(item)}>
                            <Image style={styles.personImg} source={images.engineer} />
                            <View style={styles.columnView}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.desiginationText}>Engineer</Text>
                            </View>
                            <Image source={images.rightArrowBlack} style={styles.arrowImgTwo} />
                        </TouchableOpacity>
                    ))}

                </ScrollView>

            </View>
        </SafeAreaView>
    )
};




