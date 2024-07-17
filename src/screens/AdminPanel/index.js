import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';

export default function AdminPanel({navigation}) {
    const [engineer, setEngineer] = useState('314')
    const [user, setUser] = useState('10,020')
    const [pendingApproval, setPendingApproval] = useState('25')
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
                <Text style={styles.headingOne}>Admin Panel</Text>
                <View style={styles.rowOne}>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{engineer}</Text>
                        <Text style={styles.textTwo}>Engineers</Text>
                    </View>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{user}</Text>
                        <Text style={styles.textTwo}>Users</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.boxTwo} onPress={() => handlePendingApprovals()}>
                    <View style={styles.boxThree}>
                        <Text style={styles.textWhite}>{pendingApproval}</Text>
                    </View>
                    <Text style={styles.textThree}>Pending Approvals</Text>
                </TouchableOpacity>
                <View style={styles.rowOne}>
                    <Text style={styles.headingTwo}>Listed Engineers</Text>
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




