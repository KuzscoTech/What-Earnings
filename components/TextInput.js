import React from "react";
import { View, Text, TextInput } from "react-native";

function textInput({
  labelBox,
  styleFontText,
  textLabel,
  inputBox,
  inputStyleText,
  setChange,
}) {
  return (
    <View>
      <View style={labelBox}>
        <Text style={styleFontText}>{textLabel}</Text>
      </View>

      <View style={inputBox}>
        <TextInput
          style={inputStyleText}
          placeholder="e.g JohnDoe123"
          onChangeText={(val) => setChange(val)}
        />
      </View>
    </View>
  );
}

export default textInput;
