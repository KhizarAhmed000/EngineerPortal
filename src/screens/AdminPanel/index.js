import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import backendUrl from '../../services/config/backendUrl';
import { useFocusEffect } from '@react-navigation/native';

export default function AdminPanel({ navigation }) {
    const [engineer, setEngineer] = useState()
    const [user, setUser] = useState()
    const [pendingApproval, setPendingApproval] = useState()
    const [listOfApprovals, setListOfApprovals] = useState()
    const [listedEngineer, setListedEngineer] = useState([
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
            image: images.personThree,
            name: 'Kathryn Murphy',
            desigination: 'Engineer'
        },
        {
            image: images.personFour,
            name: 'Savannah Nguyen',
            desigination: 'Engineer'
        },
    ])
    const [memberData, setMemberData] = useState()

    // useEffect(() => {

    //     const requestOptions = {
    //         method: "GET",
    //         redirect: "follow"
    //     };

    //     fetch(`${backendUrl}user/getAllMembers`, requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => {
    //             const data = JSON.parse(result);
    //             // console.log(data)
    //             setUser(data.members.length)
    //             setEngineer(data.members.filter(member => member.role === "engineer").length)
    //         })
    //         .catch((error) => console.error(error));

    //         const requestOptions2 = {
    //             method: "GET",
    //             redirect: "follow"
    //           };
              
    //           fetch(`${backendUrl}user/getAllEngineers`, requestOptions2)
    //             .then((response) => response.text())
    //             .then((result) => {
    //                 // console.log(result)
    //                 const data = JSON.parse(result);
    //                 // setListedEngineer(data.engineers.filter(engineer => engineer.approved === true))
    //                 // setPendingApproval(data.engineers.filter(engineer => engineer.approved === false)) 
    //                 const engineersList = data.engineers.filter(engineer => engineer.approved === false)  
    //                 const engineersListApproved = data.engineers.filter(engineer => engineer.approved === true)  
    //                 setPendingApproval(engineersList.length)  
    //                 setListOfApprovals(engineersList)
    //                 setListedEngineer(engineersListApproved)
    //                 console.log(engineersListApproved)
    //             })
    //             .catch((error) => console.error(error));
        

    // }, [])

    useFocusEffect(
        React.useCallback(() => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            fetch(`${backendUrl}user/getAllMembers`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    const data = JSON.parse(result);
                    setUser(data.members.length);
                    setEngineer(data.members.filter(member => member.role === "engineer").length);
                })
                .catch((error) => console.error(error));

            const requestOptions2 = {
                method: "GET",
                redirect: "follow"
            };

            fetch(`${backendUrl}user/getAllEngineers`, requestOptions2)
                .then((response) => response.text())
                .then((result) => {
                    const data = JSON.parse(result);
                    console.log(data)
                    const engineersList = data.engineers.filter(engineer => engineer.approved === false);
                    const engineersListApproved = data.engineers.filter(engineer => engineer.approved === true);
                    console.log(engineersList)
                    setPendingApproval(engineersList.length);
                    setListOfApprovals(engineersList);
                    setListedEngineer(engineersListApproved);
                })
                .catch((error) => console.error(error));

            // Cleanup function if needed
            return () => {
                // You can add any cleanup code here
            };
        }, [])
    );

    

    const handlePendingApprovals = () => {
        navigation.navigate('PendingApproval',{
            listOfApprovals
        })
    }

    const handleSeeAll = () => {
        navigation.navigate('AllEngineers',{
            listedEngineer
        })
    }

    const handleEngineerDetails = (engineer) => {
        navigation.navigate("RemoveEngineer",{
          engineer:listedEngineer[engineer]  
        })
        console.log(listedEngineer[engineer])
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headingOne}>Admin Panel</Text>
                <View style={styles.rowOne}>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{engineer}</Text>
                        <Text style={styles.textTwo}>Engineers</Text>
                    </View>
                    <View style={styles.boxOne}>
                        <Text style={styles.textOne}>{user}</Text>
                        <Text style={styles.textTwo}>Users</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.boxTwo} onPress={() => handlePendingApprovals()}>
                    <View style={styles.boxThree}>
                        <Text style={styles.textWhite}>{pendingApproval}</Text>
                    </View>
                    <Text style={styles.textThree}>Pending Approvals</Text>
                </TouchableOpacity>
                <View style={styles.rowOne}>
                    <Text style={styles.headingTwo}>Listed Engineers</Text>
                    <TouchableOpacity style={styles.seeAllBtn} onPress={() => handleSeeAll()}>
                        <Text style={styles.btnText}>SEE ALL</Text>
                        <Image style={styles.arrowImg} source={images.rightArrow} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView}>
                    {listedEngineer.map((item, index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index} onPress={() => handleEngineerDetails(index)}>
                            <Image style={styles.personImg} source={images.personFour} />
                            <View style={styles.columnView}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.desiginationText}>Engineer</Text>
                            </View>
                            <Image source={images.rightArrowBlack} style={styles.arrowImgTwo} />
                        </TouchableOpacity>
                    ))}

                </ScrollView>

            </View>
        </SafeAreaView>
    )
};




