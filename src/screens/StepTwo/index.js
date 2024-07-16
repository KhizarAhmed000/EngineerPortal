import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors } from '../../services/utilities/colors';
import { images } from '../../services/utilities/images';



export default function StepTwo({navigation}) {
    const [feild, setFeild] = useState("")
    const [lastName, setLastName] = useState("")
    const [institute, setInstitute] = useState("")
    const [passingYear, setPassingYear] = useState("")
    const [licsence, setLicsence] = useState("")
    const [paymentReciept, setPaymentReciept] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const toggleRememberMe = () => {
        setIsChecked(!isChecked);
    };

    const handleNextStep = () => {
        navigation.navigate("AllSet")
    }

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
                />
                <TouchableOpacity
                    style={styles.documentContainer}>
                    <Text style={styles.textThree}>Attach PDF File of License Provided by HEC</Text>
                </TouchableOpacity>
                <Text style={styles.headingThree}>Transfer an Amount of xx RS on account of bank
                    xx Titled As xx and Attach a PDF File of Payment
                    Receipt Below!</Text>
                <TouchableOpacity
                    style={styles.documentContainer}>
                    <Text style={styles.textThree}>Attach PDF File of Payment Receipt </Text>
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.btnContainer} onPress={() => handleNextStep()}>
                    <Text style={styles.btnText}>Done</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

