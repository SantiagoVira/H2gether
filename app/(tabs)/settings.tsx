import { StyleSheet, View, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import WaterGoal from "@/components/settings/water-goal";
import { useState } from "react";
import NotificationFrequency from "@/components/settings/notification-frequency";
import NotificationTimeRange from "@/components/settings/notification-time-range";

export default function TabTwoScreen() {
  const EIGHT_AM = new Date();
  const EIGHT_PM = new Date();
  EIGHT_AM.setHours(8, 0, 0, 0);
  EIGHT_PM.setHours(20, 0, 0, 0);

  const [waterGoal, setWaterGoal] = useState(2);
  const [notifFreq, setNotifFreq] = useState(3);
  const [notifStart, setNotifStart] = useState(EIGHT_AM);
  const [notifEnd, setNotifEnd] = useState(EIGHT_PM);
  return (
    <ScrollView
      style={styles.content}
      contentContainerStyle={{
        paddingBottom: 60,
        gap: 16,
      }}
      showsVerticalScrollIndicator={false}>
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
          It's good to have a consistent goal for daily water intake!
        </ThemedText>
        <View
          style={{
            borderColor: "gray",
            borderWidth: StyleSheet.hairlineWidth,
          }}
        />
        <ThemedText>
          How much water (measured in Liters) do you want to drink per day? (1L
          ≈ 4 cups){" "}
        </ThemedText>
        <WaterGoal waterGoal={waterGoal} setWaterGoal={setWaterGoal} />
        <ThemedText>
          Nice!{" "}
          <ThemedText style={{ fontWeight: "bold" }}>
            {waterGoal} liters
          </ThemedText>{" "}
          is a great goal!
        </ThemedText>
      </View>
      <View style={styles.section}>
        <ThemedText type="subtitle">Notifications</ThemedText>
        <ThemedText>
          We use notifications to keep you on track and motivated for your
          goals!
        </ThemedText>
        <View
          style={{
            borderColor: "gray",
            borderWidth: StyleSheet.hairlineWidth,
          }}
        />
        <ThemedText>
          How often would you like to be notified to stay on track?
        </ThemedText>
        <NotificationFrequency freq={notifFreq} setFreq={setNotifFreq} />
        <ThemedText>When should we notify you? </ThemedText>
        <NotificationTimeRange
          {...{ notifStart, notifEnd, setNotifStart, setNotifEnd }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 8,
    marginTop: 24,
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
    paddingTop: 86,
    backgroundColor: "#F3F7FF",
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
