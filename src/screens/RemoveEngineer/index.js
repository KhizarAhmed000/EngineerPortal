import React, { useState } from 'react';
import { Image, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import BackButton from '../../component/BackButton';
import Button from '../../component/Button';
import { images } from '../../services/utilities/images';
import backendUrl from '../../services/config/backendUrl';


export default function RemoveEngineer({ navigation, route }) {
    const [name, setName] = useState('Jenny Wilson')
    const [field, setFeild] = useState('Civil Engineering')
    const [institute, setInstitute] = useState('Bahria University')
    const [year, setYear] = useState('2020')
    const [status, setStatus] = useState('Approved')
    const { engineer } = route.params;
    console.log(engineer);
    const handleRemoveEngineer = () => {
        console.log(engineer.email, "email of engineer")
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": engineer.email
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${backendUrl}user/removeEngineer`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                navigation.navigate('AdminPanel')
            })
            .catch((error) => console.error(error));
        

    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton
                    onPress={() => navigation.goBack()}
                    title={engineer.name} />
                <View style={styles.boxTwo}>
                    <Text style={styles.desiginationText}>Field Name</Text>
                    <Text style={styles.nameText}>{engineer.nameOfField}</Text>
                </View>
                <View style={styles.boxTwo}>
                    <Text style={styles.desiginationText}>Institute</Text>
                    <Text style={styles.nameText}>{engineer.nameOfInstitute}</Text>
                </View>
                <View style={styles.boxTwo}>
                    <Text style={styles.desiginationText}>Year</Text>
                    <Text style={styles.nameText}>{engineer.passingYear}</Text>
                </View>

                <TouchableOpacity style={styles.boxTwo} onPress={() => Linking.openURL(engineer.urlOfLicense)}>
                    <View style={styles.columnView}>
                        <Text style={styles.desiginationText}>HEC Provided License</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxTwo} onPress={() => Linking.openURL(engineer.urlOfPaymentReceipt)}>
                    <View style={styles.columnView}>
                        <Text style={styles.desiginationText}>Payment Receipt</Text>
                    </View>
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




