import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import BackButton from '../../component/BackButton';
import Button from '../../component/Button';
import { images } from '../../services/utilities/images';


export default function UserProjects({ navigation }) {
    const [name, setName] = useState('Jenny Wilson')
    const [field, setFeild] = useState('Civil Engineering')
    const [institute, setInstitute] = useState('Bahria University')
    const [year, setYear] = useState('2020')
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

    const handleRemoveEngineer = () => {
        navigation.navigate('AdminPanel')
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton
                    onPress={() => navigation.goBack()}
                    title={"Ongoing Projects"} />
                
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




