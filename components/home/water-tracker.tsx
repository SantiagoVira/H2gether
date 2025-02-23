import { StyleSheet, View } from "react-native";
import { WaterMeter } from "./water-meter";
import { ThemedText } from "../ThemedText";
import { WaterMeterMark } from "./water-meter-mark";
import { RDSSA } from "@/types";

const WaterTracker: React.FC<{
  drank: number;
  goal: number;
}> = ({ drank, goal }) => {
  const goal_min = 5;
  const goal_max = 319;
  const height = goal_max - goal_min;

  const goalHeight = goal * height + goal_min;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 65,
        marginTop: 75,
      }}>
      <View>
        <WaterMeter drank={drank} />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            position: "absolute",
            alignItems: "center",
            gap: 8,
            bottom: goalHeight,
            paddingHorizontal: 3,
          }}>
          <View
            style={{
              borderColor: "black",
              flex: 1,
              height: 0,
              borderWidth: StyleSheet.hairlineWidth,
            }}
          />
          <ThemedText style={{ fontWeight: "bold" }}>Goal</ThemedText>
          <View
            style={{
              borderColor: "black",
              flex: 1,
              height: 0,
              borderWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
      </View>
      <View
        style={{
          height: 340,
          paddingTop: 2,
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
        {Array.from({ length: 11 }, (v, k) => 10 * (10 - k)).map((i) => (
          <WaterMeterMark percent={i} key={i} />
        ))}
      </View>
    </View>
  );
};

export default WaterTracker;
