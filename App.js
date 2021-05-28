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
          <TouchableOpacity>
            <Text>Sign Up</Text>
          </TouchableOpacity>
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
});
