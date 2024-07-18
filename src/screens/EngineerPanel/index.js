import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';

export default function EngineerPanel({navigation}) {
    const [portfolio, setPortfolio] = useState('314')
    const [clients, setClients] = useState('10,020')
    const [ongoingProjects, setOngoingProjects] = useState('25')
    const [projects, setProjects] = useState([
        {
            name: 'The Naggs Head',
            date: 'Apr 12, 2024'
        },
        {
            name: 'The Naggs Head',
            date: 'Apr 12, 2024'
        },
        {
            name: 'The Naggs Head',
            date: 'Apr 12, 2024'
        },
        {
            name: 'The Naggs Head',
            date: 'Apr 12, 2024'
        },
        {
            name: 'The Naggs Head',
            date: 'Apr 12, 2024'
        },
        {
            name: 'The Naggs Head',
            date: 'Apr 12, 2024'
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
                <Text style={styles.headingOne}>Engineer Panel</Text>
                <View style={styles.rowOne}>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{portfolio}</Text>
                        <Text style={styles.textTwo}>Portfolio</Text>
                    </View>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{clients}</Text>
                        <Text style={styles.textTwo}>Clients</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.boxTwo} onPress={() => handlePendingApprovals()}>
                    <View style={styles.boxThree}>
                        <Text style={styles.textWhite}>{ongoingProjects}</Text>
                    </View>
                    <Text style={styles.textThree}>Ongoing Projects</Text>
                </TouchableOpacity>
                <View style={styles.rowOne}>
                    <Text style={styles.headingTwo}>Latest Projects</Text>
                    <TouchableOpacity style={styles.seeAllBtn} onPress={() => handleSeeAll()}>
                        <Text style={styles.btnText}>SEE ALL</Text>
                        <Image style={styles.arrowImg} source={images.rightArrow} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView}>
                    {projects.map((item,index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index} onPress={() => handleEngineerDetails()}>
                        <Image style={styles.personImg} source={images.building} />
                        <View style={styles.columnView}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.dateText}>{item.date}</Text>
                        </View>
                        <Image source={images.rightArrowBlack} style={styles.arrowImgTwo} />
                    </TouchableOpacity>
                    ))}

                </ScrollView>

            </View>
        </SafeAreaView>
    )
};




