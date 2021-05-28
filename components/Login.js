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
   

 
 export default function Login() {
     
     return (
         <View style = {styles.frame}>
             <SafeAreaView>

                 {/*Logo*/}
                 
             <View style  = {styles.logoLogin}>   
                   <Logo/>
                </View>

                {/* Username */}
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

                {/* Password  */}
                <View style = {styles.passwordWrapper}>
                    <Text style = {styles.passwordText}>PASSWORD</Text>
                </View>
                {/* Password Input */}

                <View style ={styles.passwordUserInputWrapper}>
                    <TextInput
                        style = {styles.passwordTextInput}
                        placeholder = "e.g JohnDoe123"
                    
                    />
                </View>
                {/* Forgot Password? */}
                <TouchableOpacity> 

                    <View style = {styles.forgotpasswordWrapper}>
                        <Text>Forgot Password?</Text> 

                    </View>

                </TouchableOpacity>







             </SafeAreaView>
             

         </View>
     )
 }
 
const styles = StyleSheet.create({
    frame: {
        backgroundColor: '#323232', //'#323232'
        flex : 1, 

    },
    logoLogin:{
        marginTop: 150, 
        marginHorizontal: 175, 
    },
    usernameWrapper: {
        marginTop: 60, 
        marginHorizontal: 88, 
    },
    usernameText: {
        fontSize : 10,  
        fontFamily: 'Roboto_500Medium', 
        "lineHeight": 18,
        color: '#FDE0B3'
    },
    usernameUserInputWrapper: {
        marginTop: 4, 
        marginHorizontal: 88, 
        backgroundColor: 'transparent', 
        paddingVertical:5, 
        borderBottomColor: '#FDE0B3', 
        borderBottomWidth: 1, 

        

    },
    usernameTextInput : {
        fontSize : 12,  
        fontFamily: 'Roboto_500Medium', 
        color: 'white',
       

    },
    passwordWrapper :{
        marginTop : 60, 
        marginHorizontal: 88, 

    },

    passwordText : {
        fontSize : 10,  
        fontFamily: 'Roboto_500Medium', 
        "lineHeight": 18,
        color: '#FDE0B3',
    }, 

    passwordUserInputWrapper:{
        marginTop: 4, 
        marginHorizontal: 88, 
        backgroundColor: 'transparent', 
        paddingVertical:5, 
        borderBottomColor: '#FDE0B3', 
        borderBottomWidth: 1, 

    },

    passwordTextInput: {
        fontSize : 12,  
        fontFamily: 'Roboto_500Medium', 
        color: 'white',
    },

    forgotpasswordWrapper: {
        
       



    },

});
