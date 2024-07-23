import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors } from '../../services/utilities/colors';
import { images } from '../../services/utilities/images';
import DocumentPicker from 'react-native-document-picker';
import backendUrl from '../../services/config/backendUrl';
import axios from 'axios';


export default function StepTwo({ navigation, route }) {
    const [feild, setFeild] = useState("")
    const [institute, setInstitute] = useState("")
    const [passingYear, setPassingYear] = useState("")
    const [licsence, setLicsence] = useState()
    const [licsenceName, setLicsenceName] = useState()
    const [paymentReciept, setPaymentReciept] = useState()
    const [paymentRecieptName, setPaymentRecieptName] = useState()
    const [isChecked, setIsChecked] = useState(false);
    const { email, name, lastName } = route.params;
    const [error, setError] = useState()
    const toggleRememberMe = () => {
        setIsChecked(!isChecked);
    };

    const handleNextStep = () => {
        handleValidation()
        if (error === "validated") {

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            const raw = JSON.stringify({
                "email": email,
                "name": name,
                "lastname": lastName,
                "nameOfField": feild,
                "nameOfInstitute": institute,
                "passingYear": passingYear,
                "urlOfLicense": licsence,
                "urlOfPaymentReceipt": paymentReciept,
                "approved": false
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(`${backendUrl}user/createEngineer`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    console.log(result)
                    if (result.message !== "Internal server error"){
                        navigation.navigate("AllSet")
                        
                    }
                }
                )
                .catch((error) => console.error(error));


        }
    }

    const handleDocumentPick = async (setFile,setFileName) => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });

            setFileName(result[0].name);
            // console.log(result)
            const data = new FormData();
            data.append("pdf", {
                uri: result[0].uri,
                type: result[0].type || 'application/pdf', // Default to 'application/pdf' if type is not defined
                name: result[0].name
            });

            fetch(`${backendUrl}auth/uploadPdf`, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result.url);
                    setFile(result.url)
                    // const data = JSON.parse(result[0]);
                    // console.log(data)
                    // setFile(result)
                    
                    // console.log(result.url)
                    // const urlMatch = result.match(/"url"\s*:\s*"([^"]+)"/);
                    // if (urlMatch && urlMatch[1]) {
                    //     const url = urlMatch[1];
                    //     console.log('Extracted URL:', url);
                    // }
                })
                .catch(error => {
                    console.error(error);
                    console.error('Error details:', error.message);
                });
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User canceled the document picker');
            } else {
                throw err;
            }
        }
    };

    const handleValidation = () => {
        if (!feild) {
            setError("Field is required");
        } else if (!institute) {
            setError("Institute is required");
        } else if (!passingYear) {
            setError("Passing year is required");
        } else if (!licsence) {
            setError("License is required");
        } else if (!paymentReciept) {
            setError("Payment receipt is required");
        } else if (!isChecked) {
            setError("Please accept terms");
        } else {
            setError("validated");
        }
    };


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headingOne}>STEP 2</Text>
                <Text style={styles.headingTwo}>Enter The Following Details </Text>
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Name of Field'
                    placeholderTextColor={colors.black}
                    value={feild}
                    onChangeText={setFeild}
                />
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Name of Institute'
                    placeholderTextColor={colors.black}
                    value={institute}
                    onChangeText={setInstitute}
                />
                <TextInput
                    style={styles.inputTextContainer}
                    placeholder='Passing Year'
                    placeholderTextColor={colors.black}
                    value={passingYear}
                    onChangeText={setPassingYear}
                    keyboardType='numeric'
                />

                <TouchableOpacity
                    style={styles.documentContainer}
                    onPress={() => handleDocumentPick(setLicsence,setLicsenceName)}
                >
                    <Text style={styles.textThree}>
                        {licsence ? `Selected File: ${licsenceName}` : 'Attach PDF File of License Provided by HEC'}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.headingThree}>Transfer an Amount of xx RS on account of bank
                    xx Titled As xx and Attach a PDF File of Payment
                    Receipt Below!</Text>
                <TouchableOpacity
                    style={styles.documentContainer}
                    onPress={() => handleDocumentPick(setPaymentReciept,setPaymentRecieptName)}
                >
                    <Text style={styles.textThree}>
                        {paymentReciept ? `Selected File: ${paymentRecieptName}` : 'Attach PDF File of Payment Receipt 1'}
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text style={error === "validated" ? styles.errorValidated : styles.error}>
                        {error}
                    </Text>
                </View>
                <View style={styles.rowOne}>
                    <View style={styles.checkBox}>
                        <TouchableOpacity onPress={toggleRememberMe}>
                            <Image source={isChecked ? images.tickAfter : images.tickBefore} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.combineText}>
                        <Text style={styles.textOne}>By clicking on ‘sign up’, you’re agreeing to the Chunky app
                            <Text style={styles.textTwo}> Terms of Service </Text>
                            and
                            <Text style={styles.textTwo}> Privacy Policy</Text>
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    handleNextStep()
                    // console.log(email)
                }}>
                    <Text style={styles.btnText}>Done</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

