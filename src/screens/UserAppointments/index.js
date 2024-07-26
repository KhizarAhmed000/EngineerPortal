import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../services/utilities/images';
import { styles } from './style';
import BackButton from '../../component/BackButton';

export default function UserBookEngineer({navigation,route}) {
    const [allEngineer, setAllEngineer] = useState([
        {
            image: images.personOne,
            name: 'Jenny Wilson',
            desigination: 'Engineer',
            date: "27 March 2024"
        },
        {
            image: images.personTwo,
            name: 'Jane Cooper',
            desigination: 'Engineer',
            date: "27 March 2024"

        },
        {
            image: images.personThree,
            name: 'Kathryn Murphy',
            desigination: 'Engineer',
            date: "27 March 2024"
        },

    ])
    const {result}= route.params;
    const parsedResult = JSON.parse(result)
    console.log(parsedResult.appointments)  
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton
                onPress={() => navigation.goBack()}
                title={'Appointments'} />
                <ScrollView
                    style={styles.scrollView}
                >
                    {parsedResult.appointments.map((item, index) => (
                        <View style={styles.boxTwo} key={index}>
                            <Image style={styles.personImg} source={images.engineer} />
                            <View style={styles.columnView}>
                                <Text style={styles.nameText}>{item.clientName}</Text>
                                <Text style={styles.desiginationText}>Client</Text>
                            </View>
                            <View style={styles.seeAllBtn}>
                                <Text style={styles.btnText}>{item.appointmentDate.slice(0,15)}</Text>
                            </View>
                        </View>
                    ))}

                </ScrollView>

            </View>
        </SafeAreaView>
    )
};




