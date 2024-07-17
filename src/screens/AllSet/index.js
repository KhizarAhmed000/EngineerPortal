import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../services/utilities/images';
import { styles } from './style';

export default function AllSet() {
    
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={images.bigTick} style={styles.tickImage} />
                <Text style={styles.headingOne}>All Set !</Text>
                <Text style={styles.textOne}>Requirements Completed Successfully
                    You will be notified Shortly After Approving
                    Your License  </Text>

            </View>
        </SafeAreaView>
    )
};




