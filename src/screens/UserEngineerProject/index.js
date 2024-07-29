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
export default function UserEngineerProject({ navigation, route }) {
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
    const project = route.params
    console.log(project)





    const handleRemoveProject = () => {
        console.log(project.project._id)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('ngrok-skip-browser-warning', 'true')

        const raw = JSON.stringify({
            "id": project.project._id
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${backendUrl}user/removeProject`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append('ngrok-skip-browser-warning', 'true')

                // console.log(email)
                const raw = JSON.stringify({
                    "email": project.project.engineer
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
                        myHeaders.append('ngrok-skip-browser-warning', 'true')


                        const raw = JSON.stringify({
                            "email": project.project.engineer
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
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton
                    onPress={() => navigation.goBack()}
                    title={project.project.projectName} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.body}>
                        <Text style={styles.heading}>Project Name</Text>
                        <Text style={styles.inputContainer}
                        >{project.project.projectName}
                        </Text>

                        <Text style={styles.heading}>Project Initiation Date</Text>
                        <Text style={styles.inputContainer}
                        >{project.project.startDate}
                        </Text>

                        <Text style={styles.heading}>Project Completion Date</Text>
                        <Text style={styles.inputContainer}
                        >{project.project.endDate}
                        </Text>

                        <Text style={styles.heading}>Value Of Project</Text>
                        <Text style={styles.inputContainer}
                        >{project.project.value}
                        </Text>

                        <Text style={styles.heading}>Description</Text>
                        <Text style={styles.descriptionBox}
                        >{project.project.description}
                        </Text>

                        <Text style={styles.heading}>Attach Images</Text>
                        <View style={styles.imageView}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                {project.project.imgArray.map((item, index) => (
                                    <View key={index}>
                                        <TouchableOpacity
                                            style={styles.deleteImageContainer}
                                        // onPress={() => deleteImage(index)}
                                        >

                                        </TouchableOpacity>
                                        <Image style={styles.imageBox} source={item.pic} />
                                    </View>
                                ))}

                            </ScrollView>
                        </View>

                    </View>


                </ScrollView>

            </View>
        </SafeAreaView>
    )
}