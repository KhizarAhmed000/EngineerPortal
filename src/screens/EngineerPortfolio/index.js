import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../services/utilities/images';
import BackButton from '../../component/BackButton';
import Button from '../../component/Button';

export default function EngineerPortfolio({navigation,route}) {
    const {projects,userData} = route.params
    console.log(projects)
    const handleProjectDetails = (project) => {
        navigation.navigate('EngineerProject',{
            project
        })
    }

    const handleAddProject = () => {
        navigation.navigate('EngineerAddProject',{
            userData:userData
        })
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <BackButton 
                onPress={() => navigation.goBack()}
                title={'Portfolio'} />
                <ScrollView style={styles.scrollView}>
                    {projects.map((item,index) => (
                        <TouchableOpacity style={styles.boxTwo} key={index} onPress={() => handleProjectDetails(item)}>
                        <Image style={styles.personImg} source={images.building} />
                        <View style={styles.columnView}>
                            <Text style={styles.nameText}>{item.projectName}</Text>
                            <Text style={styles.dateText}>{item.startDate}</Text>
                        </View>
                        <Image source={images.rightArrowBlack} style={styles.arrowImgTwo} />
                    </TouchableOpacity>
                    ))}

                </ScrollView>
                <View style={styles.btn}>
                <Button
                        title={'Add Project'}
                        onPress={handleAddProject}
                        />
                        </View>
            </View>
        </SafeAreaView>
    )
};




