import { Image, StyleSheet, Platform, ScrollView, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import WaterTracker from "@/components/home/water-tracker";

export default function HomeScreen() {
  const NAME = "Santiago";
  const DRANK = 0.5;
  const GOAL = 0.3;
  const MESSAGES = [
    "You've fallen behind schedule. Let's pick up the pace!",
    "You're staying on track! Great work, keep it up!",
    "You're way ahead of schedule! Fantastic job!!",
  ];
  return (
    <ThemedView style={styles.content}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hey {NAME}!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText>{MESSAGES[2]}</ThemedText>
      <WaterTracker drank={DRANK} goal={GOAL} />
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginLeft: 25,
          fontSize: 50,
        }}>
        {100 * DRANK}%
      </Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
    paddingTop: 86,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  noProjectsWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    padding: "10%",
    marginBottom: 86,
    gap: 8,
  },
  noProjectsText: {
    fontSize: 32,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  grid: {
    marginBottom: 52,
  },
  footer: {
    position: "absolute",
    right: 12,
  },
});
