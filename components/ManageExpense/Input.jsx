import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Label({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({});
