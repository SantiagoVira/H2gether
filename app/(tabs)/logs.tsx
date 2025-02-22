import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Log from "@/components/logs/log";
import { Divider } from "@/components/logs/divider";
import { LogType } from "@/types";

export default function TabTwoScreen() {
  const TODAY_LOGS: LogType[] = [
    { type: 2, message: "You finished your goal!", time: new Date() },
  ];
  const PREVIOUS_LOGS: LogType[] = [
    {
      type: 3,
      message: "John congratulated you on finishing your goal!",
      time: new Date(),
    },
    { type: 2, message: "You finished your goal!", time: new Date() },
  ];
  return (
    <ThemedView style={styles.content}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Logs</ThemedText>
      </ThemedView>
      <Divider>Today</Divider>
      {TODAY_LOGS.map((log, i) => (
        <Log {...log} key={i} />
      ))}
      <Divider>Previous</Divider>
      {PREVIOUS_LOGS.map((log, i) => (
        <Log {...log} key={i} />
      ))}
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
