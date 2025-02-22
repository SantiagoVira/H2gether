import { StyleSheet, Image, Platform, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { WaterMeter } from "@/components/settings/water-meter";
import WaterGoal from "@/components/settings/water-goal";

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.content}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
      <ThemedText>
        Here you can update all of your preferences. Changes are automatically
        saved!
      </ThemedText>
      <View style={styles.section}>
        <ThemedText type="subtitle">Water Goal</ThemedText>
        <ThemedText>
          How much water (measured in Liters) do you want to drink per day? (1L
          ≈ 4 cups){" "}
        </ThemedText>
        <WaterGoal />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 8,
  },
  waterMeter: {
    backgroundColor: "#C2C2C2",
    borderColor: "#818181",
    borderWidth: 3,
    borderRadius: 16,
    width: 250,
    aspectRatio: 1,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  water: {
    backgroundColor: "#6F93F5",
    opacity: 0.8,
    width: "100%",
  },

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
