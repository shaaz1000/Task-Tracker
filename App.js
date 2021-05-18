import React from "react";
import Auth from "./source/navigation/AuthNavigation"
import AppStack from "./source/navigation/AppNavigation"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import LoginScreen from "./source/screens/LoginScreen"
import RegisterScreen from "./source/screens/RegisterScreen"
import HomeScreen from "./source/screens/HomeScreen"
import ProfileScreen from "./source/screens/ProfileScreen"
import UpdateScreen from "./source/screens/UpdateScreen"
import ExpenseFormScreen from "./source/screens/expenseFormScreen"

const Stack = createStackNavigator()
const App = () => {
  return(
    <NavigationContainer>
     <Stack.Navigator headerMode="none" initialRouteName="Home">
           <Stack.Screen name="Login" component={LoginScreen}/>  
          <Stack.Screen name="Register" component={RegisterScreen}/>  
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Update" component={UpdateScreen}/>
            <Stack.Screen name="Expense Form" component={ExpenseFormScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App