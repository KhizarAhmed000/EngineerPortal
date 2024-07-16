import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../services/utilities/images';
import { styles } from './style';


export default function BackButton({onPress, title}) {

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={onPress} style={styles.backArrowRow}>
                    <Image source={images.backArrow} />
                <Text style={styles.headingOne}>{title}</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
};




