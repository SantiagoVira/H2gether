import { View } from "react-native";
import { ThemedText } from "../ThemedText";

export const WaterMeterMark: React.FC<{ liters: number }> = ({ liters }) => {
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
