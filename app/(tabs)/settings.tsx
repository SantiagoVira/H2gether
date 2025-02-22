import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.content}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
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
