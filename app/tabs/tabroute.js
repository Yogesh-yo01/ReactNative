import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from '../index';
import AboutScreen from "../about";
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createNativeStackNavigator();

export default function RouteLayout() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home'
                    component={Index}
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                name={focused ? 'home-sharp' : 'home-outline'}
                                color={color}
                                size={24} />
                        ),
                    }} />
                <Tab.Screen name='About'
                    component={AboutScreen}
                    options={{
                        title: "About",
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                name={focused ? 'information-circle-sharp' : 'information-circle-outline'}
                                color={color}
                                size={24} />
                        ),
                    }} />

                <Tab.Screen name='AboutScreen' component={AboutScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}