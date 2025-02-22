import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { RDSSA } from "@/types";

const NotificationFrequency: React.FC<{
  freq: number;
  setFreq: RDSSA<number>;
}> = ({ freq, setFreq }) => {
  return (
    <View style={styles.container}>
      <Option freq={freq} setFreq={setFreq} amt={3} />
      <Option freq={freq} setFreq={setFreq} amt={5} />
      <Option freq={freq} setFreq={setFreq} amt={8} />
    </View>
  );
};

const Option: React.FC<{
  freq: number;
  setFreq: RDSSA<number>;
  amt: number;
}> = ({ freq, setFreq, amt }) => {
  return (
    <Pressable
      style={[styles.choice, amt === freq ? styles.selected : {}]}
      onPress={() => setFreq(amt)}>
      <ThemedText style={styles.choiceText}>{amt} times/day</ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#818181",
    borderRadius: 8,
    borderWidth: 2,
    overflow: "hidden",
    flexDirection: "row",
  },
  choice: {
    borderColor: "#818181",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    flex: 1,
    justifyContent: "center",
    paddingVertical: 4,
  },
  selected: {
    backgroundColor: "#D1D1D1",
  },
  choiceText: {
    textAlign: "center",
  },
});

export default NotificationFrequency;
