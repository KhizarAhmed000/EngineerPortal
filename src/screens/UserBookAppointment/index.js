import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import BackButton from '../../component/BackButton';
import Button from '../../component/Button';
import { images } from '../../services/utilities/images';


export default function UserBookAppointment({ navigation }) {
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
                    title={name} />
                <View style={styles.boxTwo}>
                    <Text style={styles.desiginationText}>Field Name</Text>
                    <Text style={styles.nameText}>{field}</Text>
                </View>
                <View style={styles.boxTwo}>
                    <Text style={styles.desiginationText}>Institute</Text>
                    <Text style={styles.nameText}>{institute}</Text>
                </View>
                <View style={styles.boxTwo}>
                    <Text style={styles.desiginationText}>Year</Text>
                    <Text style={styles.nameText}>{year}</Text>
                </View>
                
                <View style={styles.rowOne}>
                    <Text style={styles.headingTwo}>Portfolio</Text>
                    <TouchableOpacity style={styles.seeAllBtn} onPress={() => handleSeeAll()}>
                        <Text style={styles.btnText}>SEE ALL</Text>
                        <Image style={styles.arrowImg} source={images.rightArrow} />
                    </TouchableOpacity>
                </View>
                    <View style={styles.scrollViewChild}>
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
                <View style={styles.btnMarginTop}>
                    <Button
                        title={'Remove Engineer'}
                        onPress={handleRemoveEngineer} />
                </View>
            </View>
        </SafeAreaView>
    )
};




