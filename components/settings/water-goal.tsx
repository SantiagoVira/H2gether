import { View } from "react-native";
import { WaterMeter } from "./water-meter";
import { ThemedText } from "../ThemedText";

const Tab: React.FC<{ liters: number }> = ({ liters }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 4,
      }}>
      <View
        style={{
          height: 4,
          backgroundColor: "#818181",
          width: liters % 2 == 0 ? 10 : 5,
        }}
      />
      {liters % 2 == 0 && <ThemedText>{liters}L</ThemedText>}
    </View>
  );
};

const WaterGoal: React.FC = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <WaterMeter />
      <View
        style={{
          height: 275,
          paddingBottom: 34,
          paddingTop: 2,
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
        <Tab liters={8} />
        <Tab liters={7} />
        <Tab liters={6} />
        <Tab liters={5} />
        <Tab liters={4} />
        <Tab liters={3} />
        <Tab liters={2} />
      </View>
    </View>
  );
};

export default WaterGoal;
