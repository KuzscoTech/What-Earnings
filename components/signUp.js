import * as React from 'react'; 
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'; 
import { Directions } from 'react-native-gesture-handler';
import Logo from '../src/resources/logo';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/roboto'; 
import { LinearGradient } from "expo-linear-gradient"; 
import { createStackNavigator } from '@react-navigation/stack';


import {  
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic} 
    from '@expo-google-fonts/roboto'; 

   
    

    
    export default function signUp() {
        let [fontsLoaded] = useFonts({
            Roboto_400Regular,
            Roboto_100Thin,
            Roboto_100Thin_Italic,
            Roboto_300Light,
            Roboto_300Light_Italic,
            Roboto_400Regular,
            Roboto_400Regular_Italic,
            Roboto_500Medium,
            Roboto_500Medium_Italic,
            Roboto_700Bold,
            Roboto_700Bold_Italic,
            Roboto_900Black,
            Roboto_900Black_Italic
    
        }); 
    
        if(!fontsLoaded) {
            return <AppLoading />
        }
        return (
            

            <View style = {[styles.frame]}>
                <LinearGradient
                colors={["#F5ECDE", "#FFDAA3"]}
                style = {{flex: 1}}
                
            >
             <View style = {styles.headerWrapper}>
                 <Text style = {styles.createAccountText}>Create Account,</Text>
                 <Text style = {styles.getStartedText}>Sign up to Get Started!</Text>
             </View>

             <View style = {styles.usernameWrapper}>
                    <Text style = {styles.usernameText}>USERNAME</Text>
                </View>

                {/* Username Input */}
                <View style ={styles.usernameUserInputWrapper}>
                    <TextInput
                        style = {styles.usernameTextInput}
                        placeholder = "e.g JohnDoe123"
                    
                    />
                    </View>

             </LinearGradient>
            </View>
        )
    }

    const styles = StyleSheet.create({
        frame: {
            flex:1, 
            backgroundColor: "#F5ECDE", 
            
        }, 
        headerWrapper: {
            flexDirection: "column", 
            marginTop: 75, 
            marginLeft: 22, 
            marginRight: 77, 
        },
        createAccountText:{
            fontFamily: 'Roboto_500Medium',
            fontSize: 24, 
            letterSpacing: 2, 

        },
        getStartedText: {
            fontFamily: 'Roboto_500Medium',
            fontSize: 24, 
            letterSpacing: 2, 
            color: "#E5BE83", 


        },
        usernameWrapper: {
            marginTop: 65, 
            marginHorizontal: 85,
            
            
        }, 
        usernameText: {

        }

    }); 
    