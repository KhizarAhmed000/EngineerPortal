import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';

export default function UserPanel({navigation}) {
    const [appointments, setAppointments] = useState('314')
    const [hiredEngineers, setHiredEngineers] = useState('10,020')
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

    const handlePendingApprovals = () => {
        navigation.navigate('PendingApproval')
    }

    const handleSeeAll = () => {
        navigation.navigate('AllEngineers')
    }

    const handleEngineerDetails = () => {
        navigation.navigate("RemoveEngineer")
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headingOne}>User Panel</Text>
                <View style={styles.rowOne}>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{appointments}</Text>
                        <Text style={styles.textTwo}>Appointments</Text>
                    </View>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{hiredEngineers}</Text>
                        <Text style={styles.textTwo}>Hired Engineers</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.boxTwo} onPress={() => handlePendingApprovals()}>
                    <View style={styles.boxThree}>
                        <Text style={styles.textWhite}>{ongoingProjects}</Text>
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
                    {listedEngineer.map((item,index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index} onPress={() => handleEngineerDetails()}>
                        <Image style={styles.personImg} source={item.image} />
                        <View style={styles.columnView}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.desiginationText}>{item.desigination}</Text>
                        </View>
                        <Image source={images.rightArrowBlack} style={styles.arrowImgTwo} />
                    </TouchableOpacity>
                    ))}

                </ScrollView>

            </View>
        </SafeAreaView>
    )
};




