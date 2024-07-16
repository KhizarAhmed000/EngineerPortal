import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import BackButton from '../../component/BackButton';
import Button from '../../component/Button';
import { images } from '../../services/utilities/images';


export default function RemoveEngineer({ navigation }) {
    const [name, setName] = useState('Jenny Wilson')
    const [field, setFeild] = useState('Civil Engineering')
    const [institute, setInstitute] = useState('Bahria University')
    const [year, setYear] = useState('2020')
    const [status, setStatus] = useState('Approved')

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
                <View style={styles.boxTwo}>
                    <Text style={styles.desiginationText}>Status</Text>
                    <Text style={styles.nameText}>{status}</Text>
                </View>
                <TouchableOpacity style={styles.boxTwo}>
                    <View style={styles.columnView}>
                        <Text style={styles.desiginationText}>Attached Documents</Text>
                        <Text style={styles.textSmall}>HEC Provided License, Payment Receipt</Text>
                    </View>
                    <Image source={images.rightArrowBlack} style={styles.arrowImgTwo} />
                </TouchableOpacity>
                <View style={styles.btnMarginTop}>
                    <Button
                        title={'Remove Engineer'}
                        onPress={handleRemoveEngineer} />
                </View>
            </View>
        </SafeAreaView>
    )
};




