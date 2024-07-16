import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnBoard from '../../screens/OnBoard';
import navigationService from './navigationService';
import Login from '../../screens/Login';


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer
        ref={ref => navigationService.setTopLevelNavigator(ref)}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="UserStack" component={UserStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnBoard" component={OnBoard} />
            <Stack.Screen name="Login" component={Login} />
            
        </Stack.Navigator>
    )
}