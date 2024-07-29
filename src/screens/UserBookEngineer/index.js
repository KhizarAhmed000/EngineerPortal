import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../services/utilities/images';
import { styles } from './style';
import BackButton from '../../component/BackButton';
// import Navigation from '../../services/config/navigation';
import backendUrl from '../../services/config/backendUrl';

export default function UserBookEngineer({ navigation, route }) {
    const { result, userData } = route.params
    // const parsedEngineerData = JSON.parse(engineerData) 
    console.log(result, "------------booking page")
    const engineerData = JSON.parse(result)

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
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton
                    onPress={() => navigation.goBack()}
                    title={'All Engineers'} />
                <ScrollView
                    style={styles.scrollView}
                >
                    {engineerData.engineers.map((item, index) => (
                        <View style={styles.boxTwo} key={index}>
                            <Image style={styles.personImg} source={images.engineer} />
                            <View style={styles.columnView}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.desiginationText}>Engineer</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.seeAllBtn}
                                    onPress={() => handleBooking(item)} // Use an arrow function to pass the item
                                >
                                    <Text style={styles.btnText}>BOOK</Text>
                                    <Image style={styles.arrowImg} source={images.rightArrow} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                </ScrollView>

            </View>
        </SafeAreaView>
    )
};




