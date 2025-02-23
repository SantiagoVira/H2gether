import { View } from "react-native";
import { WaterMeter } from "./water-meter";
import { ThemedText } from "../ThemedText";
import { WaterMeterMark } from "./water-meter-mark";
import { RDSSA } from "@/types";

const WaterGoal: React.FC<{
  waterGoal: number;
  setWaterGoal: RDSSA<number>;
}> = ({ waterGoal, setWaterGoal }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <WaterMeter waterGoal={waterGoal} setWaterGoal={setWaterGoal} />
      <View
        style={{
          height: 275,
          paddingBottom: 34,
          paddingTop: 2,
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
        {Array.from({ length: 5 }, (v, k) => (4 - k) / 2 + 2).map((i) => (
          <WaterMeterMark liters={i} key={i} />
        ))}
      </View>
    </View>
  );
};

export default WaterGoal;
