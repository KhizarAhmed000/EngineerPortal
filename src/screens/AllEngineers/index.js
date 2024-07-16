import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../services/utilities/images';
import { styles } from './style';
import BackButton from '../../component/BackButton';

export default function AllEngineers({navigation}) {
    const [allEngineer, setAllEngineer] = useState([
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

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton
                onPress={() => navigation.goBack()}
                title={'All Engineers'} />
                <ScrollView
                    style={styles.scrollView}
                >
                    {allEngineer.map((item, index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index}>
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




