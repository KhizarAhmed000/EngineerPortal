import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import backendUrl from '../../services/config/backendUrl';

export default function EngineerPanel({ navigation, route }) {
    const [portfolio, setPortfolio] = useState()
    const [clients, setClients] = useState()
    const [ongoingProjects, setOngoingProjects] = useState()
    
    const { userData,projects } = route.params
    const parsedUserData = JSON.parse(userData)
    const parsedProjects = JSON.parse(projects)
    const [engineer, setEngineer] = useState();


    useEffect(() => {
        

    }, [])

   


    const handleOngoingProjects = () => {
        console.log("running function")
        navigation.navigate('EngineerPortfolio',{
            projects:parsedProjects.projects,
            userData:parsedUserData
        })
    }

    const handleSeeAll = () => {
        navigation.navigate('AllEngineers')
    }

    // const handleEngineerDetails = () => {
    //     navigation.navigate("RemoveEngineer")
    // }

    const handleProjectDetails = (project) => {
        console.log("runing project detailks")
        navigation.navigate('EngineerProject',{
            project
        })
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headingOne}>Engineer Panel</Text>
                <View style={styles.rowOne}>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{parsedUserData.engineer.projects.length}</Text>
                        <Text style={styles.textTwo}>Portfolio</Text>
                    </View>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{parsedUserData.engineer.hiredBy.length}</Text>
                        <Text style={styles.textTwo}>Clients</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.boxTwo} onPress={() => handleOngoingProjects()}>
                    <View style={styles.boxThree}>
                        <Text style={styles.textWhite}>{parsedUserData.engineer.projects.length}</Text>
                    </View>
                    <Text style={styles.textThree}>Ongoing Projects</Text>
                </TouchableOpacity>
                <View style={styles.rowOne}>
                    <Text style={styles.headingTwo}>Latest Projects</Text>
                    {/* <TouchableOpacity style={styles.seeAllBtn} >
                        <Text style={styles.btnText}>SEE ALL</Text>
                        <Image style={styles.arrowImg} source={images.rightArrow} />
                    </TouchableOpacity> */}
                    {/* use ongoing projects */}
                </View>
                <ScrollView style={styles.scrollView}>
                    {parsedProjects.projects.map((item, index) => (
                        <View style={styles.boxTwo} key={index} 
                        //removed becauuse for some reason being pressed on navigation, use ongoing projects.
                        // onPress={handleProjectDetails(item)}
                        >
                            <Image style={styles.personImg} source={images.building} />
                            <View style={styles.columnView}>
                                <Text style={styles.nameText}>{item.projectName}</Text>
                                <Text style={styles.dateText}>{item.startDate}</Text>
                            </View>
                            {/* <Image source={images.rightArrowBlack} style={styles.arrowImgTwo} /> */}
                        </View>
                    ))}
                        
                </ScrollView>

            </View>
        </SafeAreaView>
    )
};




