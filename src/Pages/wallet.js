import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../resources/logo";
import PersonImg from "../resources/person";
function wallet({ navigation }) {
  return (
    <View>
      <View style={styles.navbar}>
        <Logo />
        <Text>Wallet</Text>
        <TouchableOpacity>
          <PersonImg />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  font: {
    fontFamily: "Roboto_500Medium",
    fontSize: 15,
    letterSpacing: 8,
    color: "#A18652",
  },
});
export default wallet;
