// andr ghusne wali sare screens yaha p 
// register , login , splash screens yaha nahi rhegi hai

import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import UpdateScreen from "../screens/UpdateScreen"

const Stack = createStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Update" component={UpdateScreen}/>
        </Stack.Navigator>
    )
}

export default AppStack