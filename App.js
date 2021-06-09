import "react-native-gesture-handler";
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Wallet from "./src/Pages/wallet";
import { AuthContext } from "./components/context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackScreen from "./src/Pages/mainStack";

const Drawer = createDrawerNavigator();

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("fkjk");
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("fkjk");
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator>
            <Drawer.Screen name="wallet" component={Wallet} />
          </Drawer.Navigator>
        ) : (
          <MainStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
