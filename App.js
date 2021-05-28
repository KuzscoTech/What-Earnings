import Logo from "./src/resources/logo";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.frame}>
      <View style={styles.logo}>
        <Logo style={{ marginBottom: 30 }} />
        <LinearGradient
          colors={["#F5ECDE", "#FFDAA3"]}
          style={styles.signUpContainer}
        >
          <View>
            <TouchableOpacity>
              <Text style={styles.button}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: "#F5ECDE",
  },
  logo: {
    position: "relative",
    height: 736,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  signUpContainer: {
    width: 400,
    height: 400,
  },
  buttonContainer: {},
  button: {
    height: 20,
    width: 200,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
