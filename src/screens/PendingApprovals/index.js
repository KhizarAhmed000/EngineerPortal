import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import BackButton from '../../component/BackButton';

export default function PendingApproval({navigation,route}) {
    const { listOfApprovals } = route.params

    const handleApprove = (i) => {
        navigation.navigate('ApproveEngineer',{
            engineer:listOfApprovals[i]
        })
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
                    {listOfApprovals.map((item, index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index} onPress={() => handleApprove(index)}>
                            <Image style={styles.personImg} source={images.personOne} />
                            <View style={styles.columnView}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.desiginationText}>Engineer</Text>
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




