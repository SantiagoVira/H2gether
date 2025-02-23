import { View } from "react-native";
import { ThemedText } from "../ThemedText";

export const WaterMeterMark: React.FC<{ percent: number }> = ({ percent }) => {
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
          width: percent % 2 == 0 ? 10 : 5,
        }}
      />
      {percent % 20 == 0 && <ThemedText>{percent}%</ThemedText>}
    </View>
  );
};
