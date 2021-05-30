import 'react-native-gesture-handler'; 
import * as React from 'react'; 
import { View, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import onOpen from './components/onOpen'; 
import Login from './components/Login'; 
import signUp from './components/signUp'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="onOpen"
        component={onOpen}
        options = {{
          headerShown: false,
        }}
        />
      <Stack.Screen
        name="Login"
        component={Login}
        options = {{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="signUp"
        component={signUp}
        options = {{
          headerShown: false,
        }}
        />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

