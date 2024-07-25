import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnBoard from '../../screens/OnBoard';
import navigationService from './navigationService';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import SignUpSuccessful from '../../screens/SignUpSuccessful';
import FirstStep from '../../screens/FirstStep';
import AllSet from '../../screens/AllSet';
import StepTwo from '../../screens/StepTwo';
import SignUpEngineer from '../../screens/SignUpEngineer';
import AdminPanel from '../../screens/AdminPanel';
import PendingApproval from '../../screens/PendingApprovals';
import AllEngineers from '../../screens/AllEngineers';
import ApproveEngineer from '../../screens/ApproveEngineer';
import RemoveEngineer from '../../screens/RemoveEngineer';
import EngineerPanel from '../../screens/EngineerPanel';
import EngineerPortfolio from '../../screens/EngineerPortfolio';
import UserPanel from '../../screens/UserPanel';
import UserBookAppointment from '../../screens/UserBookAppointment';
import UserBookEngineer from '../../screens/UserBookEngineer';
import UserAppointments from '../../screens/UserAppointments';
import UserProjects from '../../screens/UserProjects';
import EngineerAddProject from '../../screens/EngineerAddProject';
import EngineerProject from '../../screens/EngineerProject';
import UserEngineerProject from '../../screens/UserEngineerProject';


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
            <Stack.Screen name="EngineerAddProject" component={EngineerAddProject} />
            <Stack.Screen name="EngineerProject" component={EngineerProject} />
            <Stack.Screen name="UserEngineerProject" component={UserEngineerProject} />
            <Stack.Screen name="AdminPanel" component={AdminPanel} />
            <Stack.Screen name="StepTwo" component={StepTwo} />
            <Stack.Screen name="UserProjects" component={UserProjects} />
            <Stack.Screen name="UserBookAppointment" component={UserBookAppointment} />
            <Stack.Screen name="UserAppointments" component={UserAppointments} />
            <Stack.Screen name="UserBookEngineer" component={UserBookEngineer} />
            <Stack.Screen name="UserPanel" component={UserPanel} />
            <Stack.Screen name="EngineerPortfolio" component={EngineerPortfolio} />
            <Stack.Screen name="EngineerPanel" component={EngineerPanel} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpEngineer" component={SignUpEngineer} />
            <Stack.Screen name="SignUpSuccessful" component={SignUpSuccessful} />
            <Stack.Screen name="FirstStep" component={FirstStep} />
            <Stack.Screen name="AllSet" component={AllSet} />
            <Stack.Screen name="PendingApproval" component={PendingApproval} />
            <Stack.Screen name="AllEngineers" component={AllEngineers} />
            <Stack.Screen name="ApproveEngineer" component={ApproveEngineer} />
            <Stack.Screen name="RemoveEngineer" component={RemoveEngineer} />


            
        </Stack.Navigator>
    )
}