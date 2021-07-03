import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from '~/pages/Auth';


const RootStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={Login} />
    </RootStack.Navigator>
  );
}
