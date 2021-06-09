import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnOpen from "../../components/onOpen";
import Login from "../../components/Login";
import signUp from "../../components/signUp";

const MainStack = createStackNavigator();

function MainStackScreen({ navigation }) {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="onOpen" component={OnOpen} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="SignUp" component={signUp} />
    </MainStack.Navigator>
  );
}

export default MainStackScreen;
