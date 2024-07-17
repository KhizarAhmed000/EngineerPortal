import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import BackButton from '../../component/BackButton';

export default function PendingApproval({navigation}) {
    const [pendingApproval, setPendingApproval] = useState([
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
    ])

    const handleApprove = () => {
        navigation.navigate('ApproveEngineer')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton 
                onPress={() => navigation.goBack()}
                title={'Pending Approvals'} />
                <ScrollView
                    style={styles.scrollView}
                >
                    {pendingApproval.map((item, index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index} onPress={() => handleApprove()}>
                            <Image style={styles.personImg} source={item.image} />
                            <View style={styles.columnView}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.desiginationText}>{item.desigination}</Text>
                            </View>
                            <View style={styles.seeAllBtn}>
                                <Text style={styles.btnText}>APPROVE</Text>
                                <Image style={styles.arrowImg} source={images.rightArrow} />
                            </View>
                        </TouchableOpacity>
                    ))}

                </ScrollView>

            </View>
        </SafeAreaView>
    )
};




