import { Image, StyleSheet, Platform, ScrollView, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import WaterTracker from "@/components/home/water-tracker";
import { useUser } from "@clerk/clerk-expo";
import { trpc } from "@/lib/trpc";

const getMsToday = () => {
  const now = new Date();
  const startOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0,
    0
  );
  return now.getTime() - startOfDay.getTime();
};

export default function HomeScreen() {
  const { user } = useUser();
  const [percentDrank] = trpc.user.getPercentDrank.useSuspenseQuery({
    userId: user!.id,
  });
  const GOAL = getMsToday() / (1000 * 60 * 60 * 24);
  const MESSAGES = [
    "You've fallen behind schedule. Let's pick up the pace!",
    "You're staying on track! Great work, keep it up!",
    "You're way ahead of schedule! Fantastic job!!",
  ];
  const messageIdx =
    Math.abs(GOAL - percentDrank) < 0.05 ? 1 : percentDrank > GOAL ? 2 : 0;
  return (
    <ThemedView style={styles.content}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hey {user?.firstName}!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText>{MESSAGES[messageIdx]}</ThemedText>
      <WaterTracker drank={percentDrank} goal={GOAL} />
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginLeft: 25,
          fontSize: 50,
          fontFamily: "Nunito",
        }}>
        {100 * percentDrank}%
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
