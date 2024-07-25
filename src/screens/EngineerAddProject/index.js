import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import BackButton from '../../component/BackButton';
import { colors } from '../../services/utilities/colors';
import { PermissionsAndroid, PermissionsIOS } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { images } from '../../services/utilities/images';
import Button from '../../component/Button';
import backendUrl from '../../services/config/backendUrl';



export default function EngineerAddProject({ navigation, route }) {
    const [projectName, setProjectName] = useState("")
    const [projectInitiationDate, setProjectInitiationDate] = useState("")
    const [projectCompletionDate, setProjectCompletionDate] = useState("")
    const [valueOfProject, setValueOfProject] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState([
        {
            pic: images.personFour
        },
        {
            pic: images.personFour
        },
    ])
    const [error, setError] = useState("validated");
    const userData = route.params

    const requestCameraPermission = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission granted');
        } else {
            console.warn('Camera permission denied');
        }
    };

    const validateFields = () => {
        if (
            projectName === "" ||
            projectInitiationDate === "" ||
            projectCompletionDate === "" ||
            valueOfProject === "" ||
            description === "" ||
            image.length === 0
        ) {
            setError("Please fill out all fields and ensure there are images.");
        } else {
            setError("validated");
        }
    };

    const handleAddProject = () => {
        validateFields()
        // console.log(userData.userData.engineer.email)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // data = JSON.parse(userData.userData.engineer)
        console.log(userData.userData.engineer.email)
        email = userData.userData.engineer.email
        const raw = JSON.stringify({
            "email": email,
            "projectName": projectName,
            "startDate": projectInitiationDate,
            "endDate": projectCompletionDate,
            "value": valueOfProject,
            "description": description,
            "imgArray": image
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${backendUrl}user/createProject`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                // console.log(email)
                const raw = JSON.stringify({
                    "email": userData.userData.engineer.email
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                };

                fetch(`${backendUrl}user/getEngineer`, requestOptions)
                    .then((response) => response.text())
                    .then((resultFirst) => {


                        const myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");

                        const raw = JSON.stringify({
                            "email": userData.userData.engineer.email
                        });

                        const requestOptions = {
                            method: "POST",
                            headers: myHeaders,
                            body: raw,
                            redirect: "follow"
                        };

                        fetch(`${backendUrl}user/getEngineerProjects`, requestOptions)
                            .then((response) => response.text())
                            .then((result) => {
                                navigation.navigate("EngineerPanel", {
                                    userData: resultFirst,
                                    projects: result
                                });
                            })
                            .catch((error) => console.error(error));


                    })
                    .catch((error) => console.error(error));

            })
            .catch((error) => console.error(error));
    }


    const uploadPhoto = async sourceType => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            maxWidth: 800,
            maxHeight: 600,
            includeBase64: false,
            saveToPhotos: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        if (sourceType === 'library') {
            launchImageLibrary(options, response => {
                console.log('Library Response:', response);
                try {
                    if (response.assets.length > 0) {
                        const uri = response.assets[0].uri;
                        setImage(prevState => [...prevState, { pic: { uri } }]);
                    } else {
                        console.warn('No image selected from library');
                    }
                } catch (error) {
                    console.error('Error setting image:', error);
                }
            });

        } else if (sourceType === 'camera') {
            await requestCameraPermission();

            launchCamera(options, response => {
                console.log('** Full Camera Response:**', response.assets[0].uri);
                try {
                    if (response.assets.length > 0) {
                        const uri = response.assets[0].uri;
                        setImage(prevState => [...prevState, { pic: { uri } }]);
                    } else {
                        console.warn('No image taken from camera');
                    }
                } catch (error) {
                    console.error('Error setting image:', error);
                }
            });

        }
    };
    const deleteImage = index => {
        setImage(prevState => prevState.filter((_, i) => i !== index));
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton
                    onPress={() => navigation.goBack()}
                    title={"Add Project"} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.body}>
                        <Text style={styles.heading}>Project Name</Text>
                        <TextInput style={styles.inputContainer}
                            placeholder='Enter Project Name'
                            placeholderTextColor={colors.textColor}
                            value={projectName}
                            onChangeText={setProjectName} />

                        <Text style={styles.heading}>Project Initiation Date</Text>
                        <TextInput style={styles.inputContainer}
                            placeholder='Enter Project Initiation Date'
                            placeholderTextColor={colors.textColor}
                            value={projectInitiationDate}
                            onChangeText={setProjectInitiationDate} />

                        <Text style={styles.heading}>Project Completion Date</Text>
                        <TextInput style={styles.inputContainer}
                            placeholder='Enter Project Completion Date'
                            placeholderTextColor={colors.textColor}
                            value={projectCompletionDate}
                            onChangeText={setProjectCompletionDate} />

                        <Text style={styles.heading}>Value Of Project</Text>
                        <View style={styles.inputContainerTwo}>
                            <TextInput
                                style={styles.inputText}
                                placeholder='Enter Value Of Project'
                                placeholderTextColor={colors.textColor}
                                value={valueOfProject}
                                onChangeText={setValueOfProject} />
                            <View style={styles.currencyContianer}>
                                <Text style={styles.currencyText}>PKR</Text>
                            </View>
                        </View>

                        <Text style={styles.heading}>Description</Text>
                        <TextInput style={styles.descriptionBox}
                            placeholder='Enter Description'
                            placeholderTextColor={colors.textColor}
                            value={description}
                            onChangeText={setDescription}
                            multiline={true}
                            numberOfLines={3}
                        />

                        <Text style={styles.heading}>Attach Images</Text>
                        <View style={styles.imageView}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                {image.map((item, index) => (
                                    <View key={index}>
                                        <TouchableOpacity
                                            style={styles.deleteImageContainer}
                                            onPress={() => deleteImage(index)}>
                                            <Image
                                                source={images.crossCircle}
                                                style={styles.deleteImage}
                                            />
                                        </TouchableOpacity>
                                        <Image style={styles.imageBox} source={item.pic} />
                                    </View>
                                ))}
                                <TouchableOpacity
                                    style={styles.addImageContianer}
                                    onPress={() => uploadPhoto('library')}>
                                    <Image source={images.plus} />
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                    </View>
                    <View>
                        <Text style={error === "validated" ? styles.errorValidated : styles.error}>
                            {error}
                        </Text>
                    </View>
                    <View style={styles.btnMargin}>
                        <Button title={'Add Project'}
                            onPress={handleAddProject}
                        />
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}