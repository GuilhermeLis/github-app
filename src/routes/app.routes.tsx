import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '~/pages/home';

const Stack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    );
}
