import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Plans" component={Plans}/> */}
    </Stack.Navigator>
  );
}
