import React from "react";
import AboutScreen from "./about";
import Index from "./index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack= createNativeStackNavigator();

export default function RouteLayout() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name='Home' component={Index} />
                <Stack.Screen name='AboutScreen' component={AboutScreen} />
            </Stack.Navigator>  
        </NavigationContainer>
    );
}