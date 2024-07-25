import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';

export default function UserPanel({navigation,route}) {
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
    const {userData,hiredEngineers,appointments,projects,result} = route.params
    // console.log(userData,"----",engineerData)
    // console.log("data",parsedEngineerData)
    // const parsedUserData = JSON.parse(userData)
    // console.log(userData.email)
    console.log(result,"-----------------at user panel")
    
    // const filterHiredEngineers = (data, searchString) => {
    //     const hiredEngineers = [];
    //     for (let i = 0; i < data.length; i++) {
    //         const engineer = data[i];
    //         if (engineer.hasOwnProperty('hiredBy')) {
    //             for (let j = 0; j < engineer.hiredBy.length; j++) {
    //                 const value = engineer.hiredBy[j];
    //                 if (value.includes(searchString)) {
    //                     hiredEngineers.push(engineer);
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    //     return hiredEngineers;
    // };
    // console.log('engineers on this user',filterHiredEngineers(parsedEngineerData.engineers,"testgmail"))
    // const parsedEngineerData = JSON.parse(engineerData)
    // const hiredEngineers = filterHiredEngineers(parsedEngineerData.engineers,userData.email)


    const handlePendingApprovals = () => {
        // navigation.navigate('PendingApproval')
    }

    const handleSeeAll = () => {
        navigation.navigate('UserBookEngineer',{
            result:result,
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
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{appointments.length}</Text>
                        <Text style={styles.textTwo}>Appointments</Text>
                    </View>
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
                    {hiredEngineers.map((item,index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index} onPress={() => handleEngineerDetails(item)}>
                        <Image style={styles.personImg} source={images.personFour} />
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




